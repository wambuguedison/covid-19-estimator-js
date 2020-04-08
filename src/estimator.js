const output = {
<<<<<<< HEAD
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
=======
    data: {},
    impact: {},
    severeImpact: {}
}

const infectionsAtaTime = (currentlyInfected, days) => {
    let setsOfDays = (days / 3).toFixed();
    setsOfDays = Number(setsOfDays);
    return currentlyInfected * (Math.pow(2, setsOfDays));
}

const covid19ImpactEstimator = (data) => {
    let currentlyInfected = data['reportedCases'] * 10;
    output.impact.currentlyInfected = currentlyInfected;
    
    let severelyInfected = data['reportedCases'] * 50;
    output.severeImpact.currentlyInfected = severelyInfected;

    output.impact.infectionsByRequestedTime = infectionsAtaTime(output.impact.currentlyInfected, data.timeToElapse);
    output.severeImpact.infectionsByRequestedTime = infectionsAtaTime(output.severeImpact.currentlyInfected, data.timeToElapse);
>>>>>>> d26ac88636054eb5f7b6a7a232f119fe0fb2d649
};

export default covid19ImpactEstimator;
