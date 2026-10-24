/* ------------------------------------------------------------------
   Behind the State Averages: Women's Health Procedures Across Australia

   Structure
   Theme (numbered section, h2)
     └─ Evidence group (label for charts that support one claim)
          └─ Finding (analysis text + 1 or 2 charts)
   Standalone findings sit outside any theme.

------------------------------------------------------------------- */

const C = {
  rateMap: {
    spec: "specs/map-hyst-rate.json",
    title: "Where are rates higher?",
    idiom: "Choropleth map",
    axisTitles: {},
    summary: "Colour shows age-standardised rates by state."
  },
  volumeMap: {
    spec: "specs/map-hyst-volume.json",
    title: "Where are more hospitalisations recorded?",
    idiom: "Proportional-symbol map",
    axisTitles: {},
    summary: "Circle area represents the state hospitalisation count."
  },
  dotMap: {
    spec: "specs/chart-sa3-strip.json",
    renderer: "dotmap",
    linkLabel: "Data",
    title: "SA3 rates across Australia.",
    idiom: "Dot map",
    axisTitles: {},
    summary: "Each dot represents one SA3 area; dots use a consistent size and colour."
  },
  strip: {
    spec: "specs/chart-sa3-strip.json",
    title: "Local rates spread within each state.",
    idiom: "Regional strip plot",
    axisTitles: { x: "Hospitalisations per 100,000 women", y: "State" },
    summary: "Each point is an SA3-area rate; suppressed values are omitted."
  },
  range: {
    spec: "specs/chart-sa3-range.json",
    title: "The lowest and highest areas are far apart.",
    idiom: "Interval plot",
    axisTitles: { x: "Hospitalisations per 100,000 women", y: "State" },
    summary: "Lines span the lowest to highest SA3 rate."
  },
  slope: {
    spec: "specs/chart-hyst-slopegraph.json",
    title: "Every state rate declined.",
    idiom: "Slopegraph",
    axisTitles: { x: "Financial year", y: "Hospitalisations per 100,000 women" },
    summary: "Compare each state’s first and latest rate."
  },
  bump: {
    spec: "specs/chart-hyst-bump.json",
    title: "The state ranking is not fixed.",
    idiom: "Bump chart",
    axisTitles: { x: "Financial year", y: "State rank (1 = highest)" },
    summary: "Rank 1 indicates the highest observed rate."
  },
  heatmap: {
    spec: "specs/chart-hyst-heatmap.json",
    title: "The time pattern differs by state.",
    idiom: "Heatmap",
    axisTitles: { x: "Financial year", y: "State or territory" },
    summary: "Hover a tile for the exact annual rate."
  },
  indigenousDumbbell: {
    spec: "specs/chart-hyst-indigenous-dumbbell.json",
    title: "Indigenous status rates by state, 2021–22.",
    idiom: "Dumbbell plot",
    axisTitles: { x: "Age-standardised rate per 100,000 women" },
    summary: "Dots compare First Nations and other Australian women; Tasmania and the ACT are labelled as suppressed."
  },
  privateShare: {
    spec: "specs/chart-hyst-private-lollipop.json",
    title: "Private share of hysterectomy hospitalisations by state, 2021–22.",
    idiom: "Lollipop plot",
    axisTitles: { x: "Private patients (% of hysterectomy hospitalisations)", y: "State or territory" },
    summary: "The dashed line marks the national private share of 63%."
  },
  remotenessSes: {
    spec: "specs/chart-hyst-remoteness-ses.json",
    title: "Hysterectomy rates by remoteness and socioeconomic quintile, 2021–22.",
    idiom: "Dot plot",
    axisTitles: { x: "Age-standardised rate per 100,000 women" },
    summary: "Quintile numbers are labelled in each dot; diamonds show overall rates. SES 1 is the lowest-SES area quintile."
  },
  ridgeline: {
    spec: "specs/chart-endo-ridgeline.json",
    title: "Mental health prevalence varies by age and sex.",
    idiom: "Ridgeline distribution",
    axisTitles: { x: "Prevalence (%)" },
    summary: "Each ridge shows how long-term mental health prevalence is distributed across a broad age group for women and men."
  },
  endoLine: {
    spec: "specs/chart-endo-rate-line.json",
    title: "Endometriosis admissions rose over the decade.",
    idiom: "Line chart",
    axisTitles: { x: "Financial year", y: "Admissions per 100,000 population" },
    summary: "Crude admission rate per 100,000 population."
  },
  waterfall: {
    spec: "specs/chart-endo-waterfall.json",
    title: "Elective admissions drove three-quarters of the rise.",
    idiom: "Waterfall",
    axisTitles: { x: "Urgency group", y: "Hospitalisations" },
    summary: "Urgency groups show their contribution to the change."
  },
  parallel: {
    spec: "specs/chart-endo-parallel.json",
    title: "Procedure rates peak at different ages.",
    idiom: "Parallel-coordinates plot",
    axisTitles: { x: "Age group", y: "Hospitalisations per 100,000 women" },
    summary: "Trace each selected procedure across age groups."
  },
  scatter: {
    spec: "specs/chart-endo-age-scatter.json",
    title: "Some procedures favour different age profiles.",
    idiom: "Scatterplot",
    axisTitles: { x: "Rate at age 25–34 (per 100,000)", y: "Rate at age 35–44 (per 100,000)" },
    summary: "Compare rates for ages 25–34 and 35–44."
  },
  sankey: {
    spec: "data/endo-sankey.json",
    renderer: "sankey",
    linkLabel: "Data",
    title: "Age group flows into procedure type and sector.",
    idiom: "Sankey",
    axisTitles: {},
    summary: "Select a year to compare reported age-group and hospital-sector counts through procedure groups."
  }
};

