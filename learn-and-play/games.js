const fallbackGames = [
  {id:"emotion-match",title:"Emotion Match",category:"Social Skills",age:"3+",goal:"Identify emotions and match facial expressions to feeling words.",enabled:true},
  {id:"follow-directions",title:"Follow Directions",category:"Listening",age:"3+",goal:"Practice one-step directions with color, shape, and position words.",enabled:true},
  {id:"token-board",title:"Token Board",category:"Reinforcement",age:"2+",goal:"Earn five tokens and celebrate a completed task.",enabled:true},
  {id:"category-sort",title:"Category Sort",category:"Language",age:"4+",goal:"Sort items into animals, foods, toys, and clothes.",enabled:true},
  {id:"first-then",title:"First / Then Builder",category:"Routine",age:"2+",goal:"Practice first/then language and transitions.",enabled:true},
  {id:"breathing-bubble",title:"Calm Breathing Bubble",category:"Regulation",age:"3+",goal:"Follow a visual breathing cue to calm the body.",enabled:true},
  {id:"aac-board",title:"AAC Choice Board",category:"Communication",age:"2+",goal:"Practice functional phrases like I want, help, more, and all done.",enabled:true},
  {id:"routine-sequence",title:"Routine Sequence",category:"Daily Living",age:"4+",goal:"Put everyday routine steps in order.",enabled:true},
  {id:"social-choices",title:"Social Choices",category:"Social Skills",age:"5+",goal:"Choose friendly responses in common social situations.",enabled:true},
  {id:"imitation-cards",title:"Imitation Cards",category:"Motor Imitation",age:"2+",goal:"Practice simple gross-motor imitation actions.",enabled:true},
  {id:"conversation-builder",title:"Conversation Builder",category:"Communication",age:"5+",goal:"Practice greetings, questions, comments, and ending conversations politely.",enabled:true},
  {id:"expected-unexpected",title:"Expected / Unexpected",category:"Social Skills",age:"6+",goal:"Learn which behaviors fit different places and situations.",enabled:true},
  {id:"safety-signs",title:"Safety Signs",category:"Safety",age:"6+",goal:"Recognize common community safety signs and what they mean.",enabled:true},
  {id:"coping-match",title:"Coping Strategy Match",category:"Regulation",age:"6+",goal:"Choose a helpful coping strategy for common feelings and problems.",enabled:true},
  {id:"time-schedule",title:"Time & Schedule",category:"Executive Function",age:"7+",goal:"Practice reading simple schedules and choosing what happens next.",enabled:true},
  {id:"hygiene-helper",title:"Hygiene Helper",category:"Daily Living",age:"6+",goal:"Match daily hygiene tasks with the right tools and steps.",enabled:true},
  {id:"problem-solving",title:"Problem Solving Steps",category:"Executive Function",age:"8+",goal:"Practice stop-think-choose skills for everyday problems.",enabled:true},
  {id:"money-store",title:"Money Store",category:"Life Skills",age:"8+",goal:"Practice paying for small items and comparing prices.",enabled:true},
  {id:"perspective-detective",title:"Perspective Detective",category:"Social Skills",age:"9+",goal:"Think about what another person may feel, think, or need.",enabled:true},
  {id:"goal-planner",title:"Goal Planner",category:"Executive Function",age:"10+",goal:"Break a bigger goal into small action steps.",enabled:true},
  {id:"workplace-choices",title:"Workplace Choices",category:"Vocational",age:"12-21",goal:"Practice safe, respectful choices for jobs, volunteering, and community work.",enabled:true}
];

const gameIcons = {
  'emotion-match':'😊',
  'follow-directions':'🎯',
  'token-board':'⭐',
  'category-sort':'🧺',
  'first-then':'➡️',
  'breathing-bubble':'🫧',
  'aac-board':'💬',
  'routine-sequence':'🪥',
  'social-choices':'👋',
  'imitation-cards':'🙌',
  'conversation-builder':'🗣️',
  'expected-unexpected':'✅',
  'safety-signs':'🚦',
  'coping-match':'🧘',
  'time-schedule':'🕒',
  'hygiene-helper':'🧼',
  'problem-solving':'🧠',
  'money-store':'🛒',
  'perspective-detective':'🔎',
  'goal-planner':'🪜',
  'workplace-choices':'💼'
};

const accents = ['rgba(77,171,247,.18)','rgba(255,212,59,.28)','rgba(255,107,157,.18)','rgba(99,217,138,.20)','rgba(255,159,67,.20)'];
let games = [];
let activeFilter = 'All';
let currentGame = null;
let session = null;
let currentTokens = 0;
let routinePicked = [];
let ftFirst = null;
let ftThen = null;
let aacWords = [];

const progress = JSON.parse(localStorage.getItem('lk_play_progress') || '{"stars":0,"played":0}');
const $ = sel => document.querySelector(sel);
const $$ = sel => [...document.querySelectorAll(sel)];

