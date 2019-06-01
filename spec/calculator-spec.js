import { Calculator } from './../src/Calculator.js';

describe('Calculator', function() {

    it('should calculate age on Earth', function ()
    {
        let birthdate = new Calculator(new Date(1983, 7, 11));
        let ageOnEarth = birthdate.ageOnEarth();
        expect(ageOnEarth).toEqual(35);
    });

    it('should calculate age on Mercury', function ()
    {
        let birthdate = new Calculator(new Date(1983, 11, 7));
        let ageOnMercury = birthdate.ageOnMercury();
        expect(ageOnMercury).toEqual(145);
    });

    it('should calculate age on Venus', function ()
    {
        let birthdate = new Calculator(new Date(1983, 11, 7));
        let ageOnVenus = birthdate.ageOnVenus();
        expect(ageOnVenus).toEqual(56);
    });

    it('should calculate age on Mars', function ()
    {
        let birthdate = new Calculator(new Date(1983, 11, 7));
        let ageOnMars = birthdate.ageOnMars();
        expect(ageOnMars).toEqual(18);
    });

    it('should calculate age on Jupiter', function ()
    {
        let birthdate = new Calculator(new Date(1983, 11, 7));
        let ageOnJupiter = birthdate.ageOnJupiter();
        expect(ageOnJupiter).toEqual(2);
    });

});
