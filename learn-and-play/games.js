
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
let weeklyPacks = [];
let currentWeeklyPack = null;
let activeWeeklyOnly = loadJSON("learnPlayWeeklyOnlyV21", true);
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
function gameIcon(game){ return game.icon || iconMap[game.title] || "🎮"; }
function getGameData(id){
  const data = trialLibrary[id];
  if(data) return data;
  const game = allGames.find(g => g.id === id) || {title:"Practice", category:"Skill", goal:"Practice a helpful skill."};
  return buildGenericGameData(game);
}
function buildGenericGameData(game){
  const title = game.title || "Practice";
  const category = `${game.category || ""} ${game.goal || ""} ${title}`.toLowerCase();
  let bank;
  if(category.includes("safety") || category.includes("emergency") || category.includes("online")){
    bank = {skill:"Safety choices", visual:"🛟", teach:"A safe choice protects your body, privacy, and community space.", adult:"Practice the safety rule, model the safe response, then role-play a real example.", answer:"Stop and ask a trusted adult.", wrong:["Keep it secret.","Run away without telling anyone.","Click or touch without asking."], correction:"The safest response is to stop, think, and ask a trusted adult."};
  } else if(category.includes("vocation") || category.includes("work") || category.includes("job") || category.includes("interview") || category.includes("supervisor")){
    bank = {skill:"Job readiness", visual:"💼", teach:"At work, helpful choices are respectful, on task, and safe.", adult:"Model the workplace sentence, then let the learner practice with a calm voice.", answer:"Ask the supervisor for help or clarification.", wrong:["Leave without telling anyone.","Use your phone instead of working.","Take items home."], correction:"A good workplace choice is to ask for help, check in, or follow the routine."};
  } else if(category.includes("money") || category.includes("store") || category.includes("budget") || category.includes("community") || category.includes("restaurant")){
    bank = {skill:"Community practice", visual:"🛒", teach:"In the community, we check the plan, use polite words, and ask for help when needed.", adult:"Practice one real-life sentence such as “Excuse me, can you help me?”", answer:"Ask politely and follow the community rule.", wrong:["Grab it and leave.","Yell at the worker.","Ignore the rule."], correction:"A helpful community choice is polite, safe, and follows the rule."};
  } else if(category.includes("communication") || category.includes("aac") || category.includes("advocacy") || category.includes("question") || category.includes("conversation")){
    bank = {skill:"Communication", visual:"💬", teach:"Communication helps people know what you want, need, feel, or think.", adult:"Model the phrase first, then wait for the learner to try independently.", answer:"Use clear words or AAC to ask for help.", wrong:["Stay upset and say nothing.","Push or grab.","Walk away without telling anyone."], correction:"A clear message helps other people understand and help you."};
  } else if(category.includes("daily") || category.includes("hygiene") || category.includes("routine") || category.includes("schedule") || category.includes("chore")){
    bank = {skill:"Daily living", visual:"🧼", teach:"Daily routines are easier when we follow small steps in order.", adult:"Break the routine into first, next, then, done. Reinforce each completed step.", answer:"Do the first step, then the next step.", wrong:["Skip every step.","Throw the materials.","Leave before finishing."], correction:"A routine works best when we complete one small step at a time."};
  } else if(category.includes("calm") || category.includes("coping") || category.includes("emotion") || category.includes("flexible") || category.includes("problem")){
    bank = {skill:"Self management", visual:"🌈", teach:"A calm strategy helps your body get ready to learn again.", adult:"Model the coping strategy and praise any attempt to use it.", answer:"Take a breath and ask for a break or help.", wrong:["Scream at someone.","Throw items.","Give up forever."], correction:"A coping choice keeps everyone safe and helps your body calm down."};
  } else {
    bank = {skill:"Learning choice", visual:"🎯", teach:"Look for the choice that is safe, kind, helpful, and matches the situation.", adult:"Use model, prompt, wait, reinforce, and generalize to daily routines.", answer:"Choose the safe and helpful response.", wrong:["Choose an unsafe response.","Ignore the direction.","Use an unkind response."], correction:"The best answer is safe, kind, and helpful."};
  }
  return {type:"choice", skill:bank.skill, adult:bank.adult, trials:[0,1,2,3,4].map((_,i)=>({
    visual:bank.visual,
    prompt:`${title}: What is the best choice?`,
    teach:bank.teach,
    show:bank.answer,
    choices:shuffle([bank.answer, ...bank.wrong]).slice(0,4),
    answer:bank.answer,
    correction:bank.correction,
    generalize:`Practice ${title.toLowerCase()} one time with a grown-up.`
  }))};
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


function normalizeDate(d){ return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
function addDays(date, days){ const d = new Date(date); d.setDate(d.getDate()+days); return d; }
function niceDate(date){ return date.toLocaleDateString(undefined,{month:"short", day:"numeric"}); }
function weeklyPackIndex(){
  if(!weeklyPacks.length) return -1;
  const base = normalizeDate(new Date(weeklyPacks[0].startDate || "2026-05-25"));
  const today = normalizeDate(new Date());
  const diffDays = Math.floor((today - base) / 86400000);
  if(diffDays < 0) return 0;
  return Math.floor(diffDays / 7) % weeklyPacks.length;
}
function currentPackDateRange(){
  if(!currentWeeklyPack) return "";
  const idx = weeklyPackIndex();
  const base = normalizeDate(new Date(weeklyPacks[0].startDate || "2026-05-25"));
  const today = normalizeDate(new Date());
  const diffDays = Math.max(0, Math.floor((today - base) / 86400000));
  const cycleWeek = Math.floor(diffDays / 7);
  const start = addDays(base, cycleWeek * 7);
  const end = addDays(start, 6);
  return `${niceDate(start)} – ${niceDate(end)}`;
}
function nextRotationText(){
  const base = normalizeDate(new Date(weeklyPacks[0]?.startDate || "2026-05-25"));
  const today = normalizeDate(new Date());
  const diffDays = Math.max(0, Math.floor((today - base) / 86400000));
  const next = addDays(base, (Math.floor(diffDays / 7) + 1) * 7);
  return niceDate(next);
}
async function loadWeeklyPacks(){
  try{
    const res = await fetch("weekly-packs.json?v=" + Date.now(), {cache:"no-store"});
    if(!res.ok) throw new Error("weekly-packs.json not found");
    weeklyPacks = await res.json();
  } catch {
    weeklyPacks = [{week:1, theme:"Learning Adventure Week", focus:"practice a fresh set of skills", skill:"social", badge:"Weekly Learner Badge", games:allGames.slice(0,7).map(g=>g.id), printables:["Coloring page","Token board","Certificate"]}];
  }
  currentWeeklyPack = weeklyPacks[weeklyPackIndex()] || weeklyPacks[0] || null;
  renderWeeklyPack();
}
function weeklyGameSet(){ return new Set((currentWeeklyPack?.games || [])); }
function renderWeeklyPack(){
  const pack = currentWeeklyPack;
  if(!pack) return;
  const byId = Object.fromEntries(allGames.map(g => [g.id, g]));
  const theme = document.getElementById("weeklyTheme");
  const focus = document.getElementById("weeklyFocus");
  const meta = document.getElementById("weeklyMeta");
  const badge = document.getElementById("weeklyBadge");
  const chips = document.getElementById("weeklyGameChips");
  const prints = document.getElementById("weeklyPrintables");
  if(theme) theme.textContent = pack.theme || "This Week’s Learning Adventure";
  if(focus) focus.textContent = `Focus: ${pack.focus || "practice new skills"}.`;
  if(meta) meta.innerHTML = `<span>Week ${escapeHtml(pack.week || "")}</span><span>${escapeHtml(currentPackDateRange())}</span><span>Next rotation: ${escapeHtml(nextRotationText())}</span><span>${activeWeeklyOnly ? "Weekly pack active" : "All games showing"}</span>`;
  if(badge) badge.textContent = `🏅 ${pack.badge || pack.rewardBonus || "Weekly Badge"}`;
  if(chips) chips.innerHTML = (pack.games || []).slice(0,10).map(id => `<span>${escapeHtml(gameIcon(byId[id] || {}))} ${escapeHtml((byId[id]||{}).title || id)}</span>`).join("");
  if(prints) prints.innerHTML = `<strong>Weekly printables:</strong><br>${(pack.printables || []).map(p => `• ${escapeHtml(p)}`).join("<br>")}`;
  renderWeeklyCalendar();
}
function renderWeeklyCalendar(){
  const cal = document.getElementById("weeklyCalendar");
  if(!cal || !weeklyPacks.length) return;
  const currentIdx = weeklyPackIndex();
  const cards = [0,1,2,3].map(offset => {
    const idx = (currentIdx + offset) % weeklyPacks.length;
    const pack = weeklyPacks[idx];
    return `<div class="week-card ${offset===0?'active':''}"><strong>${offset===0?'This week':`In ${offset} week${offset>1?'s':''}`}</strong><span>${escapeHtml(pack.theme || `Week ${pack.week}`)}</span></div>`;
  }).join("");
  cal.innerHTML = cards;
}
function setWeeklyMode(on){
  activeWeeklyOnly = !!on;
  saveJSON("learnPlayWeeklyOnlyV21", activeWeeklyOnly);
  renderWeeklyPack();
  renderGameGrid();
  setToast(activeWeeklyOnly ? "This week’s pack is active." : "Showing all games.");
}

async function loadGames(){
  try{
    const res = await fetch("games.json?v=" + Date.now(), {cache:"no-store"});
    if(!res.ok) throw new Error("games.json not found");
    allGames = await res.json();
  } catch { allGames = fallbackGames; }
  allGames = allGames.filter(g => g.enabled !== false);
  await loadWeeklyPacks();
  renderGameGrid();
  applySettings();
  requireDailyCheckin();
}
function renderGameGrid(){
  const island = skillIslands.find(i => i.id === activeIsland) || skillIslands[0];
  const wset = weeklyGameSet();
  let filtered = allGames.filter(g => (activeAge === "ALL" || g.ageBand === activeAge) && gameBelongsToIsland(g, island));
  if(activeWeeklyOnly && wset.size) filtered = filtered.filter(g => wset.has(g.id));
  renderIslands();
  const weeklyNote = activeWeeklyOnly && currentWeeklyPack ? `<div class="weekly-mode-note">🗓️ Showing this week’s rotation: ${escapeHtml(currentWeeklyPack.theme)}. Use “Show all games” to browse the full library.</div>` : "";
  gameGrid.innerHTML = weeklyNote + filtered.map(game => {
    const p = progress[game.id] || {stars:0, completed:0};
    return `
      <article class="game-card ${weeklyGameSet().has(game.id) ? 'weekly-featured' : ''}" data-game="${escapeHtml(game.id)}">
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
  if(!filtered.length) gameGrid.innerHTML = weeklyNote + `<div class="empty-state">No games match this view. Try another age level, island, or Show all games.</div>`;
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





// ============ V20 PRINTABLE ACTIVITY STUDIO: REAL WORKSHEETS ============
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
  social: "Practice greetings, feelings, turn-taking, expected choices, and friendly responses.",
  communication: "Practice functional phrases, asking for help, choosing words, and clear messages.",
  calm: "Practice breathing, body signals, coping choices, and asking for a break.",
  daily: "Practice routines, hygiene, first/then steps, and independence.",
  safety: "Practice safe choices at home, in the street, in stores, and online.",
  money: "Practice buying, counting, comparing choices, and community independence.",
  vocational: "Practice job readiness, interviews, checking in, and asking a supervisor for help."
};
const printableSkillIcon = {social:"😊", communication:"💬", calm:"☁️", daily:"🧼", safety:"🛑", money:"🛒", vocational:"💼"};
function studioOptions(){
  return {
    type: document.getElementById("printType")?.value || "coloring",
    skill: document.getElementById("printSkill")?.value || "social",
    age: document.getElementById("printAge")?.value || "3-5",
    theme: document.getElementById("printTheme")?.value || "skill",
    name: (document.getElementById("printName")?.value || safeNickname() || "Learner").trim()
  };
}
function studioTitle(type){
  return ({
    coloring:"Coloring Scene",
    tracing:"Trace & Write Sheet",
    cutpaste:"Cut & Paste Worksheet",
    matching:"Match & Circle Worksheet",
    firstthen:"First / Then Board",
    schedule:"Visual Schedule Cards",
    aacboard:"AAC Communication Board",
    thermometer:"Emotion Thermometer",
    token:"Token Board",
    worksheet:"Scenario Worksheet",
    certificate:"Certificate / Badge",
    pack:"Today’s Full Printable Pack"
  })[type] || "Printable";
}
function skillWords(skill){
  return ({
    social:["happy", "sad", "my turn", "your turn", "hello", "friend", "wait", "share"],
    communication:["I want", "help", "more", "all done", "break", "yes", "no", "please"],
    calm:["breathe", "break", "quiet hands", "calm body", "count to 5", "squeeze", "walk", "ask for help"],
    daily:["wash hands", "brush teeth", "get dressed", "clean up", "first", "then", "finished", "try again"],
    safety:["stop", "wait", "safe body", "ask adult", "hot", "street", "help", "emergency"],
    money:["buy", "pay", "change", "price", "save", "need", "want", "receipt"],
    vocational:["check in", "task", "on time", "supervisor", "break", "help", "thank you", "ready"]
  })[skill] || ["practice", "help", "try", "done"];
}
function skillScenarios(skill){
  return ({
    social:["A friend says hello.", "Someone looks sad.", "It is not my turn yet.", "I made a mistake."],
    communication:["I want a toy.", "I do not understand.", "I need a break.", "I am finished."],
    calm:["My body feels fast.", "The room is loud.", "I feel frustrated.", "I need space."],
    daily:["It is time to wash hands.", "My room is messy.", "I need to get ready.", "I finished eating."],
    safety:["The light is red.", "The stove is hot.", "A stranger asks me to leave.", "I am lost in a store."],
    money:["I want to buy a snack.", "I have three dollars.", "The cashier gives change.", "Two items have different prices."],
    vocational:["I arrive at work.", "I do not know the task.", "It is break time.", "A supervisor gives feedback."]
  })[skill] || ["I need help.", "I can try again.", "I can ask.", "I can wait."];
}
function agePrompt(age){
  return ({"3-5":"Point, color, trace, or say one word.", "6-9":"Read with help, answer, then practice one time.", "10-13":"Write or explain the safe/helpful choice.", "14-21":"Use the skill in a real-life role-play or community example."})[age] || "Practice with a grown-up.";
}
function lineArtSvg(theme, skill){
  const label = printableSkillLabels[skill] || "Learn & Play";
  const escLabel = escapeHtml(label);
  if(theme === "rocket") return `<svg viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rocket coloring page"><rect width="760" height="430" rx="28" fill="#fff"/><path d="M365 100c88 18 159 89 177 177-49 18-105 14-154-14l-73 73-85-85 73-73c-28-49-32-105-14-154 24-5 50-6 76-4z" fill="none" stroke="#132a4e" stroke-width="9"/><circle cx="408" cy="170" r="38" fill="none" stroke="#132a4e" stroke-width="9"/><path d="M260 282c-55 60-122 83-212 82 25-82 71-144 139-184" fill="none" stroke="#132a4e" stroke-width="9"/><path d="M242 330l-66 66M292 380l-42 42M505 306l62 62M532 277l76 76" stroke="#132a4e" stroke-width="9" stroke-linecap="round"/><path d="M114 86l18 36 40 6-29 28 7 39-36-19-36 19 7-39-29-28 40-6z" fill="none" stroke="#132a4e" stroke-width="6"/><circle cx="623" cy="93" r="36" fill="none" stroke="#132a4e" stroke-width="7"/><text x="380" y="405" text-anchor="middle" font-family="Arial" font-size="28" font-weight="900" fill="#132a4e">${escLabel} Rocket Mission</text></svg>`;
  if(theme === "animals") return `<svg viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Animal coloring page"><rect width="760" height="430" rx="28" fill="#fff"/><circle cx="248" cy="188" r="84" fill="none" stroke="#132a4e" stroke-width="9"/><circle cx="180" cy="112" r="42" fill="none" stroke="#132a4e" stroke-width="9"/><circle cx="316" cy="112" r="42" fill="none" stroke="#132a4e" stroke-width="9"/><circle cx="220" cy="176" r="9" fill="#132a4e"/><circle cx="276" cy="176" r="9" fill="#132a4e"/><path d="M229 216c18 18 42 18 58 0" fill="none" stroke="#132a4e" stroke-width="8" stroke-linecap="round"/><path d="M470 118h132l40 111-106 84-106-84z" fill="none" stroke="#132a4e" stroke-width="9"/><circle cx="502" cy="200" r="9" fill="#132a4e"/><circle cx="570" cy="200" r="9" fill="#132a4e"/><path d="M506 245c25 17 56 17 79 0" fill="none" stroke="#132a4e" stroke-width="8" stroke-linecap="round"/><path d="M98 337c74-22 148-22 222 0s148 22 222 0" fill="none" stroke="#132a4e" stroke-width="8" stroke-linecap="round"/><text x="380" y="390" text-anchor="middle" font-family="Arial" font-size="28" font-weight="900" fill="#132a4e">Friendly Practice Animals</text></svg>`;
  if(theme === "calm") return `<svg viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Calm cloud coloring page"><rect width="760" height="430" rx="28" fill="#fff"/><path d="M176 240c-50 0-90-32-90-73 0-36 32-66 75-72 22-45 73-76 132-76 67 0 125 40 142 96 59 3 105 40 105 86 0 48-51 87-114 87H176z" fill="none" stroke="#132a4e" stroke-width="9"/><circle cx="278" cy="170" r="9" fill="#132a4e"/><circle cx="352" cy="170" r="9" fill="#132a4e"/><path d="M286 214c25 19 58 19 83 0" fill="none" stroke="#132a4e" stroke-width="8" stroke-linecap="round"/><path d="M132 345c54-19 108-19 162 0s108 19 162 0 108-19 162 0" fill="none" stroke="#132a4e" stroke-width="9" stroke-linecap="round"/><text x="380" y="396" text-anchor="middle" font-family="Arial" font-size="28" font-weight="900" fill="#132a4e">Breathe In · Breathe Out</text></svg>`;
  if(theme === "city") return `<svg viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Community city coloring page"><rect width="760" height="430" rx="28" fill="#fff"/><path d="M86 346h590" stroke="#132a4e" stroke-width="9" stroke-linecap="round"/><rect x="120" y="160" width="100" height="186" rx="14" fill="none" stroke="#132a4e" stroke-width="8"/><rect x="260" y="100" width="128" height="246" rx="16" fill="none" stroke="#132a4e" stroke-width="8"/><rect x="430" y="182" width="120" height="164" rx="16" fill="none" stroke="#132a4e" stroke-width="8"/><path d="M294 346v-48h60v48M144 210h24M190 210h14M144 252h24M190 252h14M144 294h24M190 294h14M286 150h28M334 150h28M286 196h28M334 196h28M286 242h28M334 242h28" stroke="#132a4e" stroke-width="6" stroke-linecap="round"/><circle cx="618" cy="134" r="50" fill="none" stroke="#132a4e" stroke-width="8"/><path d="M618 92v84M576 134h84" stroke="#132a4e" stroke-width="7" stroke-linecap="round"/><text x="380" y="397" text-anchor="middle" font-family="Arial" font-size="28" font-weight="900" fill="#132a4e">Community Practice</text></svg>`;
  if(theme === "island") return `<svg viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Skill island coloring page"><rect width="760" height="430" rx="28" fill="#fff"/><path d="M94 288c125-78 410-78 572 0" fill="none" stroke="#132a4e" stroke-width="9" stroke-linecap="round"/><path d="M226 280c24-92 97-151 166-151s142 59 166 151" fill="none" stroke="#132a4e" stroke-width="9"/><path d="M392 131V56M392 56c-56 25-88 59-99 99M392 56c55 25 88 59 99 99" fill="none" stroke="#132a4e" stroke-width="9" stroke-linecap="round"/><circle cx="610" cy="100" r="45" fill="none" stroke="#132a4e" stroke-width="8"/><path d="M152 355c65-19 130-19 195 0s130 19 195 0" fill="none" stroke="#132a4e" stroke-width="9" stroke-linecap="round"/><text x="380" y="405" text-anchor="middle" font-family="Arial" font-size="28" font-weight="900" fill="#132a4e">${escLabel} Island</text></svg>`;
  if(theme === "skill"){
    if(skill === "communication") return `<svg viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg"><rect width="760" height="430" rx="28" fill="#fff"/><rect x="118" y="80" width="524" height="250" rx="34" fill="none" stroke="#132a4e" stroke-width="9"/><path d="M206 330l-44 62 102-62" fill="none" stroke="#132a4e" stroke-width="9" stroke-linejoin="round"/><circle cx="250" cy="182" r="12" fill="#132a4e"/><circle cx="510" cy="182" r="12" fill="#132a4e"/><path d="M298 236c48 38 117 38 164 0" fill="none" stroke="#132a4e" stroke-width="9" stroke-linecap="round"/><text x="380" y="392" text-anchor="middle" font-family="Arial" font-size="28" font-weight="900" fill="#132a4e">Use Words · Ask · Choose</text></svg>`;
    if(skill === "safety") return `<svg viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg"><rect width="760" height="430" rx="28" fill="#fff"/><path d="M290 70h180l110 110v160L470 410H290L180 340V180z" fill="none" stroke="#132a4e" stroke-width="9"/><text x="380" y="270" text-anchor="middle" font-family="Arial" font-size="94" font-weight="900" fill="none" stroke="#132a4e" stroke-width="3">STOP</text><path d="M88 352h584M160 352v-72M600 352v-72M118 280h520" stroke="#132a4e" stroke-width="8" stroke-linecap="round"/><text x="380" y="405" text-anchor="middle" font-family="Arial" font-size="27" font-weight="900" fill="#132a4e">Stop · Look · Ask</text></svg>`;
    if(skill === "daily") return `<svg viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg"><rect width="760" height="430" rx="28" fill="#fff"/><rect x="120" y="110" width="190" height="220" rx="24" fill="none" stroke="#132a4e" stroke-width="9"/><circle cx="215" cy="180" r="42" fill="none" stroke="#132a4e" stroke-width="8"/><path d="M166 268h98M166 294h98" stroke="#132a4e" stroke-width="8" stroke-linecap="round"/><rect x="410" y="110" width="180" height="220" rx="24" fill="none" stroke="#132a4e" stroke-width="9"/><path d="M452 166h96M452 210h96M452 254h96" stroke="#132a4e" stroke-width="8" stroke-linecap="round"/><text x="380" y="392" text-anchor="middle" font-family="Arial" font-size="28" font-weight="900" fill="#132a4e">First · Then · Done</text></svg>`;
    if(skill === "money") return `<svg viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg"><rect width="760" height="430" rx="28" fill="#fff"/><rect x="135" y="128" width="490" height="198" rx="22" fill="none" stroke="#132a4e" stroke-width="9"/><path d="M168 188h420M168 252h420" stroke="#132a4e" stroke-width="7"/><circle cx="232" cy="102" r="38" fill="none" stroke="#132a4e" stroke-width="8"/><text x="232" y="115" text-anchor="middle" font-family="Arial" font-size="40" font-weight="900" fill="#132a4e">$</text><rect x="498" y="76" width="90" height="52" rx="12" fill="none" stroke="#132a4e" stroke-width="8"/><text x="543" y="112" text-anchor="middle" font-family="Arial" font-size="28" font-weight="900" fill="#132a4e">$3</text><text x="380" y="390" text-anchor="middle" font-family="Arial" font-size="28" font-weight="900" fill="#132a4e">Buy · Pay · Count Change</text></svg>`;
    if(skill === "vocational") return `<svg viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg"><rect width="760" height="430" rx="28" fill="#fff"/><rect x="150" y="115" width="460" height="230" rx="28" fill="none" stroke="#132a4e" stroke-width="9"/><path d="M288 115v-34h184v34M228 194h96M228 249h96M408 194h124M408 249h124" stroke="#132a4e" stroke-width="8" stroke-linecap="round"/><circle cx="358" cy="194" r="15" fill="none" stroke="#132a4e" stroke-width="7"/><circle cx="358" cy="249" r="15" fill="none" stroke="#132a4e" stroke-width="7"/><text x="380" y="395" text-anchor="middle" font-family="Arial" font-size="28" font-weight="900" fill="#132a4e">Check In · Ask · Finish</text></svg>`;
  }
  return `<svg viewBox="0 0 760 430" xmlns="http://www.w3.org/2000/svg"><rect width="760" height="430" rx="28" fill="#fff"/><path d="M380 72l50 102 112 16-81 79 19 111-100-53-100 53 19-111-81-79 112-16z" fill="none" stroke="#132a4e" stroke-width="9"/><circle cx="255" cy="95" r="30" fill="none" stroke="#132a4e" stroke-width="8"/><circle cx="548" cy="110" r="32" fill="none" stroke="#132a4e" stroke-width="8"/><path d="M120 328c78-26 156-26 234 0s156 26 234 0" fill="none" stroke="#132a4e" stroke-width="9" stroke-linecap="round"/><text x="380" y="396" text-anchor="middle" font-family="Arial" font-size="28" font-weight="900" fill="#132a4e">${escLabel}</text></svg>`;
}
function printableHeader(title, sub=""){
  return `<div class="print-brand">Little Kids Learn & Play</div><h1 class="print-title">${escapeHtml(title)}</h1>${sub ? `<p class="print-sub">${escapeHtml(sub)}</p>` : ""}`;
}
function skillFooter(tip){
  return `<div class="home-practice"><strong>Practice at home:</strong><br>${escapeHtml(tip)}</div><div class="print-signature">Parent / caregiver initials:</div><div class="printable-watermark">Printable practice page only · no information is uploaded or saved online</div>`;
}
function studioPrintableMarkup(opts, mode="preview"){
  const title = studioTitle(opts.type);
  const skillLabel = printableSkillLabels[opts.skill] || "Learn & Play";
  const tip = printableSkillTips[opts.skill] || "Practice one skill with a grown-up.";
  const name = escapeHtml(opts.name || "Learner");
  const date = new Date().toLocaleDateString();
  const art = lineArtSvg(opts.theme, opts.skill);
  const small = mode === "preview" ? "print-sheet-preview" : "sheet";
  const words = skillWords(opts.skill);
  const scenarios = skillScenarios(opts.skill);
  if(opts.type === "coloring"){
    return `<main class="${small}">${printableHeader(`${skillLabel} Coloring Scene`, "Color the picture. Then talk about the skill with a grown-up.")}<div class="print-art real-coloring">${art}</div><div class="coloring-prompts"><strong>Talk about it:</strong><span>${escapeHtml(words.slice(0,4).join(" · "))}</span></div>${skillFooter(tip)}</main>`;
  }
  if(opts.type === "tracing"){
    const phrases = words.slice(0,6);
    return `<main class="${small}">${printableHeader(`${skillLabel} Trace & Write`, `${agePrompt(opts.age)} Trace the words. Then write them on the blank line.`)}<div class="trace-practice">${phrases.map(p=>`<div class="trace-row"><div class="trace-word">${escapeHtml(p)}</div><div class="trace-blank"></div></div>`).join("")}</div><div class="shape-trace-row"><span>Trace shapes:</span><svg viewBox="0 0 520 95"><circle cx="55" cy="48" r="32" fill="none" stroke="#132a4e" stroke-width="5" stroke-dasharray="8 8"/><rect x="130" y="17" width="62" height="62" fill="none" stroke="#132a4e" stroke-width="5" stroke-dasharray="8 8"/><path d="M285 18l38 64h-76z" fill="none" stroke="#132a4e" stroke-width="5" stroke-dasharray="8 8"/><path d="M418 13l14 29 32 4-23 23 6 32-29-15-29 15 6-32-23-23 32-4z" fill="none" stroke="#132a4e" stroke-width="5" stroke-dasharray="8 8"/></svg></div>${skillFooter(tip)}</main>`;
  }
  if(opts.type === "cutpaste"){
    const cards = scenarios.concat(words.slice(0,4));
    return `<main class="${small}">${printableHeader(`${skillLabel} Cut & Paste`, "Cut the cards. Paste them in the matching boxes or sort them with a grown-up.")}<div class="cut-section"><h2>Cut cards</h2><div class="cut-card-grid">${cards.map(c=>`<div class="cut-card">✂️ ${escapeHtml(c)}</div>`).join("")}</div></div><div class="paste-section"><h2>Paste here</h2><div class="paste-grid"><div>Safe / Helpful</div><div>Need help / Try again</div><div>First</div><div>Then</div></div></div>${skillFooter(tip)}</main>`;
  }
  if(opts.type === "matching"){
    const left = scenarios;
    const right = words.slice(0,4);
    return `<main class="${small}">${printableHeader(`${skillLabel} Match & Circle`, "Draw a line to match. Circle the best answer.")}<div class="match-sheet"><div>${left.map((x,i)=>`<div class="match-box">${i+1}. ${escapeHtml(x)}</div>`).join("")}</div><div>${right.map((x,i)=>`<div class="match-box choice">${String.fromCharCode(65+i)}. ${escapeHtml(x)}</div>`).join("")}</div></div><div class="write-prompt"><strong>My best choice:</strong><div class="write-box"></div></div>${skillFooter(tip)}</main>`;
  }
  if(opts.type === "firstthen"){
    return `<main class="${small}">${printableHeader("First / Then Board", "Write or draw what happens first and what comes next.")}<div class="first-then-board"><div><h2>FIRST</h2><div class="picture-box">Draw or write first step</div></div><div><h2>THEN</h2><div class="picture-box">Draw or write next step</div></div></div><div class="mini-token-row">${Array.from({length:5}).map((_,i)=>`<span>${i+1}</span>`).join("")}</div>${skillFooter(tip)}</main>`;
  }
  if(opts.type === "schedule"){
    const schedule = opts.skill === "vocational" ? ["Check in", "Ask task", "Work", "Break", "Clean up", "Check out"] : opts.skill === "daily" ? ["Wake up", "Bathroom", "Get dressed", "Eat", "Practice", "Clean up"] : ["Start", "Practice", "Ask", "Break", "Try again", "Finish"];
    return `<main class="${small}">${printableHeader("Visual Schedule Cards", "Cut out the cards or point to each step.")}<div class="schedule-cards">${schedule.map((s,i)=>`<div class="schedule-card"><span>${i+1}</span><strong>${escapeHtml(s)}</strong><div class="draw-icon"></div></div>`).join("")}</div><div class="cut-lines"><strong>Tip:</strong> Cut these out and place them in order.</div>${skillFooter(tip)}</main>`;
  }
  if(opts.type === "aacboard"){
    const aac = ["I want", "help", "more", "all done", "break", "yes", "no", "please", "my turn", "stop", "thank you", "try again"];
    return `<main class="${small}">${printableHeader("AAC Choice Board", "Point, tap, or say a word to communicate.")}<div class="aac-print-grid">${aac.map((w,i)=>`<div class="aac-print-cell"><div>${["🙋","🆘","➕","✅","☁️","👍","👎","🙏","🎲","🛑","⭐","🔁"][i]}</div><strong>${escapeHtml(w)}</strong></div>`).join("")}</div><div class="sentence-strip">I want ____________________. / I need ____________________.</div>${skillFooter(printableSkillTips.communication)}</main>`;
  }
  if(opts.type === "thermometer"){
    return `<main class="${small}">${printableHeader("Emotion Thermometer", "Color a level. Then choose a coping strategy.")}<div class="thermo-sheet"><div class="thermo-bar">${[5,4,3,2,1].map(n=>`<div><strong>${n}</strong><span>${["", "Calm", "A little upset", "Frustrated", "Very upset", "Need help now"][n]}</span></div>`).join("")}</div><div class="coping-list"><h2>When I feel big feelings, I can:</h2><ul><li>Take 3 breaths</li><li>Ask for help</li><li>Ask for a break</li><li>Use calm hands</li><li>Try again</li></ul></div></div>${skillFooter(printableSkillTips.calm)}</main>`;
  }
  if(opts.type === "token"){
    return `<main class="${small}">${printableHeader(`${skillLabel} Token Board`, "Earn a token for each practice step. Choose a simple home reward.")}<div class="token-row big">${Array.from({length:10}).map((_,i)=>`<div class="token-cell">${i+1}</div>`).join("")}</div><p class="reward-line">Reward I am working for: ___________________________</p><div class="task-lines"><strong>Practice steps:</strong><span>1.</span><span>2.</span><span>3.</span></div>${skillFooter(tip)}</main>`;
  }
  if(opts.type === "worksheet"){
    return `<main class="${small}">${printableHeader(`${skillLabel} Scenario Worksheet`, "Read each box. Draw or write the safe/helpful response.")}<div class="worksheet-grid real">${scenarios.map(item=>`<div class="worksheet-card"><strong>${escapeHtml(item)}</strong><div class="write-box"></div></div>`).join("")}</div><div class="word-bank"><strong>Word bank:</strong> ${escapeHtml(words.join(" · "))}</div>${skillFooter(tip)}</main>`;
  }
  if(opts.type === "certificate"){
    return `<main class="${small}">${printableHeader(`${skillLabel} Star Certificate`, `${name} practiced ${skillLabel.toLowerCase()} on ${date}.`)}<div class="certificate-badge">${printableSkillIcon[opts.skill] || "⭐"}</div><h2 class="certificate-name">${name}</h2><p class="print-sub">completed a Learn & Play practice activity.</p><div class="home-practice"><strong>I practiced:</strong><br>${escapeHtml(tip)}</div><div class="print-signature">Parent / caregiver signature:</div><div class="printable-watermark">Printable recognition only</div></main>`;
  }
  if(opts.type === "pack"){
    const session = todaysSession();
    return `<div class="print-pack"><main class="${small}">${printableHeader("Today’s Printable Pack", `Take-home practice for ${name}.`)}<div class="studio-pack-list"><div><strong>Date:</strong> ${escapeHtml(date)}</div><div><strong>Stars earned today:</strong> ${escapeHtml(session.stars || 0)}</div><div><strong>Lessons practiced:</strong><ul>${lessonListHtml()}</ul></div><div><strong>Skill focus:</strong> ${escapeHtml(skillLabel)} — ${escapeHtml(tip)}</div></div><div class="print-art real-coloring">${art}</div>${skillFooter("Pick one skill from today and practice it one more time for 2 minutes.")}</main><main class="${small}">${studioPrintableMarkup({...opts,type:"tracing"}, mode)}</main><main class="${small}">${studioPrintableMarkup({...opts,type:"token"}, mode)}</main></div>`;
  }
  return `<main class="${small}">${printableHeader(title)}<p class="print-sub">Choose a printable type to generate a page.</p></main>`;
}
function renderStudioPreview(){
  const opts = studioOptions();
  const preview = document.getElementById("studioPreview");
  const title = document.getElementById("studioPreviewTitle");
  if(title) title.textContent = studioTitle(opts.type);
  if(preview) preview.innerHTML = studioPrintableMarkup(opts, "preview");
}
function studioPrintCss(){
  return `body{font-family:Arial,sans-serif;background:#f8fbff;color:#132a4e;padding:20px}.sheet{max-width:820px;min-height:980px;margin:0 auto 26px;background:white;border:6px solid #132a4e;border-radius:28px;padding:34px;text-align:center;box-sizing:border-box;break-after:page}.print-brand{font-weight:900;color:#0f6070;text-transform:uppercase;letter-spacing:.14em;font-size:13px}.print-title{font-size:38px;line-height:1.02;letter-spacing:-.04em;margin:18px 0}.print-sub{color:#52617c;font-size:17px;line-height:1.45}.print-art{margin:24px auto;max-width:680px}.real-coloring svg,.coloring-svg svg{max-width:100%;height:auto}.coloring-prompts,.word-bank,.reward-line,.sentence-strip{border:3px dashed #ff9f43;border-radius:18px;padding:14px;margin:18px auto;background:#fff8e6;max-width:640px}.trace-practice{display:grid;gap:12px;margin:18px 0}.trace-row{display:grid;grid-template-columns:210px 1fr;gap:14px;align-items:end;text-align:left}.trace-word{font-size:36px;color:transparent;-webkit-text-stroke:1.5px #132a4e;letter-spacing:.04em}.trace-blank{border-bottom:3px dashed #b9c3d2;height:48px}.shape-trace-row{border:2px solid #e6edf6;border-radius:18px;padding:12px;margin:20px 0}.cut-card-grid,.schedule-cards,.aac-print-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.cut-card,.schedule-card,.aac-print-cell,.worksheet-card,.match-box,.paste-grid div{border:2px dashed #132a4e;border-radius:18px;padding:14px;background:#fff;min-height:70px}.paste-grid,.match-sheet{display:grid;grid-template-columns:1fr 1fr;gap:18px}.picture-box,.write-box,.draw-icon{height:86px;border:2px dashed #b9c3d2;border-radius:16px;margin-top:10px}.first-then-board{display:grid;grid-template-columns:1fr 1fr;gap:18px}.first-then-board>div{border:4px solid #132a4e;border-radius:24px;padding:20px}.mini-token-row{display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin:18px auto;max-width:420px}.mini-token-row span,.token-cell{aspect-ratio:1;border:3px dashed #132a4e;border-radius:22px;display:grid;place-items:center;font-weight:900}.token-row{display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin:28px auto;max-width:620px}.token-row.big .token-cell{font-size:32px;color:#d7dde7}.worksheet-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;text-align:left}.word-bank{text-align:left}.thermo-sheet{display:grid;grid-template-columns:220px 1fr;gap:24px;text-align:left}.thermo-bar{display:grid;gap:8px}.thermo-bar div{border:3px solid #132a4e;border-radius:16px;padding:10px;display:flex;gap:12px}.coping-list{border:2px solid #e6edf6;border-radius:20px;padding:18px}.certificate-badge{font-size:96px;margin:24px auto}.certificate-name{font-size:46px;border-bottom:3px solid #132a4e;display:inline-block;padding:0 30px}.home-practice{margin:24px auto;padding:16px;border:3px dashed #ff9f43;border-radius:20px;background:#fff8e6;max-width:640px}.print-signature{margin-top:30px;border-top:3px solid #132a4e;padding-top:10px;text-align:left}.studio-pack-list{display:grid;gap:10px;text-align:left;margin:22px auto;max-width:640px}.studio-pack-list div{border:2px solid #e6edf6;border-radius:16px;padding:12px;background:#fbfdff}.printable-watermark{font-size:12px;color:#667085;margin-top:22px}.task-lines{text-align:left;display:grid;gap:14px;margin:18px auto;max-width:580px}.task-lines span{border-bottom:2px dashed #b9c3d2;padding:10px}@media print{body{background:white;padding:0}.sheet{box-shadow:none;border-radius:18px;page-break-after:always}.print-pack .sheet:last-child{page-break-after:auto}}@media(max-width:700px){.worksheet-grid,.cut-card-grid,.schedule-cards,.aac-print-grid,.paste-grid,.match-sheet,.first-then-board,.thermo-sheet{grid-template-columns:1fr}.trace-row{grid-template-columns:1fr}}`;
}
function studioPrintHtml(){
  const opts = studioOptions();
  return `<!doctype html><html><head><meta charset="utf-8"><title>${escapeHtml(studioTitle(opts.type))}</title><style>${studioPrintCss()}</style></head><body onload="setTimeout(()=>window.print(),300)">${studioPrintableMarkup(opts, "print")}</body></html>`;
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


document.getElementById("weeklyPackBtn")?.addEventListener("click", () => document.getElementById("weeklyPack")?.scrollIntoView({behavior:"smooth", block:"start"}));
document.getElementById("activateWeeklyPack")?.addEventListener("click", () => { setWeeklyMode(true); document.getElementById("skillMap")?.scrollIntoView({behavior:"smooth", block:"start"}); });
document.getElementById("showAllGamesWeekly")?.addEventListener("click", () => { setWeeklyMode(false); document.getElementById("skillMap")?.scrollIntoView({behavior:"smooth", block:"start"}); });
document.getElementById("openWeeklyPrintables")?.addEventListener("click", () => {
  const type = document.getElementById("printType");
  const skill = document.getElementById("printSkill");
  if(type) type.value = "pack";
  if(skill && currentWeeklyPack?.skill) skill.value = currentWeeklyPack.skill;
  renderStudioPreview();
  openPrintableStudio();
  setToast("Weekly printable pack is ready.");
});

loadGames();
applySettings();


// V20 Printable Studio listeners
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