function saveProgress() {
  localStorage.setItem('lk_play_progress', JSON.stringify(progress));
  const stars = $('#totalStars');
  const played = $('#gamesPlayed');
  if (stars) stars.textContent = progress.stars;
  if (played) played.textContent = progress.played;
}
function completeGame(amount = 3) {
  progress.stars += amount;
  progress.played += 1;
  saveProgress();
  confetti();
}
function toast(msg) {
  const el = $('#toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 1900);
}
function confetti() {
  const root = $('#confetti');
  if (!root) return;
  const colors = ['#ff6b6b','#ffd43b','#4dabf7','#63d98a','#ff6b9d','#35c2d3'];
  for (let i = 0; i < 80; i++) {
    const piece = document.createElement('span');
    piece.style.left = Math.random() * 100 + 'vw';
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = Math.random() * .5 + 's';
    piece.style.transform = `rotate(${Math.random()*180}deg)`;
    root.appendChild(piece);
    setTimeout(() => piece.remove(), 1900);
  }
}
function shuffle(arr) { return [...arr].sort(() => Math.random() - .5); }
function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
}
function setGameMeta(game) {
  $('#gameTitle').textContent = game.title;
  $('#gameCategory').textContent = game.category;
  $('#gameGoal').textContent = game.goal;
}
async function loadGames() {
  try {
    const res = await fetch('games.json?v=' + Date.now(), {cache:'no-store'});
    if (!res.ok) throw new Error('games.json not found');
    games = (await res.json()).filter(g => g.enabled !== false);
  } catch {
    games = fallbackGames;
  }
  renderFilters();
  renderGrid();
}
function renderFilters() {
  const wrap = $('.filters');
  if (!wrap) return;
  const categories = ['All', ...new Set(games.map(g => g.category).filter(Boolean))];
  if (!categories.includes(activeFilter)) activeFilter = 'All';
  wrap.innerHTML = categories.map(c => `<button class="filter ${c === activeFilter ? 'active' : ''}" data-filter="${escapeHtml(c)}" type="button">${escapeHtml(c)}</button>`).join('');
  $$('.filter').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderGrid();
    });
  });
}
function renderGrid() {
  const grid = $('#gameGrid');
  if (!grid) return;
  const filtered = games.filter(g => activeFilter === 'All' || g.category === activeFilter);
  grid.innerHTML = filtered.map((game, i) => `
    <button class="game-card" data-game="${escapeHtml(game.id)}" style="--accent:${accents[i % accents.length]}">
      <div class="game-icon">${gameIcons[game.id] || '🎮'}</div>
      <h3>${escapeHtml(game.title)}</h3>
      <p>${escapeHtml(game.goal)}</p>
      <div class="tags">
        <span class="tag">${escapeHtml(game.category)}</span>
        <span class="tag">Age ${escapeHtml(game.age)}</span>
      </div>
    </button>
  `).join('');
}
function openGame(id) {
  const game = games.find(g => g.id === id) || fallbackGames.find(g => g.id === id);
  if (!game) return;
  currentGame = game;
  setGameMeta(game);
  $('#playPanel').hidden = false;
  document.body.style.overflow = 'hidden';
  const routes = {
    'emotion-match': () => startSession(5, renderEmotion),
    'follow-directions': () => startSession(6, renderDirections),
    'token-board': () => renderTokenBoard(),
    'category-sort': () => startSession(6, renderSort),
    'first-then': () => startSession(3, renderFirstThen),
    'breathing-bubble': () => renderBreathing(),
    'aac-board': () => startSession(4, renderAAC),
    'routine-sequence': () => startSession(3, renderRoutine),
    'social-choices': () => startSession(4, renderSocial),
    'imitation-cards': () => startSession(5, renderImitation),
    'conversation-builder': () => startSession(5, renderConversation),
    'expected-unexpected': () => startSession(5, renderExpectedUnexpected),
    'safety-signs': () => startSession(5, renderSafetySigns),
    'coping-match': () => startSession(5, renderCopingMatch),
    'time-schedule': () => startSession(5, renderTimeSchedule),
    'hygiene-helper': () => startSession(5, renderHygieneHelper),
    'problem-solving': () => startSession(5, renderProblemSolving),
    'money-store': () => startSession(5, renderMoneyStore),
    'perspective-detective': () => startSession(5, renderPerspectiveDetective),
    'goal-planner': () => startSession(4, renderGoalPlanner),
    'workplace-choices': () => startSession(5, renderWorkplaceChoices)
  };
  (routes[game.id] || (() => toast('This game is coming soon.')))();
}
function closeGame() {
  $('#playPanel').hidden = true;
  document.body.style.overflow = '';
  $('#gameArea').innerHTML = '';
  currentGame = null;
  session = null;
}
function startSession(total, renderFn) {
  session = { round: 1, correct: 0, total, renderFn };
  renderFn();
}
function roundHeader() {
  if (!session) return '';
  const pct = Math.round(((session.round - 1) / session.total) * 100);
  return `
    <div class="round-wrap">
      <div class="round-label">Practice ${session.round} of ${session.total}</div>
      <div class="round-bar"><span style="width:${pct}%"></span></div>
    </div>`;
}
function finishSession(title = 'You finished!', detail = 'Great practice today.', stars = 3) {
  completeGame(stars);
  $('#gameArea').innerHTML = `
    <div class="finish-card">
      <div class="finish-icon">🎉</div>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(detail)}</p>
      <div class="finish-stars">+${stars} stars earned ⭐</div>
      <div class="finish-actions">
        <button class="btn primary" id="playAgain" type="button">Play again</button>
        <button class="btn soft" id="closeFinished" type="button">Back to arcade</button>
      </div>
    </div>`;
  $('#playAgain').onclick = () => openGame(currentGame.id);
  $('#closeFinished').onclick = closeGame;
}
function nextRoundOrFinish(renderFn, finishTitle, finishDetail, stars = 3) {
  session.correct += 1;
  if (session.round >= session.total) {
    finishSession(finishTitle, finishDetail, stars);
  } else {
    session.round += 1;
    renderFn();
  }
}
function showFeedback(type, message) {
  const box = $('#gameFeedback');
  if (!box) return;
  box.className = 'game-feedback ' + type;
  box.innerHTML = message;
}

function renderEmotion() {
  const emotions = [
    {face:'😊', word:'happy', teach:'A happy face usually has a smile.'},
    {face:'😢', word:'sad', teach:'A sad face may have tears or a frown.'},
    {face:'😡', word:'angry', teach:'An angry face may have tight eyes or a frown.'},
    {face:'😨', word:'scared', teach:'A scared face may look worried or surprised.'},
    {face:'😴', word:'tired', teach:'A tired face may have sleepy eyes.'},
    {face:'😲', word:'surprised', teach:'A surprised face may have a big open mouth.'},
    {face:'😌', word:'calm', teach:'A calm face looks relaxed.'},
    {face:'🤔', word:'thinking', teach:'A thinking face means someone is deciding or wondering.'}
  ];
  const target = emotions[(session.round - 1) % emotions.length];
  const options = shuffle([target.word, ...shuffle(emotions.filter(e => e.word !== target.word)).slice(0,3).map(e => e.word)]);
  $('#gameArea').innerHTML = `
    ${roundHeader()}
    <div class="game-message"><strong>Look at the face.</strong> Which feeling does it show?</div>
    <div class="teaching-tip">${escapeHtml(target.teach)}</div>
    <div class="big-face">${target.face}</div>
    <div class="choices">${options.map(o => `<button class="choice-btn" data-answer="${escapeHtml(o)}">${escapeHtml(o)}</button>`).join('')}</div>
    <div id="gameFeedback" class="game-feedback"></div>
  `;
  $$('.choice-btn').forEach(btn => btn.onclick = () => {
    if (btn.dataset.answer === target.word) {
      btn.classList.add('correct');
      showFeedback('correct', `Yes! This face shows <strong>${target.word}</strong>.`);
      setTimeout(() => nextRoundOrFinish(renderEmotion, 'Emotion Match complete!', 'You practiced matching faces to feeling words.', 3), 650);
    } else {
      btn.classList.add('wrong');
      showFeedback('wrong', `Try again. This face is not ${escapeHtml(btn.dataset.answer)}. ${escapeHtml(target.teach)}`);
    }
  });
}

