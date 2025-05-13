window.onload = function() {
  initPage();
};

function initPage() {
  verstecken([".eng0", ".eng1", ".eng2", ".fra", ".eng3",, ".ori"]);
  anzeigen([".de"]);
}

function verstecken(selectors) {
  selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(element => element.style.display = "none");
  });
}

function anzeigen(selectors) {
  selectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(element => element.style.display = "");
  });
}

const zielElements = [
  { id: 'Buch1', func: bTest, index: 1 },
  { id: 'Buch2', func: bTest, index: 2 },
  { id: 'Buch3', func: bTest, index: 3 },
  { id: 'Buch4', func: bTest, index: 4 },
  { id: 'Buch5', func: bTest, index: 5 },
  { id: 'Buch6', func: bTest, index: 6 },

];

zielElements.forEach(ziel => {
  new IntersectionObserver(eintragungen => ziel.func(eintragungen, ziel.index)).observe(document.querySelector(`#${ziel.id}`));
});

function bTest(eintragungen, index) {
  eintragungen.forEach(entry => {
      const element = document.querySelector(`#b${index}`);
      if (entry.isIntersecting) {
          element.style.verticalAlign = "sub";
          element.style.fontWeight = "bold";
          element.style.fontSize = "x-large";
      } else {
          element.style.verticalAlign = "sub";
          element.style.fontWeight = "normal";
          element.style.fontSize = "small";
      }
  });
}

function toggleDisplay(id, buttonId, openSymbol, closeSymbol) {
  const element = document.getElementById(id);
  const button = document.getElementById(buttonId);
  if (element.style.display === 'none') {
      element.style.display = 'block';
      button.innerHTML = openSymbol;
  } else {
      element.style.display = 'none';
      button.innerHTML = closeSymbol;
  }
}

const toggleFunctions = [
  { id: 'Buch1', buttonId: 'b1a', openSymbol: '&#8678;', closeSymbol: '&#8681;' },
  { id: 'Buch2', buttonId: 'b2a', openSymbol: '&#8678;', closeSymbol: '&#8681;' },
  { id: 'Buch3', buttonId: 'b3a', openSymbol: '&#8678;', closeSymbol: '&#8681;' },
  { id: 'Buch4', buttonId: 'b4a', openSymbol: '&#8678;', closeSymbol: '&#8681;' },
  { id: 'Buch5', buttonId: 'b5a', openSymbol: '&#8678;', closeSymbol: '&#8681;' },
  { id: 'Buch6', buttonId: 'b6a', openSymbol: '&#8678;', closeSymbol: '&#8681;' },

];

toggleFunctions.forEach(toggle => {
  window[`b${toggle.id.replace('Buch', '')}ausblenden`] = function() {
      toggleDisplay(toggle.id, toggle.buttonId, toggle.openSymbol, toggle.closeSymbol);
  };
});

function toggleLanguageDisplay(className, buttonId, farbe) {
  const elements = document.querySelectorAll(className);
  const button = document.getElementById(buttonId);
  elements.forEach(element => {
      if (element.style.display === 'none') {
          element.style.display = 'block';
          button.style.backgroundColor = farbe;
      } else {
          element.style.display = 'none';
          button.style.backgroundColor = '';
          document.getElementById("b_de").style.backgroundColor = "var(--defarbe)"
      }
  });
}

function de_an_aus() {
  toggleLanguageDisplay('.de', 'b_de', '');
}

function eng0_an_aus() {
  toggleLanguageDisplay('.eng0', 'b_eng0', 'var(--eng0farbe)');
}

function eng1_an_aus() {
  toggleLanguageDisplay('.eng1', 'b_eng1', 'var(--eng1farbe)');
}

function eng2_an_aus() {
  toggleLanguageDisplay('.eng2', 'b_eng2', 'var(--eng2farbe)');
}

function eng3_an_aus() {
  toggleLanguageDisplay('.eng3', 'b_eng3', 'var(--eng3farbe)');
}

function fra_an_aus() {
  toggleLanguageDisplay('.fra', 'b_fra', 'var(--frafarbe)');
}
function ori_an_aus() {
  toggleLanguageDisplay('.ori', 'b_ori', 'var(--orifarbe)');
}

document.getElementById("b_spra_text").innerHTML = "Sprachen &#8595;";
document.querySelectorAll(".klappe").forEach(klappe => {
  klappe.addEventListener("click", function() {
      this.classList.toggle("active");
      const feld = this.nextElementSibling;
      if (feld.style.display === "block") {
          feld.style.display = "none";
          document.getElementById("b_spra_text").innerHTML = "Sprachen &#8595;";
      } else {
          feld.style.display = "block";
          document.getElementById("b_spra_text").innerHTML = "X";
      }
  });
});
