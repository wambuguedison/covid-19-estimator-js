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
  const currentlyInfected = data.reportedCases * 10;
  output.impact.currentlyInfected = currentlyInfected;

  const severelyInfected = data.reportedCases * 50;
  output.severeImpact.currentlyInfected = severelyInfected;

  const days = data.timeToElapse;
  output.impact.infectionsByRequestedTime = infectionsAtaTime(currentlyInfected, days);
  output.severeImpact.infectionsByRequestedTime = infectionsAtaTime(severelyInfected, days);

  output.data = data;
  return output;
};

export default covid19ImpactEstimator;
