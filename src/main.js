import { calculator } from './calculator';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#calculator-form').submit(function(event) {
    event.preventDefault();
    var birthdate = $('#birthdate').val();
    var output = calculator(birthdate);
    $('#result').text(output);
  });
});
