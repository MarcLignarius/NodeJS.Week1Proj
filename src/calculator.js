// export function calculator() {
//   let today = new Date();
//   return today;
// }

export function calculator() {
  const mercury = 0.24;
  const venus = 0.62;
  const earth = 1;
  const mars = 1.88;
  const jupiter = 11.86;

  let ageString = moment("19831107", "YYYYMMDD").fromNow().toString();
  console.log("ageString", ageString)
  let age = parseInt(ageString.slice(0, ageString.length -10));
  console.log("age", age)


  let ageOnMercury = Math.floor(age / mercury);
  console.log("ageOnMercury", ageOnMercury);
  let ageOnVenus = Math.floor(age / venus);
  console.log("ageOnVenus", ageOnVenus);
  let ageOnEarth = Math.floor(age / earth);
  console.log("ageOnEarth", ageOnEarth);
  let ageOnMars = Math.floor(age / mars);
  console.log("ageOnMars", ageOnMars);
  let ageOnJupiter = Math.floor(age / jupiter);
  console.log("ageOnJupiter", ageOnJupiter);
}
