function getSleepHours(day) {
switch (day) {
  case 'Monday':
    return 7;
  case 'Tuesday':
    return 6;
  case 'Wednesday':
    return 7;
  case 'Thursday':
    return 7;
  case 'Friday':
    return 8;
  case 'Saturday':
    return 8;
  case 'Sunday':
    return 10;
  }
}

function getActualSleepHours() {
  return getSleepHours('Monday') +
    getSleepHours('Tuesday') +
    getSleepHours('Wednesday') +
    getSleepHours('Thursday') +
    getSleepHours('Friday') +
    getSleepHours('Saturday') +
    getSleepHours('Sunday')
}

function getIdealSleepHours() {
  var idealHours = 8
  return idealHours * 7
}

function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep!")
  } else if (actualSleepHours < idealSleepHours) {
    console.log("You need more sleep!")
  } else {
    console.log("You got more sleep than you need!")
  }

  console.log("Your Sleep Debt is: " + 
  (idealSleepHours - actualSleepHours + " hours"));
}

calculateSleepDebt();