const colorHex = { red:'#ff6b6b', blue:'#4dabf7', yellow:'#ffd43b', green:'#63d98a', purple:'#845ef7', orange:'#ff9f43' };
function shapeSvg(color, shape) {
  const fill = colorHex[color] || color;
  if (shape === 'circle') return `<svg class="svg-shape" viewBox="0 0 120 120" role="img" aria-label="${color} circle"><circle cx="60" cy="60" r="34" fill="${fill}"/></svg>`;
  if (shape === 'square') return `<svg class="svg-shape" viewBox="0 0 120 120" role="img" aria-label="${color} square"><rect x="28" y="28" width="64" height="64" rx="6" fill="${fill}"/></svg>`;
  if (shape === 'triangle') return `<svg class="svg-shape" viewBox="0 0 120 120" role="img" aria-label="${color} triangle"><polygon points="60,22 98,92 22,92" fill="${fill}"/></svg>`;
  if (shape === 'star') return `<svg class="svg-shape" viewBox="0 0 120 120" role="img" aria-label="${color} star"><polygon points="60,18 72,45 102,47 79,66 87,96 60,79 33,96 41,66 18,47 48,45" fill="${fill}"/></svg>`;
  return '';
}
function shapeTeach(shape) {
  return {
    circle:'A circle is round and has no corners.',
    square:'A square has 4 equal sides and 4 corners.',
    triangle:'A triangle has 3 sides and 3 corners.',
    star:'A star has points.'
  }[shape] || '';
}
function renderDirections() {
  const directions = [
    {color:'red', shape:'triangle'}, {color:'blue', shape:'square'}, {color:'yellow', shape:'circle'},
    {color:'green', shape:'square'}, {color:'purple', shape:'star'}, {color:'orange', shape:'triangle'},
    {color:'blue', shape:'circle'}, {color:'red', shape:'square'}, {color:'green', shape:'triangle'},
    {color:'yellow', shape:'star'}
  ];
  const target = directions[(session.round - 1) % directions.length];
  const optionPool = directions.filter((s, index, self) => index === self.findIndex(x => x.color === s.color && x.shape === s.shape));
  const distractors = shuffle(optionPool.filter(s => !(s.color === target.color && s.shape === target.shape))).slice(0,5);
  const options = shuffle([target, ...distractors]);
  $('#gameArea').innerHTML = `
    ${roundHeader()}
    <div class="game-message"><strong>Touch the ${target.color} ${target.shape}.</strong></div>
    <div class="teaching-tip">Listen for two clues: <strong>color</strong> and <strong>shape</strong>. ${shapeTeach(target.shape)}</div>
    <div class="shape-board">${options.map(s => `
      <button class="shape-btn" data-key="${s.color}-${s.shape}" data-color="${s.color}" data-shape="${s.shape}" aria-label="${s.color} ${s.shape}">
        ${shapeSvg(s.color, s.shape)}
        <span class="shape-label">${s.color} ${s.shape}</span>
      </button>`).join('')}</div>
    <div id="gameFeedback" class="game-feedback"></div>
  `;
  $$('.shape-btn').forEach(btn => btn.onclick = () => {
    const clicked = `${btn.dataset.color} ${btn.dataset.shape}`;
    const correct = `${target.color}-${target.shape}`;
    if (btn.dataset.key === correct) {
      btn.classList.add('correct');
      showFeedback('correct', `Correct! You found the <strong>${target.color} ${target.shape}</strong>. ${shapeTeach(target.shape)}`);
      setTimeout(() => nextRoundOrFinish(renderDirections, 'Directions complete!', 'You practiced listening for color and shape words.', 4), 750);
    } else {
      btn.classList.add('wrong');
      showFeedback('wrong', `That is the <strong>${escapeHtml(clicked)}</strong>. Try again: find the <strong>${target.color} ${target.shape}</strong>.`);
    }
  });
}

function renderTokenBoard() {
  currentTokens = 0;
  updateTokenBoard();
}
function updateTokenBoard() {
  $('#gameArea').innerHTML = `
    <div class="token-wrap">
      <div class="game-message"><strong>Token board:</strong> Earn 5 tokens, then celebrate!</div>
      <div class="teaching-tip">Use this with any task: first work, then earn a token.</div>
      <div class="token-row">${[0,1,2,3,4].map(i => `<div class="token ${i < currentTokens ? 'filled' : ''}">${i < currentTokens ? '⭐' : ''}</div>`).join('')}</div>
      <button class="btn primary" id="earnTokenBtn" type="button">Earn token</button>
      <button class="btn soft" id="resetTokenBtn" type="button">Reset token board</button>
    </div>
  `;
  $('#earnTokenBtn').onclick = () => {
    currentTokens = Math.min(5, currentTokens + 1);
    if (currentTokens >= 5) {
      finishSession('Token board complete!', 'You earned all 5 tokens.', 3);
    } else {
      updateTokenBoard();
    }
  };
  $('#resetTokenBtn').onclick = renderTokenBoard;
}

function renderSort() {
  const items = [
    {icon:'🐶', name:'dog', category:'Animals', teach:'A dog is an animal.'}, {icon:'🍎', name:'apple', category:'Foods', teach:'An apple is food.'},
    {icon:'🧸', name:'teddy bear', category:'Toys', teach:'A teddy bear is a toy.'}, {icon:'👕', name:'shirt', category:'Clothes', teach:'A shirt is clothing.'},
    {icon:'🐠', name:'fish', category:'Animals', teach:'A fish is an animal.'}, {icon:'🍕', name:'pizza', category:'Foods', teach:'Pizza is food.'},
    {icon:'🚗', name:'car', category:'Toys', teach:'A toy car goes with toys.'}, {icon:'🧦', name:'socks', category:'Clothes', teach:'Socks are clothing.'}
  ];
  const target = items[(session.round - 1) % items.length];
  $('#gameArea').innerHTML = `
    ${roundHeader()}
    <div class="game-message">What group does this item belong to?</div>
    <div class="teaching-tip">Think: is it an animal, food, toy, or clothing?</div>
    <div class="sort-layout">
      <div class="item-card"><div><div class="item-icon">${target.icon}</div><div class="item-name">${escapeHtml(target.name)}</div></div></div>
      <div class="sort-options">${['Animals','Foods','Toys','Clothes'].map(c => `<button class="sort-btn" data-category="${c}">${c}</button>`).join('')}</div>
    </div>
    <div id="gameFeedback" class="game-feedback"></div>
  `;
  $$('.sort-btn').forEach(btn => btn.onclick = () => {
    if (btn.dataset.category === target.category) {
      btn.classList.add('correct');
      showFeedback('correct', `Correct! ${escapeHtml(target.teach)}`);
      setTimeout(() => nextRoundOrFinish(renderSort, 'Category Sort complete!', 'You practiced grouping items by category.', 3), 650);
    } else {
      btn.classList.add('wrong');
      showFeedback('wrong', `Not that group. ${escapeHtml(target.teach)}`);
    }
  });
}

