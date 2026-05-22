const fallbackGames = [
  {id:'emotion-match',title:'Emotion Match',category:'Social Skills',age:'3+',goal:'Identify emotions and match facial expressions to words.',enabled:true},
  {id:'follow-directions',title:'Follow Directions',category:'Listening',age:'3+',goal:'Practice one-step directions with color, shape, and position words.',enabled:true},
  {id:'token-board',title:'Token Board',category:'Reinforcement',age:'2+',goal:'Earn five tokens and celebrate a completed task.',enabled:true},
  {id:'category-sort',title:'Category Sort',category:'Language',age:'4+',goal:'Sort items into animals, foods, toys, and clothes.',enabled:true},
  {id:'first-then',title:'First / Then Builder',category:'Routine',age:'2+',goal:'Practice simple first-then language and transitions.',enabled:true},
  {id:'breathing-bubble',title:'Calm Breathing Bubble',category:'Regulation',age:'3+',goal:'Follow a visual breathing cue to calm the body.',enabled:true},
  {id:'aac-board',title:'AAC Choice Board',category:'Communication',age:'2+',goal:'Practice functional phrases like I want, help, more, and all done.',enabled:true},
  {id:'routine-sequence',title:'Routine Sequence',category:'Daily Living',age:'4+',goal:'Put everyday routine steps in order.',enabled:true},
  {id:'social-choices',title:'Social Choices',category:'Social Skills',age:'5+',goal:'Choose friendly responses in common social situations.',enabled:true},
  {id:'imitation-cards',title:'Imitation Cards',category:'Motor Imitation',age:'2+',goal:'Practice simple gross-motor imitation actions.',enabled:true}
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
  'imitation-cards':'🙌'
};

