const output = {
  data: {},
  impact: {},
  severeImpact: {}
};

const infectionsAtaTime = (currentlyInfected, days) => {
  let setsOfDays = (days / 3).toFixed();
  setsOfDays = Number(setsOfDays);
  return currentlyInfected * (2 ** setsOfDays);
};

const covid19ImpactEstimator = (data) => {
  let currentlyInfected = data['reportedCases'] * 10;
  output.impact.currentlyInfected = currentlyInfected;
    
  let severelyInfected = data['reportedCases'] * 50;
  output.severeImpact.currentlyInfected = severelyInfected;

  output.impact.infectionsByRequestedTime = infectionsAtaTime(output.impact.currentlyInfected, data.timeToElapse);
  output.severeImpact.infectionsByRequestedTime = infectionsAtaTime(output.severeImpact.currentlyInfected, data.timeToElapse);
  
  return data;
};

export default covid19ImpactEstimator;
