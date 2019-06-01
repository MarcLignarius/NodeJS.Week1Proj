import { Calculator } from './calculator.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    let birthdate = $("input#birthdate").val().toString();
    let calculator = new Calculator(new Date(birthdate));
    let ageOnMercury = calculator.ageOnMercury();
    let ageOnVenus = calculator.ageOnVenus();
    let ageOnEarth = calculator.ageOnEarth();
    let ageOnMars = calculator.ageOnMars();
    let ageOnJupiter = calculator.ageOnJupiter();
    $(".ageOnMercury").text(ageOnMercury);
    $(".ageOnVenus").text(ageOnVenus);
    $(".ageOnEarth").text(ageOnEarth);
    $(".ageOnMars").text(ageOnMars);
    $(".ageOnJupiter").text(ageOnJupiter);
    $("#output").show();
  });
});
