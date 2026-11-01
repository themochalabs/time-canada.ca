
const regions = [
  {
    id: "BC",
    name: "British Columbia",
    cities: [
      ["Vancouver", "America/Vancouver"],
      ["Abbotsford", "America/Vancouver"],
      ["Armstrong", "America/Vancouver"],
      ["Burnaby", "America/Vancouver"],
      ["Campbell River", "America/Vancouver"],
      ["Castlegar", "America/Vancouver"],
      ["Chilliwack", "America/Vancouver"],
      ["Colwood", "America/Vancouver"],
      ["Coquitlam", "America/Vancouver"],
      ["Courtenay", "America/Vancouver"],
      ["Cranbrook", "America/Vancouver"],
      ["Dawson Creek", "America/Dawson_Creek"],
      ["Delta", "America/Vancouver"],
      ["Duncan", "America/Vancouver"],
      ["Enderby", "America/Vancouver"],
      ["Fernie", "America/Vancouver"],
      ["Fort St. John", "America/Dawson_Creek"],
      ["Grand Forks", "America/Vancouver"],
      ["Greenwood", "America/Vancouver"],
      ["Kamloops", "America/Vancouver"],
      ["Kelowna", "America/Vancouver"],
      ["Kimberley", "America/Vancouver"],
      ["Langford", "America/Vancouver"],
      ["Langley", "America/Vancouver"],
      ["Maple Ridge", "America/Vancouver"],
      ["Merritt", "America/Vancouver"],
      ["Mission", "America/Vancouver"],
      ["Nanaimo", "America/Vancouver"],
      ["Nelson", "America/Vancouver"],
      ["New Westminster", "America/Vancouver"],
      ["North Vancouver", "America/Vancouver"],
      ["Parksville", "America/Vancouver"],
      ["Penticton", "America/Vancouver"],
      ["Pitt Meadows", "America/Vancouver"],
      ["Port Alberni", "America/Vancouver"],
      ["Port Coquitlam", "America/Vancouver"],
      ["Port Moody", "America/Vancouver"],
      ["Powell River", "America/Vancouver"],
      ["Prince George", "America/Vancouver"],
      ["Prince Rupert", "America/Vancouver"],
      ["Quesnel", "America/Vancouver"],
      ["Revelstoke", "America/Vancouver"],
      ["Richmond", "America/Vancouver"],
      ["Rossland", "America/Vancouver"],
      ["Salmon Arm", "America/Vancouver"],
      ["Surrey", "America/Vancouver"],
      ["Terrace", "America/Vancouver"],
      ["Trail", "America/Vancouver"],
      ["Vernon", "America/Vancouver"],
      ["Victoria", "America/Vancouver"],
      ["West Kelowna", "America/Vancouver"],
      ["White Rock", "America/Vancouver"],
      ["Williams Lake", "America/Vancouver"]
    ]
  },
  {
    id: "AB",
    name: "Alberta",
    cities: [
      ["Edmonton", "America/Edmonton"],
      ["Airdrie", "America/Edmonton"],
      ["Beaumont", "America/Edmonton"],
      ["Brooks", "America/Edmonton"],
      ["Calgary", "America/Edmonton"],
      ["Camrose", "America/Edmonton"],
      ["Chestermere", "America/Edmonton"],
      ["Cold Lake", "America/Edmonton"],
      ["Fort Saskatchewan", "America/Edmonton"],
      ["Grande Prairie", "America/Edmonton"],
      ["Lacombe", "America/Edmonton"],
      ["Leduc", "America/Edmonton"],
      ["Lethbridge", "America/Edmonton"],
      ["Lloydminster", "America/Edmonton"],
      ["Medicine Hat", "America/Edmonton"],
      ["Red Deer", "America/Edmonton"],
      ["Spruce Grove", "America/Edmonton"],
      ["St. Albert", "America/Edmonton"],
      ["Wetaskiwin", "America/Edmonton"]
    ]
  },
  {
    id: "SK",
    name: "Saskatchewan",
    cities: [
      ["Regina", "America/Regina"],
      ["Estevan", "America/Regina"],
      ["Flin Flon", "America/Winnipeg"],
      ["Humboldt", "America/Regina"],
      ["Lloydminster", "America/Edmonton"],
      ["Martensville", "America/Regina"],
      ["Meadow Lake", "America/Regina"],
      ["Melfort", "America/Regina"],
      ["Melville", "America/Regina"],
      ["Moose Jaw", "America/Regina"],
      ["North Battleford", "America/Regina"],
      ["Prince Albert", "America/Regina"],
      ["Saskatoon", "America/Regina"],
      ["Swift Current", "America/Regina"],
      ["Warman", "America/Regina"],
      ["Weyburn", "America/Regina"],
      ["Yorkton", "America/Regina"]
    ]
  },
  {
    id: "MB",
    name: "Manitoba",
    cities: [
      ["Winnipeg", "America/Winnipeg"],
      ["Brandon", "America/Winnipeg"],
      ["Dauphin", "America/Winnipeg"],
      ["Flin Flon", "America/Winnipeg"],
      ["Morden", "America/Winnipeg"],
      ["Portage la Prairie", "America/Winnipeg"],
      ["Selkirk", "America/Winnipeg"],
      ["Steinbach", "America/Winnipeg"],
      ["Thompson", "America/Winnipeg"],
      ["Winkler", "America/Winnipeg"]
    ]
  },
  {
    id: "ON",
    name: "Ontario",
    cities: [
      ["Toronto", "America/Toronto"],
      ["Barrie", "America/Toronto"],
      ["Belleville", "America/Toronto"],
      ["Brampton", "America/Toronto"],
      ["Brantford", "America/Toronto"],
      ["Brockville", "America/Toronto"],
      ["Burlington", "America/Toronto"],
      ["Cambridge", "America/Toronto"],
      ["Clarence-Rockland", "America/Toronto"],
      ["Cornwall", "America/Toronto"],
      ["Dryden", "America/Winnipeg"],
      ["Elliot Lake", "America/Toronto"],
      ["Greater Sudbury", "America/Toronto"],
      ["Guelph", "America/Toronto"],
      ["Haldimand County", "America/Toronto"],
      ["Hamilton", "America/Toronto"],
      ["Kawartha Lakes", "America/Toronto"],
      ["Kenora", "America/Winnipeg"],
      ["Kingston", "America/Toronto"],
      ["Kitchener", "America/Toronto"],
      ["London", "America/Toronto"],
      ["Markham", "America/Toronto"],
      ["Mississauga", "America/Toronto"],
      ["Niagara Falls", "America/Toronto"],
      ["North Bay", "America/Toronto"],
      ["Orillia", "America/Toronto"],
      ["Oshawa", "America/Toronto"],
      ["Ottawa", "America/Toronto"],
      ["Owen Sound", "America/Toronto"],
      ["Pembroke", "America/Toronto"],
      ["Peterborough", "America/Toronto"],
      ["Pickering", "America/Toronto"],
      ["Port Colborne", "America/Toronto"],
      ["Quinte West", "America/Toronto"],
      ["Richmond Hill", "America/Toronto"],
      ["Sarnia", "America/Toronto"],
      ["Sault Ste. Marie", "America/Toronto"],
      ["St. Catharines", "America/Toronto"],
      ["St. Thomas", "America/Toronto"],
      ["Stratford", "America/Toronto"],
      ["Temiskaming Shores", "America/Toronto"],
      ["Thorold", "America/Toronto"],
      ["Thunder Bay", "America/Toronto"],
      ["Timmins", "America/Toronto"],
      ["Vaughan", "America/Toronto"],
      ["Waterloo", "America/Toronto"],
      ["Welland", "America/Toronto"],
      ["Windsor", "America/Toronto"],
      ["Woodstock", "America/Toronto"]
    ]
  },
  {
    id: "QC",
    name: "Quebec",
    cities: [
      ["Montréal", "America/Toronto"],
      ["Acton Vale", "America/Toronto"],
      ["Alma", "America/Toronto"],
      ["Amos", "America/Toronto"],
      ["Amqui", "America/Toronto"],
      ["Baie-Comeau", "America/Toronto"],
      ["Baie-D'Urfé", "America/Toronto"],
      ["Baie-Saint-Paul", "America/Toronto"],
      ["Barkmere", "America/Toronto"],
      ["Beaconsfield", "America/Toronto"],
      ["Beauceville", "America/Toronto"],
      ["Beauharnois", "America/Toronto"],
      ["Bedford", "America/Toronto"],
      ["Belleterre", "America/Toronto"],
      ["Beloeil", "America/Toronto"],
      ["Berthierville", "America/Toronto"],
      ["Blainville", "America/Toronto"],
      ["Bois-des-Filion", "America/Toronto"],
      ["Boisbriand", "America/Toronto"],
      ["Bonaventure", "America/Toronto"],
      ["Boucherville", "America/Toronto"],
      ["Bromont", "America/Toronto"],
      ["Brossard", "America/Toronto"],
      ["Brownsburg-Chatham", "America/Toronto"],
      ["Bécancour", "America/Toronto"],
      ["Candiac", "America/Toronto"],
      ["Cap-Chat", "America/Toronto"],
      ["Carignan", "America/Toronto"],
      ["Carleton-sur-Mer", "America/Toronto"],
      ["Chambly", "America/Toronto"],
      ["Chandler", "America/Toronto"],
      ["Chapais", "America/Toronto"],
      ["Charlemagne", "America/Toronto"],
      ["Chibougamau", "America/Toronto"],
      ["Château-Richer", "America/Toronto"],
      ["Châteauguay", "America/Toronto"],
      ["Clermont", "America/Toronto"],
      ["Coaticook", "America/Toronto"],
      ["Contrecoeur", "America/Toronto"],
      ["Cookshire-Eaton", "America/Toronto"],
      ["Cowansville", "America/Toronto"],
      ["Côte Saint-Luc", "America/Toronto"],
      ["Danville", "America/Toronto"],
      ["Daveluyville", "America/Toronto"],
      ["Delson", "America/Toronto"],
      ["Desbiens", "America/Toronto"],
      ["Deux-Montagnes", "America/Toronto"],
      ["Disraeli", "America/Toronto"],
      ["Dolbeau-Mistassini", "America/Toronto"],
      ["Dollard-des-Ormeaux", "America/Toronto"],
      ["Donnacona", "America/Toronto"],
      ["Dorval", "America/Toronto"],
      ["Drummondville", "America/Toronto"],
      ["Dunham", "America/Toronto"],
      ["Dégelis", "America/Toronto"],
      ["East Angus", "America/Toronto"],
      ["Estérel", "America/Toronto"],
      ["Farnham", "America/Toronto"],
      ["Fermont", "America/Toronto"],
      ["Forestville", "America/Toronto"],
      ["Fossambault-sur-le-Lac", "America/Toronto"],
      ["Gaspé", "America/Toronto"],
      ["Gatineau", "America/Toronto"],
      ["Granby", "America/Toronto"],
      ["Grande-Rivière", "America/Toronto"],
      ["Hampstead", "America/Toronto"],
      ["Hudson", "America/Toronto"],
      ["Huntingdon", "America/Toronto"],
      ["Joliette", "America/Toronto"],
      ["Kingsey Falls", "America/Toronto"],
      ["Kirkland", "America/Toronto"],
      ["L'Ancienne-Lorette", "America/Toronto"],
      ["L'Assomption", "America/Toronto"],
      ["L'Épiphanie", "America/Toronto"],
      ["La Malbaie", "America/Toronto"],
      ["La Pocatière", "America/Toronto"],
      ["La Prairie", "America/Toronto"],
      ["La Sarre", "America/Toronto"],
      ["La Tuque", "America/Toronto"],
      ["Lac-Brome", "America/Toronto"],
      ["Lac-Delage", "America/Toronto"],
      ["Lac-Mégantic", "America/Toronto"],
      ["Lac-Saint-Joseph", "America/Toronto"],
      ["Lac-Sergent", "America/Toronto"],
      ["Lachute", "America/Toronto"],
      ["Laval", "America/Toronto"],
      ["Lavaltrie", "America/Toronto"],
      ["Lebel-sur-Quévillon", "America/Toronto"],
      ["Longueuil", "America/Toronto"],
      ["Lorraine", "America/Toronto"],
      ["Louiseville", "America/Toronto"],
      ["Léry", "America/Toronto"],
      ["Lévis", "America/Toronto"],
      ["Macamic", "America/Toronto"],
      ["Magog", "America/Toronto"],
      ["Malartic", "America/Toronto"],
      ["Maniwaki", "America/Toronto"],
      ["Marieville", "America/Toronto"],
      ["Mascouche", "America/Toronto"],
      ["Matane", "America/Toronto"],
      ["Mercier", "America/Toronto"],
      ["Mirabel", "America/Toronto"],
      ["Mont-Joli", "America/Toronto"],
      ["Mont-Laurier", "America/Toronto"],
      ["Mont-Royal", "America/Toronto"],
      ["Mont-Saint-Hilaire", "America/Toronto"],
      ["Mont-Tremblant", "America/Toronto"],
      ["Montréal-Est", "America/Toronto"],
      ["Montréal-Ouest", "America/Toronto"],
      ["Murdochville", "America/Toronto"],
      ["Métabetchouan–Lac-à-la-Croix", "America/Toronto"],
      ["Neuville", "America/Toronto"],
      ["New Richmond", "America/Toronto"],
      ["Nicolet", "America/Toronto"],
      ["Normandin", "America/Toronto"],
      ["Notre-Dame-de-l'Île-Perrot", "America/Toronto"],
      ["Notre-Dame-des-Prairies", "America/Toronto"],
      ["Otterburn Park", "America/Toronto"],
      ["Paspébiac", "America/Toronto"],
      ["Percé", "America/Toronto"],
      ["Pincourt", "America/Toronto"],
      ["Plessisville", "America/Toronto"],
      ["Pohénégamook", "America/Toronto"],
      ["Pointe-Claire", "America/Toronto"],
      ["Pont-Rouge", "America/Toronto"],
      ["Port-Cartier", "America/Toronto"],
      ["Portneuf", "America/Toronto"],
      ["Princeville", "America/Toronto"],
      ["Prévost", "America/Toronto"],
      ["Québec", "America/Toronto"],
      ["Repentigny", "America/Toronto"],
      ["Richelieu", "America/Toronto"],
      ["Richmond", "America/Toronto"],
      ["Rigaud", "America/Toronto"],
      ["Rimouski", "America/Toronto"],
      ["Rivière-du-Loup", "America/Toronto"],
      ["Rivière-Rouge", "America/Toronto"],
      ["Roberval", "America/Toronto"],
      ["Rosemère", "America/Toronto"],
      ["Rouyn-Noranda", "America/Toronto"],
      ["Saguenay", "America/Toronto"],
      ["Saint-Augustin-de-Desmaures", "America/Toronto"],
      ["Saint-Basile", "America/Toronto"],
      ["Saint-Bruno-de-Montarville", "America/Toronto"],
      ["Saint-Colomban", "America/Toronto"],
      ["Saint-Constant", "America/Toronto"],
      ["Saint-Césaire", "America/Toronto"],
      ["Saint-Eustache", "America/Toronto"],
      ["Saint-Félicien", "America/Toronto"],
      ["Saint-Gabriel", "America/Toronto"],
      ["Saint-Georges", "America/Toronto"],
      ["Saint-Hyacinthe", "America/Toronto"],
      ["Saint-Jean-sur-Richelieu", "America/Toronto"],
      ["Saint-Joseph-de-Beauce", "America/Toronto"],
      ["Saint-Jérôme", "America/Toronto"],
      ["Saint-Lambert", "America/Toronto"],
      ["Saint-Lazare", "America/Toronto"],
      ["Saint-Lin–Laurentides", "America/Toronto"],
      ["Saint-Marc-des-Carrières", "America/Toronto"],
      ["Saint-Ours", "America/Toronto"],
      ["Saint-Pamphile", "America/Toronto"],
      ["Saint-Pascal", "America/Toronto"],
      ["Saint-Pie", "America/Toronto"],
      ["Saint-Raymond", "America/Toronto"],
      ["Saint-Rémi", "America/Toronto"],
      ["Saint-Sauveur", "America/Toronto"],
      ["Sainte-Adèle", "America/Toronto"],
      ["Sainte-Agathe-des-Monts", "America/Toronto"],
      ["Sainte-Anne-de-Beaupré", "America/Toronto"],
      ["Sainte-Anne-de-Bellevue", "America/Toronto"],
      ["Sainte-Anne-des-Monts", "America/Toronto"],
      ["Sainte-Catherine", "America/Toronto"],
      ["Sainte-Julie", "America/Toronto"],
      ["Sainte-Marguerite-du-Lac-Masson", "America/Toronto"],
      ["Sainte-Marie", "America/Toronto"],
      ["Sainte-Marthe-sur-le-Lac", "America/Toronto"],
      ["Sainte-Thérèse", "America/Toronto"],
      ["Salaberry-de-Valleyfield", "America/Toronto"],
      ["Senneterre", "America/Toronto"],
      ["Sept-Îles", "America/Toronto"],
      ["Shawinigan", "America/Toronto"],
      ["Sherbrooke", "America/Toronto"],
      ["Sorel-Tracy", "America/Toronto"],
      ["Stanstead", "America/Toronto"],
      ["Sutton", "America/Toronto"],
      ["Terrebonne", "America/Toronto"],
      ["Thetford Mines", "America/Toronto"],
      ["Thurso", "America/Toronto"],
      ["Trois-Pistoles", "America/Toronto"],
      ["Trois-Rivières", "America/Toronto"],
      ["Témiscaming", "America/Toronto"],
      ["Témiscouata-sur-le-Lac", "America/Toronto"],
      ["Val-d'Or", "America/Toronto"],
      ["Valcourt", "America/Toronto"],
      ["Varennes", "America/Toronto"],
      ["Vaudreuil-Dorion", "America/Toronto"],
      ["Victoriaville", "America/Toronto"],
      ["Ville-Marie", "America/Toronto"],
      ["Warwick", "America/Toronto"],
      ["Waterloo", "America/Toronto"],
      ["Westmount", "America/Toronto"],
      ["Windsor", "America/Toronto"]
    ]
  },
  {
    id: "NB",
    name: "New Brunswick",
    cities: [
      ["Fredericton", "America/Moncton"],
      ["Bathurst", "America/Moncton"],
      ["Campbellton", "America/Moncton"],
      ["Dieppe", "America/Moncton"],
      ["Edmundston", "America/Moncton"],
      ["Miramichi", "America/Moncton"],
      ["Moncton", "America/Moncton"],
      ["Saint John", "America/Moncton"]
    ]
  },
  {
    id: "NS",
    name: "Nova Scotia",
    cities: [
      ["Halifax", "America/Halifax"],
      ["Dartmouth", "America/Halifax"],
      ["Sydney", "America/Halifax"]
    ]
  },
  {
    id: "PE",
    name: "Prince Edward Island",
    cities: [
      ["Charlottetown", "America/Halifax"],
      ["Summerside", "America/Halifax"]
    ]
  },
  {
    id: "NL",
    name: "Newfoundland and Labrador",
    cities: [
      ["St. John's", "America/St_Johns"],
      ["Corner Brook", "America/St_Johns"],
      ["Mount Pearl", "America/St_Johns"]
    ]
  },
  {
    id: "YT",
    name: "Yukon",
    cities: [
      ["Whitehorse", "America/Whitehorse"]
    ]
  },
  {
    id: "NT",
    name: "Northwest Territories",
    cities: [
      ["Yellowknife", "America/Yellowknife"]
    ]
  },
  {
    id: "NU",
    name: "Nunavut",
    cities: [
      ["Iqaluit", "America/Iqaluit"]
    ]
  }
];

