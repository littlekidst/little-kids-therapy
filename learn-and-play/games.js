
const fallbackGames = [
  {id:"emotion-match",title:"Emotion Match",category:"Social Skills",age:"3+",ageBand:"3-5",level:"Beginner",goal:"Identify common feelings from faces and situations.",enabled:true},
  {id:"follow-directions",title:"Follow Directions",category:"Listening",age:"3+",ageBand:"3-5",level:"Beginner",goal:"Follow one-step directions using color, shape, and position words.",enabled:true},
  {id:"token-board",title:"Token Board",category:"Reinforcement",age:"2+",ageBand:"3-5",level:"Beginner",goal:"Practice completing steps and earning tokens toward a celebration.",enabled:true},
  {id:"category-sort",title:"Category Sort",category:"Language",age:"4+",ageBand:"3-5",level:"Beginner",goal:"Sort items into groups such as animals, food, toys, and clothes.",enabled:true},
  {id:"first-then",title:"First / Then Builder",category:"Routine",age:"2+",ageBand:"3-5",level:"Beginner",goal:"Practice first/then language and transitions.",enabled:true},
  {id:"breathing-bubble",title:"Calm Breathing Bubble",category:"Regulation",age:"3+",ageBand:"3-5",level:"Beginner",goal:"Use a visual breathing cue to practice calming the body.",enabled:true},
  {id:"aac-board",title:"AAC Choice Board",category:"Communication",age:"3+",ageBand:"3-5",level:"Beginner",goal:"Practice functional communication phrases like help, more, all done, and break.",enabled:true},
  {id:"routine-sequence",title:"Routine Sequence",category:"Daily Living",age:"5+",ageBand:"6-9",level:"Developing",goal:"Put daily routine steps in order.",enabled:true},
  {id:"social-choices",title:"Social Choices",category:"Social Skills",age:"5+",ageBand:"6-9",level:"Developing",goal:"Choose friendly, safe, and expected social responses.",enabled:true},
  {id:"imitation-cards",title:"Imitation Cards",category:"Motor Imitation",age:"4+",ageBand:"6-9",level:"Developing",goal:"Practice copying simple actions.",enabled:true},
  {id:"conversation-builder",title:"Conversation Builder",category:"Communication",age:"7+",ageBand:"10-13",level:"Intermediate",goal:"Practice greetings, questions, comments, and ending conversations politely.",enabled:true},
  {id:"expected-unexpected",title:"Expected / Unexpected",category:"Social Skills",age:"7+",ageBand:"10-13",level:"Intermediate",goal:"Decide whether a behavior is expected or unexpected in context.",enabled:true},
  {id:"safety-signs",title:"Safety Signs",category:"Safety",age:"6+",ageBand:"10-13",level:"Intermediate",goal:"Recognize common safety signs and what to do.",enabled:true},
  {id:"coping-match",title:"Coping Strategy Match",category:"Regulation",age:"7+",ageBand:"10-13",level:"Intermediate",goal:"Match feelings/situations with appropriate coping strategies.",enabled:true},
  {id:"time-schedule",title:"Time & Schedule",category:"Executive Function",age:"8+",ageBand:"10-13",level:"Intermediate",goal:"Read time and choose what happens next in a schedule.",enabled:true},
  {id:"hygiene-helper",title:"Hygiene Helper",category:"Daily Living",age:"7+",ageBand:"10-13",level:"Intermediate",goal:"Choose appropriate hygiene and self-care steps.",enabled:true},
  {id:"problem-solving",title:"Problem Solving Steps",category:"Executive Function",age:"8+",ageBand:"10-13",level:"Intermediate",goal:"Practice stop-think-choose problem solving.",enabled:true},
  {id:"money-store",title:"Money Store",category:"Life Skills",age:"10+",ageBand:"14-21",level:"Teen / Young Adult",goal:"Practice basic buying, budgeting, and change concepts.",enabled:true},
  {id:"perspective-detective",title:"Perspective Detective",category:"Social Skills",age:"10+",ageBand:"14-21",level:"Teen / Young Adult",goal:"Practice identifying what another person may think or feel.",enabled:true},
  {id:"goal-planner",title:"Goal Planner",category:"Executive Function",age:"10+",ageBand:"14-21",level:"Teen / Young Adult",goal:"Break a goal into smaller realistic steps.",enabled:true},
  {id:"workplace-choices",title:"Workplace Choices",category:"Vocational",age:"14+",ageBand:"14-21",level:"Teen / Young Adult",goal:"Choose appropriate workplace behaviors and responses.",enabled:true},
  {id:"text-smart",title:"Text Smart",category:"Digital Safety",age:"12+",ageBand:"14-21",level:"Teen / Young Adult",goal:"Choose safe and appropriate text message replies.",enabled:true},
  {id:"self-advocacy",title:"Self-Advocacy Coach",category:"Communication",age:"12+",ageBand:"14-21",level:"Teen / Young Adult",goal:"Practice asking for help, breaks, clarification, or accommodations.",enabled:true},
  {id:"community-safety",title:"Community Safety",category:"Safety",age:"12+",ageBand:"14-21",level:"Teen / Young Adult",goal:"Choose safe responses in stores, streets, and public places.",enabled:true},
  {id:"job-interview",title:"Job Interview Practice",category:"Vocational",age:"14+",ageBand:"14-21",level:"Teen / Young Adult",goal:"Practice professional answers to common interview situations.",enabled:true}
];

const iconMap = {
  "Emotion Match":"😊", "Follow Directions":"🔺", "Token Board":"⭐", "Category Sort":"🧺",
  "First / Then Builder":"➡️", "Calm Breathing Bubble":"🫧", "AAC Choice Board":"💬",
  "Routine Sequence":"🪥", "Social Choices":"🤝", "Imitation Cards":"👏",
  "Conversation Builder":"🗣️", "Expected / Unexpected":"✅", "Safety Signs":"🛑",
  "Coping Strategy Match":"🌈", "Time & Schedule":"🕒", "Hygiene Helper":"🧼",
  "Problem Solving Steps":"🧩", "Money Store":"💵", "Perspective Detective":"🕵️",
  "Goal Planner":"🎯", "Workplace Choices":"💼", "Text Smart":"📱", "Self-Advocacy Coach":"🙋",
  "Community Safety":"🚦", "Job Interview Practice":"👔"
};