function renderFirstThen() {
  ftFirst = null; ftThen = null;
  drawFirstThen();
}
function drawFirstThen() {
  const firstChoices = ['Clean up 🧺', 'Read book 📚', 'Wash hands 🧼', 'Do puzzle 🧩', 'Practice words 💬'];
  const thenChoices = ['Bubbles 🫧', 'Snack 🍓', 'Outside 🌳', 'Music 🎵', 'Toy car 🚗'];
  $('#gameArea').innerHTML = `
    ${roundHeader()}
    <div class="game-message"><strong>First / Then:</strong> choose one work task and one fun reward.</div>
    <div class="teaching-tip">FIRST means what we do now. THEN means what comes next.</div>
    <div class="first-then-board">
      <div class="ft-box"><div><strong>FIRST</strong>${ftFirst || 'Pick a first activity'}</div></div>
      <div class="ft-box"><div><strong>THEN</strong>${ftThen || 'Pick a then activity'}</div></div>
    </div>
    <h4 class="mini-title">First choices</h4>
    <div class="ft-option-grid">${firstChoices.map(c => `<button class="choice-btn" data-first="${c}">${c}</button>`).join('')}</div>
    <h4 class="mini-title">Then choices</h4>
    <div class="ft-option-grid">${thenChoices.map(c => `<button class="choice-btn" data-then="${c}">${c}</button>`).join('')}</div>
    <div class="game-actions">
      <button class="btn primary" id="completeFT" type="button">Complete first/then</button>
      <button class="btn soft" id="resetFT" type="button">Start over</button>
    </div>
    <div id="gameFeedback" class="game-feedback"></div>
  `;
  $$('[data-first]').forEach(btn => btn.onclick = () => { ftFirst = btn.dataset.first; drawFirstThen(); });
  $$('[data-then]').forEach(btn => btn.onclick = () => { ftThen = btn.dataset.then; drawFirstThen(); });
  $('#completeFT').onclick = () => {
    if (ftFirst && ftThen) {
      showFeedback('correct', `Great! First ${escapeHtml(ftFirst)}, then ${escapeHtml(ftThen)}.`);
      setTimeout(() => nextRoundOrFinish(renderFirstThen, 'First / Then complete!', 'You practiced transition language.', 3), 750);
    } else toast('Pick a FIRST and a THEN.');
  };
  $('#resetFT').onclick = renderFirstThen;
}

function renderBreathing() {
  $('#gameArea').innerHTML = `
    <div class="breath-wrap" id="breathWrap">
      <div>
        <div class="game-message"><strong>Calm breathing:</strong> follow the bubble for 4 slow breaths.</div>
        <div class="bubble">Breathe</div>
        <p class="breath-text">Grow = breathe in. Shrink = breathe out.</p>
        <div class="game-actions center">
          <button class="btn primary" id="startBreath" type="button">Start calm breathing</button>
          <button class="btn soft" id="finishBreath" type="button">I did 4 breaths</button>
        </div>
      </div>
    </div>
  `;
  $('#startBreath').onclick = () => $('#breathWrap').classList.add('breathing');
  $('#finishBreath').onclick = () => finishSession('Breathing complete!', 'You practiced a calm body strategy.', 3);
}

function renderAAC() {
  aacWords = [];
  drawAAC();
}
function drawAAC() {
  const tasks = [
    {target:['I want','play'], teach:'Use “I want” to request something.'},
    {target:['help','please'], teach:'Use “help please” when something is hard.'},
    {target:['more','bubbles'], teach:'Use “more” to ask for more of an activity.'},
    {target:['all done'], teach:'Use “all done” to end or stop an activity.'}
  ];
  const current = tasks[(session.round - 1) % tasks.length];
  const words = ['I want','play','help','please','more','bubbles','all done','yes','no','break','my turn','thank you'];
  $('#gameArea').innerHTML = `
    ${roundHeader()}
    <div class="game-message">Build this message: <strong>${escapeHtml(current.target.join(' '))}</strong></div>
    <div class="teaching-tip">${escapeHtml(current.teach)}</div>
    <div class="aac-sentence">${aacWords.length ? aacWords.join(' ') : 'Tap words below to build the message.'}</div>
    <div class="aac-grid">${words.map(w => `<button class="aac-btn" data-word="${w}">${w}</button>`).join('')}</div>
    <div class="game-actions">
      <button class="btn primary" id="checkAAC" type="button">Check message</button>
      <button class="btn soft" id="clearAAC" type="button">Clear</button>
    </div>
    <div id="gameFeedback" class="game-feedback"></div>
  `;
  $$('.aac-btn').forEach(btn => btn.onclick = () => { aacWords.push(btn.dataset.word); drawAAC(); });
  $('#clearAAC').onclick = () => { aacWords = []; drawAAC(); };
  $('#checkAAC').onclick = () => {
    const target = current.target.join(' ').toLowerCase();
    const actual = aacWords.join(' ').toLowerCase();
    if (target === actual) {
      showFeedback('correct', `Nice communication! You made: <strong>${escapeHtml(current.target.join(' '))}</strong>.`);
      setTimeout(() => nextRoundOrFinish(renderAAC, 'AAC practice complete!', 'You practiced functional communication phrases.', 3), 750);
    } else {
      showFeedback('wrong', `Try again. Build exactly: <strong>${escapeHtml(current.target.join(' '))}</strong>.`);
    }
  };
}