// Representative markers on the stylized SVG map.
const dots = {
  BC: [125, 395],
  AB: [232, 412],
  SK: [321, 415],
  MB: [406, 412],
  ON: [560, 440],
  QC: [667, 386],
  NB: [762, 455],
  NS: [814, 490],
  PE: [818, 438],
  NL: [865, 285],
  YT: [130, 215],
  NT: [265, 222],
  NU: [487, 197]
};

// Dashboard state
let selectedRegion = "ON";
let selectedCity = 0;
let clockFormat = "12";

const $ = id => document.getElementById(id);

// Format time using the browser's time-zone database.
const fmt = (tz, opts) =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: tz,
    ...opts
  }).format(new Date());

// Select a province or territory and its city.
function selectRegion(id, idx = 0) {
  selectedRegion = id;
  selectedCity = idx;

  renderSelects();
  renderActive();
  tick();
}

// Populate province and city dropdowns.
function renderSelects() {
  $("province").innerHTML = regions.map(r =>
    `<option value="${r.id}">${r.name}</option>`
  ).join("");

  $("province").value = selectedRegion;

  const r = regions.find(r => r.id === selectedRegion);

  $("city").innerHTML = r.cities.map((c, i) =>
    `<option value="${i}">${c[0]}</option>`
  ).join("");

  $("city").value = selectedCity;
}