const trialLibrary = {
  "emotion-match": {
    type:"choice",
    skill:"Identifying feelings",
    adult:"Point to facial features, model the label, then ask the learner to choose. Reinforce independent labeling and generalize to real faces, books, and cartoons.",
    trials:[
      {visual:"😊", prompt:"Look at the face. Which feeling does it show?", teach:"A happy face usually has a smile and relaxed eyes.", show:"This face is smiling, so the feeling is happy.", choices:["thinking","happy","calm","scared"], answer:"happy", correction:"Look for the smile. A smile is a clue for happy.", generalize:"Find a happy face in a book or picture."},
      {visual:"😢", prompt:"Which feeling does this face show?", teach:"A sad face may have tears or a down mouth.", show:"The tears and down mouth show sad.", choices:["sad","excited","angry","sleepy"], answer:"sad", correction:"Tears and a down mouth are clues for sad.", generalize:"Practice saying, “I feel sad” when something is hard."},
      {visual:"😡", prompt:"Which feeling does this face show?", teach:"An angry face may have tight eyebrows and a serious mouth.", show:"The tight eyebrows are a clue for angry.", choices:["silly","angry","calm","proud"], answer:"angry", correction:"Look at the eyebrows. Tight eyebrows can mean angry.", generalize:"Talk about a safe way to calm your body."},
      {visual:"😨", prompt:"Which feeling does this face show?", teach:"A scared face may have wide eyes and an open mouth.", show:"The wide eyes show scared.", choices:["scared","happy","bored","friendly"], answer:"scared", correction:"Wide eyes and open mouth are clues for scared.", generalize:"Practice asking for help when you feel scared."},
      {visual:"😌", prompt:"Which feeling does this face show?", teach:"A calm face often looks relaxed and peaceful.", show:"The relaxed face shows calm.", choices:["calm","mad","worried","loud"], answer:"calm", correction:"Look for a relaxed face. That is calm.", generalize:"Try one slow breath and say, “I am calm.”"}
    ]
  },
  "conversation-builder": {
    type:"choice",
    skill:"Conversation responses",
    adult:"Teach conversation parts: greeting, answer, question back, comment, and goodbye. Reinforce short polite responses first, then expand.",
    trials:[
      {visual:"👋", prompt:"A friend says, “Hi!” What could you say back?", teach:"A greeting answers a greeting.", show:"You can say, “Hi! How are you?”", choices:["Walk away silently.","Give me that toy.","No, I am not talking.","Hi! How are you?"], answer:"Hi! How are you?", correction:"When someone greets you, a friendly greeting back is expected.", generalize:"Practice greeting a family member."},
      {visual:"🎮", prompt:"Your friend says, “I like games.” What could you say?", teach:"A comment keeps the conversation going.", show:"You can say, “Me too. What game do you like?”", choices:["Me too. What game do you like?","Stop talking.","That is wrong.","I need to leave now."], answer:"Me too. What game do you like?", correction:"A related comment or question helps the conversation continue.", generalize:"Ask someone one question about something they like."},
      {visual:"🍕", prompt:"Someone asks, “What food do you like?”", teach:"Answer the question, then ask one back.", show:"Try: “I like pizza. What do you like?”", choices:["I like pizza. What do you like?","Because yes.","No talking.","Give me food."], answer:"I like pizza. What do you like?", correction:"Answer first, then ask a question back.", generalize:"Practice answer + question with a helper."},
      {visual:"⏰", prompt:"You need to end the conversation politely.", teach:"A polite ending tells the other person you are leaving.", show:"Try: “I have to go. See you later.”", choices:["I have to go. See you later.","Run away.","You are boring.","Stop."], answer:"I have to go. See you later.", correction:"Use a kind goodbye when ending a conversation.", generalize:"Practice saying goodbye after a short talk."},
      {visual:"🤔", prompt:"You do not understand what someone said.", teach:"Self-advocacy means asking for help or clarification.", show:"Try: “Can you say that again?”", choices:["Can you say that again?","Never mind forever.","Laugh at them.","Leave the room."], answer:"Can you say that again?", correction:"Asking them to repeat is a respectful way to get help.", generalize:"Practice asking, “Can you repeat that?”"}
    ]
  },
  "workplace-choices": {
    type:"choice",
    skill:"Vocational behavior",
    adult:"Use scenarios to teach expected work routines, asking for help, staying safe, and respectful communication. Connect every answer to real work expectations.",
    trials:[
      {visual:"🕘", prompt:"You arrive at volunteer work. What should you do first?", teach:"Work routines often start with checking in.", show:"Check in and ask what task to start.", choices:["Start using your phone.","Check in and ask what task to start.","Take items home.","Leave without telling anyone."], answer:"Check in and ask what task to start.", correction:"At work, checking in helps everyone know you are ready.", generalize:"Practice saying, “I’m here. What should I do first?”"},
      {visual:"🙋", prompt:"You do not understand a task.", teach:"Asking for clarification is responsible.", show:"Ask your supervisor to show you again.", choices:["Guess and maybe break it.","Ask your supervisor to show you again.","Hide in the bathroom.","Quit immediately."], answer:"Ask your supervisor to show you again.", correction:"It is better to ask than to guess when a task is unclear.", generalize:"Practice asking, “Can you show me again?”"},
      {visual:"📱", prompt:"Your phone buzzes while you are working.", teach:"Many jobs have phone rules.", show:"Wait for a break or ask about the phone rule.", choices:["Stop working and scroll.","Answer every message now.","Wait for a break or ask about the phone rule.","Take a selfie with customers."], answer:"Wait for a break or ask about the phone rule.", correction:"Phone use should follow workplace rules.", generalize:"Talk about when phone breaks are allowed."},
      {visual:"🧹", prompt:"You finish your assigned task early.", teach:"Ask for the next task instead of wandering.", show:"Say, “I finished. What should I do next?”", choices:["Wander around.","Hide supplies.","I finished. What should I do next?","Go home without telling anyone."], answer:"I finished. What should I do next?", correction:"When finished, ask what to do next.", generalize:"Practice a finished-task script."},
      {visual:"😤", prompt:"A coworker corrects your work.", teach:"Feedback helps improve work.", show:"Say, “Okay, thank you. I can fix it.”", choices:["Argue loudly.","Okay, thank you. I can fix it.","Throw the item.","Ignore them forever."], answer:"Okay, thank you. I can fix it.", correction:"A calm response to feedback is expected at work.", generalize:"Practice a calm feedback script."}
    ]
  },
  "aac-board": {
    type:"aac",
    skill:"Functional communication",
    adult:"Model the message first, then ask the learner to tap the words. Reinforce any functional communication attempt.",
    trials:[
      {target:["I want","play"], prompt:"Build this message: I want play", teach:"Use “I want” to request something.", show:"Tap: I want → play", words:["I want","play","help","please","more","bubbles","all done","yes","no","break","my turn","thank you"], generalize:"Practice requesting a toy or activity."},
      {target:["I want","more"], prompt:"Build this message: I want more", teach:"Use “more” when you want another turn or more of something.", show:"Tap: I want → more", words:["I want","more","help","play","all done","please","break","yes","no","bubbles"], generalize:"Practice asking for more snack, bubbles, or turns."},
      {target:["help","please"], prompt:"Build this message: help please", teach:"Use “help” when something is hard.", show:"Tap: help → please", words:["help","please","I want","more","all done","my turn","yes","no","play"], generalize:"Pause during a hard task and practice asking for help."},
      {target:["all done"], prompt:"Build this message: all done", teach:"Use “all done” to finish or stop.", show:"Tap: all done", words:["all done","more","I want","play","help","yes","no","please"], generalize:"Practice saying/tapping all done at the end of an activity."}
    ]
  },
  "follow-directions": {
    type:"shapes",
    skill:"Receptive language",
    adult:"Teach one attribute at a time, then combine color + shape. If wrong, label the selected object and teach the difference.",
    trials:[
      {color:"red", shape:"triangle", prompt:"Touch the red triangle.", teach:"A triangle has 3 sides and 3 corners.", show:"Look for the red shape with 3 sides.", generalize:"Find a triangle in the room."},
      {color:"blue", shape:"square", prompt:"Touch the blue square.", teach:"A square has 4 equal sides and 4 corners.", show:"Look for the blue shape with 4 sides.", generalize:"Find a square object."},
      {color:"green", shape:"circle", prompt:"Touch the green circle.", teach:"A circle is round with no corners.", show:"Look for the green round shape.", generalize:"Find something round."},
      {color:"yellow", shape:"star", prompt:"Touch the yellow star.", teach:"A star has points.", show:"Look for the yellow shape with points.", generalize:"Point to a star picture."},
      {color:"purple", shape:"rectangle", prompt:"Touch the purple rectangle.", teach:"A rectangle has 4 sides. Two sides are longer.", show:"Look for the purple long box shape.", generalize:"Find a rectangle like a door or phone."}
    ]
  },
  "category-sort": {
    type:"choice",
    skill:"Categorizing",
    adult:"Teach category labels, then ask where an item belongs. Reinforce language like “apple is a food.”",
    trials:[
      {visual:"🍎", prompt:"What group does apple belong to?", teach:"Foods are things we eat.", show:"Apple goes with food.", choices:["animals","food","clothes","vehicles"], answer:"food", correction:"Apple is something we eat, so it is food.", generalize:"Name three foods."},
      {visual:"🐶", prompt:"What group does dog belong to?", teach:"Animals are living things that can move and need care.", show:"Dog goes with animals.", choices:["food","animals","toys","clothes"], answer:"animals", correction:"A dog is an animal.", generalize:"Name three animals."},
      {visual:"👕", prompt:"What group does shirt belong to?", teach:"Clothes are things we wear.", show:"Shirt goes with clothes.", choices:["vehicles","food","clothes","animals"], answer:"clothes", correction:"A shirt is something we wear.", generalize:"Point to something you wear."},
      {visual:"🚗", prompt:"What group does car belong to?", teach:"Vehicles help people move from place to place.", show:"Car goes with vehicles.", choices:["vehicles","clothes","food","toys"], answer:"vehicles", correction:"A car is a vehicle.", generalize:"Name two vehicles."},
      {visual:"🧸", prompt:"What group does teddy bear belong to?", teach:"Toys are things we play with.", show:"Teddy bear goes with toys.", choices:["food","toys","vehicles","clothes"], answer:"toys", correction:"A teddy bear is a toy.", generalize:"Find a toy near you."}
    ]
  },
  "first-then": {
    type:"sequence",
    skill:"Transitions",
    adult:"Use First/Then language to support transitions. Keep the first task brief and the then activity motivating.",
    trials:[
      {prompt:"Put this in order: clean up, then bubbles.", teach:"First is what happens now. Then is what happens after.", show:"First clean up → Then bubbles.", steps:["clean up","bubbles"], answer:["clean up","bubbles"], generalize:"Practice first clean up, then play."},
      {prompt:"Put this in order: wash hands, then snack.", teach:"Some routines have a safe order.", show:"First wash hands → Then snack.", steps:["snack","wash hands"], answer:["wash hands","snack"], generalize:"Practice before snack time."},
      {prompt:"Put this in order: shoes on, then go outside.", teach:"Shoes come before going outside.", show:"First shoes on → Then go outside.", steps:["go outside","shoes on"], answer:["shoes on","go outside"], generalize:"Use first/then before leaving home."}
    ]
  },
  "routine-sequence": {
    type:"sequence",
    skill:"Sequencing routines",
    adult:"Task analysis breaks routines into teachable steps. Practice with pictures/words, then real life.",
    trials:[
      {prompt:"Put the morning routine in order.", teach:"Routines have steps. Start with waking up.", show:"Wake up → Brush teeth → Get dressed → Eat breakfast", steps:["Eat breakfast","Wake up","Get dressed","Brush teeth"], answer:["Wake up","Brush teeth","Get dressed","Eat breakfast"], generalize:"Practice checking off morning steps."},
      {prompt:"Put handwashing steps in order.", teach:"Washing hands has a sequence.", show:"Water → Soap → Scrub → Rinse → Dry", steps:["Dry","Soap","Water","Rinse","Scrub"], answer:["Water","Soap","Scrub","Rinse","Dry"], generalize:"Practice at the sink."},
      {prompt:"Put bedtime steps in order.", teach:"A bedtime routine helps the body get ready to sleep.", show:"Pajamas → Brush teeth → Story → Lights off", steps:["Story","Lights off","Pajamas","Brush teeth"], answer:["Pajamas","Brush teeth","Story","Lights off"], generalize:"Make a bedtime visual schedule."}
    ]
  },
  "token-board": {
    type:"token",
    skill:"Token reinforcement",
    adult:"Use token boards to make reinforcement visual. Keep the task expectation clear and deliver reinforcement when the board is full.",
    trials:[
      {prompt:"Earn 5 stars. Tap each task after you finish it.", teach:"A token board shows progress toward a reward.", show:"Do a step → earn a star → fill the board.", tasks:["Look at the teacher","Try the question","Use kind hands","Ask for help","Finish strong"], generalize:"Use a 5-star board for a real routine."}
    ]
  },
  "breathing-bubble": {
    type:"breathing",
    skill:"Calming strategy",
    adult:"Teach breathing when the learner is calm first. Practice often so it is available during stress.",
    trials:[
      {prompt:"Breathe with the bubble.", teach:"Slow breathing can help your body feel calm.", show:"Breathe in as the bubble grows. Breathe out as it gets smaller.", cycles:4, generalize:"Practice one slow breath before a hard task."}
    ]
  },
  "imitation-cards": {
    type:"imitation",
    skill:"Motor imitation",
    adult:"Model the movement, wait, then reinforce attempts. Use physical prompting only if appropriate and consented by caregiver/clinical team.",
    trials:[
      {visual:"👏", prompt:"Copy this: clap hands.", teach:"Watch first, then do the same action.", show:"Clap, clap.", action:"clap hands", generalize:"Practice copying 3 actions."},
      {visual:"👋", prompt:"Copy this: wave bye.", teach:"Imitation means doing what someone shows you.", show:"Wave your hand.", action:"wave bye", generalize:"Wave to a family member."},
      {visual:"🙆", prompt:"Copy this: hands up.", teach:"Look at the body position.", show:"Raise both hands.", action:"hands up", generalize:"Play Simon Says."}
    ]
  }
};