function renderRoutine() {
  routinePicked = [];
  drawRoutine();
}
function drawRoutine() {
  const routines = [
    {name:'Morning routine', correct:['Wake up ☀️','Brush teeth 🪥','Get dressed 👕','Eat breakfast 🍌']},
    {name:'Bedtime routine', correct:['Put pajamas on 🌙','Brush teeth 🪥','Read book 📚','Go to bed 🛏️']},
    {name:'School routine', correct:['Pack bag 🎒','Get in car 🚗','Go to class 🏫','Say hello 👋']}
  ];
  const routine = routines[(session.round - 1) % routines.length];
  $('#gameArea').innerHTML = `
    ${roundHeader()}
    <div class="game-message">Put the <strong>${escapeHtml(routine.name)}</strong> in order.</div>
    <div class="teaching-tip">Tap the cards in the order they happen: first, next, then, last.</div>
    <div class="routine-list">${routinePicked.map(step => `<span class="routine-step">${step}</span>`).join('') || 'Tap cards below to build the routine.'}</div>
    <div class="routine-options">${shuffle(routine.correct).map(step => `<button class="routine-btn" data-step="${step}">${step}</button>`).join('')}</div>
    <div class="game-actions">
      <button class="btn primary" id="checkRoutine" type="button">Check order</button>
      <button class="btn soft" id="resetRoutine" type="button">Start over</button>
    </div>
    <div id="gameFeedback" class="game-feedback"></div>
  `;
  $$('.routine-btn').forEach(btn => btn.onclick = () => {
    if (!routinePicked.includes(btn.dataset.step)) routinePicked.push(btn.dataset.step);
    drawRoutine();
  });
  $('#checkRoutine').onclick = () => {
    if (routinePicked.join('|') === routine.correct.join('|')) {
      showFeedback('correct', 'Correct order! You used first, next, then, last.');
      setTimeout(() => nextRoundOrFinish(renderRoutine, 'Routine Sequence complete!', 'You practiced sequencing everyday routines.', 3), 750);
    } else showFeedback('wrong', 'Try again. What happens first? Start over and build the routine carefully.');
  };
  $('#resetRoutine').onclick = renderRoutine;
}

function renderSocial() {
  const scenarios = [
    {q:'A friend says, “Hi!” What can you say?', good:'Hi! Want to play?', teach:'A friendly greeting keeps the conversation going.', options:['Go away','Hi! Want to play?','Take the toy','Yell']},
    {q:'You need help opening a snack. What can you say?', good:'Help please', teach:'Asking for help is safer than throwing or yelling.', options:['Help please','Throw it','Run away','Say nothing']},
    {q:'Someone is using the toy you want. What can you do?', good:'Ask for a turn', teach:'Asking for a turn is a safe social choice.', options:['Grab it','Ask for a turn','Push','Scream']},
    {q:'Your body feels mad. What can help?', good:'Take a calm breath', teach:'A calm breath can help your body slow down.', options:['Hit','Take a calm breath','Throw toys','Run into street']}
  ];
  const s = scenarios[(session.round - 1) % scenarios.length];
  $('#gameArea').innerHTML = `
    ${roundHeader()}
    <div class="game-message">${escapeHtml(s.q)}</div>
    <div class="teaching-tip">Choose the safe and friendly answer.</div>
    <div class="social-options">${shuffle(s.options).map(o => `<button class="social-btn" data-social="${escapeHtml(o)}">${escapeHtml(o)}</button>`).join('')}</div>
    <div id="gameFeedback" class="game-feedback"></div>
  `;
  $$('.social-btn').forEach(btn => btn.onclick = () => {
    if (btn.dataset.social === s.good) {
      btn.classList.add('correct');
      showFeedback('correct', `Yes. ${escapeHtml(s.teach)}`);
      setTimeout(() => nextRoundOrFinish(renderSocial, 'Social Choices complete!', 'You practiced safe and friendly choices.', 3), 750);
    } else {
      btn.classList.add('wrong');
      showFeedback('wrong', `Try again. ${escapeHtml(s.teach)}`);
    }
  });
}

function renderImitation() {
  const actions = [
    {do:'Clap hands 👏', teach:'Watch, then copy the action.'},
    {do:'Wave bye 👋', teach:'Use your hand to wave.'},
    {do:'Touch head 🙆', teach:'Find your head and touch it.'},
    {do:'Stomp feet 🦶', teach:'Move your feet like this.'},
    {do:'Give thumbs up 👍', teach:'Copy the hand gesture.'}
  ];
  const action = actions[(session.round - 1) % actions.length];
  $('#gameArea').innerHTML = `
    ${roundHeader()}
    <div class="game-message">Imitate this action:</div>
    <div class="teaching-tip">${escapeHtml(action.teach)}</div>
    <div class="action-card imitation-card-big">${escapeHtml(action.do)}</div>
    <div class="game-actions">
      <button class="btn primary" id="doneAction" type="button">I did it</button>
      <button class="btn soft" id="repeatAction" type="button">Show again</button>
    </div>
  `;
  $('#doneAction').onclick = () => nextRoundOrFinish(renderImitation, 'Imitation Cards complete!', 'You practiced copying actions.', 3);
  $('#repeatAction').onclick = renderImitation;
}