const story = {
  themes: [
    {
      id: "place",
      title: "Where you live shapes the care you receive",
      thesis:
        "State and local results show how hysterectomy rates vary across Australia in 2021–22.",
      groups: [
        {
          label: "The state picture",
          findings: [
            {
              heading: "Highest rates are not where most procedures occur",
              text:
                "Queensland has the highest age-standardised rate, at 286 per 100,000 women, followed by Tasmania at 279. New South Wales records the most hospitalisations (7,059), yet its rate is 217. New South Wales, Victoria and Queensland together account for 77% of the 23,996 hospitalisations summed across the eight states and territories. The national total is 24,030; the state sum is not the national figure. Counts largely follow population size, so the rate map gives the fairer comparison between states.",
              layout: "pair",
              charts: [C.rateMap, C.volumeMap]
            }
          ]
        },
        {
          label: "Behind the state averages",
          findings: [
            {
              heading: "Victoria’s local rates differ fourfold between similar-sized areas",
              text:
                "In Victoria, Ballarat recorded 519 hospitalisations per 100,000 women (235 hospitalisations among 48,988 women), while Whitehorse–West recorded 124 (56 among 47,554 women)—a 4.2-fold difference between similarly sized populations. This is a more robust comparison than the national extremes: Darwin City’s rate of 114 is based on only 12 hospitalisations. SA3 rates are suppressed for 24 areas; the workbook’s caution flags do not identify the fragile Darwin estimate. Across the states, the number of plotted SA3 areas ranges from 5 in the Northern Territory to 87 in New South Wales.",
              layout: "pair",
              charts: [C.strip, C.range]
            },
            {
              heading: "Victoria’s average hides the widest spread",
              text:
                "Victoria’s state rate of 204 is the third lowest of the eight, yet its local rates range from 124 to 519—the widest spread among the states. Queensland and New South Wales both show a 3.2 ratio, while the Australian Capital Territory is the most uniform at 1.8. The dot map shows the 316 SA3 rates available across Australia; the 24 suppressed areas are omitted. Every dot is the same size and colour, and positions are approximate within state outlines, not exact SA3 centroids.",
              charts: [C.dotMap]
            }
          ]
        },
        {
          label: "Beyond state lines",
          findings: [
            {
              heading: "Inner regional areas have the highest rate",
              text:
                "In 2021–22, the age-standardised hysterectomy rate was highest in inner regional areas (292 per 100,000 women), followed by outer regional areas (243), major cities (218) and remote areas (193). The remoteness-by-SES table adds variation within these groups: reported SES quintile rates range from 195 to 241 in major cities and from 279 to 298 in inner regional areas. Some outer regional and remote SES values are suppressed, so those within-group comparisons are incomplete.",
              charts: [C.remotenessSes]
            }
          ]
        }
      ]
    },
    {
      id: "time",
      title: "The picture is not fixed over time",
      thesis:
        "Comparing years shows that a single snapshot can mislead.",
      groups: [
        {
          label: "Change across the years",
          findings: [
            {
              heading: "Rates fell, but by different amounts",
              text:
                "From 2014–15 to 2021–22, the age-standardised rate fell in every state and territory. South Australia had the largest decline, from 320 to 236 per 100,000 women (down 84); the ACT had the smallest, from 223 to 192 (down 31). The bump chart shows how states’ relative ranks also changed across the period.",
              layout: "pair",
              charts: [C.slope, C.bump]
            },
            {
              heading: "Tasmania’s peak came early",
              text:
                "Tasmania reached 420 hospitalisations per 100,000 women in 2016–17, the highest rate in the eight-year series, then fell to 279 by 2021–22. In the final year, Queensland had the highest rate (286) and the Northern Territory the lowest (163). The heatmap shows how those state patterns varied by year.",
              charts: [C.heatmap]
            }
          ]
        }
      ]
    },
    {
      id: "who",
      title: "Who receives care, and in which sector?",
      thesis:
        "Hospital records can be split by Indigenous status and by public or private funding, but they don’t show need.",
      groups: [
        {
          label: "Indigenous status",
          findings: [
            {
              heading: "National Indigenous-status rates conceal a mixed state pattern",
              text:
                "In 2021–22, the national age-standardised hysterectomy rate was 251 per 100,000 First Nations women and 231 for other Australian women. The state pattern is not uniform: Queensland rates were 311 and 287 respectively, while in the Northern Territory they were 94 and 193. Tasmania and the ACT values are suppressed. These are hospitalisation rates, not measures of prevalence or need; small counts and suppression mean the state differences should be interpreted cautiously.",
              charts: [C.indigenousDumbbell]
            }
          ]
        },
        {
          label: "Public and private funding",
          findings: [
            {
              heading: "Most hysterectomy hospitalisations were privately funded",
              text:
                "In 2021–22, 15,089 of the 24,030 national hysterectomy hospitalisations (about 63%) were recorded as private patients, compared with 8,941 (37%) public patients. The age-standardised rates were 144 and 87 per 100,000 women respectively. The private-patient share varied by state, from 53% in the Northern Territory to 71% in Western Australia. In the separate endometriosis dataset, private patients made up 65.7% of procedure-involving admissions in 2015–16 and 71.5% in 2024–25. These figures describe different conditions and periods; the datasets are not linked and should not be treated as a direct comparison.",
              charts: [C.privateShare]
            }
          ]
        }
      ]
    },
    {
      id: "endometriosis",
      title: "Endometriosis: how admissions grew and who they involve",
      thesis:
        "Admissions rose over the decade, and procedures differ by age.",
      groups: [
        {
          label: "The rise in admissions",
          findings: [
            {
              heading: "Elective admissions drove three-quarters of the rise",
              text:
                "The total admission count rose by 7,059, from 17,630 in 2015–16 to 24,689 in 2024–25. Elective admissions contributed 5,340—about 76% of the increase—compared with 1,198 emergency and 521 not assigned/unknown. The crude rate rose about 23%, from 145.9 to 179.0 per 100,000 population, but the path was uneven: it dipped to 142.4 in 2019–20, jumped to 176.7 in 2020–21, peaked at 182.3 in 2023–24 and eased to 179.0. These crude rates are not age-adjusted and do not explain why admissions changed.",
              layout: "pair",
              charts: [C.endoLine, C.waterfall]
            }
          ]
        },
        {
          label: "Procedures and age",
          findings: [
            {
              heading: "Selected procedure rates peak at different ages",
              text:
                "Among the 10 selected procedures, six have their highest rate at ages 25–34 and four at ages 35–44. Laparoscopic excision of a pelvic-cavity lesion is higher at 25–34 (258.7 per 100,000) than at 35–44 (202.5); cystoscopy shows the reverse (38.5 and 74.6, respectively). These are procedure rates, not counts of unique people. The ridgeline below is a separate view of mental-health prevalence.",
              layout: "pair",
              charts: [C.parallel, C.scatter]
            },
            {
              heading: "Mental health prevalence peaks in the younger-adult years",
              text:
                "The ridges compare the distribution of long-term mental health prevalence across age groups for women and men. Prevalence is highest in the 18–34 age range and falls steadily in older age groups, while women sit slightly above men across most bands. The chart is a relative age profile, not a count of individuals or a direct measure of treatment need.",
              charts: [C.ridgeline]
            },
            {
              heading: "Age group flows into procedure type and sector",
              text:
                "The Sankey uses Table 9 counts to compare procedure groups by age and hospital sector, with a year selector spanning 2015–16 to 2024–25. Age and sector are separate published totals, not cross-tabulated; links do not represent individual patient journeys, and suppressed age counts are omitted. Separately, private patients’ share of procedure-involving admissions rose from 65.7% in 2015–16 to 71.5% in 2024–25, peaking at 73.8% in 2021–22. In 2024–25, those admissions averaged 4.2 procedures per private hospitalisation and 3.7 per public one. Missing ACT private-hospital data in 2024–25 means the private share is slightly understated.",
              charts: [C.sankey]
            }
          ]
        }
      ]
    }
  ]
};

