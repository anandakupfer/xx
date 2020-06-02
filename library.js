//dictionaries
const reflections = {
  am: 'are',
  was: 'were',
  i: 'you',
  im: 'you are',
  id: 'you would',
  ive: 'you have',
  ill: 'you will',
  my: 'your',
  are: 'am',
  wasnt : 'weren’t',
  youve: 'i have',
  youre: 'i’m',
  youll: 'i’ll',
  your: 'my',
  yours: 'mine',
  you: 'me',
  me: 'you',
  myself: 'yourself',
  mine: 'yours'
};

var modifiers = [
  'very',
  'really',
  'kind of',
  'kinda',
  'sort of',
  'pretty',
  'just',
  'sorta',
  'slightly',
  'extremely',
  'at all',
  'recently',
  'so',
  'usually',
  'sometimes',
  'the past few days',
  'the past few weeks',
  'yesterday',
  'lately',
  'a bit',
  'somewhat',
  'occasionally',
  'i suppose',
  'i guess',
  'maybe'];

var connectives = [
  'but',
  'and',
  'or'];

var responses = {
  '(.*)?lonely(.*)?':
  ['i think a lot of people are dealing with loneliness at the moment.',
  'i think a lot of people are feeling alone at the moment.',
  'i hear you. i think a lot of people are feeling alone at the moment.'],

  '(.*)?alone(.*)?':
  ['i think a lot of people are dealing with loneliness at the moment.',
  'i think a lot of people are feeling alone at the moment.',
  'i hear you. i think a lot of people are feeling alone at the moment.'],

  '(.*)?isolat(.*)?':
  ['i think a lot of people are dealing with loneliness at the moment.',
  'i think a lot of people are feeling alone at the moment.',
  'i hear you. i think a lot of people are feeling alone at the moment.'],

  '(.*)?lockdown(.*)?':
  ['tell me how you’ve been dealing with the lockdown.',
  'how have you been dealing with the lockdown?'],

  '(.*)?quaran(.*)?':
  ['tell me how you’ve been dealing with the lockdown.',
  'how have you been dealing with the lockdown?'],

  '(.*)?pandemic(.*)?':
  ['how have you been responding to the pandemic?',
  'do you want to talk about the pandemic?'],

  '(.*)?disease(.*)?':
  ['how have you been responding to the pandemic?',
  'do you want to talk about the pandemic?'],

  '(.*)?corona(.*)?':
  ['how have you been responding to the pandemic?',
  'do you want to talk about the pandemic?'],

  '(.*)?virus(.*)?':
  ['how have you been responding to the pandemic?',
  'do you want to talk about the pandemic?'],

  '(.*)?covid(.*)?':
  ['how have you been responding to the pandemic?',
  'do you want to talk about the pandemic?'],

  '(.*)?fear(.*)?':
  ['it’s an uncertain time.',
  'things have been scary recently.',
  'i think a lot of people are scared right now.'],

  '(.*)?unhappy(.*)?':
  ['i hear you. have you tried talking to anyone about this?',
  'i hear you. have you shared this with anyone?'],

  '(.*)?sad(.*)?':
  ['i hear you. have you tried talking to anyone about this?',
  'i hear you. have you shared this with anyone?'],

  '(.*)?depress(.*)?':
  ['i hear you. have you tried talking to anyone about this?',
  'i hear you. have you shared this with anyone?'],

  '(.*)?afraid(.*)?':
  ['it’s an uncertain time.',
  'things have been scary recently.',
  'i think a lot of people are scared right now.'],

  '(.*)?scare(.*)?':
  ['it’s an uncertain time.',
  'things have been scary recently.',
  'i think a lot of people are scared right now.'],

  '(.*)?i need (.*)?':
   ['why do you need xx?',
    'would it really help you to get xx?',
    'are you sure you need xx?'],

  '(.*)?i miss (.*)?':
   ['how long have you been missing xx?',
    'how long has it been?',
    'why do you think you miss xx?'],

  '(.*)?i wish(.*)?':
    ['why do you wish xx?',
    'what would you do if xx?'],

  '(.*)?i cant wait(.*)?':
    ['how long have you been waiting xx?'],

  '(.*)?why cant i (.*)?':
   ['do you think you should be able to xx?',
    'if you could xx, what would you do?',
    'i don’t know — why can’t you xx?',
    'have you really tried?'],

  '(.*)?i cant (.*)?':
   ['how do you know you can’t xx?',
    'perhaps you could xx if you tried.',
    'what would it take for you to xx?'],

  '(.*)?i am (.*)?':
   ['did you come to me because you’re xx?',
    'how long have you been xx?',
    'how do you feel about being xx?'],

  '(.*)?im feeling (.*)?':
   ['tell me more about these feelings.',
    'do you often feel xx?',
    'when do you usually feel xx?',
    'when you feel xx, what do you do?'],

  '(.*)?im (.*)?':
  ['did you come to me because you’re xx?',
   'how long have you been xx?',
   'how do you feel about being xx?'],

  '(.*)?ive been feeling (.*)?':
   ['tell me more about these feelings.',
    'do you often feel xx?',
    'when do you usually feel xx?',
    'when you feel xx, what do you do?'],

  '(.*)?ive been (.*)?':
   ['did you come to me because you are xx?',
    'how long have you been xx?'],

  '(.*)?i havent been (.*)?':
   ['do you know why you haven’t been xx?',
    'how long have you not been xx?'],

  '(.*)?ive not been (.*)?':
   ['do you know why you haven’t been xx?',
    'how long have you not been xx?'],

  '(.*)?are you (.*)?':
   ['why does it matter whether i am xx?',
    'would you prefer it if i were not xx?',
    'perhaps you believe i am xx.',
    'i may be xx — what do you think?'],

  '(.*)?what (.*)?':
   ['why do you ask?',
    'how would an answer to that help you?',
    'what do you think?'],

  '(.*)?how (.*)?':
   ['how do you suppose?',
    'perhaps you can answer your own question.',
    'what is it you’re really asking?'],

  '(.*)?why (.*)?':
   ['do you have any idea?',
    'perhaps you can answer your own question.',
    'what is it you’re really asking?'],

  '(.*)?because (.*)?':
   ['is that the real reason?',
    'what other reasons come to mind?',
    'does that reason apply to anything else?',
    'if xx, what else must be true?'],

  '(.*)? sorry (.*)?':
   ['there are many times when no apology is needed.',
    'what feelings do you have when you apologize?'],

  '(.*)?hello (.*)?':
   ['hello… i’m glad you could drop by today.',
    'hi there… how are you today?',
    'hello, how are you feeling today?'],

  '(.*)?hi (.*)?':
   ['hello… i’m glad you could drop by today.',
    'hi there… how are you today?',
    'hello, how are you feeling today?'],

  '(.*)?i think (.*)?':
   ['do you doubt xx?',
    'do you really think so?',
    'but you’re not sure xx?'],

  '(.*)? friend (.*)?':
   ['tell me more about your friends.',
    'when you think of a friend, what comes to mind?',
    'why don’t you tell me about a childhood friend?'],

  'yes':
   ['ok. could you tell me more?',
    'ok. can you elaborate a bit?'],

  'yeah':
   ['ok. could you tell me more?',
    'ok. can you elaborate a bit?'],

  '(.*)?is it (.*)?':
   ['do you think it is xx?',
    'perhaps it’s xx — what do you think?',
    'if it were xx, what would you do?',
    'it could well be that xx.'],

  '(.*)?can i (.*)?':
   ['perhaps you don’t want to xx.',
    'do you want to be able to xx?',
    'if you could xx, would you?'],

  '(.*)?you are (.*)?':
   ['why do you think i am xx?',
    'does it please you to think that i’m xx?',
    'perhaps you would like me to be xx.',
    'perhaps you’re really talking about yourself?'],

  '(.*)?youre (.*)?':
   ['why do you say i am xx?',
    'why do you think i am xx?',
    'are we talking about you, or me?'],

  '(.*)?i dont (.*)?':
   ['don’t you really xx?',
    'why don’t you xx?',
    'do you want to xx?'],

  '(.*)?i feel (.*)?':
   ['good, tell me more about these feelings.',
    'do you often feel xx?',
    'when do you usually feel xx?',
    'when you feel xx, what do you do?'],


  '(.*)?i have (.*)?':
   ['why do you tell me that you’ve xx?',
    'have you really xx?',
    'now that you have xx, what will you do next?'],

  '(.*)?i would (.*)?':
   ['could you explain why you would xx?',
    'why would you xx?',
    'who else knows that you would xx?'],

  '(.*)?is there (.*)?':
   ['do you think there is xx?',
    'it’s likely that there is xx.',
    'would you like there to be xx?'],

  '(.*)?you (.*)?':
   ['we should be discussing you, not me.',
    'why do you say that about me?',
    'why do you care whether i xx?'],

  '(.*)?why (.*)?':
   ['why don’t you tell me the reason why xx?',
    'why do you think xx?'],

  '(.*)?i want (.*)?':
   ['what would it mean to you if you got xx?',
    'why do you want xx?',
    'what would you do if you got xx?',
    'if you got xx, then what would you do?'],

  '(.*)? mother(.*)?':
   ['tell me more about your mother.',
    'tell me about your relationship with your mother?',
    'how do you feel about your mother?',
    'how does this relate to your feelings today?',
    'good family relations are important.'],

  '(.*)? father(.*)?':
   ['tell me more about your father.',
    'how did your father make you feel?',
    'how do you feel about your father?',
    'does your relationship with your father relate to your feelings today?',
    'do you have trouble showing affection with your family?'],

  '(.*)? mum(.*)?':
   ['tell me more about your mother.',
    'tell me about your relationship with your mother?',
    'how do you feel about your mother?',
    'how does this relate to your feelings today?',
    'good family relations are important.'],

  '(.*)? dad(.*)?':
   ['tell me more about your father.',
    'how did your father make you feel?',
    'how do you feel about your father?',
    'does your relationship with your father relate to your feelings today?',
    'do you have trouble showing affection with your family?'],

  '(.*)? child(.*)?':
   ['did you have close friends as a child?',
    'what is your favorite childhood memory?',
    'do you remember any dreams or nightmares from childhood?',
    'did the other children sometimes tease you?',
    'how do you think your childhood experiences relate to your feelings today?'],

  'quit':
  ['thank you for talking to me. good luck.',
  'it was good talking to you'],

  'bye':
   ['thank you for talking to me. good luck.',
   'it was good talking to you'],

  'goodbye':
  ['thank you for talking to me. good luck.',
  'it was good talking to you'],
};

var standard = [
'please tell me more.',
'go on.',
'can you elaborate on that?',
'please continue.',
'i see. please tell me more.',
];