const scenarioSets = {
  conversation: {
    finishTitle: 'Conversation Builder complete!',
    finishDetail: 'You practiced friendly conversation skills.',
    items: [
      {s:'A friend says, “Hi!”', q:'What could you say back?', tip:'A greeting answers a greeting.', correct:'Hi! How are you?', wrong:['Give me that toy.','Walk away silently.','No, I am not talking.']},
      {s:'Someone shows you a drawing they made.', q:'What is a friendly comment?', tip:'A comment tells what you notice or like.', correct:'I like the colors you used.', wrong:['That is boring.','Give it to me.','I am leaving now.']},
      {s:'You want to join a game.', q:'What can you ask?', tip:'Asking before joining is expected and respectful.', correct:'Can I play too?', wrong:['Move everyone out of the way.','Take the ball without asking.','Tell everyone to stop.']},
      {s:'You do not understand the directions.', q:'What can you say?', tip:'It is okay to ask for help or clarification.', correct:'Can you say it again, please?', wrong:['Never mind, I quit.','You are wrong.','Throw the paper away.']},
      {s:'You are done talking and need to leave.', q:'How can you end politely?', tip:'A closing lets people know the conversation is ending.', correct:'I have to go. See you later!', wrong:['Stop talking.','I do not care.','Just turn your back.']}
    ]
  },
  expected: {
    finishTitle: 'Expected / Unexpected complete!',
    finishDetail: 'You practiced matching behavior to the situation.',
    items: [
      {s:'In the library', q:'Which behavior is expected?', tip:'Quiet places need quiet voices and calm bodies.', correct:'Use a quiet voice.', wrong:['Yell across the room.','Run between shelves.','Throw books.']},
      {s:'Waiting in line', q:'Which behavior is expected?', tip:'Waiting means keeping your place and body safe.', correct:'Stand behind the person in front.', wrong:['Push to the front.','Lean on strangers.','Leave without telling anyone.']},
      {s:'During group work', q:'Which behavior is expected?', tip:'Teamwork uses listening, turn-taking, and kind words.', correct:'Listen and take turns sharing ideas.', wrong:['Talk over everyone.','Refuse every idea.','Hide the materials.']},
      {s:'At a restaurant', q:'Which behavior is expected?', tip:'Restaurants need safe hands and indoor voices.', correct:'Sit safely and use an indoor voice.', wrong:['Climb on the table.','Run around servers.','Take food from another table.']},
      {s:'When someone is upset', q:'Which behavior is expected?', tip:'Kindness helps people feel safe.', correct:'Ask, “Are you okay?”', wrong:['Laugh at them.','Tell them to stop feeling.','Walk away every time.']}
    ]
  },
  coping: {
    finishTitle: 'Coping Strategy complete!',
    finishDetail: 'You practiced choosing helpful regulation tools.',
    items: [
      {s:'You feel angry because a game ended.', q:'What is a helpful coping choice?', tip:'Coping helps your body get back to safe and calm.', correct:'Take three slow breaths and ask for a break.', wrong:['Throw the game.','Yell at the person.','Kick the chair.']},
      {s:'The room is too loud.', q:'What can you do?', tip:'A sensory break or headphones can help with loud sounds.', correct:'Ask for headphones or a quiet break.', wrong:['Scream louder.','Push people away.','Cover someone else’s mouth.']},
      {s:'You made a mistake on work.', q:'What can you say?', tip:'Mistakes are practice. Helpful self-talk matters.', correct:'I can try again or ask for help.', wrong:['I am bad at everything.','Rip the paper.','Blame someone else.']},
      {s:'You are worried about a new place.', q:'What could help?', tip:'Previewing steps can make new places feel safer.', correct:'Look at the schedule and ask what comes next.', wrong:['Run away without telling anyone.','Refuse all choices.','Hide the whole time.']},
      {s:'You need movement.', q:'What is a safe choice?', tip:'Movement can be safe when you choose the right place and way.', correct:'Ask for a walk, stretch, or movement break.', wrong:['Crash into people.','Jump from furniture.','Leave the building alone.']}
    ]
  },
  problem: {
    finishTitle: 'Problem Solving complete!',
    finishDetail: 'You practiced stop, think, choose.',
    items: [
      {s:'Your pencil breaks during work.', q:'What is the best first step?', tip:'Problem-solving starts with a small safe step.', correct:'Ask for a new pencil or sharpen it.', wrong:['Stop working for the day.','Throw the pencil.','Take someone’s pencil without asking.']},
      {s:'Two people want the same toy.', q:'What can you try?', tip:'Sharing problems can use turns, timers, or asking an adult.', correct:'Use a timer and take turns.', wrong:['Grab it and run.','Say nobody can play.','Break the toy.']},
      {s:'You forgot what to do next.', q:'What is a helpful choice?', tip:'Asking or checking a visual schedule helps memory.', correct:'Check the schedule or ask, “What is next?”', wrong:['Guess and get upset.','Leave the room.','Refuse everything.']},
      {s:'A friend says no to playing.', q:'What can you do?', tip:'No is okay. You can choose another activity or ask someone else.', correct:'Say okay and choose another activity.', wrong:['Keep begging.','Say mean words.','Take their materials.']},
      {s:'Your plan changed.', q:'What helps flexible thinking?', tip:'Flexible thinking means finding a new safe plan.', correct:'Ask what the new plan is and choose a coping tool.', wrong:['Refuse to move forever.','Knock things down.','Run away.']}
    ]
  },
  perspective: {
    finishTitle: 'Perspective Detective complete!',
    finishDetail: 'You practiced thinking about other people.',
    items: [
      {s:'Mia drops her ice cream and starts crying.', q:'How might Mia feel?', tip:'Look at what happened and the person’s face/body.', correct:'Sad or disappointed.', wrong:['Excited.','Bored.','Proud.']},
      {s:'Leo is covering his ears during a loud fire drill.', q:'What might Leo need?', tip:'Body clues can show sensory needs.', correct:'A quieter space or headphones.', wrong:['More loud sounds.','Everyone to laugh.','A harder math problem.']},
      {s:'A classmate is smiling after winning a game.', q:'What might they feel?', tip:'A smile after a win often means happy or proud.', correct:'Happy or proud.', wrong:['Scared.','Sleepy.','Confused.']},
      {s:'Someone says, “Please stop. I don’t like that.”', q:'What should you think?', tip:'People’s words tell us their boundary.', correct:'They want me to stop and give space.', wrong:['They want more.','They are joking every time.','I should keep doing it.']},
      {s:'A friend is quiet and looking away after an argument.', q:'What could help?', tip:'Repair can mean giving space or using kind words.', correct:'Ask if they need space or say sorry if needed.', wrong:['Demand they talk now.','Call them rude.','Ignore their feelings.']}
    ]
  },
  workplace: {
    finishTitle: 'Workplace Choices complete!',
    finishDetail: 'You practiced job and community readiness choices.',
    items: [
      {s:'You arrive at volunteer work.', q:'What should you do first?', tip:'Work routines often start with checking in.', correct:'Check in and ask what task to start.', wrong:['Start using your phone.','Leave without telling anyone.','Take items home.']},
      {s:'A supervisor gives feedback.', q:'What is a professional response?', tip:'Feedback helps people learn job skills.', correct:'Listen, say okay, and try the change.', wrong:['Argue loudly.','Walk out.','Tell them they are always wrong.']},
      {s:'You finish your assigned task early.', q:'What should you do?', tip:'When work is finished, ask for the next task.', correct:'Ask, “What should I do next?”', wrong:['Hide in the bathroom.','Distract coworkers.','Clock out without permission.']},
      {s:'You feel overwhelmed at work.', q:'What is a safe self-advocacy choice?', tip:'Self-advocacy means asking for what helps in a respectful way.', correct:'Ask for a short break or clarification.', wrong:['Yell at customers.','Throw supplies.','Leave without telling anyone.']},
      {s:'A coworker is using equipment you need.', q:'What can you say?', tip:'Polite requests help work go smoothly.', correct:'Can I use that when you are finished?', wrong:['Take it from their hands.','Say mean things.','Refuse to work forever.']}
    ]
  }
};