const accents = ['rgba(77,171,247,.18)','rgba(255,212,59,.28)','rgba(255,107,157,.18)','rgba(99,217,138,.20)','rgba(255,159,67,.20)'];
let games = [];
let activeFilter = 'All';
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
  $('#totalStars').textContent = progress.stars;
  $('#gamesPlayed').textContent = progress.played;
}
function addStar(amount = 1) {
  progress.stars += amount;
  progress.played += 1;
  saveProgress();
  toast(`Great job! +${amount} star${amount > 1 ? 's' : ''} ⭐`);
}
function toast(msg) {
  const el = $('#toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 1800);
}
function confetti() {
  const root = $('#confetti');
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
  renderGrid();
}
function renderGrid() {
  const grid = $('#gameGrid');
  const filtered = games.filter(g => activeFilter === 'All' || g.category === activeFilter);
  grid.innerHTML = filtered.map((game, i) => `
    <button class="game-card" data-game="${game.id}" style="--accent:${accents[i % accents.length]}">
      <div class="game-icon">${gameIcons[game.id] || '🎮'}</div>
      <h3>${game.title}</h3>
      <p>${game.goal}</p>
      <div class="tags">
        <span class="tag">${game.category}</span>
        <span class="tag">Age ${game.age}</span>
      </div>
    </button>
  `).join('');
}
function openGame(id) {
  const game = games.find(g => g.id === id) || fallbackGames.find(g => g.id === id);
  if (!game) return;
  setGameMeta(game);
  $('#playPanel').hidden = false;
  document.body.style.overflow = 'hidden';
  if (game.id === 'emotion-match') renderEmotion();
  if (game.id === 'follow-directions') renderDirections();
  if (game.id === 'token-board') renderTokenBoard();
  if (game.id === 'category-sort') renderSort();
  if (game.id === 'first-then') renderFirstThen();
  if (game.id === 'breathing-bubble') renderBreathing();
  if (game.id === 'aac-board') renderAAC();
  if (game.id === 'routine-sequence') renderRoutine();
  if (game.id === 'social-choices') renderSocial();
  if (game.id === 'imitation-cards') renderImitation();
}
function closeGame() {
  $('#playPanel').hidden = true;
  document.body.style.overflow = '';
  $('#gameArea').innerHTML = '';
}

function renderEmotion() {
  const emotions = [
    {face:'😊', word:'happy'}, {face:'😢', word:'sad'}, {face:'😡', word:'angry'}, {face:'😨', word:'scared'},
    {face:'😴', word:'tired'}, {face:'😲', word:'surprised'}, {face:'😌', word:'calm'}, {face:'🤔', word:'thinking'}
  ];
  const target = emotions[Math.floor(Math.random()*emotions.length)];
  const options = shuffle([target.word, ...shuffle(emotions.filter(e => e.word !== target.word)).slice(0,3).map(e => e.word)]);
  $('#gameArea').innerHTML = `
    <div class="game-message">Which emotion matches this face?</div>
    <div class="big-face">${target.face}</div>
    <div class="choices">${options.map(o => `<button class="choice-btn" data-answer="${o}">${o}</button>`).join('')}</div>
  `;
  $$('.choice-btn').forEach(btn => btn.onclick = () => {
    if (btn.dataset.answer === target.word) { addStar(1); confetti(); renderEmotion(); }
    else toast('Try again. Look at the face.');
  });
}

function renderDirections() {
  const shapes = [
    {color:'red', shape:'circle'}, {color:'blue', shape:'square'}, {color:'yellow', shape:'circle'},
    {color:'green', shape:'square'}, {color:'red', shape:'triangle'}, {color:'blue', shape:'triangle'}
  ];
  const target = shapes[Math.floor(Math.random()*shapes.length)];
  $('#gameArea').innerHTML = `
    <div class="game-message">Touch the <strong>${target.color} ${target.shape}</strong>.</div>
    <div class="shape-board">${shuffle(shapes).map((s, i) => `
      <button class="shape-btn" data-key="${s.color}-${s.shape}" aria-label="${s.color} ${s.shape}">
        <span class="shape-${s.shape} ${s.color}"></span>
      </button>`).join('')}</div>
  `;
  $$('.shape-btn').forEach(btn => btn.onclick = () => {
    if (btn.dataset.key === `${target.color}-${target.shape}`) { addStar(1); renderDirections(); }
    else toast('Nice try. Listen again and find the target.');
  });
}

function renderTokenBoard() {
  currentTokens = 0;
  updateTokenBoard();
}
function updateTokenBoard() {
  $('#gameArea').innerHTML = `
    <div class="token-wrap">
      <div class="game-message">Earn 5 tokens, then celebrate!</div>
      <div class="token-row">${[0,1,2,3,4].map(i => `<div class="token ${i < currentTokens ? 'filled' : ''}">${i < currentTokens ? '⭐' : ''}</div>`).join('')}</div>
      <button class="btn primary" id="earnTokenBtn" type="button">Earn token</button>
      <button class="btn soft" id="resetTokenBtn" type="button">Reset token board</button>
    </div>
  `;
  $('#earnTokenBtn').onclick = () => {
    currentTokens = Math.min(5, currentTokens + 1);
    if (currentTokens >= 5) { addStar(3); confetti(); currentTokens = 0; }
    updateTokenBoard();
  };
  $('#resetTokenBtn').onclick = renderTokenBoard;
}

function renderSort() {
  const items = [
    {icon:'🐶', name:'dog', category:'Animals'}, {icon:'🍎', name:'apple', category:'Foods'},
    {icon:'🧸', name:'teddy bear', category:'Toys'}, {icon:'👕', name:'shirt', category:'Clothes'},
    {icon:'🐠', name:'fish', category:'Animals'}, {icon:'🍕', name:'pizza', category:'Foods'},
    {icon:'🚗', name:'car', category:'Toys'}, {icon:'🧦', name:'socks', category:'Clothes'}
  ];
  const target = items[Math.floor(Math.random()*items.length)];
  $('#gameArea').innerHTML = `
    <div class="game-message">What group does this item belong to?</div>
    <div class="sort-layout">
      <div class="item-card"><div><div class="item-icon">${target.icon}</div><div class="item-name">${target.name}</div></div></div>
      <div class="sort-options">${['Animals','Foods','Toys','Clothes'].map(c => `<button class="sort-btn" data-category="${c}">${c}</button>`).join('')}</div>
    </div>
  `;
  $$('.sort-btn').forEach(btn => btn.onclick = () => {
    if (btn.dataset.category === target.category) { addStar(1); renderSort(); }
    else toast('Almost. Try another group.');
  });
}

function renderFirstThen() {
  ftFirst = null; ftThen = null;
  drawFirstThen();
}
function drawFirstThen() {
  const cards = ['Clean up 🧺', 'Read book 📚', 'Bubbles 🫧', 'Snack 🍓', 'Puzzle 🧩', 'Outside 🌳', 'Wash hands 🧼', 'Music 🎵'];
  $('#gameArea').innerHTML = `
    <div class="game-message">Choose one FIRST activity and one THEN activity.</div>
    <div class="first-then-board">
      <div class="ft-box"><div><strong>FIRST</strong>${ftFirst || 'Pick a first activity'}</div></div>
      <div class="ft-box"><div><strong>THEN</strong>${ftThen || 'Pick a then activity'}</div></div>
    </div>
    <div class="ft-option-grid">${cards.map(c => `<button class="choice-btn" data-ft="${c}">${c}</button>`).join('')}</div>
    <div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn primary" id="completeFT" type="button">Complete first/then</button>
      <button class="btn soft" id="resetFT" type="button">Start over</button>
    </div>
  `;
  $$('[data-ft]').forEach(btn => btn.onclick = () => {
    if (!ftFirst) ftFirst = btn.dataset.ft;
    else if (!ftThen) ftThen = btn.dataset.ft;
    else { ftFirst = btn.dataset.ft; ftThen = null; }
    drawFirstThen();
  });
  $('#completeFT').onclick = () => {
    if (ftFirst && ftThen) { addStar(2); confetti(); renderFirstThen(); }
    else toast('Pick a FIRST and a THEN.');
  };
  $('#resetFT').onclick = renderFirstThen;
}

function renderBreathing() {
  $('#gameArea').innerHTML = `
    <div class="breath-wrap" id="breathWrap">
      <div>
        <div class="bubble">Breathe</div>
        <p style="color:var(--ink-soft);font-weight:800;font-size:20px">Grow = breathe in. Shrink = breathe out.</p>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button class="btn primary" id="startBreath" type="button">Start calm breathing</button>
          <button class="btn soft" id="finishBreath" type="button">I feel calmer</button>
        </div>
      </div>
    </div>
  `;
  $('#startBreath').onclick = () => $('#breathWrap').classList.toggle('breathing');
  $('#finishBreath').onclick = () => { addStar(2); confetti(); };
}

function renderAAC() {
  aacWords = [];
  const words = ['I want','more','help','all done','yes','no','break','play','open','stop','my turn','thank you'];
  drawAAC(words);
}
function drawAAC(words) {
  $('#gameArea').innerHTML = `
    <div class="game-message">Tap words to build a message.</div>
    <div class="aac-sentence">${aacWords.length ? aacWords.join(' ') : 'Your message will appear here.'}</div>
    <div class="aac-grid">${words.map(w => `<button class="aac-btn" data-word="${w}">${w}</button>`).join('')}</div>
    <div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn primary" id="speakAAC" type="button">Play message</button>
      <button class="btn soft" id="clearAAC" type="button">Clear</button>
    </div>
  `;
  $$('.aac-btn').forEach(btn => btn.onclick = () => { aacWords.push(btn.dataset.word); drawAAC(words); });
  $('#clearAAC').onclick = () => { aacWords = []; drawAAC(words); };
  $('#speakAAC').onclick = () => {
    if (!aacWords.length) return toast('Tap a word first.');
    if ('speechSynthesis' in window) {
      const utter = new SpeechSynthesisUtterance(aacWords.join(' '));
      utter.rate = .88;
      speechSynthesis.speak(utter);
    }
    addStar(1);
  };
}

function renderRoutine() {
  routinePicked = [];
  drawRoutine();
}
function drawRoutine() {
  const correct = ['Wake up ☀️','Brush teeth 🪥','Get dressed 👕','Eat breakfast 🍌'];
  $('#gameArea').innerHTML = `
    <div class="game-message">Put the morning routine in order.</div>
    <div class="routine-list">${routinePicked.map(step => `<span class="routine-step">${step}</span>`).join('') || 'Tap cards below to build the routine.'}</div>
    <div class="routine-options">${shuffle(correct).map(step => `<button class="routine-btn" data-step="${step}">${step}</button>`).join('')}</div>
    <div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn primary" id="checkRoutine" type="button">Check order</button>
      <button class="btn soft" id="resetRoutine" type="button">Start over</button>
    </div>
  `;
  $$('.routine-btn').forEach(btn => btn.onclick = () => {
    if (!routinePicked.includes(btn.dataset.step)) routinePicked.push(btn.dataset.step);
    drawRoutine();
  });
  $('#checkRoutine').onclick = () => {
    if (routinePicked.join('|') === correct.join('|')) { addStar(3); confetti(); renderRoutine(); }
    else toast('Try again. What comes first in the morning?');
  };
  $('#resetRoutine').onclick = renderRoutine;
}

function renderSocial() {
  const scenarios = [
    {q:'A friend says, “Hi!” What can you say?', good:'Hi! Want to play?', options:['Go away','Hi! Want to play?','Take the toy','Yell']},
    {q:'You need help opening a snack. What can you say?', good:'Help please', options:['Help please','Throw it','Run away','Say nothing']},
    {q:'Someone is using the toy you want. What can you do?', good:'Ask for a turn', options:['Grab it','Ask for a turn','Push','Scream']},
    {q:'Your body feels mad. What can help?', good:'Take a calm breath', options:['Hit','Take a calm breath','Throw toys','Run into street']}
  ];
  const s = scenarios[Math.floor(Math.random()*scenarios.length)];
  $('#gameArea').innerHTML = `
    <div class="game-message">${s.q}</div>
    <div class="social-options">${shuffle(s.options).map(o => `<button class="social-btn" data-social="${o}">${o}</button>`).join('')}</div>
  `;
  $$('.social-btn').forEach(btn => btn.onclick = () => {
    if (btn.dataset.social === s.good) { addStar(2); confetti(); renderSocial(); }
    else toast('Try a safer or kinder choice.');
  });
}

function renderImitation() {
  const actions = ['Clap hands 👏','Wave bye 👋','Touch head 🙆','Stomp feet 🦶','Jump one time 🦘','Give thumbs up 👍','Make a silly face 😜','Tap shoulders 🙌'];
  const action = actions[Math.floor(Math.random()*actions.length)];
  $('#gameArea').innerHTML = `
    <div class="game-message">Imitate this action:</div>
    <div class="action-card" style="min-height:220px;font-size:52px;display:grid;place-items:center;text-align:center">${action}</div>
    <div style="margin-top:18px;display:flex;gap:10px;flex-wrap:wrap">
      <button class="btn primary" id="doneAction" type="button">I did it</button>
      <button class="btn soft" id="newAction" type="button">New card</button>
    </div>
  `;
  $('#doneAction').onclick = () => { addStar(1); renderImitation(); };
  $('#newAction').onclick = renderImitation;
}

document.addEventListener('click', e => {
  const card = e.target.closest('.game-card');
  if (card) openGame(card.dataset.game);
});
$$('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    $$('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderGrid();
  });
});
$('#closeGameBtn').addEventListener('click', closeGame);
$('#playPanel').addEventListener('click', e => { if (e.target.id === 'playPanel') closeGame(); });
$('#resetProgressBtn').addEventListener('click', () => {
  if (confirm('Reset stars and games played on this device?')) {
    progress.stars = 0; progress.played = 0; saveProgress(); toast('Progress reset.');
  }
});

saveProgress();
loadGames();
