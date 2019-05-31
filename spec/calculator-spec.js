import { Calculator } from './../src/calculator.js';

describe('Calculator', function() {

  it("should return the user's age on Earth", function() {
    let age = 18;
    expect(calculator.ageOnEarth).toEqual(18);
  });

});