function renderScenarioGame(key, renderer, categoryLabel) {
  const config = scenarioSets[key];
  const item = config.items[(session.round - 1) % config.items.length];
  const options = shuffle([item.correct, ...item.wrong]);
  $('#gameArea').innerHTML = `
    ${roundHeader()}
    <div class="scenario-card">
      <div class="scenario-label">${escapeHtml(categoryLabel || 'Practice scenario')}</div>
      <h3>${escapeHtml(item.s)}</h3>
      <p>${escapeHtml(item.q)}</p>
    </div>
    <div class="teaching-tip">${escapeHtml(item.tip)}</div>
    <div class="choices scenario-options">${options.map(o => `<button class="choice-btn" data-answer="${escapeHtml(o)}">${escapeHtml(o)}</button>`).join('')}</div>
    <div id="gameFeedback" class="game-feedback"></div>
  `;
  $$('.choice-btn').forEach(btn => btn.onclick = () => {
    if (btn.dataset.answer === item.correct) {
      btn.classList.add('correct');
      showFeedback('correct', `Correct. <strong>${escapeHtml(item.correct)}</strong>`);
      setTimeout(() => nextRoundOrFinish(renderer, config.finishTitle, config.finishDetail, 4), 750);
    } else {
      btn.classList.add('wrong');
      showFeedback('wrong', `Try again. Think about the safe/helpful choice. ${escapeHtml(item.tip)}`);
    }
  });
}
function renderConversation() { renderScenarioGame('conversation', renderConversation, 'Conversation practice'); }
function renderExpectedUnexpected() { renderScenarioGame('expected', renderExpectedUnexpected, 'Expected behavior'); }
function renderCopingMatch() { renderScenarioGame('coping', renderCopingMatch, 'Coping strategy'); }
function renderProblemSolving() { renderScenarioGame('problem', renderProblemSolving, 'Problem solving'); }
function renderPerspectiveDetective() { renderScenarioGame('perspective', renderPerspectiveDetective, 'Perspective taking'); }
function renderWorkplaceChoices() { renderScenarioGame('workplace', renderWorkplaceChoices, 'Work readiness'); }

function renderSafetySigns() {
  const signs = [
    {icon:'🛑', sign:'STOP', meaning:'Stop your body and look before moving.', tip:'A stop sign means stop first, then check if it is safe.'},
    {icon:'🚶', sign:'WALK', meaning:'It is your turn to walk carefully.', tip:'Walk signals tell pedestrians when to cross.'},
    {icon:'🚫', sign:'DO NOT ENTER', meaning:'Do not go into that area.', tip:'This sign protects people from unsafe places.'},
    {icon:'🔥', sign:'FIRE EXIT', meaning:'Use this way to leave during an emergency.', tip:'Exit signs help you find a safe way out.'},
    {icon:'☣️', sign:'DANGER', meaning:'Stay away and ask an adult.', tip:'Danger signs mean the area or item could hurt someone.'}
  ];
  const target = signs[(session.round - 1) % signs.length];
  const options = shuffle([target.meaning, ...shuffle(signs.filter(s => s.sign !== target.sign)).slice(0,3).map(s => s.meaning)]);
  $('#gameArea').innerHTML = `
    ${roundHeader()}
    <div class="game-message"><strong>What does this safety sign mean?</strong></div>
    <div class="teaching-tip">${escapeHtml(target.tip)}</div>
    <div class="sign-display"><div class="sign-icon">${target.icon}</div><div class="sign-word">${escapeHtml(target.sign)}</div></div>
    <div class="choices">${options.map(o => `<button class="choice-btn" data-answer="${escapeHtml(o)}">${escapeHtml(o)}</button>`).join('')}</div>
    <div id="gameFeedback" class="game-feedback"></div>
  `;
  $$('.choice-btn').forEach(btn => btn.onclick = () => {
    if (btn.dataset.answer === target.meaning) {
      btn.classList.add('correct');
      showFeedback('correct', `Yes. <strong>${escapeHtml(target.sign)}</strong> means: ${escapeHtml(target.meaning)}`);
      setTimeout(() => nextRoundOrFinish(renderSafetySigns, 'Safety Signs complete!', 'You practiced community safety meanings.', 4), 700);
    } else {
      btn.classList.add('wrong');
      showFeedback('wrong', `Try again. ${escapeHtml(target.tip)}`);
    }
  });
}

function renderTimeSchedule() {
  const tasks = [
    {schedule:['3:00 Homework','3:30 Snack','4:00 Outside'], q:'What happens after homework?', correct:'Snack', tip:'Look at the item that comes next on the schedule.'},
    {schedule:['8:00 Breakfast','8:30 Brush teeth','9:00 School'], q:'What happens before school?', correct:'Brush teeth', tip:'Before means the step right above it.'},
    {schedule:['1:00 Reading','1:30 Math','2:00 Art'], q:'What activity is at 1:30?', correct:'Math', tip:'Match the time to the activity.'},
    {schedule:['6:00 Dinner','6:30 Shower','7:00 Quiet time'], q:'What happens after dinner?', correct:'Shower', tip:'After means the next step.'},
    {schedule:['10:00 Chores','10:30 Break','11:00 Game'], q:'What is at 10:30?', correct:'Break', tip:'Find the time, then read the activity.'}
  ];
  const target = tasks[(session.round - 1) % tasks.length];
  const all = ['Snack','Outside','Brush teeth','School','Math','Art','Shower','Quiet time','Break','Game','Reading','Dinner'];
  const options = shuffle([target.correct, ...shuffle(all.filter(x => x !== target.correct)).slice(0,3)]);
  $('#gameArea').innerHTML = `
    ${roundHeader()}
    <div class="game-message"><strong>${escapeHtml(target.q)}</strong></div>
    <div class="teaching-tip">${escapeHtml(target.tip)}</div>
    <div class="schedule-card">${target.schedule.map(row => `<div>${escapeHtml(row)}</div>`).join('')}</div>
    <div class="choices">${options.map(o => `<button class="choice-btn" data-answer="${escapeHtml(o)}">${escapeHtml(o)}</button>`).join('')}</div>
    <div id="gameFeedback" class="game-feedback"></div>
  `;
  $$('.choice-btn').forEach(btn => btn.onclick = () => {
    if (btn.dataset.answer === target.correct) {
      btn.classList.add('correct');
      showFeedback('correct', `Correct. The answer is <strong>${escapeHtml(target.correct)}</strong>.`);
      setTimeout(() => nextRoundOrFinish(renderTimeSchedule, 'Time & Schedule complete!', 'You practiced reading schedules and next steps.', 4), 700);
    } else {
      btn.classList.add('wrong');
      showFeedback('wrong', `Try again. ${escapeHtml(target.tip)}`);
    }
  });
}