/* ---------- helpers ---------- */

let chartCounter = 0;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function createChartCard(item, container) {
  const index = chartCounter++;

  const card = el("figure", "chart-card");
  const summary = el("p", "chart-summary", item.summary);

  const view = el("div", "chart-view");
  view.id = `chart-view-${index}`;
  view.setAttribute("role", "img");
  view.setAttribute("aria-label", `${item.title} ${item.summary}`);

  card.append(summary, view);
  container.append(card);
  return view;
}

function applyAxisTitles(specification, titles) {
  function visit(node) {
    if (!node || typeof node !== "object") return;
    if (node.encoding) {
      ["x", "y"].forEach((axis) => {
        const channel = node.encoding[axis];
        if (titles[axis] && channel && typeof channel === "object" && channel.axis !== null) {
          channel.title = titles[axis];
        }
      });
    }
    Object.values(node).forEach((value) => {
      if (Array.isArray(value)) value.forEach(visit);
      else if (value && typeof value === "object") visit(value);
    });
  }
  visit(specification);
}

async function renderDotMap(target, specification) {
  const boundaryResponse = await fetch("data/australia-states-v1.geojson");
  if (!boundaryResponse.ok) {
    throw new Error(`Could not load Australia state boundaries: ${boundaryResponse.status}`);
  }
  const boundaries = await boundaryResponse.json();
  const records = specification.data?.values;
  if (!Array.isArray(records) || records.length === 0) {
    throw new Error("The dot map has no SA3 records to display.");
  }

  const stateCodes = {
    NSW: "AU-NSW",
    Vic: "AU-VIC",
    Qld: "AU-QLD",
    SA: "AU-SA",
    WA: "AU-WA",
    Tas: "AU-TAS",
    NT: "AU-NT",
    ACT: "AU-ACT"
  };
  const stateFeatures = new Map(
    boundaries.features.map((feature) => [feature.properties.shapeISO, feature])
  );
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 760 540");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "Schematic dot map of Australian SA3 areas");

  const mapBounds = { x: 145, y: 52, width: 470, height: 405 };
  const project = (longitude, latitude) => ({
    x: mapBounds.x + ((longitude - 110) / 46) * mapBounds.width,
    y: mapBounds.y + ((-10 - latitude) / 37) * mapBounds.height
  });
  const stateLabelPositions = {
    WA: [121.7, -25.4],
    NT: [133.5, -17.6],
    Qld: [145.3, -20.6],
    SA: [135.3, -31.5],
    NSW: [149.3, -31.1],
    Vic: [144.6, -38.0],
    Tas: [147.2, -43.1],
    ACT: [150.5, -35.5]
  };
  const stateAbbreviations = Object.keys(stateCodes);
  const grouped = new Map(stateAbbreviations.map((state) => [state, []]));
  records.forEach((record) => {
    const group = grouped.get(record.state);
    if (group) group.push(record);
  });

  function svgElement(name, attributes = {}) {
    const element = document.createElementNS(svgNS, name);
    Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
    return element;
  }

  function textNode(text, x, y, attributes = {}) {
    const node = svgElement("text", { x, y, ...attributes });
    node.textContent = text;
    return node;
  }

  function geometryRings(geometry) {
    if (geometry.type === "Polygon") return [geometry.coordinates];
    if (geometry.type === "MultiPolygon") return geometry.coordinates;
    throw new Error(`Unsupported state boundary geometry: ${geometry.type}`);
  }

  function insideRing(longitude, latitude, ring) {
    let inside = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const [xi, yi] = ring[i];
      const [xj, yj] = ring[j];
      const crosses = (yi > latitude) !== (yj > latitude) &&
        longitude < ((xj - xi) * (latitude - yi)) / (yj - yi) + xi;
      if (crosses) inside = !inside;
    }
    return inside;
  }

  function insideFeature(longitude, latitude, feature) {
    return geometryRings(feature.geometry).some((rings) =>
      insideRing(longitude, latitude, rings[0]) &&
      !rings.slice(1).some((hole) => insideRing(longitude, latitude, hole))
    );
  }

  function halton(index, base) {
    let fraction = 1;
    let result = 0;
    while (index > 0) {
      fraction /= base;
      result += fraction * (index % base);
      index = Math.floor(index / base);
    }
    return result;
  }

  function sampleInside(feature, index, bounds) {
    let candidate = index;
    while (candidate < index + 100000) {
      const longitude = bounds.west + halton(candidate, 2) * (bounds.east - bounds.west);
      const latitude = bounds.south + halton(candidate, 3) * (bounds.north - bounds.south);
      if (insideFeature(longitude, latitude, feature)) return [longitude, latitude];
      candidate += 1;
    }
    throw new Error(`Could not position SA3 dots within ${feature.properties.shapeName}.`);
  }

  function stateSeed(state) {
    return [...state].reduce((total, character) => total + character.charCodeAt(0), 1) * 100;
  }

  boundaries.features.forEach((feature) => {
    const paths = geometryRings(feature.geometry).map((rings) =>
      rings[0].map(([longitude, latitude], index) => {
        const point = project(longitude, latitude);
        return `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`;
      }).join(" ") + " Z"
    );
    svg.append(svgElement("path", {
      d: paths.join(" "),
      fill: "#eef2ef",
      stroke: "#9eafaa",
      "stroke-width": "1.2",
      "fill-rule": "evenodd"
    }));
  });

  const points = [];
  stateAbbreviations.forEach((state) => {
    const feature = stateFeatures.get(stateCodes[state]);
    const stateRecords = grouped.get(state) || [];
    if (!feature) throw new Error(`Australia boundary is missing for ${state}.`);
    const exteriorPoints = geometryRings(feature.geometry).flatMap((rings) => rings[0]);
    const bounds = {
      west: Math.min(...exteriorPoints.map(([longitude]) => longitude)),
      east: Math.max(...exteriorPoints.map(([longitude]) => longitude)),
      south: Math.min(...exteriorPoints.map(([, latitude]) => latitude)),
      north: Math.max(...exteriorPoints.map(([, latitude]) => latitude))
    };
    stateRecords.forEach((record, index) => {
      const [longitude, latitude] = sampleInside(
        feature,
        stateSeed(state) + index + 1,
        bounds
      );
      const projected = project(longitude, latitude);
      points.push({ ...record, x: projected.x, y: projected.y });
    });
  });

  points.forEach((point) => {
    const circle = svgElement("circle", {
      cx: point.x,
      cy: point.y,
      r: 3,
      fill: "#0072b2",
      "fill-opacity": "0.85",
      stroke: "#ffffff",
      "stroke-width": "0.8"
    });
    const title = svgElement("title");
    title.textContent = `${point.region}, ${point.state}`;
    circle.append(title);
    svg.append(circle);
  });

  Object.entries(stateLabelPositions).forEach(([state, coordinates]) => {
    const position = project(coordinates[0], coordinates[1]);
    svg.append(textNode(state.toUpperCase(), position.x, position.y, {
      "text-anchor": "middle",
      class: "dotmap-state-label"
    }));
  });

  const note = el(
    "p",
    "dotmap-note",
    `Australia shown schematically using state outlines. Each of the ${points.length} same-size, same-colour dots represents an SA3 area. Exact SA3 centroids are not available in the supplied data, so dot positions are approximate within each state and should not be read as precise local locations.`
  );
  target.replaceChildren(svg, note);
  target.setAttribute("role", "group");
  target.setAttribute("aria-label", "Dot map of Australian SA3 areas");
}