// Highlight the selected province on the map and grid.
function renderActive() {
  document.querySelectorAll(
    ".province,.maplabel,.citydot,.clockcard"
  ).forEach(el => {
    el.classList.toggle(
      "active",
      el.dataset.p === selectedRegion
    );
  });

  const r = regions.find(r => r.id === selectedRegion);

  $("featuredName").textContent =
    `${r.cities[selectedCity][0]}, ${r.name}`;
}

// Update the featured clock and all 13 region clocks.
function tick() {
  const r = regions.find(r => r.id === selectedRegion);
  const tz = r.cities[selectedCity][1];

  const opt = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: clockFormat === "12"
  };

  $("featuredClock").textContent = fmt(tz, opt);

  $("featuredDate").textContent = fmt(tz, {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });

  $("featuredZone").textContent = fmt(tz, {
    timeZoneName: "long"
  }).split(" at ").pop()
    .replace(/^.*? (\b(?:Standard|Daylight) Time\b)$/, "$1");

  regions.forEach(x => {
    const el = document.getElementById("clock-" + x.id);

    if (el) {
      el.querySelector(".time").textContent = fmt(
        x.cities[0][1],
        {
          hour: "numeric",
          minute: "2-digit",
          hour12: clockFormat === "12"
        }
      );

      el.querySelector(".zone").textContent = fmt(
        x.cities[0][1],
        { timeZoneName: "short" }
      ).split(" ").pop();
    }
  });
}

