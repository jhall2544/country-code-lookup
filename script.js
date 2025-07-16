document.getElementById("search-btn").addEventListener("click", () => {
  const code = document.getElementById("code-input").value.trim();
  const data = countryCodes[code];

  const flagEl = document.getElementById("flag");
  const nameEl = document.getElementById("country-name");
  const warningEl = document.getElementById("warning-message");

  if (data) {
    nameEl.textContent = data.name;

    // Show flag
    const flagEmoji = getFlagEmoji(data.name);
    flagEl.textContent = flagEmoji;

    // Handle warning
    if (data.warning === "red") {
      warningEl.textContent = "🚫 Do Not Call";
      warningEl.className = "red-warning";
    } else if (data.warning === "yellow") {
      warningEl.textContent = "⚠️ Caution – Escalate During Qualification";
      warningEl.className = "yellow-warning";
    } else {
      warningEl.textContent = "";
      warningEl.className = "";
    }

  } else {
    nameEl.textContent = "❌ Country not found";
    flagEl.textContent = "";
    warningEl.textContent = "";
  }
});

// Convert country name to ISO → emoji flag
function getFlagEmoji(countryName) {
  const countryToISO = {
    "India": "IN",
    "Afghanistan": "AF",
    "Belarus": "BY",
    "Serbia": "RS",
    "China": "CN",
    "Venezuela": "VE",
    "United States": "US",
    "United Kingdom": "GB",
    "France": "FR",
    "Germany": "DE"
    // Add more mappings if needed
  };

  const iso = countryToISO[countryName];
  if (!iso) return "🌐";

  return [...iso.toUpperCase()].map(c =>
    String.fromCodePoint(127397 + c.charCodeAt())
  ).join('');
}