function renderSankey(target, records) {
  const ageGroups = [
    { field: "under25", label: "Under 25" },
    { field: "age25to34", label: "25–34" },
    { field: "age35to44", label: "35–44" },
    { field: "age45plus", label: "45 and over" }
  ];
  const sectors = [
    { field: "private", label: "Private" },
    { field: "public", label: "Public" }
  ];
  const colors = ["#0072b2", "#e69f00", "#009e73", "#cc79a7", "#56b4e9", "#d55e00"];
  const years = [...new Set(records.map((record) => record.year))];
  const controls = el("div", "sankey-controls");
  const label = el("label", "", "Year");
  const select = el("select", "sankey-year");
  select.setAttribute("aria-label", "Select year for Sankey counts");
  years.forEach((year) => {
    const option = el("option", "", year);
    option.value = year;
    select.append(option);
  });
  select.value = years[years.length - 1];
  label.append(select);
  controls.append(label);

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 900 500");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "Sankey diagram of endometriosis hospitalisations");
  const chartTop = 54;
  const chartHeight = 385;
  const gap = 9;
  const nodeWidth = 18;
  const columns = [
    { x: 180, label: "Age group" },
    { x: 435, label: "Procedure group" },
    { x: 700, label: "Hospital sector" }
  ];
  const formatCount = (value) => Math.round(value).toLocaleString("en-AU");
  const note = el(
    "p",
    "sankey-note",
    "Age counts and sector counts are separate published totals. Links on either side of a procedure group are not cross-tabulated and do not represent individual patient journeys. Suppressed age counts are omitted."
  );

  function svgElement(name, attributes = {}) {
    const element = document.createElementNS(svgNS, name);
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    return element;
  }

  function textNode(text, x, y, className, anchor = "start") {
    const node = svgElement("text", { x, y, class: className, "text-anchor": anchor });
    node.textContent = text;
    return node;
  }

  function placeNodes(nodes, x, scale) {
    const height = (node) => node.value * scale;
    const totalHeight = nodes.reduce((sum, node) => sum + height(node), 0) +
      Math.max(0, nodes.length - 1) * gap;
    let y = chartTop + (chartHeight - totalHeight) / 2;
    nodes.forEach((node) => {
      node.x = x;
      node.y = y;
      node.height = height(node);
      y += node.height + gap;
    });
  }

  function draw() {
    const year = select.value;
    const yearRows = records.filter((record) => record.year === year);
    const procedures = [...new Set(yearRows.map((row) => row.procedure))];
    const procedureColors = new Map(procedures.map((name, index) => [
      name,
      colors[index % colors.length]
    ]));
    const leftLinks = [];
    const rightLinks = [];
    const ageValues = new Map(ageGroups.map((group) => [group.label, 0]));
    const sectorValues = new Map(sectors.map((sector) => [sector.label, 0]));
    const procedureValues = new Map(procedures.map((name) => [
      name,
      { incoming: 0, outgoing: 0 }
    ]));

    yearRows.forEach((row) => {
      ageGroups.forEach((group) => {
        const value = row[group.field];
        if (typeof value === "number" && value > 0) {
          leftLinks.push({ source: group.label, target: row.procedure, value });
          ageValues.set(group.label, ageValues.get(group.label) + value);
          procedureValues.get(row.procedure).incoming += value;
        }
      });
      sectors.forEach((sector) => {
        const value = row[sector.field];
        if (typeof value === "number" && value > 0) {
          rightLinks.push({ source: row.procedure, target: sector.label, value });
          sectorValues.set(sector.label, sectorValues.get(sector.label) + value);
          procedureValues.get(row.procedure).outgoing += value;
        }
      });
    });

    const ageNodes = ageGroups.map(({ label: name }) => ({
      name,
      value: ageValues.get(name)
    })).filter((node) => node.value > 0);
    const procedureNodes = procedures.map((name) => ({
      name,
      value: Math.max(
        procedureValues.get(name).incoming,
        procedureValues.get(name).outgoing
      )
    })).filter((node) => node.value > 0);
    const sectorNodes = sectors.map(({ label: name }) => ({
      name,
      value: sectorValues.get(name)
    })).filter((node) => node.value > 0);
    const stages = [ageNodes, procedureNodes, sectorNodes];
    const largestTotal = Math.max(...stages.map((stage) =>
      stage.reduce((sum, node) => sum + node.value, 0)
    ));
    const largestStage = Math.max(...stages.map((stage) => stage.length));
    const scale = (chartHeight - Math.max(0, largestStage - 1) * gap) / largestTotal;
    placeNodes(ageNodes, columns[0].x, scale);
    placeNodes(procedureNodes, columns[1].x, scale);
    placeNodes(sectorNodes, columns[2].x, scale);

    const nodeMaps = stages.map((stage) => new Map(stage.map((node) => [node.name, node])));
    const linkOffsets = (links, sourceMap, targetMap) => {
      const sourceOffsets = new Map();
      const targetOffsets = new Map();
      links.forEach((link) => {
        const source = sourceMap.get(link.source);
        const target = targetMap.get(link.target);
        const sourceOffset = sourceOffsets.get(link.source) || 0;
        const targetOffset = targetOffsets.get(link.target) || 0;
        link.x0 = source.x + nodeWidth;
        link.y0 = source.y + sourceOffset * scale;
        link.x1 = target.x;
        link.y1 = target.y + targetOffset * scale;
        link.thickness = link.value * scale;
        link.color = procedureColors.get(
          sourceMap === nodeMaps[0] ? link.target : link.source
        );
        sourceOffsets.set(link.source, sourceOffset + link.value);
        targetOffsets.set(link.target, targetOffset + link.value);
      });
    };
    linkOffsets(leftLinks, nodeMaps[0], nodeMaps[1]);
    linkOffsets(rightLinks, nodeMaps[1], nodeMaps[2]);

    svg.replaceChildren();
    columns.forEach((column) => {
      svg.append(textNode(column.label, column.x, 26, "sankey-column-title", "middle"));
    });

    [...leftLinks, ...rightLinks].forEach((link) => {
      const curve = (link.x0 + link.x1) / 2;
      const shape = svgElement("path", {
        d: [
          `M ${link.x0} ${link.y0}`,
          `C ${curve} ${link.y0}, ${curve} ${link.y1}, ${link.x1} ${link.y1}`,
          `L ${link.x1} ${link.y1 + link.thickness}`,
          `C ${curve} ${link.y1 + link.thickness}, ${curve} ${link.y0 + link.thickness},`,
          `${link.x0} ${link.y0 + link.thickness} Z`
        ].join(" "),
        fill: link.color,
        "fill-opacity": "0.38"
      });
      const title = svgElement("title");
      title.textContent = `${link.source} → ${link.target}: ${formatCount(link.value)} hospitalisations`;
      shape.append(title);
      svg.append(shape);
    });

    stages.forEach((stage, index) => {
      stage.forEach((node) => {
        const rect = svgElement("rect", {
          x: node.x,
          y: node.y,
          width: nodeWidth,
          height: node.height,
          rx: 2,
          fill: index === 1 ? procedureColors.get(node.name) : "#58727a"
        });
        const title = svgElement("title");
        title.textContent = `${node.name}: ${formatCount(node.value)} hospitalisations`;
        rect.append(title);
        svg.append(rect);

        const labelX = index === 0 ? node.x - 8 : node.x + nodeWidth + 8;
        const anchor = index === 0 ? "end" : "start";
        const label = textNode(node.name, labelX, node.y + Math.min(node.height / 2, 14), "sankey-node-label", anchor);
        svg.append(label);
        svg.append(textNode(formatCount(node.value), labelX, node.y + Math.min(node.height / 2, 14) + 15, "sankey-node-value", anchor));
      });
    });

    if (!target.contains(controls)) {
      target.replaceChildren(controls, svg, note);
    }
  }

  select.addEventListener("change", draw);
  draw();
  target.setAttribute("role", "group");
  target.setAttribute("aria-label", "Sankey diagram with year selector");
}

