function convert() {
  const input = document.getElementById('tempInput').value;
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const errorMsg = document.getElementById('errorMsg');

  // Validate input
  if (input === '' || isNaN(input)) {
    errorMsg.classList.add('show');
    return;
  }

  errorMsg.classList.remove('show');

  const temp = parseFloat(input);
  let celsius, fahrenheit, kelvin;

  // Convert everything to Celsius first
  if (unit === 'celsius') {
    celsius = temp;
    fahrenheit = (temp * 9/5) + 32;
    kelvin = temp + 273.15;
  } else if (unit === 'fahrenheit') {
    celsius = (temp - 32) * 5/9;
    fahrenheit = temp;
    kelvin = celsius + 273.15;
  } else if (unit === 'kelvin') {
    celsius = temp - 273.15;
    fahrenheit = (celsius * 9/5) + 32;
    kelvin = temp;
  }

  // Display results (rounded to 2 decimal places)
  document.getElementById('celsiusVal').textContent = celsius.toFixed(2) + ' °C';
  document.getElementById('fahrenheitVal').textContent = fahrenheit.toFixed(2) + ' °F';
  document.getElementById('kelvinVal').textContent = kelvin.toFixed(2) + ' K';

  // Highlight the input unit card
  document.querySelectorAll('.result-card').forEach(card => {
    card.classList.remove('highlight');
  });
  document.getElementById(unit + 'Result').classList.add('highlight');
}

function reset() {
  document.getElementById('tempInput').value = '';
  document.getElementById('celsiusVal').textContent = '—';
  document.getElementById('fahrenheitVal').textContent = '—';
  document.getElementById('kelvinVal').textContent = '—';
  document.getElementById('errorMsg').classList.remove('show');
  document.querySelectorAll('.result-card').forEach(card => {
    card.classList.remove('highlight');
  });
  document.querySelector('input[name="unit"][value="celsius"]').checked = true;
}