// Add choice-game libraries efficiently.
const extraChoiceData = {
  "social-choices": {
    skill:"Expected social responses", adult:"Teach what the other person may feel and what response is safe/kind.",
    trials:[
      ["A peer asks to play with you.","Sharing or taking turns can be friendly.","Say, “Yes, we can take turns.”",["Push them away.","Yes, we can take turns.","Ignore forever.","Hide the toy."],"Yes, we can take turns.","A kind answer helps play continue."],
      ["You accidentally bump someone.","Repair means noticing and apologizing.","Say, “Sorry, are you okay?”",["Laugh.","Sorry, are you okay?","Blame them.","Run away."],"Sorry, are you okay?","Apologizing helps repair an accident."],
      ["Someone is talking and you want a turn.","Wait, then ask for a turn.","Say, “Can I have a turn to talk?”",["Interrupt loudly.","Can I have a turn to talk?","Yell stop.","Leave angry."],"Can I have a turn to talk?","Asking for a turn is expected."],
      ["You lose a game.","Losing can feel hard. A calm response is expected.","Say, “Good game. Can we play again?”",["Throw pieces.","Good game. Can we play again?","Call names.","Quit all games."],"Good game. Can we play again?","A calm response keeps games fun."],
      ["Someone says no.","No is an answer. You can ask for another choice.","Say, “Okay. What can I do instead?”",["Scream.","Okay. What can I do instead?","Grab it.","Keep asking 20 times."],"Okay. What can I do instead?","Accepting no and asking for options is flexible."]
    ]
  },
  "expected-unexpected": {
    skill:"Social expectations", adult:"Discuss context: expected behaviors make others feel comfortable; unexpected behaviors may confuse or bother others.",
    trials:[
      ["At the library, someone whispers.","Libraries are quiet places.","Expected",["Expected","Unexpected"],"Expected","Whispering at the library matches the situation."],
      ["At the movies, someone talks loudly on the phone.","A theater needs quiet so people can hear.","Unexpected",["Expected","Unexpected"],"Unexpected","Loud phone talking can bother others."],
      ["In class, a student raises a hand before speaking.","Raising a hand helps group learning.","Expected",["Expected","Unexpected"],"Expected","It helps the teacher know you want to talk."],
      ["At work, someone takes supplies home without asking.","Work supplies belong at work unless permission is given.","Unexpected",["Expected","Unexpected"],"Unexpected","Taking items without permission is not okay."],
      ["At the store, someone waits in line.","Lines help everyone take turns.","Expected",["Expected","Unexpected"],"Expected","Waiting in line is expected."],
    ]
  },
  "safety-signs": {
    skill:"Safety signs", adult:"Teach sign meaning and the action connected to it. Generalize using signs in the community.",
    trials:[
      ["What does a STOP sign mean?","Stop means pause and check for safety.","Stop and look.",["Run fast.","Stop and look.","Ignore it.","Close eyes."],"Stop and look.","A stop sign tells us to stop."],
      ["What should you do at a WALK signal?","A walk signal means it may be safe to cross, but still look.","Look both ways and cross carefully.",["Look both ways and cross carefully.","Run without looking.","Sit down.","Call a friend."],"Look both ways and cross carefully.","Always look before crossing."],
      ["What does Wet Floor mean?","A wet floor can be slippery.","Walk carefully around it.",["Slide on it.","Walk carefully around it.","Jump on it.","Touch it."],"Walk carefully around it.","Wet floors can cause falls."],
      ["You see an Exit sign in a building.","Exit signs show a way out.","It shows a way out.",["It means bathroom.","It shows a way out.","It means snack.","It means play."],"It shows a way out.","Exit signs help during emergencies."],
      ["A sign says Employees Only.","Some areas are only for workers.","Do not enter unless invited by staff.",["Go inside.","Do not enter unless invited by staff.","Hide there.","Take supplies."],"Do not enter unless invited by staff.","Respect restricted areas."]
    ]
  },
  "coping-match": {
    skill:"Coping strategies", adult:"Match coping tools to body signals. Practice when calm, not only during escalation.",
    trials:[
      ["You feel frustrated because work is hard.","A break can help your body reset.","Ask for a short break.",["Throw paper.","Ask for a short break.","Quit forever.","Yell loudly."],"Ask for a short break.","A short break is a safe coping strategy."],
      ["The room is too loud.","You can ask for help with sensory needs.","Use headphones or ask for a quieter space.",["Scream louder.","Use headphones or ask for a quieter space.","Run into street.","Hit someone."],"Use headphones or ask for a quieter space.","That helps reduce noise safely."],
      ["You feel nervous before a new activity.","Deep breathing can calm the body.","Take 3 slow breaths.",["Take 3 slow breaths.","Hide forever.","Say mean words.","Rip materials."],"Take 3 slow breaths.","Breathing is a safe calming tool."],
      ["You are angry after losing.","Use words and a calm body.","Say, “I need a minute.”",["Throw the game.","Say, “I need a minute.”","Call someone names.","Break pieces."],"Say, “I need a minute.”","Asking for a minute is self-control."],
      ["You feel sad.","Talking to a trusted adult can help.","Tell a trusted adult.",["Keep it secret always.","Tell a trusted adult.","Push others.","Run away."],"Tell a trusted adult.","Trusted adults can help."]
    ]
  },
  "time-schedule": {
    skill:"Schedules and time", adult:"Use visual schedules and teach next/then language.",
    trials:[
      ["Schedule: 8:00 breakfast, 8:30 brush teeth. It is 8:30. What is next?","Look at the time and match the schedule.","Brush teeth",["Breakfast","Brush teeth","Go to bed","Lunch"],"Brush teeth","The schedule says brush teeth at 8:30."],
      ["School ends at 3:00. It is 2:55.","Five minutes before 3:00 means school is almost over.","Get ready to pack up",["Start a new movie","Get ready to pack up","Eat dinner","Go to sleep"],"Get ready to pack up","Pack-up time comes near the end."],
      ["Work starts at 9:00. You arrive at 8:55.","Arriving early gives time to check in.","Check in and get ready",["Leave","Check in and get ready","Go shopping","Take a nap"],"Check in and get ready","Arriving a little early is responsible."],
      ["You have 10 minutes before therapy starts.","Use waiting time calmly.","Choose a quiet waiting activity",["Run away","Choose a quiet waiting activity","Yell","Throw toys"],"Choose a quiet waiting activity","A quiet activity helps wait."],
      ["The timer rings after break.","A timer can show when break is finished.","Return to the task",["Ask what is next and return","Ignore it","Hide","Break the timer"],"Ask what is next and return","Timers help transitions."]
    ]
  },
  "hygiene-helper": {
    skill:"Hygiene routines", adult:"Use task analysis for hygiene skills. Teach why each step matters.",
    trials:[
      ["Before eating, what should you do?","Hands can have germs. Washing helps keep us healthy.","Wash hands",["Wash hands","Touch shoes","Skip it","Eat off floor"],"Wash hands","Washing hands before eating is healthy."],
      ["After using the bathroom, what should you do?","Bathroom routines include handwashing.","Flush and wash hands",["Run away","Flush and wash hands","Touch food","Skip washing"],"Flush and wash hands","This is part of bathroom hygiene."],
      ["Your teeth feel dirty at bedtime.","Brushing teeth keeps the mouth healthy.","Brush teeth",["Brush teeth","Eat candy only","Hide toothbrush","Use soap"],"Brush teeth","Brush teeth as part of bedtime routine."],
      ["Your clothes are dirty after playing outside.","Changing can help you stay clean.","Change into clean clothes",["Wear dirty clothes all week","Change into clean clothes","Put them in fridge","Throw them outside"],"Change into clean clothes","Clean clothes are part of hygiene."],
      ["You cough into your hands.","Germs can spread from hands.","Wash or sanitize hands",["Touch everyone","Wash or sanitize hands","Keep playing with food","Rub eyes"],"Wash or sanitize hands","Cleaning hands helps reduce germs."]
    ]
  },
  "problem-solving": {
    skill:"Problem solving", adult:"Teach Stop → Think → Choose → Check. Model the steps out loud.",
    trials:[
      ["Your pencil breaks during work.","Stop, think, choose a helpful action.","Ask for a new pencil or sharpen it",["Scream","Ask for a new pencil or sharpen it","Throw it","Quit forever"],"Ask for a new pencil or sharpen it","That solves the problem safely."],
      ["You cannot find your backpack.","Think where it was last and ask for help.","Look calmly and ask for help",["Cry only","Look calmly and ask for help","Run outside","Blame everyone"],"Look calmly and ask for help","Calm searching and asking can solve it."],
      ["The game you want is not available.","Flexible thinking means choosing another option.","Pick another activity while waiting",["Break the game","Pick another activity while waiting","Yell until you get it","Grab it"],"Pick another activity while waiting","That is flexible and safe."],
      ["You made a mistake on a worksheet.","Mistakes can be fixed.","Erase or ask for help",["Rip the paper","Erase or ask for help","Hide it","Say I’m bad"],"Erase or ask for help","A mistake is something to fix, not fear."],
      ["You and a friend both want the same toy.","Problem solving can include taking turns.","Use a timer and take turns",["Push friend","Use a timer and take turns","Take it and run","Never play again"],"Use a timer and take turns","Taking turns can solve sharing problems."]
    ]
  },
  "money-store": {
    skill:"Money skills", adult:"Use real coins/bills or visuals. Keep amounts simple and practical.",
    trials:[
      ["You have $5. A snack costs $3. Can you buy it?","If you have more money than the price, you can buy it.","Yes, and you have $2 left.",["No","Yes, and you have $2 left.","You need $10 more.","You get $8 change."],"Yes, and you have $2 left.","5 minus 3 leaves 2."],
      ["You have $10. A shirt costs $12.","If the price is more than your money, you need more money.","No, you need $2 more.",["Yes","No, you need $2 more.","You have $22.","Buy two."],"No, you need $2 more.","12 is 2 more than 10."],
      ["You buy water for $2 with a $5 bill.","Change is money back.","You get $3 back.",["$1","$2","$3","$7"],"$3","5 minus 2 equals 3."],
      ["You have $20 and need to save $10 for lunch.","Budget means keeping enough for what you need.","Spend no more than $10 now.",["Spend all $20","Spend no more than $10 now","Give it away","Buy everything"],"Spend no more than $10 now","Saving for lunch is part of budgeting."],
      ["A cashier gives too much change.","Honesty is expected.","Tell the cashier politely.",["Keep it quietly","Tell the cashier politely","Run","Laugh"],"Tell the cashier politely.","Honesty is important in stores."]
    ]
  },
  "perspective-detective": {
    skill:"Perspective taking", adult:"Ask: What happened? What might the person think? What might they feel? What could you do?",
    trials:[
      ["You step on someone’s foot by accident.","They may feel hurt or surprised.","They might feel hurt.",["They might feel hurt.","They are happy you did it.","They do not have feelings.","They want candy."],"They might feel hurt.","Accidents can still hurt someone."],
      ["A friend is quiet after losing a game.","They may feel disappointed.","They might feel disappointed.",["They might feel disappointed.","They are definitely sleeping.","They hate everyone.","They won the game."],"They might feel disappointed.","Losing can feel disappointing."],
      ["Your teacher smiles after you finish work.","They may feel proud or pleased.","They might feel proud.",["They might feel proud.","They are angry.","They are lost.","They are sleepy."],"They might feel proud.","A smile after success can mean proud."],
      ["A coworker looks confused when you explain.","They may not understand yet.","They may need you to explain again.",["They may need you to explain again.","They are being mean.","They are done forever.","They want you to leave."],"They may need you to explain again.","Confused faces can mean they need clarification."],
      ["Your sibling covers their ears when the TV is loud.","They may think the sound is too loud.","They may want the volume lower.",["They may want the volume lower.","They want louder sound.","They are dancing.","They want a snack."],"They may want the volume lower.","Covering ears is a clue about sound sensitivity."]
    ]
  },
  "goal-planner": {
    skill:"Goal planning", adult:"Break goals into small observable steps. Reinforce checking off each step.",
    trials:[
      ["Goal: Finish homework.","A good plan starts with materials and one small step.","Get materials, do one page, check work",["Watch TV only","Get materials, do one page, check work","Throw backpack","Wait forever"],"Get materials, do one page, check work","Small steps make goals easier."],
      ["Goal: Learn a new job task.","Watch, ask, practice, get feedback.","Watch, ask questions, practice",["Pretend you know","Watch, ask questions, practice","Ignore instructions","Quit"],"Watch, ask questions, practice","This is a learning plan."],
      ["Goal: Keep room clean.","Daily small steps help.","Put laundry away and clear floor",["Do nothing for a month","Put laundry away and clear floor","Hide everything under bed","Throw things"],"Put laundry away and clear floor","Cleaning is easier in small steps."],
      ["Goal: Make a friend.","Friendly actions build connection.","Greet, ask a question, share interest",["Demand friendship","Greet, ask a question, share interest","Never talk","Take their things"],"Greet, ask a question, share interest","Friendship grows with kind communication."],
      ["Goal: Be on time.","Planning helps punctuality.","Set reminder and leave early",["Leave late","Set reminder and leave early","Ignore clock","Hope it works"],"Set reminder and leave early","Reminders and leaving early help on-time arrival."]
    ]
  },
  "text-smart": {
    skill:"Digital safety", adult:"Teach rules for safe texting: respectful, private info protected, ask adult when unsure.",
    trials:[
      ["A classmate texts, “Send me your address.”","Private information should be protected.","Do not send it. Ask a trusted adult.",["Send it","Do not send it. Ask a trusted adult.","Post it online","Send a photo too"],"Do not send it. Ask a trusted adult.","Addresses are private information."],
      ["A friend texts, “Are you coming?”","Answer clearly and politely.","Yes, I will be there at 3.",["maybe idk stop","Yes, I will be there at 3.","You are annoying","No response forever"],"Yes, I will be there at 3.","Clear texts help communication."],
      ["Someone sends an unkind message.","Pause before responding.","Do not reply angry. Tell a trusted adult if needed.",["Send insults","Do not reply angry. Tell a trusted adult if needed.","Share it with everyone","Threaten them"],"Do not reply angry. Tell a trusted adult if needed.","Pause and get help for unsafe messages."],
      ["You get a link from someone you do not know.","Unknown links can be unsafe.","Do not click. Ask an adult.",["Click fast","Do not click. Ask an adult.","Send password","Download everything"],"Do not click. Ask an adult.","Unknown links may be unsafe."],
      ["You need to cancel plans politely.","A respectful text gives clear info.","Sorry, I can’t come today. Can we reschedule?",["I hate this.","Sorry, I can’t come today. Can we reschedule?","Ghost them forever","Send random emojis"],"Sorry, I can’t come today. Can we reschedule?","Polite texts help relationships."]
    ]
  },
  "self-advocacy": {
    skill:"Self-advocacy", adult:"Teach scripts for help, breaks, clarification, sensory needs, and choice-making.",
    trials:[
      ["The assignment is confusing.","Ask for clarification.","Can you explain that again?",["I quit.","Can you explain that again?","This is dumb.","Hide it."],"Can you explain that again?","That is a respectful help request."],
      ["The room is too bright.","Ask for a reasonable support.","Can I move to a less bright spot?",["Break lights","Can I move to a less bright spot?","Scream","Leave building"],"Can I move to a less bright spot?","This communicates a sensory need."],
      ["You need a short break.","Use a clear break request.","Can I take a 2-minute break?",["Run away","Can I take a 2-minute break?","Throw items","Say nothing"],"Can I take a 2-minute break?","Specific break requests are helpful."],
      ["You do not want help touching your body.","Use a consent/safety statement.","Please tell me with words, not hands.",["Hit","Please tell me with words, not hands.","Do nothing","Cry quietly"],"Please tell me with words, not hands.","This expresses a boundary."],
      ["You need more time to answer.","Ask for time.","Can I have a minute to think?",["Can I have a minute to think?","Never talk","Get angry","Walk away"],"Can I have a minute to think?","Asking for thinking time is self-advocacy."]
    ]
  },
  "community-safety": {
    skill:"Community safety", adult:"Teach safe behaviors with role-play and real-world visuals.",
    trials:[
      ["A stranger asks you to get in their car.","Safety rule: do not go with unknown people.","Say no and go to a trusted adult.",["Get in","Say no and go to a trusted adult.","Give your address","Follow them"],"Say no and go to a trusted adult.","Trusted adults help keep you safe."],
      ["You are lost in a store.","Find a safe helper.","Ask an employee or security for help.",["Leave the store alone","Ask an employee or security for help.","Hide","Call random numbers"],"Ask an employee or security for help.","Store employees can help."],
      ["You need to cross the street.","Use street safety steps.","Stop, look both ways, use crosswalk.",["Run across","Stop, look both ways, use crosswalk.","Close eyes","Follow anyone"],"Stop, look both ways, use crosswalk.","Crosswalk safety matters."],
      ["You see fire or smoke.","Emergency safety means leave and get help.","Move away and tell an adult/call emergency help.",["Touch it","Move away and tell an adult/call emergency help.","Take photos up close","Hide"],"Move away and tell an adult/call emergency help.","Fire and smoke are danger signs."],
      ["Someone online asks for a private picture.","Private pictures should not be sent.","Do not send. Tell a trusted adult.",["Send it","Do not send. Tell a trusted adult.","Ask for money","Keep secret"],"Do not send. Tell a trusted adult.","Online safety protects privacy."]
    ]
  },
  "job-interview": {
    skill:"Interview practice", adult:"Practice short, positive answers with role-play. Teach eye contact alternatives and calm body if appropriate.",
    trials:[
      ["Interviewer asks, “Tell me about yourself.”","A good answer is brief and job-related.","I am reliable and like helping with tasks.",["I hate work.","I am reliable and like helping with tasks.","Nothing.","Give me money."],"I am reliable and like helping with tasks.","This answer is positive and job-related."],
      ["They ask, “Why do you want this job?”","Connect your interest to the work.","I want to learn and be part of the team.",["Because my mom said so only.","I want to learn and be part of the team.","I don’t know.","I need snacks."],"I want to learn and be part of the team.","This sounds respectful and motivated."],
      ["They ask about availability.","Give clear days/times.","I am available weekdays after 3.",["Whenever maybe.","I am available weekdays after 3.","Never.","Look at my phone."],"I am available weekdays after 3.","Clear availability helps scheduling."],
      ["You do not understand a question.","Ask politely.","Could you please repeat the question?",["What? Bad question.","Could you please repeat the question?","Ignore them.","Leave."],"Could you please repeat the question?","That is a polite clarification request."],
      ["The interview ends.","Use a polite closing.","Thank you for meeting with me.",["Bye I guess.","Thank you for meeting with me.","Give me the job now.","Walk out silently."],"Thank you for meeting with me.","A thank-you is professional."],
    ]
  }
};