async function renderChart(item, container) {
  const target = createChartCard(item, container);

  try {
    const response = await fetch(item.spec);
    if (!response.ok) {
      throw new Error(`Could not load ${item.spec}: ${response.status}`);
    }
    const specification = await response.json();
    specification.title = null;
    applyAxisTitles(specification, item.axisTitles || {});
    if (item.renderer === "dotmap") {
      await renderDotMap(target, specification);
      return;
    }
    if (item.renderer === "sankey") {
      renderSankey(target, specification);
      return;
    }
    await vegaEmbed(target, specification, {
      actions: false,
      renderer: "svg",
      tooltip: { theme: "light" }
    });
  } catch (error) {
    console.error(error);
    const message = el("p", "chart-error", `This graphic could not load. ${error.message}`);
    target.replaceChildren(message);
    target.setAttribute("role", "alert");
  }
}

/* ---------- builders ---------- */

function buildFinding(finding, parent) {
  const article = el(
    "article",
    `finding${finding.layout ? ` finding--${finding.layout}` : ""}${finding.charts.length ? "" : " finding--text-only"}`
  );

  const text = el("div", "finding-text");
  text.append(el("h3", "", finding.heading), el("p", "", finding.text));

  let charts = null;
  article.append(text);
  if (finding.charts.length) {
    charts = el("div", "finding-charts");
    charts.dataset.count = finding.charts.length;
    article.append(charts);
  }
  parent.append(article);
  if (charts) finding.charts.forEach((item) => renderChart(item, charts));
}

