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
  // challenge 1
  const currentlyInfected = data.reportedCases * 10;
  output.impact.currentlyInfected = currentlyInfected;

  const severelyInfected = data.reportedCases * 50;
  output.severeImpact.currentlyInfected = severelyInfected;

  const days = data.timeToElapse;
  output.impact.infectionsByRequestedTime = infectionsAtaTime(currentlyInfected, days, data);
  output.severeImpact.infectionsByRequestedTime = infectionsAtaTime(severelyInfected, days, data);

  // challenge 2
  const infections = output.impact.infectionsByRequestedTime;
  const severeInfections = output.severeImpact.infectionsByRequestedTime;
  output.impact.severeCasesByRequestedTime = (15 / 100) * infections;
  output.severeImpact.severeCasesByRequestedTime = (15 / 100) * severeInfections;

  const totalBeds = data.totalHospitalBeds;
  const availableBeds = (35 / 100) * totalBeds;

  const cases = output.impact.severeCasesByRequestedTime;
  const severeCases = output.severeImpact.severeCasesByRequestedTime;

  output.impact.hospitalBedsByRequestedTime = availableBeds - cases;
  output.severeImpact.hospitalBedsByRequestedTime = availableBeds - severeCases;
  // const hospitalBeds = availableBeds - severeCases;

  output.data = data;
  return output;
};

module.exports = covid19ImpactEstimator;