for (const [id, data] of Object.entries(extraChoiceData)) {
  trialLibrary[id] = {
    type:"choice",
    skill:data.skill,
    adult:data.adult,
    trials:data.trials.map((t, i) => ({
      visual: ["💬","🌟","🧠","✅","🙋"][i % 5],
      prompt:t[0], teach:t[1], show:t[2], choices:t[3], answer:t[4], correction:t[5],
      generalize:"Practice this skill in a real-life situation with a trusted adult."
    }))
  };
}

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const gameGrid = $("#gameGrid");
const gameModal = $("#gameModal");
const gameArea = $("#gameArea");
let allGames = [];
let activeAge = "ALL";
let activeIsland = "ALL";
let settings = loadJSON("learnPlayV17Settings", { bigText:false, reduceMotion:false, sound:false });
let progress = loadJSON("learnPlayV17Progress", {});
let rewardWallet = loadJSON("learnPlayRewardWalletV18", { spent:0, purchases:[], lastReward:null });
let sessionLog = loadJSON("learnPlaySessionLogV18", {});
let current = null;
let dailyProfile = loadJSON("learnPlayDailyCheckinV16", { nickname:"", avatar:"😊", ageBand:"ALL", lastCheckin:"", streak:0 });

function loadJSON(key, fallback){ try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } }
function saveJSON(key, value){ localStorage.setItem(key, JSON.stringify(value)); }

function todayKey(){ return new Date().toISOString().slice(0,10); }
function yesterdayKey(){ const d = new Date(); d.setDate(d.getDate()-1); return d.toISOString().slice(0,10); }
function checkedInToday(){ return dailyProfile && dailyProfile.lastCheckin === todayKey(); }
function safeNickname(){ return (dailyProfile.nickname || "Learner").slice(0, 18); }
function renderDailyStatus(){
  const greet = $("#dailyGreeting");
  const text = $("#dailyStatusText");
  const checked = checkedInToday();
  if(greet){
    greet.innerHTML = checked
      ? `<span class="daily-avatar">${escapeHtml(dailyProfile.avatar || "😊")}</span> Hi, ${escapeHtml(safeNickname())}!`
      : `Daily check-in needed`;
  }
  if(text){
    text.textContent = checked
      ? `Day streak: ${dailyProfile.streak || 1}. Learning level: ${dailyProfile.ageBand || "ALL"}.`
      : `Check in to start today’s practice. Progress stays only on this browser/device.`;
  }
}
function openDailyCheckin(force=false){
  const dialog = $("#dailyCheckinDialog");
  if(!dialog) return;
  const nick = $("#dailyNickname");
  const age = $("#dailyAgeBand");
  if(nick) nick.value = dailyProfile.nickname || "";
  if(age) age.value = dailyProfile.ageBand || activeAge || "ALL";
  $$(".avatar-choice").forEach(btn => btn.classList.toggle("active", btn.dataset.avatar === (dailyProfile.avatar || "😊")));
  dialog.dataset.force = force ? "1" : "0";
  if(!dialog.open) dialog.showModal();
}
function completeDailyCheckin(){
  const nickRaw = ($("#dailyNickname")?.value || "Learner").trim();
  const nickname = nickRaw || "Learner";
  const avatar = $(".avatar-choice.active")?.dataset.avatar || dailyProfile.avatar || "😊";
  const ageBand = $("#dailyAgeBand")?.value || "ALL";
  const last = dailyProfile.lastCheckin;
  let streak = 1;
  if(last === todayKey()) streak = dailyProfile.streak || 1;
  else if(last === yesterdayKey()) streak = (dailyProfile.streak || 0) + 1;
  dailyProfile = { nickname, avatar, ageBand, lastCheckin: todayKey(), streak };
  saveJSON("learnPlayDailyCheckinV16", dailyProfile);
  activeAge = ageBand;
  $$(".age-tab").forEach(btn => btn.classList.toggle("active", (btn.dataset.age || "ALL") === activeAge));
  renderDailyStatus();
  renderGameGrid();
  $("#dailyCheckinDialog")?.close();
  setToast(`Welcome back, ${nickname}! Day ${streak} streak.`);
}
function requireDailyCheckin(){
  renderDailyStatus();
  if(checkedInToday()){
    if(dailyProfile.ageBand && dailyProfile.ageBand !== activeAge){
      activeAge = dailyProfile.ageBand;
      $$(".age-tab").forEach(btn => btn.classList.toggle("active", (btn.dataset.age || "ALL") === activeAge));
    }
    return;
  }
  setTimeout(()=>openDailyCheckin(true), 350);
}

