
function saturdayFun(activity = `roller-skate`){
    return `This Saturday, I want to ${activity}!`;
};

const mondayWork = function(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
};

String= `*a hard worker!*`;
highlightChar = `|a dedicated programmer|!`;
function wrapAdjective(highlightChar) {
  return function(adjective) {
    return `You are ${highlightChar}${adjective}${highlightChar}!`;
  };
}