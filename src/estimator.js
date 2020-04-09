const output = {
  data: {},
  impact: {},
  severeImpact: {}
};

const infectionsAtaTime = (currentlyInfected, days, data) => {
  let normalisedDays;
  if (data.periodType === "days") {
    normalisedDays = days;
  }
  if (data.periodType === "weeks") {
    normalisedDays = days * 7;
  }
  if (data.periodType === "months") {
    normalisedDays = days * 30;
  }
  let setsOfDays = (normalisedDays / 3).toFixed();
  setsOfDays = Number(setsOfDays);
  return currentlyInfected * (2 ** setsOfDays);
};

const covid19ImpactEstimator = (data) => {
  const currentlyInfected = data.reportedCases * 10;
  output.impact.currentlyInfected = currentlyInfected;

  const severelyInfected = data.reportedCases * 50;
  output.severeImpact.currentlyInfected = severelyInfected;

  const days = data.timeToElapse;
  output.impact.infectionsByRequestedTime = infectionsAtaTime(currentlyInfected, days, data);
  output.severeImpact.infectionsByRequestedTime = infectionsAtaTime(severelyInfected, days, data);

  output.data = data;
  return output;
};

export default covid19ImpactEstimator;