function buildGroup(group, parent) {
  const section = el("section", "evidence-group");
  section.append(el("p", "group-label", group.label));
  parent.append(section);

  group.findings.forEach((finding) => buildFinding(finding, section));
}

function buildThemeHeader(title, thesis, id) {
  const header = el("header", "theme-header");
  const heading = el("h2", "theme-title", title);
  heading.id = id;
  header.append(heading);
  if (thesis) header.append(el("p", "theme-thesis", thesis));
  return header;
}

function buildTheme(theme, root, number) {
  const section = el("section", "story-theme");
  section.id = `theme-${theme.id}`;
  section.setAttribute("aria-labelledby", `theme-title-${theme.id}`);

  section.append(
    buildThemeHeader(`${number}. ${theme.title}`, theme.thesis, `theme-title-${theme.id}`)
  );
  root.append(section);

  theme.groups.forEach((group) => buildGroup(group, section));
}

function getRoot() {
  let root = document.getElementById("story-root");
  if (!root) {
    root = el("div");
    root.id = "story-root";
    const main = document.querySelector("main") || document.body;
    const sources = main.querySelector(".sources");
    if (sources) {
      main.insertBefore(root, sources);
    } else {
      main.append(root);
    }
  }
  return root;
}
/* ---------- start ---------- */

const root = getRoot();

if (typeof vegaEmbed !== "function") {
  root.append(
    el(
      "p",
      "chart-error",
      "The Vega libraries did not load. Check the network connection and reload."
    )
  );
} else {
  story.themes.forEach((theme, i) => buildTheme(theme, root, i + 1));
}

function alternateFindings() {
  const skip = ".finding--lead, .finding--wide, .finding--pair, .finding--note, .finding--text-only";
  let n = 0;
  document.querySelectorAll(".finding").forEach(el => {
    if (el.matches(skip)) return;                      // leave special layouts alone
    el.classList.toggle("finding--flip", n % 2 === 1); // 1st left, 2nd right, 3rd left...
    n++;
  });
}

// Charts are rendered by app.js, so re-run whenever new findings appear
const mo = new MutationObserver(alternateFindings);
mo.observe(document.querySelector("main"), { childList: true, subtree: true });
alternateFindings();