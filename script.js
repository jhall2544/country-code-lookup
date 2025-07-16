function lookupCountry() {
  const input = document.getElementById("codeInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!input) {
    resultDiv.textContent = "Please enter a country code.";
    return;
  }

  const country = countryCodes[input];

  if (country) {
    resultDiv.textContent = `Country: ${country}`;
  } else {
    resultDiv.textContent = "Country not found for this code.";
  }
}