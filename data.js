var scheme = ['strength', 'couplet', 'triplet', 'chipper'];
var time = ['timed', 'amrap', 'emom', 'tabata'];
var repetitions = {'low' : 1, 'medium' : 2, 'high' : 3};
var duration = {'sprint' : 1, 'short' : 2, 'medium' : 3, 'long' : 4};
var load = {'light' : 1, 'medium' : 2, 'heavy' : 3};
var modality = ['m', 'g', 'w', 'mg', 'mw', 'gw', 'mgw'];
var movements = {
  'monostructural' : ['bike', 'double under', 'row meters', 'row calories', 'run'],
  'gymnastics' : ['abmat sit-up', 'air squat', 'bar facing burpee', ' bar muscle-up',
                  'box jump', 'burpee', 'burpee box jump over', 'chest-to-bar pull-up',
                  'ghd sit-up', 'handstand push-up', 'ring muscle-up', 'pull-up',
                  'push-up', 'ring dip', 'rope climb', 'strict pull-up', 'toes-to-bar'],
  'weightlifting' : ['back squat', 'bench press', 'clean', 'clean and jerk',
                    'deadlift', 'dumbbell front rack walking lunge', 'dumbbell power clean',
                    'dumbbell snatch', 'front squat', 'hang power clean',
                    'hang power snatch', 'hang squat clean', 'jerk', 'kettlebell swing',
                    'overhead squat', 'power clean', 'power snatch', 'push jerk',
                    'push press', 'russian kettlebell swing', 'shoulder press',
                    'shoulder-to-overhead', 'snatch', 'snatch balance', 'split jerk',
                    'squat clean', 'squat snatch', 'strict press', 'sumo deadlift high-pull',
                    'thruster', 'wall ball', 'weighted pull-up']
  };
  var allMovements = ['bike', 'double under', 'row meters', 'row calories', 'run',
                  'abmat sit-up', 'air squat', 'bar facing burpee', 'bar muscle-up',
                  'box jump', 'burpee', 'burpee box jump over', 'chest-to-bar pull-up',
                  'ghd sit-up', 'handstand push-up', 'ring muscle-up', 'pull-up',
                  'push-up', 'ring dip', 'rope climb', 'strict pull-up', 'toes-to-bar',
                  'back squat', 'bench press', 'clean', 'clean and jerk',
                  'deadlift', 'dumbbell front rack walking lunge', 'dumbbell power clean',
                  'dumbbell snatch', 'front squat', 'hang power clean',
                  'hang power snatch', 'hang squat clean', 'jerk', 'kettlebell swing',
                  'overhead squat', 'power clean', 'power snatch', 'push jerk',
                  'push press', 'russian kettlebell swing', 'shoulder press',
                  'shoulder-to-overhead', 'snatch', 'snatch balance', 'split jerk',
                  'squat clean', 'squat snatch', 'strict press', 'sumo deadlift high-pull',
                  'thruster', 'wall ball', 'weighted pull-up'];
var muscleGroup = ['shoulders', 'bicep', 'tricep', 'forearm', 'trapezius', 'upper-back',
                    'lower-back', 'abdominals', 'gluteus', 'hamstrings', 'quadriceps',
                    'calves'];
var muscleScore = {
  'bike' : [1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1],
  'double under' : [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  'row meters' : [0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0],
  'row calories' : [0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0],
  'run' : [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
  'abmat sit-up' : [],
  'air squat' : [],
  'bar facing burpee' : [],
  'bar muscle-up' : [],
  'box jump' : [],
  'burpee' : [],
  'burpee box jump over' : [],
  'chest-to-bar pull-up' : [],
  'ghd sit-up' : [],
  'handstand push-up' : [],
  'ring muscle-up' : [],
  'pull-up' : [],
  'push-up' : [],
  'ring dip' : [],
  'rope climb' : [],
  'strict pull-up' : [],
  'toes-to-bar' : [],
  'back squat' : [],
  'bench press' : [],
  'clean' : [],
  'clean and jerk' : [],
  'deadlift' : [],
  'dumbbell front rack walking lunge' : [],
  'dumbbell power clean' : [],
  'dumbbell snatch' : [],
  'front squat' : [],
  'hang power clean' : [],
  'hang power snatch' : [],
  'hang squat clean' : [],
  'jerk' : [],
  'kettlebell swing' : [],
  'overhead squat' : [],
  'power clean' : [],
  'power snatch' : [],
  'push jerk' : [],
  'push press' : [],
  'russian kettlebell swing' : [],
  'shoulder press' : [],
  'shoulder-to-overhead' : [],
  'snatch' : [],
  'snatch balance' : [],
  'split jerk' : [],
  'squat clean' : [],
  'squat snatch' : [],
  'strict press' : [],
  'sumo deadlift high-pull' : [],
  'thruster' : [],
  'wall ball' : [],
  'weighted pull-up' : []
}