function escapeHtml(value){ return String(value ?? "").replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch])); }
function shuffle(arr){ const a=[...arr]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function normalize(value){ return String(value ?? "").trim().toLowerCase(); }
function totalStars(){ return Object.values(progress).reduce((sum, item) => sum + (Number(item.stars)||0), 0); }
function spentStars(){ return Number(rewardWallet.spent || 0); }
function availableStars(){ return Math.max(0, totalStars() - spentStars()); }
function setToast(message){ const el=$("#toast"); if(!el) return; el.textContent=message; el.classList.add("show"); clearTimeout(setToast.timer); setToast.timer=setTimeout(()=>el.classList.remove("show"),2200); }
function playTone(kind="correct"){
  if(!settings.sound) return;
  try{
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = kind === "correct" ? 660 : 220;
    gain.gain.value = 0.06;
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(); setTimeout(()=>{osc.stop(); ctx.close();}, kind === "correct" ? 130 : 220);
  }catch{}
}
function speak(text){
  if(!("speechSynthesis" in window)) { setToast("Read-aloud is not supported on this browser."); return; }
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.rate = 0.9;
  utter.pitch = 1.05;
  window.speechSynthesis.speak(utter);
}
function applySettings(){
  document.body.classList.toggle("big-text", !!settings.bigText);
  document.body.classList.toggle("reduce-motion", !!settings.reduceMotion);
  $("#bigTextToggle") && ($("#bigTextToggle").checked = !!settings.bigText);
  $("#reduceMotionToggle") && ($("#reduceMotionToggle").checked = !!settings.reduceMotion);
  $("#soundToggle") && ($("#soundToggle").checked = !!settings.sound);
  $("#totalStars") && ($("#totalStars").textContent = availableStars());
  $("#lifetimeStarsMini") && ($("#lifetimeStarsMini").textContent = totalStars());
  $("#spentStarsMini") && ($("#spentStarsMini").textContent = spentStars());
  renderDailyStatus();
  renderRewardStore();
}
function gameIcon(game){ return iconMap[game.title] || "🎮"; }
function getGameData(id){
  const data = trialLibrary[id];
  if(data) return data;
  return {
    type:"choice",
    skill:"Practice",
    adult:"Use model, prompt, wait, reinforce, and generalize to daily routines.",
    trials:[
      {visual:"🎯", prompt:"Choose the best answer.", teach:"Look for the safe, kind, or helpful choice.", show:"Pick the answer that solves the problem.", choices:["Safe choice","Unsafe choice","Silly choice","No choice"], answer:"Safe choice", correction:"The best answer is the safe and helpful choice.", generalize:"Practice with a real example."}
    ]
  };
}


const rewardCatalog = [
  {id:"smile-badge", title:"Smiley Skill Badge", cost:5, icon:"😊", color:"rgba(255,216,107,.32)", type:"badge", desc:"A cheerful printable badge for finishing a learning session."},
  {id:"coloring-page", title:"Calm Coloring Page", cost:8, icon:"🎨", color:"rgba(132,94,247,.20)", type:"coloring", desc:"A simple printable coloring reward with stars and calm shapes."},
  {id:"session-certificate", title:"Session Certificate", cost:10, icon:"🏆", color:"rgba(255,159,67,.24)", type:"certificate", desc:"A printable Learn & Play completion certificate."},
  {id:"token-board", title:"5-Star Token Board", cost:12, icon:"⭐", color:"rgba(53,194,211,.22)", type:"token", desc:"A printable token board families can use after the session."},
  {id:"family-game-coupon", title:"Family Game Coupon", cost:15, icon:"🎲", color:"rgba(255,111,105,.18)", type:"coupon", desc:"A pretend coupon for choosing a family game or turn-taking activity."},
  {id:"super-learner", title:"Super Learner Certificate", cost:20, icon:"🚀", color:"rgba(99,217,138,.20)", type:"certificate", desc:"A bigger printable certificate for a strong learning day."},
  {id:"coping-card", title:"Coping Strategy Card", cost:9, icon:"🫧", color:"rgba(77,171,247,.18)", type:"card", desc:"A printable calm-body reminder card."},
  {id:"job-skills-badge", title:"Job Skills Badge", cost:14, icon:"💼", color:"rgba(19,42,78,.14)", type:"badge", desc:"A printable badge for older learners practicing work readiness."}
];
function todaysSession(){
  const key = todayKey();
  if(!sessionLog[key]) sessionLog[key] = {date:key, lessons:[], stars:0};
  return sessionLog[key];
}
function recordSessionCompletion(game, earned){
  const session = todaysSession();
  session.stars = Number(session.stars || 0) + Number(earned || 0);
  session.lessons.push({title:game.title, category:game.category, stars:earned, at:new Date().toISOString()});
  saveJSON("learnPlaySessionLogV18", sessionLog);
}
function rewardById(id){ return rewardCatalog.find(r => r.id === id); }
function renderRewardStore(){
  const avail = availableStars();
  const lifetime = totalStars();
  const spent = spentStars();
  ["availableStarsBig"].forEach(id => { const el = document.getElementById(id); if(el) el.textContent = avail; });
  ["lifetimeStarsBig"].forEach(id => { const el = document.getElementById(id); if(el) el.textContent = lifetime; });
  ["spentStarsBig"].forEach(id => { const el = document.getElementById(id); if(el) el.textContent = spent; });
  const grid = document.getElementById("rewardGrid");
  if(grid){
    grid.innerHTML = rewardCatalog.map(reward => {
      const canBuy = avail >= reward.cost;
      return `<article class="reward-card" style="--reward-glow:${escapeHtml(reward.color)}">
        <div class="reward-icon" aria-hidden="true">${escapeHtml(reward.icon)}</div>
        <h4>${escapeHtml(reward.title)}</h4>
        <p>${escapeHtml(reward.desc)}</p>
        <span class="reward-price">⭐ ${reward.cost} stars</span>
        <div class="reward-actions">
          <button class="buy-reward" data-reward-id="${escapeHtml(reward.id)}" type="button" ${canBuy ? "" : "disabled"}>${canBuy ? "Buy printable" : "Need more stars"}</button>
          <button class="preview-reward" data-preview-reward="${escapeHtml(reward.id)}" type="button">Preview</button>
        </div>
      </article>`;
    }).join("");
  }
  renderPurchasedRewards();
  renderSessionSummary();
}
function renderPurchasedRewards(){
  const box = document.getElementById("purchasedRewards");
  if(!box) return;
  const purchases = [...(rewardWallet.purchases || [])].reverse();
  if(!purchases.length){
    box.innerHTML = `<div class="empty-purchases">No printable rewards yet. Finish lessons, earn stars, then buy a reward.</div>`;
    return;
  }
  box.innerHTML = purchases.slice(0,12).map(p => {
    const reward = rewardById(p.rewardId) || {title:p.title, icon:p.icon || "⭐"};
    const when = p.date ? new Date(p.date).toLocaleDateString() : "Today";
    return `<div class="purchase-item">
      <div aria-hidden="true">${escapeHtml(reward.icon || "⭐")}</div>
      <div><strong>${escapeHtml(reward.title || p.title)}</strong><span>${escapeHtml(when)} · ${escapeHtml(p.cost || "")} stars</span></div>
      <button type="button" data-print-purchase="${escapeHtml(p.id)}">Print again</button>
    </div>`;
  }).join("");
}
function renderSessionSummary(){
  const el = document.getElementById("sessionSummaryText");
  if(!el) return;
  const session = todaysSession();
  const lessons = session.lessons || [];
  if(!lessons.length){
    el.textContent = "Finish lessons today to create a session summary.";
    return;
  }
  const titles = lessons.slice(-4).map(l => l.title).join(", ");
  el.textContent = `${lessons.length} lesson${lessons.length === 1 ? "" : "s"} completed today · ${session.stars || 0} stars earned. Latest: ${titles}.`;
}
function openRewardRoom(){
  const el = document.getElementById("rewardRoom");
  if(el){ el.scrollIntoView({behavior:"smooth", block:"start"}); setToast("Reward Room opened. Spend stars on printable rewards."); }
  renderRewardStore();
}
function buyReward(id, preview=false){
  const reward = rewardById(id);
  if(!reward) return;
  if(!preview && availableStars() < reward.cost){ setToast(`You need ${reward.cost - availableStars()} more stars.`); return; }
  let purchase = {id:`purchase-${Date.now()}`, rewardId:reward.id, title:reward.title, icon:reward.icon, cost:reward.cost, date:new Date().toISOString(), session:todaysSession()};
  if(!preview){
    rewardWallet.spent = spentStars() + reward.cost;
    rewardWallet.purchases = [...(rewardWallet.purchases || []), purchase];
    rewardWallet.lastReward = purchase;
    saveJSON("learnPlayRewardWalletV18", rewardWallet);
    setToast(`You bought ${reward.title}! Stars left: ${availableStars()}.`);
  }
  showRewardDialog(reward, purchase, preview);
  applySettings();
}
function showRewardDialog(reward, purchase, preview=false){
  const content = document.getElementById("rewardDialogContent");
  if(!content) return;
  content.dataset.rewardId = reward.id;
  content.dataset.purchaseId = purchase.id || "preview";
  content.innerHTML = `<div class="reward-preview">
    <div class="preview-icon">${escapeHtml(reward.icon)}</div>
    <span class="eyebrow">${preview ? "Preview printable" : "Reward unlocked"}</span>
    <h2>${escapeHtml(reward.title)}</h2>
    <p>${escapeHtml(reward.desc)}</p>
    <div class="print-card" aria-hidden="true">
      <div class="print-icon">${escapeHtml(reward.icon)}</div>
      <h1>${escapeHtml(reward.title)}</h1>
      <p>Little Kids Learn & Play printable reward</p>
      <p>${escapeHtml(safeNickname())} practiced learning skills and earned this reward.</p>
    </div>
  </div>`;
  const dialog = document.getElementById("rewardDialog");
  if(dialog && !dialog.open) dialog.showModal();
}
function lessonListHtml(){
  const session = todaysSession();
  const lessons = session.lessons || [];
  if(!lessons.length) return "<li>Practice a Learn & Play lesson.</li>";
  return lessons.map(l => `<li>${escapeHtml(l.title)} — ${escapeHtml(l.stars)} stars</li>`).join("");
}
function printableHtml(reward){
  const session = todaysSession();
  const date = new Date().toLocaleDateString();
  const nickname = escapeHtml(safeNickname());
  const avatar = escapeHtml(dailyProfile.avatar || "⭐");
  return `<!doctype html><html><head><meta charset="utf-8"><title>${escapeHtml(reward.title)} Printable</title><style>
    body{font-family:Arial, sans-serif;background:#f8fbff;color:#132a4e;padding:28px}.sheet{max-width:820px;margin:auto;background:white;border:6px solid #132a4e;border-radius:28px;padding:36px;text-align:center}.icon{font-size:82px}.brand{font-weight:800;color:#0f6070;text-transform:uppercase;letter-spacing:.12em}.title{font-size:42px;font-weight:900;margin:10px 0}.sub{font-size:20px;color:#43536f}.lines{display:grid;gap:12px;text-align:left;margin:32px auto;max-width:640px}.line{border:2px solid #e6edf6;border-radius:16px;padding:14px 18px;background:#fbfdff}.lessons{display:inline-block;text-align:left}.coupon{margin:28px auto;padding:22px;border:3px dashed #ff9f43;border-radius:20px;max-width:640px;background:#fff8e6}.sig{margin-top:44px;text-align:left;border-top:3px solid #132a4e;padding-top:10px}.small{font-size:13px;color:#667085;margin-top:22px}@media print{body{background:white}.sheet{box-shadow:none}}</style></head><body onload="setTimeout(()=>window.print(),300)"><main class="sheet"><div class="brand">Little Kids Learn & Play</div><div class="icon">${escapeHtml(reward.icon)}</div><div class="title">${escapeHtml(reward.title)}</div><p class="sub">${nickname} completed a Learn & Play practice session.</p><div class="lines"><div class="line"><strong>Date:</strong> ${escapeHtml(date)}</div><div class="line"><strong>Learner:</strong> ${avatar} ${nickname}</div><div class="line"><strong>Stars earned today:</strong> ${escapeHtml(session.stars || 0)}</div><div class="line"><strong>Reward:</strong> ${escapeHtml(reward.title)}</div><div class="line"><strong>Lessons practiced:</strong><ul class="lessons">${lessonListHtml()}</ul></div></div><div class="coupon"><strong>Practice at home:</strong><br>Choose one skill from today and practice it one more time with a grown-up.</div><div class="sig">Parent / caregiver signature:</div><div class="small">Printable reward only. No real money, no shipping, no physical item, and no private data is sent anywhere.</div></main></body></html>`;
}
function printReward(rewardId){
  const reward = rewardById(rewardId) || rewardCatalog[0];
  const w = window.open("", "_blank");
  if(!w){ setToast("Popup blocked. Allow popups to print rewards."); return; }
  w.document.open();
  w.document.write(printableHtml(reward));
  w.document.close();
}
function printSessionCertificate(){
  const reward = {id:"daily-session", title:"Daily Session Complete", icon:"🌟", desc:"Printable session completion page."};
  printRewardObject(reward);
}
function printRewardObject(reward){
  const w = window.open("", "_blank");
  if(!w){ setToast("Popup blocked. Allow popups to print."); return; }
  w.document.open();
  w.document.write(printableHtml(reward));
  w.document.close();
}
function printPurchase(purchaseId){
  const purchase = (rewardWallet.purchases || []).find(p => p.id === purchaseId);
  if(!purchase) return;
  printReward(purchase.rewardId);
}


const skillIslands = [
  {id:"ALL", title:"All Skill Islands", icon:"🗺️", color:"#4dabf7", text:"See every game across every skill island.", match:[]},
  {id:"social", title:"Social Skills Island", icon:"🤝", color:"#ff6b9d", text:"Emotions, conversation, perspective, and expected behavior.", match:["Social Skills","Social","Conversation","Perspective"]},
  {id:"communication", title:"Communication Cove", icon:"💬", color:"#35c2d3", text:"AAC, self-advocacy, asking for help, and clear messages.", match:["Communication","AAC","Self-advocacy"]},
  {id:"calm", title:"Calm Body Bay", icon:"🫧", color:"#845ef7", text:"Breathing, coping choices, regulation, and calm routines.", match:["Calming","Coping","Self Management"]},
  {id:"daily", title:"Daily Living Lagoon", icon:"🧼", color:"#63d98a", text:"Hygiene, routines, first/then, schedules, and independence.", match:["Daily Living","Routine","Transitions","Time"]},
  {id:"safety", title:"Safety Harbor", icon:"🛟", color:"#ffd43b", text:"Safety signs, community safety, digital safety, and safe choices.", match:["Safety","Digital Safety"]},
  {id:"money", title:"Money & Community Island", icon:"💵", color:"#ff9f43", text:"Store practice, money skills, community decisions, and planning.", match:["Money","Community","Problem Solving","Self Management"]},
  {id:"jobs", title:"Job Skills Mountain", icon:"💼", color:"#4dabf7", text:"Workplace choices, interviews, job readiness, and teen life skills.", match:["Vocational"]}
];
function gameBelongsToIsland(game, island){
  if(!island || island.id === "ALL") return true;
  const hay = `${game.category || ""} ${game.title || ""} ${game.goal || ""} ${game.ageBand || ""}`.toLowerCase();
  return island.match.some(term => hay.includes(String(term).toLowerCase()));
}
function getIslandForGame(game){
  return skillIslands.find(island => island.id !== "ALL" && gameBelongsToIsland(game, island)) || skillIslands[0];
}
function renderIslands(){
  const grid = document.getElementById("islandsGrid");
  if(!grid) return;
  const ageGames = allGames.filter(g => activeAge === "ALL" || g.ageBand === activeAge);
  const cards = skillIslands.map(island => {
    const islandGames = island.id === "ALL" ? ageGames : ageGames.filter(g => gameBelongsToIsland(g, island));
    if(island.id !== "ALL" && !islandGames.length) return "";
    const completed = islandGames.reduce((sum,g)=>sum + (Number((progress[g.id]||{}).completed)||0),0);
    const stars = islandGames.reduce((sum,g)=>sum + (Number((progress[g.id]||{}).stars)||0),0);
    const possible = Math.max(1, islandGames.length);
    const pct = Math.min(100, Math.round((completed / possible) * 100));
    return `
      <button class="island-card ${activeIsland===island.id?'active':''}" data-island="${escapeHtml(island.id)}" type="button" style="--island-color:${escapeHtml(island.color)}; --pct:${pct}%">
        <div class="island-icon" aria-hidden="true">${escapeHtml(island.icon)}</div>
        <h3>${escapeHtml(island.title)}</h3>
        <p>${escapeHtml(island.text)}</p>
        <div class="island-stats"><span>${islandGames.length} lessons</span><span>⭐ ${stars}</span><span>${completed} done</span></div>
        <div class="island-progress-mini" aria-hidden="true"><i></i></div>
      </button>`;
  }).join("");
  grid.innerHTML = cards;
  updateSelectedIslandPanel();
}
function updateSelectedIslandPanel(){
  const island = skillIslands.find(i => i.id === activeIsland) || skillIslands[0];
  const title = document.getElementById("selectedIslandTitle");
  const text = document.getElementById("selectedIslandText");
  if(title) title.textContent = island.title;
  if(text) text.textContent = island.id === "ALL" ? "Choose any game below, or tap an island to narrow the list." : island.text;
}

async function loadGames(){
  try{
    const res = await fetch("games.json?v=" + Date.now(), {cache:"no-store"});
    if(!res.ok) throw new Error("games.json not found");
    allGames = await res.json();
  } catch { allGames = fallbackGames; }
  allGames = allGames.filter(g => g.enabled !== false);
  renderGameGrid();
  applySettings();
  requireDailyCheckin();
}
function renderGameGrid(){
  const island = skillIslands.find(i => i.id === activeIsland) || skillIslands[0];
  const filtered = allGames.filter(g => (activeAge === "ALL" || g.ageBand === activeAge) && gameBelongsToIsland(g, island));
  renderIslands();
  gameGrid.innerHTML = filtered.map(game => {
    const p = progress[game.id] || {stars:0, completed:0};
    return `
      <article class="game-card" data-game="${escapeHtml(game.id)}">
        <div class="game-icon">${gameIcon(game)}</div>
        <div class="game-card-top">
          <span class="category-pill">${escapeHtml(getIslandForGame(game).icon)} ${escapeHtml(game.category || "Skill")}</span>
          <span class="age-pill">${escapeHtml(game.ageBand || game.age || "All")}</span>
        </div>
        <h3>${escapeHtml(game.title)}</h3>
        <p>${escapeHtml(game.goal || "Practice a learning skill.")}</p>
        <div class="game-card-foot">
          <span>⭐ ${p.stars || 0} stars</span>
          <span>${p.completed || 0} completed</span>
        </div>
        <button class="play-btn" type="button"><span>Play lesson</span><strong>→</strong></button>
      </article>`;
  }).join("");
  if(!filtered.length) gameGrid.innerHTML = `<div class="empty-state">No games are enabled for this age group.</div>`;
}

function openGame(gameId){
  const game = allGames.find(g => g.id === gameId);
  if(!game) return;
  const data = getGameData(gameId);
  current = {
    game, data,
    round:0, score:0, tries:0,
    mode:"teach",
    selected:[],
    completedTokens:0,
    availableTrials: shuffle(data.trials || []).slice(0, Math.min(5, (data.trials || []).length || 1))
  };
  if(current.availableTrials.length === 1 && ["token","breathing"].includes(data.type)) current.availableTrials = data.trials;
  gameModal.showModal();
  renderCurrentRound();
}
function closeGame(){
  window.speechSynthesis?.cancel?.();
  gameModal.close();
  current = null;
}

function progressBar(){
  const total = current.availableTrials.length || 1;
  const pct = Math.round((current.round / total) * 100);
  return `
    <div class="round-progress">
      <strong>Practice ${Math.min(current.round + 1, total)} of ${total}</strong>
      <div class="progress-track"><span style="width:${pct}%"></span></div>
    </div>`;
}
function modeButtons(){
  return `
    <div class="game-tools">
      <button class="tool-btn" type="button" data-action="read">🔊 Read</button>
      <button class="tool-btn" type="button" data-action="show">👀 Show me</button>
      <div class="prompt-switch" role="group" aria-label="Prompt level">
        <button class="${current.mode==='teach'?'active':''}" data-mode="teach" type="button">Teach Me</button>
        <button class="${current.mode==='help'?'active':''}" data-mode="help" type="button">Help Me</button>
        <button class="${current.mode==='test'?'active':''}" data-mode="test" type="button">Test Me</button>
      </div>
    </div>`;
}
function teachingPanel(trial){
  let hint = current.mode === "teach" ? trial.teach : current.mode === "help" ? (trial.show || trial.teach) : "Try it independently. You can use Show Me if you need a model.";
  return `
    <div class="instruction-card">${escapeHtml(trial.prompt || "Choose the best answer.")}</div>
    <div class="teaching-card">
      <strong>${current.mode === "teach" ? "Teaching tip" : current.mode === "help" ? "Small hint" : "Independent practice"}</strong>
      <span>${escapeHtml(hint)}</span>
    </div>
    <div id="modelPrompt" class="model-prompt" aria-live="polite"></div>`;
}
function showModelPrompt(text){
  const box = document.getElementById("modelPrompt");
  if(!box){ setToast(text); return; }
  box.innerHTML = `<strong>Show Me model</strong><span>${escapeHtml(text)}</span>`;
  box.classList.add("show");
  box.scrollIntoView({behavior:"smooth", block:"nearest"});
}
function adultGuide(){
  const data = current.data;
  return `
    <details class="adult-guide">
      <summary>Grown-up teaching guide</summary>
      <div>
        <p><strong>Target skill:</strong> ${escapeHtml(data.skill || current.game.goal || "Practice")}</p>
        <p><strong>How to teach:</strong> ${escapeHtml(data.adult || "Model, prompt, wait, reinforce, and practice in real life.")}</p>
        <p><strong>Prompt plan:</strong> Teach Me gives a model, Help Me gives a smaller hint, Test Me checks independence.</p>
      </div>
    </details>`;
}
function renderGameShell(inner){
  gameArea.innerHTML = `
    <div class="game-head">
      <span class="eyebrow">${escapeHtml(current.game.category || "Practice")}</span>
      <h1>${escapeHtml(current.game.title)}</h1>
      <p>${escapeHtml(current.game.goal || "")}</p>
    </div>
    ${progressBar()}
    ${modeButtons()}
    ${inner}
    ${adultGuide()}`;
}

function renderCurrentRound(){
  const total = current.availableTrials.length || 1;
  if(current.round >= total) return finishGame();
  const trial = current.availableTrials[current.round];
  current.selected = [];
  const type = current.data.type;
  if(type === "shapes") return renderShapeGame(trial);
  if(type === "aac") return renderAACGame(trial);
  if(type === "sequence") return renderSequenceGame(trial);
  if(type === "token") return renderTokenGame(trial);
  if(type === "breathing") return renderBreathingGame(trial);
  if(type === "imitation") return renderImitationGame(trial);
  renderChoiceGame(trial);
}

function visualBlock(trial){
  if(!trial.visual) return "";
  return `<div class="big-visual" aria-hidden="true">${escapeHtml(trial.visual)}</div>`;
}
function renderChoiceGame(trial){
  const choices = shuffle(trial.choices || []);
  renderGameShell(`
    ${teachingPanel(trial)}
    ${visualBlock(trial)}
    <div class="answer-grid">
      ${choices.map(choice => `<button class="answer-card" data-answer="${escapeHtml(choice)}" type="button">${escapeHtml(choice)}</button>`).join("")}
    </div>
    <div id="feedback" class="feedback" aria-live="polite"></div>
  `);
}
function checkChoice(value){
  const trial = current.availableTrials[current.round];
  const fb = $("#feedback");
  if(normalize(value) === normalize(trial.answer)){
    playTone("correct");
    current.score++;
    fb.className = "feedback correct";
    fb.innerHTML = `<strong>Correct!</strong> ${escapeHtml(trial.generalize || "Great job. Try this skill in real life.")}`;
    setTimeout(nextRound, 950);
  } else {
    playTone("wrong");
    fb.className = "feedback wrong";
    fb.innerHTML = `<strong>Try again.</strong> You chose “${escapeHtml(value)}.” ${escapeHtml(trial.correction || trial.teach || "Look for the best choice.")}`;
  }
}
function nextRound(){ current.round++; renderCurrentRound(); }

function shapeSvg(shape, color){
  const colors = {red:"#ff6666", blue:"#4dabf7", green:"#5ed58a", yellow:"#ffd43b", purple:"#9b5de5"};
  const fill = colors[color] || color || "#4dabf7";
  const parts = {
    circle:`<circle cx="50" cy="50" r="30" fill="${fill}"/>`,
    square:`<rect x="22" y="22" width="56" height="56" rx="7" fill="${fill}"/>`,
    triangle:`<polygon points="50,16 84,80 16,80" fill="${fill}"/>`,
    star:`<polygon points="50,10 61,36 89,36 66,53 75,82 50,65 25,82 34,53 11,36 39,36" fill="${fill}"/>`,
    rectangle:`<rect x="15" y="32" width="70" height="38" rx="7" fill="${fill}"/>`
  };
  return `<svg class="shape-svg" viewBox="0 0 100 100" aria-hidden="true">${parts[shape] || parts.circle}</svg>`;
}
function renderShapeGame(trial){
  const options = [
    {color:"yellow",shape:"circle"}, {color:"red",shape:"circle"}, {color:"blue",shape:"square"},
    {color:"red",shape:"square"}, {color:"blue",shape:"rounded square"}, {color:"green",shape:"rounded rectangle"},
    {color:"red",shape:"triangle"}, {color:"yellow",shape:"star"}, {color:"purple",shape:"rectangle"},
    {color:trial.color,shape:trial.shape}
  ].filter((v,i,a)=>a.findIndex(x=>x.color===v.color && x.shape===v.shape)===i);
  const final = shuffle(options).slice(0,6);
  if(!final.some(o=>o.color===trial.color && o.shape===trial.shape)) final[0] = {color:trial.color, shape:trial.shape};
  renderGameShell(`
    ${teachingPanel(trial)}
    <div class="shape-grid">
      ${shuffle(final).map(o => `
        <button class="shape-card" type="button" data-color="${escapeHtml(o.color)}" data-shape="${escapeHtml(o.shape)}" aria-label="${escapeHtml(o.color + ' ' + o.shape)}">
          ${shapeSvg(o.shape.includes("rounded") ? (o.shape.includes("rectangle") ? "rectangle" : "square") : o.shape, o.color)}
          <span>${escapeHtml(o.color)} ${escapeHtml(o.shape)}</span>
        </button>`).join("")}
    </div>
    <div id="feedback" class="feedback" aria-live="polite"></div>
  `);
}
function checkShape(btn){
  const trial = current.availableTrials[current.round];
  const picked = `${btn.dataset.color} ${btn.dataset.shape}`;
  const fb = $("#feedback");
  if(normalize(btn.dataset.color) === normalize(trial.color) && normalize(btn.dataset.shape) === normalize(trial.shape)){
    playTone("correct");
    current.score++;
    fb.className = "feedback correct";
    fb.innerHTML = `<strong>Correct!</strong> You found the ${escapeHtml(trial.color)} ${escapeHtml(trial.shape)}. ${escapeHtml(trial.generalize || "")}`;
    setTimeout(nextRound, 950);
  } else {
    playTone("wrong");
    fb.className = "feedback wrong";
    fb.innerHTML = `<strong>Try again.</strong> You touched the ${escapeHtml(picked)}. ${escapeHtml(trial.teach)} Look for the ${escapeHtml(trial.color)} ${escapeHtml(trial.shape)}.`;
  }
}

function renderAACGame(trial){
  renderGameShell(`
    ${teachingPanel(trial)}
    <div class="message-builder" id="messageBuilder">Tap words below to build the message.</div>
    <div class="aac-grid">
      ${(trial.words || []).map(word => `<button class="aac-tile" type="button" data-word="${escapeHtml(word)}">${aacIcon(word)}<span>${escapeHtml(word)}</span></button>`).join("")}
    </div>
    <div class="action-row">
      <button class="primary-action" type="button" data-action="check-aac">Check message</button>
      <button class="secondary-action" type="button" data-action="clear-aac">Clear</button>
    </div>
    <div id="feedback" class="feedback" aria-live="polite"></div>
  `);
}
function aacIcon(word){
  const map = {"I want":"🙋","play":"🎮","help":"🆘","please":"🙏","more":"➕","bubbles":"🫧","all done":"✅","yes":"👍","no":"👎","break":"🌈","my turn":"🔄","thank you":"💛"};
  return `<strong>${map[word] || "💬"}</strong>`;
}
function addAAC(word){
  current.selected.push(word);
  $("#messageBuilder").textContent = current.selected.join(" ");
}
function checkAAC(){
  const trial = current.availableTrials[current.round];
  const fb = $("#feedback");
  if(JSON.stringify(current.selected.map(normalize)) === JSON.stringify(trial.target.map(normalize))){
    playTone("correct");
    current.score++;
    fb.className = "feedback correct";
    fb.innerHTML = `<strong>Nice message!</strong> ${escapeHtml(trial.generalize || "Use this message with a person.")}`;
    setTimeout(nextRound, 1000);
  } else {
    playTone("wrong");
    fb.className = "feedback wrong";
    fb.innerHTML = `<strong>Try again.</strong> You built “${escapeHtml(current.selected.join(" ") || "nothing yet")}.” Model: ${escapeHtml(trial.show)}.`;
  }
}
function clearAAC(){ current.selected=[]; $("#messageBuilder").textContent = "Tap words below to build the message."; }

function renderSequenceGame(trial){
  renderGameShell(`
    ${teachingPanel(trial)}
    <div class="sequence-target" id="sequenceTarget">Tap steps in order.</div>
    <div class="answer-grid compact">
      ${shuffle(trial.steps || []).map(step => `<button class="answer-card" type="button" data-step="${escapeHtml(step)}">${stepEmoji(step)} ${escapeHtml(step)}</button>`).join("")}
    </div>
    <div class="action-row">
      <button class="primary-action" type="button" data-action="check-sequence">Check order</button>
      <button class="secondary-action" type="button" data-action="clear-sequence">Clear</button>
    </div>
    <div id="feedback" class="feedback" aria-live="polite"></div>
  `);
}
function stepEmoji(step){
  const s = String(step).toLowerCase();
  if(s.includes("brush")) return "🪥"; if(s.includes("wash") || s.includes("soap")) return "🧼"; if(s.includes("snack") || s.includes("breakfast")) return "🍎"; if(s.includes("clean")) return "🧺"; if(s.includes("bubbles")) return "🫧"; if(s.includes("shoes")) return "👟"; if(s.includes("sleep") || s.includes("lights")) return "🌙"; return "➡️";
}
function addSequence(step){
  current.selected.push(step);
  $(`[data-step="${CSS.escape(step)}"]`)?.setAttribute("disabled","true");
  $("#sequenceTarget").textContent = current.selected.join(" → ");
}
function checkSequence(){
  const trial = current.availableTrials[current.round];
  const fb = $("#feedback");
  const correct = JSON.stringify(current.selected.map(normalize)) === JSON.stringify((trial.answer || []).map(normalize));
  if(correct){
    playTone("correct"); current.score++; fb.className="feedback correct";
    fb.innerHTML=`<strong>Correct order!</strong> ${escapeHtml(trial.generalize || "")}`;
    setTimeout(nextRound, 1000);
  } else {
    playTone("wrong"); fb.className="feedback wrong";
    fb.innerHTML=`<strong>Try again.</strong> You made: ${escapeHtml(current.selected.join(" → ") || "nothing yet")}. Model: ${escapeHtml(trial.show)}.`;
  }
}
function clearSequence(){ current.selected=[]; $("#sequenceTarget").textContent = "Tap steps in order."; $$("[data-step]").forEach(b=>b.disabled=false); }

function renderTokenGame(trial){
  current.completedTokens = 0;
  renderGameShell(`
    ${teachingPanel(trial)}
    <div class="token-board-large" id="tokenBoard">${[1,2,3,4,5].map(()=>`<span>☆</span>`).join("")}</div>
    <div class="answer-grid compact">
      ${(trial.tasks || []).map(task => `<button class="answer-card" type="button" data-task>${escapeHtml(task)}</button>`).join("")}
    </div>
    <div id="feedback" class="feedback" aria-live="polite"></div>
  `);
}
function tokenTask(btn){
  if(btn.disabled) return;
  btn.disabled = true;
  current.completedTokens++;
  const stars = $$("#tokenBoard span");
  if(stars[current.completedTokens-1]) stars[current.completedTokens-1].textContent = "⭐";
  if(current.completedTokens >= 5){
    playTone("correct"); current.score = 1;
    $("#feedback").className = "feedback correct";
    $("#feedback").innerHTML = `<strong>Board full!</strong> You earned the celebration.`;
    setTimeout(nextRound, 900);
  }
}
function renderBreathingGame(trial){
  renderGameShell(`
    ${teachingPanel(trial)}
    <div class="breathing-wrap">
      <div class="breathing-bubble" id="breathingBubble">Breathe</div>
      <p id="breathingText">Press start and follow the bubble.</p>
    </div>
    <button class="primary-action" type="button" data-action="start-breathing">Start breathing</button>
    <div id="feedback" class="feedback" aria-live="polite"></div>
  `);
}
function startBreathing(){
  let count = 0;
  const total = (current.availableTrials[current.round].cycles || 4) * 2;
  const text = $("#breathingText");
  const bubble = $("#breathingBubble");
  const interval = setInterval(()=>{
    const inPhase = count % 2 === 0;
    bubble.classList.toggle("grow", inPhase);
    text.textContent = inPhase ? "Breathe in..." : "Breathe out...";
    speak(inPhase ? "Breathe in" : "Breathe out");
    count++;
    if(count > total){
      clearInterval(interval);
      current.score = 1;
      $("#feedback").className = "feedback correct";
      $("#feedback").innerHTML = `<strong>Calm practice complete!</strong> Try one slow breath before a hard task.`;
      setTimeout(nextRound, 1300);
    }
  }, 2100);
}
function renderImitationGame(trial){
  renderGameShell(`
    ${teachingPanel(trial)}
    ${visualBlock(trial)}
    <div class="model-card">
      <strong>Model:</strong> ${escapeHtml(trial.show || trial.action)}
      <br><span>Watch, copy, then tap “I did it.”</span>
    </div>
    <button class="primary-action" type="button" data-action="done-imitation">I did it</button>
    <div id="feedback" class="feedback" aria-live="polite"></div>
  `);
}
function doneImitation(){
  current.score++;
  $("#feedback").className = "feedback correct";
  $("#feedback").innerHTML = `<strong>Great copying!</strong> ${escapeHtml(current.availableTrials[current.round].generalize || "")}`;
  setTimeout(nextRound, 900);
}

function finishGame(){
  const earned = Math.max(1, Math.min(5, current.score));
  const existing = progress[current.game.id] || {stars:0, completed:0};
  progress[current.game.id] = {stars:(existing.stars||0)+earned, completed:(existing.completed||0)+1, last:new Date().toISOString()};
  recordSessionCompletion(current.game, earned);
  saveJSON("learnPlayV17Progress", progress);
  applySettings();
  gameArea.innerHTML = `
    <div class="finish-screen">
      <div class="confetti" aria-hidden="true">🎉 ⭐ 🎈 🌟 🎊</div>
      <h1>You finished ${escapeHtml(current.game.title)}!</h1>
      <p>You earned <strong>${earned} stars</strong>. You now have <strong>${availableStars()} stars</strong> to spend.</p>
      <div class="reward-center">
        <div class="badge">🏅 Skill practiced: ${escapeHtml(current.data.skill || current.game.category)}</div>
        <div class="badge">🌎 Try it in real life with a grown-up.</div>
      </div>
      <div class="reward-store-callout">
        <strong>Reward Room unlocked:</strong> Spend stars on printable badges, certificates, token boards, and home-practice coupons.
      </div>
      <div class="action-row center">
        <button class="primary-action reward-cta" type="button" data-action="open-reward-room">Go to Reward Room ⭐</button>
        <button class="primary-action" type="button" data-action="play-again">Play again</button>
        <button class="secondary-action" type="button" data-action="close">Back to games</button>
      </div>
    </div>`;
  renderGameGrid();
}

document.addEventListener("click", (e) => {
  const card = e.target.closest(".game-card");
  if(card && e.target.closest(".play-btn")) openGame(card.dataset.game);
  if(e.target.closest("#closeGame")) closeGame();
  const ageBtn = e.target.closest(".age-tab");
  if(ageBtn){
    $$(".age-tab").forEach(b=>b.classList.remove("active"));
    ageBtn.classList.add("active");
    activeAge = ageBtn.dataset.age || "ALL";
    activeIsland = "ALL";
    renderGameGrid();
  }
  const mode = e.target.closest("[data-mode]");
  if(mode && current){ current.mode = mode.dataset.mode; renderCurrentRound(); }
  const action = e.target.closest("[data-action]")?.dataset.action;
  if(action === "read" && current){
    const trial = current.availableTrials[current.round];
    speak(`${current.game.title}. ${trial.prompt || ""}. ${current.mode === "test" ? "" : trial.teach || ""}`);
  }
  if(action === "show" && current){
    const trial = current.availableTrials[current.round];
    const modelText = trial.show || trial.teach || "Look for the best answer.";
    showModelPrompt(modelText);
    speak(modelText);
  }
  if(action === "check-aac") checkAAC();
  if(action === "clear-aac") clearAAC();
  if(action === "check-sequence") checkSequence();
  if(action === "clear-sequence") clearSequence();
  if(action === "start-breathing") startBreathing();
  if(action === "done-imitation") doneImitation();
  if(action === "play-again" && current) openGame(current.game.id);
  if(action === "close") closeGame();
  if(action === "open-reward-room"){ closeGame(); openRewardRoom(); }

  const ans = e.target.closest(".answer-card[data-answer]");
  if(ans && current) checkChoice(ans.dataset.answer);
  const shape = e.target.closest(".shape-card");
  if(shape && current) checkShape(shape);
  const aac = e.target.closest(".aac-tile");
  if(aac && current) addAAC(aac.dataset.word);
  const seq = e.target.closest(".answer-card[data-step]");
  if(seq && current) addSequence(seq.dataset.step);
  const token = e.target.closest("[data-task]");
  if(token && current) tokenTask(token);
});




// ============ V19 PRINTABLE ACTIVITY STUDIO ============
const printableSkillLabels = {
  social: "Social Skills",
  communication: "Communication / AAC",
  calm: "Calm Body / Coping",
  daily: "Daily Living",
  safety: "Safety",
  money: "Money & Community",
  vocational: "Job Skills"
};
const printableSkillTips = {
  social: "Practice noticing feelings, greetings, turn-taking, and expected choices.",
  communication: "Practice functional phrases, asking for help, and clear messages.",
  calm: "Practice breathing, coping choices, and asking for a break.",
  daily: "Practice routines, hygiene, first/then, and independence steps.",
  safety: "Practice safe choices in the home, street, store, and digital spaces.",
  money: "Practice counting, buying, community choices, and planning.",
  vocational: "Practice workplace readiness, interviews, and asking a supervisor for help."
};
function studioOptions(){
  return {
    type: document.getElementById("printType")?.value || "coloring",
    skill: document.getElementById("printSkill")?.value || "social",
    age: document.getElementById("printAge")?.value || "3-5",
    theme: document.getElementById("printTheme")?.value || "stars",
    name: (document.getElementById("printName")?.value || safeNickname() || "Learner").trim()
  };
}
function studioTitle(type){
  return ({coloring:"Coloring Page", tracing:"Tracing Sheet", token:"Token Board", worksheet:"Skill Worksheet", certificate:"Certificate / Badge", pack:"Today’s Printable Pack"})[type] || "Printable";
}
function studioThemeSvg(theme, skill){
  const label = printableSkillLabels[skill] || "Learn & Play";
  if(theme === "rocket") return `<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="360" rx="24" fill="#fff"/><path d="M286 242c-44 50-100 68-174 67 21-67 58-118 113-151" fill="none" stroke="#132a4e" stroke-width="8"/><path d="M324 64c73 10 137 74 147 147-39 12-83 8-121-15l-61 61-68-68 61-61c-23-38-27-82-15-121 18-3 37-4 57-3z" fill="none" stroke="#132a4e" stroke-width="8"/><circle cx="361" cy="128" r="31" fill="none" stroke="#132a4e" stroke-width="8"/><path d="M241 227l-54 54M281 267l-34 34" stroke="#132a4e" stroke-width="8" stroke-linecap="round"/><path d="M430 238l43 43M455 213l54 54" stroke="#132a4e" stroke-width="8" stroke-linecap="round"/><text x="300" y="338" text-anchor="middle" font-family="Arial" font-size="24" font-weight="800" fill="#132a4e">${escapeHtml(label)}</text></svg>`;
  if(theme === "animals") return `<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="360" rx="24" fill="#fff"/><circle cx="205" cy="154" r="70" fill="none" stroke="#132a4e" stroke-width="8"/><circle cx="150" cy="90" r="34" fill="none" stroke="#132a4e" stroke-width="8"/><circle cx="260" cy="90" r="34" fill="none" stroke="#132a4e" stroke-width="8"/><circle cx="181" cy="144" r="8" fill="#132a4e"/><circle cx="228" cy="144" r="8" fill="#132a4e"/><path d="M190 178c10 11 26 11 36 0" fill="none" stroke="#132a4e" stroke-width="7" stroke-linecap="round"/><path d="M362 97h100l31 86-81 65-81-65z" fill="none" stroke="#132a4e" stroke-width="8"/><circle cx="388" cy="158" r="8" fill="#132a4e"/><circle cx="438" cy="158" r="8" fill="#132a4e"/><path d="M391 195c18 13 42 13 60 0" fill="none" stroke="#132a4e" stroke-width="7" stroke-linecap="round"/><text x="300" y="322" text-anchor="middle" font-family="Arial" font-size="24" font-weight="800" fill="#132a4e">Color, talk, and practice</text></svg>`;
  if(theme === "calm") return `<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="360" rx="24" fill="#fff"/><path d="M144 205c-39 0-70-25-70-56 0-28 25-51 58-55 17-35 57-59 102-59 52 0 97 31 110 74 46 2 82 31 82 66 0 37-40 67-89 67H144z" fill="none" stroke="#132a4e" stroke-width="8"/><path d="M132 288c42-16 84-16 126 0s84 16 126 0 84-16 126 0" fill="none" stroke="#132a4e" stroke-width="8" stroke-linecap="round"/><circle cx="224" cy="151" r="8" fill="#132a4e"/><circle cx="282" cy="151" r="8" fill="#132a4e"/><path d="M230 184c20 16 45 16 65 0" fill="none" stroke="#132a4e" stroke-width="7" stroke-linecap="round"/><text x="300" y="330" text-anchor="middle" font-family="Arial" font-size="24" font-weight="800" fill="#132a4e">Breathe in · breathe out</text></svg>`;
  if(theme === "island") return `<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="360" rx="24" fill="#fff"/><path d="M88 251c98-62 314-62 424 0" fill="none" stroke="#132a4e" stroke-width="8" stroke-linecap="round"/><path d="M188 245c18-72 76-119 131-119s113 47 132 119" fill="none" stroke="#132a4e" stroke-width="8"/><path d="M319 125V58M319 58c-42 19-67 45-75 76M319 58c43 19 68 45 76 76" fill="none" stroke="#132a4e" stroke-width="8" stroke-linecap="round"/><circle cx="474" cy="89" r="36" fill="none" stroke="#132a4e" stroke-width="8"/><path d="M125 302c52-15 104-15 156 0s104 15 156 0" fill="none" stroke="#132a4e" stroke-width="8" stroke-linecap="round"/><text x="300" y="332" text-anchor="middle" font-family="Arial" font-size="24" font-weight="800" fill="#132a4e">${escapeHtml(label)} Island</text></svg>`;
  return `<svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg"><rect width="600" height="360" rx="24" fill="#fff"/><path d="M300 62l39 79 87 13-63 61 15 86-78-41-78 41 15-86-63-61 87-13z" fill="none" stroke="#132a4e" stroke-width="8"/><circle cx="202" cy="82" r="23" fill="none" stroke="#132a4e" stroke-width="8"/><circle cx="438" cy="90" r="24" fill="none" stroke="#132a4e" stroke-width="8"/><path d="M108 274c62-22 124-22 186 0s124 22 186 0" fill="none" stroke="#132a4e" stroke-width="8" stroke-linecap="round"/><text x="300" y="332" text-anchor="middle" font-family="Arial" font-size="24" font-weight="800" fill="#132a4e">${escapeHtml(label)}</text></svg>`;
}
function studioPrintableMarkup(opts, mode="preview"){
  const title = studioTitle(opts.type);
  const skillLabel = printableSkillLabels[opts.skill] || "Learn & Play";
  const tip = printableSkillTips[opts.skill] || "Practice one skill with a grown-up.";
  const name = escapeHtml(opts.name || "Learner");
  const date = new Date().toLocaleDateString();
  const themeArt = studioThemeSvg(opts.theme, opts.skill);
  const small = mode === "preview" ? "print-sheet-preview" : "sheet";
  if(opts.type === "tracing"){
    const phrases = opts.skill === "communication" ? ["I want", "help", "more", "all done"] : opts.skill === "calm" ? ["I can breathe", "I need a break", "calm body"] : opts.skill === "vocational" ? ["I can ask for help", "I am ready", "thank you"] : [skillLabel, "I can practice", "try again"];
    return `<main class="${small}"><div class="print-brand">Little Kids Learn & Play</div><h1 class="print-title">${escapeHtml(title)}</h1><p class="print-sub">Trace the words. Then say or practice them with a grown-up.</p>${phrases.map(p=>`<div class="trace-line">${escapeHtml(p)}</div>`).join("")}<div class="home-practice"><strong>Practice at home:</strong><br>${escapeHtml(tip)}</div><div class="print-signature">Grown-up initials:</div><div class="printable-watermark">Generated in the browser · no private data stored online</div></main>`;
  }
  if(opts.type === "token"){
    return `<main class="${small}"><div class="print-brand">Little Kids Learn & Play</div><h1 class="print-title">${escapeHtml(skillLabel)} Token Board</h1><p class="print-sub">Earn a token for each practice step. Choose a simple home reward after the board is full.</p><div class="token-row">${Array.from({length:10}).map((_,i)=>`<div class="token-cell">${i+1}</div>`).join("")}</div><div class="write-box"></div><p class="print-sub">Reward I am working for: ___________________________</p><div class="home-practice"><strong>Practice idea:</strong><br>${escapeHtml(tip)}</div><div class="print-signature">Grown-up signature:</div><div class="printable-watermark">Pretend tokens only · no real money or physical item from the website</div></main>`;
  }
  if(opts.type === "worksheet"){
    const items = opts.skill === "safety" ? ["I see a stop sign.","A stranger asks me to leave.","I need help in a store.","The stove is hot."] : opts.skill === "social" ? ["A friend says hi.","Someone looks sad.","It is my turn to wait.","I made a mistake."] : opts.skill === "money" ? ["I want to buy a snack.","The cashier gives change.","I need to compare prices.","I should keep my receipt."] : ["I need help.","I finished my work.","I need a break.","I can try again."];
    return `<main class="${small}"><div class="print-brand">Little Kids Learn & Play</div><h1 class="print-title">${escapeHtml(skillLabel)} Worksheet</h1><p class="print-sub">Read each box. Draw or write the safe/helpful response.</p><div class="worksheet-grid">${items.map(item=>`<div class="worksheet-card"><strong>${escapeHtml(item)}</strong><div class="write-box"></div></div>`).join("")}</div><div class="cut-lines"><strong>Choice words:</strong> help · wait · safe · ask · stop · breathe · thank you · try again</div><div class="home-practice"><strong>Practice at home:</strong><br>${escapeHtml(tip)}</div><div class="print-signature">Grown-up signature:</div><div class="printable-watermark">No private data required</div></main>`;
  }
  if(opts.type === "certificate"){
    return `<main class="${small}"><div class="print-brand">Little Kids Learn & Play</div><div class="print-art coloring-svg">${themeArt}</div><h1 class="print-title">${escapeHtml(skillLabel)} Star</h1><p class="print-sub">${name} practiced ${escapeHtml(skillLabel.toLowerCase())} on ${escapeHtml(date)}.</p><div class="home-practice"><strong>I practiced:</strong><br>${escapeHtml(tip)}</div><div class="print-signature">Parent / caregiver signature:</div><div class="printable-watermark">Printable recognition only</div></main>`;
  }
  if(opts.type === "pack"){
    const session = todaysSession();
    return `<main class="${small}"><div class="print-brand">Little Kids Learn & Play</div><h1 class="print-title">Today’s Printable Pack</h1><p class="print-sub">A simple take-home page for ${name}.</p><div class="studio-pack-list"><div><strong>Date:</strong> ${escapeHtml(date)}</div><div><strong>Stars earned today:</strong> ${escapeHtml(session.stars || 0)}</div><div><strong>Lessons practiced:</strong><ul>${lessonListHtml()}</ul></div><div><strong>Skill focus:</strong> ${escapeHtml(skillLabel)} — ${escapeHtml(tip)}</div></div><div class="print-divider"></div><div class="print-art coloring-svg">${themeArt}</div><div class="home-practice"><strong>Home practice:</strong><br>Pick one skill from today and practice it one more time for 2 minutes.</div><div class="print-signature">Parent / caregiver signature:</div><div class="printable-watermark">Generated on device · no account needed</div></main>`;
  }
  return `<main class="${small}"><div class="print-brand">Little Kids Learn & Play</div><h1 class="print-title">${escapeHtml(skillLabel)} Coloring Page</h1><p class="print-sub">Color the picture. Then talk about the skill with a grown-up.</p><div class="print-art coloring-svg">${themeArt}</div><div class="home-practice"><strong>Talk about it:</strong><br>${escapeHtml(tip)}</div><div class="print-signature">Grown-up initials:</div><div class="printable-watermark">Coloring printable only · no data is sent online</div></main>`;
}
function renderStudioPreview(){
  const opts = studioOptions();
  const preview = document.getElementById("studioPreview");
  const title = document.getElementById("studioPreviewTitle");
  if(title) title.textContent = studioTitle(opts.type);
  if(preview) preview.innerHTML = studioPrintableMarkup(opts, "preview");
}
function studioPrintHtml(){
  const opts = studioOptions();
  return `<!doctype html><html><head><meta charset="utf-8"><title>${escapeHtml(studioTitle(opts.type))}</title><style>body{font-family:Arial,sans-serif;background:#f8fbff;color:#132a4e;padding:24px}.sheet{max-width:820px;margin:auto;background:white;border:6px solid #132a4e;border-radius:28px;padding:36px;text-align:center}.print-brand{font-weight:900;color:#0f6070;text-transform:uppercase;letter-spacing:.14em;font-size:13px}.print-title{font-size:42px;line-height:1.02;letter-spacing:-.04em;margin:18px 0}.print-sub{color:#52617c;font-size:18px;line-height:1.5}.print-art{margin:24px auto;max-width:640px}.coloring-svg svg{max-width:100%;height:auto}.trace-line{font-size:48px;letter-spacing:.06em;color:transparent;-webkit-text-stroke:1.5px #132a4e;border-bottom:2px dashed #b9c3d2;padding:18px 0;text-align:left}.token-row{display:grid;grid-template-columns:repeat(5,1fr);gap:18px;margin:32px auto;max-width:620px}.token-cell{aspect-ratio:1;border:3px dashed #132a4e;border-radius:24px;display:grid;place-items:center;font-size:34px;color:#d7dde7}.worksheet-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;text-align:left;margin-top:24px}.worksheet-card{border:2px solid #d7dde7;border-radius:18px;padding:16px;background:#fbfdff;min-height:92px}.write-box{height:82px;border:2px dashed #b9c3d2;border-radius:16px;margin-top:10px}.cut-lines{border:2px dashed #ff9f43;border-radius:20px;padding:18px;margin:20px 0;background:#fff8e6}.home-practice{margin:26px auto;padding:18px;border:3px dashed #ff9f43;border-radius:20px;background:#fff8e6;max-width:620px}.print-signature{margin-top:34px;border-top:3px solid #132a4e;padding-top:10px;text-align:left}.studio-pack-list{display:grid;gap:12px;text-align:left;margin:26px auto;max-width:640px}.studio-pack-list div{border:2px solid #e6edf6;border-radius:16px;padding:14px;background:#fbfdff}.print-divider{height:1px;background:#d7dde7;margin:30px 0}.printable-watermark{font-size:12px;color:#667085;margin-top:26px}@media print{body{background:white}.sheet{box-shadow:none}}@media(max-width:700px){.worksheet-grid{grid-template-columns:1fr}}</style></head><body onload="setTimeout(()=>window.print(),300)">${studioPrintableMarkup(opts, "print")}</body></html>`;
}
function printStudioPrintable(){
  const w = window.open("", "_blank");
  if(!w){ setToast("Popup blocked. Allow popups to print."); return; }
  w.document.open();
  w.document.write(studioPrintHtml());
  w.document.close();
}
function openPrintableStudio(){
  const el = document.getElementById("printableStudio");
  if(el){ el.scrollIntoView({behavior:"smooth", block:"start"}); setToast("Printable Studio opened."); }
  renderStudioPreview();
}

$("#dailyCheckinBtn")?.addEventListener("click", () => openDailyCheckin(false));
$("#dailyCheckinDialog")?.addEventListener("cancel", (e) => {
  if(!checkedInToday()) e.preventDefault();
});
$("#dailyCheckinForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  completeDailyCheckin();
});
$$('.avatar-choice').forEach(btn => btn.addEventListener('click', () => {
  $$('.avatar-choice').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}));