// Build all 13 province and territory clock cards.
$("cards").innerHTML = regions.map(r => `
  <button
    class="clockcard"
    id="clock-${r.id}"
    data-p="${r.id}"
    type="button"
  >
    <span class="abbr">${r.id} · CANADA</span>
    <h3>${r.name}</h3>
    <div class="city">${r.cities[0][0]}</div>
    <div class="time">--:--</div>
    <div class="zone"></div>
  </button>
`).join("");

// Clock-card click handlers.
document.querySelectorAll(".clockcard").forEach(el => {
  el.onclick = () => selectRegion(el.dataset.p);
});

// Province-map click handlers.
document.querySelectorAll(".province").forEach(el => {
  el.addEventListener("click", () => {
    selectRegion(el.dataset.p);
  });
});

// Add interactive city dots to the SVG map.
const svgNS = "http://www.w3.org/2000/svg";

Object.entries(dots).forEach(([id, xy]) => {
  const c = document.createElementNS(svgNS, "circle");

  c.setAttribute("cx", xy[0]);
  c.setAttribute("cy", xy[1]);
  c.setAttribute("r", 7);
  c.setAttribute("class", "citydot");

  c.dataset.p = id;

  c.addEventListener("click", () => {
    selectRegion(id);
  });

  $("dots").appendChild(c);
});

// Province dropdown.
$("province").onchange = e => {
  selectRegion(e.target.value);
};

// City dropdown.
$("city").onchange = e => {
  selectRegion(selectedRegion, Number(e.target.value));
};

// 12-hour / 24-hour clock format.
$("format").onchange = e => {
  clockFormat = e.target.value;
  tick();
};

// Search cities and provinces.
$("search").addEventListener("input", e => {
  const q = e.target.value.trim().toLowerCase();

  if (!q) return;

  for (const r of regions) {
    const idx = r.cities.findIndex(c =>
      c[0].toLowerCase().includes(q)
    );

    if (idx !== -1) {
      selectRegion(r.id, idx);
      return;
    }

    if (
      r.name.toLowerCase().includes(q) ||
      r.id.toLowerCase() === q
    ) {
      selectRegion(r.id);
      return;
    }
  }
});

// Initialize with Ontario selected.
selectRegion("ON");

// Update every second.
setInterval(tick, 1000);
