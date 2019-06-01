export class Calculator
{
  constructor(date)
  {
    this.date = new Date(date);
  }

  ageOnEarth()
  {
    let ageInMilliseconds = new Date() - this.date.getTime();
    let ageInYears = new Date(ageInMilliseconds);
    return Math.abs(ageInYears.getUTCFullYear() - 1970);
  }

  ageOnMercury()
  {
    const mercuryYears = 0.24;
    let earthAge = this.ageOnEarth();
    let mercuryAge = Math.floor(earthAge / mercuryYears);
    return mercuryAge;
  }

  ageOnVenus()
  {
    const venusYears = 0.62;
    let earthAge = this.ageOnEarth();
    let venusAge = Math.floor(earthAge / venusYears);
    return venusAge;
  }

  ageOnMars()
  {
    const marsYears = 1.88;
    let earthAge = this.ageOnEarth();
    let marsAge = Math.floor(earthAge / marsYears);
    return marsAge;
  }

  ageOnJupiter()
  {
    const jupiterYears = 11.86;
    let earthAge = this.ageOnEarth();
    let jupiterAge = Math.floor(earthAge / jupiterYears);
    return jupiterAge;
  }

}