$("#settingsBtn")?.addEventListener("click", () => $("#settingsDialog").showModal());
$("#grownupBtn")?.addEventListener("click", () => $("#grownupDialog").showModal());
$("#resetProgress")?.addEventListener("click", () => {
  if(confirm("Reset local stars on this browser?")){
    progress = {};
    rewardWallet = { spent:0, purchases:[], lastReward:null };
    sessionLog = {};
    saveJSON("learnPlayV17Progress", progress);
    saveJSON("learnPlayRewardWalletV18", rewardWallet);
    saveJSON("learnPlaySessionLogV18", sessionLog);
    renderGameGrid(); applySettings(); setToast("Local stars and rewards reset.");
  }
});
$("#bigTextToggle")?.addEventListener("change", e => { settings.bigText = e.target.checked; saveJSON("learnPlayV17Settings", settings); applySettings(); });
$("#reduceMotionToggle")?.addEventListener("change", e => { settings.reduceMotion = e.target.checked; saveJSON("learnPlayV17Settings", settings); applySettings(); });
$("#soundToggle")?.addEventListener("change", e => { settings.sound = e.target.checked; saveJSON("learnPlayV17Settings", settings); applySettings(); });


document.addEventListener("click", (event) => {
  const islandBtn = event.target.closest(".island-card");
  if(islandBtn){
    activeIsland = islandBtn.dataset.island || "ALL";
    renderGameGrid();
    document.getElementById("selectedIslandPanel")?.scrollIntoView({behavior:"smooth", block:"nearest"});
    setToast(activeIsland === "ALL" ? "Showing all Skill Islands." : "Island selected. Choose a lesson below.");
  }
});
document.getElementById("clearIslandFilter")?.addEventListener("click", () => {
  activeIsland = "ALL";
  renderGameGrid();
  setToast("Showing all Skill Islands.");
});