function renderHygieneHelper() {
  const tasks = [
    {task:'Brush teeth', icon:'🪥', correct:'Toothbrush and toothpaste', tip:'Teeth need a toothbrush and toothpaste.'},
    {task:'Wash hands', icon:'🧼', correct:'Soap and water', tip:'Hands get clean with soap and water.'},
    {task:'Comb hair', icon:'💇', correct:'Comb or brush', tip:'Hair tools help smooth hair.'},
    {task:'Shower', icon:'🚿', correct:'Body wash, shampoo, and towel', tip:'A shower uses soap/shampoo and a towel after.'},
    {task:'Put on deodorant', icon:'🧴', correct:'Deodorant', tip:'Deodorant goes under arms when appropriate.'}
  ];
  const target = tasks[(session.round - 1) % tasks.length];
  const options = shuffle([target.correct, 'Fork and plate', 'Pencil and notebook', 'Toy blocks']);
  $('#gameArea').innerHTML = `
    ${roundHeader()}
    <div class="game-message">What do you need for: <strong>${escapeHtml(target.task)}</strong>?</div>
    <div class="teaching-tip">${escapeHtml(target.tip)}</div>
    <div class="big-face">${target.icon}</div>
    <div class="choices">${options.map(o => `<button class="choice-btn" data-answer="${escapeHtml(o)}">${escapeHtml(o)}</button>`).join('')}</div>
    <div id="gameFeedback" class="game-feedback"></div>
  `;
  $$('.choice-btn').forEach(btn => btn.onclick = () => {
    if (btn.dataset.answer === target.correct) {
      btn.classList.add('correct');
      showFeedback('correct', `Correct. Use <strong>${escapeHtml(target.correct)}</strong>.`);
      setTimeout(() => nextRoundOrFinish(renderHygieneHelper, 'Hygiene Helper complete!', 'You practiced daily living tools.', 4), 700);
    } else {
      btn.classList.add('wrong');
      showFeedback('wrong', `Try again. ${escapeHtml(target.tip)}`);
    }
  });
}

function renderMoneyStore() {
  const items = [
    {item:'Sticker', price:1, options:['$1','$2','$5','$10'], correct:'$1', tip:'A $1 item can be bought with one dollar.'},
    {item:'Juice', price:2, options:['$1','$2','$5','$10'], correct:'$2', tip:'Match the price on the tag.'},
    {item:'Notebook', price:3, options:['$1','$3','$5','$10'], correct:'$3', tip:'Look for the same number as the price.'},
    {item:'Small toy', price:5, options:['$1','$2','$5','$20'], correct:'$5', tip:'A five-dollar item needs $5.'},
    {item:'Headphones', price:10, options:['$1','$5','$10','$20'], correct:'$10', tip:'Match the bill to the price.'}
  ];
  const target = items[(session.round - 1) % items.length];
  $('#gameArea').innerHTML = `
    ${roundHeader()}
    <div class="store-card"><div class="store-item">🛍️ ${escapeHtml(target.item)}</div><div class="price-tag">Price: $${target.price}</div></div>
    <div class="teaching-tip">${escapeHtml(target.tip)}</div>
    <div class="choices">${shuffle(target.options).map(o => `<button class="choice-btn money-choice" data-answer="${escapeHtml(o)}">${escapeHtml(o)}</button>`).join('')}</div>
    <div id="gameFeedback" class="game-feedback"></div>
  `;
  $$('.choice-btn').forEach(btn => btn.onclick = () => {
    if (btn.dataset.answer === target.correct) {
      btn.classList.add('correct');
      showFeedback('correct', `Correct. ${escapeHtml(target.item)} costs <strong>${escapeHtml(target.correct)}</strong>.`);
      setTimeout(() => nextRoundOrFinish(renderMoneyStore, 'Money Store complete!', 'You practiced matching money to prices.', 4), 700);
    } else {
      btn.classList.add('wrong');
      showFeedback('wrong', `Try again. The price tag says $${target.price}.`);
    }
  });
}

function renderGoalPlanner() {
  const goals = [
    {goal:'Get ready for school', steps:['Pack backpack','Put on shoes','Walk to the car'], correct:'Pack backpack', tip:'Start with the first small step.'},
    {goal:'Finish homework', steps:['Read directions','Do one problem','Check work'], correct:'Read directions', tip:'Begin by understanding the directions.'},
    {goal:'Clean bedroom', steps:['Pick up clothes','Put toys away','Make bed'], correct:'Pick up clothes', tip:'Choose one concrete first step.'},
    {goal:'Make a snack', steps:['Wash hands','Get ingredients','Clean up'], correct:'Wash hands', tip:'Food routines usually start with clean hands.'}
  ];
  const target = goals[(session.round - 1) % goals.length];
  const options = shuffle([...target.steps, 'Quit before starting']);
  $('#gameArea').innerHTML = `
    ${roundHeader()}
    <div class="scenario-card"><div class="scenario-label">Goal</div><h3>${escapeHtml(target.goal)}</h3><p>What should be the first small step?</p></div>
    <div class="teaching-tip">${escapeHtml(target.tip)}</div>
    <div class="choices">${options.map(o => `<button class="choice-btn" data-answer="${escapeHtml(o)}">${escapeHtml(o)}</button>`).join('')}</div>
    <div id="gameFeedback" class="game-feedback"></div>
  `;
  $$('.choice-btn').forEach(btn => btn.onclick = () => {
    if (btn.dataset.answer === target.correct) {
      btn.classList.add('correct');
      showFeedback('correct', `Great first step: <strong>${escapeHtml(target.correct)}</strong>.`);
      setTimeout(() => nextRoundOrFinish(renderGoalPlanner, 'Goal Planner complete!', 'You practiced breaking goals into small steps.', 4), 700);
    } else {
      btn.classList.add('wrong');
      showFeedback('wrong', `Try again. ${escapeHtml(target.tip)}`);
    }
  });
}

document.addEventListener('click', e => {
  const card = e.target.closest('.game-card');
  if (card) openGame(card.dataset.game);
});
$('#closeGameBtn')?.addEventListener('click', closeGame);
$('#playPanel')?.addEventListener('click', e => { if (e.target.id === 'playPanel') closeGame(); });
$('#resetProgressBtn')?.addEventListener('click', () => {
  if (confirm('Reset stars and games played on this device?')) {
    progress.stars = 0; progress.played = 0; saveProgress(); toast('Progress reset.');
  }
});

saveProgress();
loadGames();