$("#rewardRoomBtn")?.addEventListener("click", openRewardRoom);
document.addEventListener("click", (event) => {
  const buy = event.target.closest("[data-reward-id]");
  if(buy) buyReward(buy.dataset.rewardId, false);
  const preview = event.target.closest("[data-preview-reward]");
  if(preview) buyReward(preview.dataset.previewReward, true);
  const printPurchaseBtn = event.target.closest("[data-print-purchase]");
  if(printPurchaseBtn) printPurchase(printPurchaseBtn.dataset.printPurchase);
});
$("#printRewardFromDialog")?.addEventListener("click", (event) => {
  event.preventDefault();
  const rewardId = document.getElementById("rewardDialogContent")?.dataset.rewardId;
  if(rewardId) printReward(rewardId);
});
$("#printSessionCertificate")?.addEventListener("click", () => printSessionCertificate());
$("#resetRewardData")?.addEventListener("click", () => {
  if(confirm("Reset only purchased rewards and spent stars on this browser? Your lesson stars stay.")){
    rewardWallet = { spent:0, purchases:[], lastReward:null };
    saveJSON("learnPlayRewardWalletV18", rewardWallet);
    applySettings();
    setToast("Reward Room reset. Lesson stars were kept.");
  }
});

loadGames();
applySettings();


// V19 Printable Studio listeners
["printType","printSkill","printAge","printTheme","printName"].forEach(id => {
  document.getElementById(id)?.addEventListener("input", renderStudioPreview);
  document.getElementById(id)?.addEventListener("change", renderStudioPreview);
});
document.getElementById("generatePrintable")?.addEventListener("click", () => { renderStudioPreview(); setToast("Printable preview updated."); });
document.getElementById("printStudioPage")?.addEventListener("click", printStudioPrintable);
document.getElementById("quickPackBtn")?.addEventListener("click", () => {
  const type = document.getElementById("printType");
  if(type) type.value = "pack";
  renderStudioPreview();
  setToast("Today’s printable pack is ready.");
});
document.getElementById("printStudioBtn")?.addEventListener("click", openPrintableStudio);
renderStudioPreview();
