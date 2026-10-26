/* ------------------------------------------------------------------
   Behind the State Averages: Women's Health Procedures Across Australia

   Structure
   Theme (numbered section, h2)
     └─ Evidence group (label for charts that support one claim)
          └─ Finding (analysis text + 1 or 2 charts)
   Standalone findings sit outside any theme.

------------------------------------------------------------------- */

const C = {
  waitingMap: {
    spec: "specs/map-hyst-waiting-times-lhn.json",
    renderer: "lhnWaitingMap",
    title: "Longest elective surgery cluster in NSW and Queensland networks · 2024–25",
    tag: "access",
    idiom: "Choropleth + proportional symbols",
    axisTitles: {},
    caveat: "48 of 71 LHNs published; state values unpublished for ACT and NT",
    source: "Source: AIHW state waiting-time table, 2024–25; supplied LHN waiting-time data and coordinates."
  },
  volumeMap: {
    spec: "specs/map-hyst-volume.json",
    title: "Recorded hysterectomy hospitalisations by state · 2021–22",
    tag: "activity",
    idiom: "Proportional-symbol map",
    axisTitles: {},
    caveat: "Counts reflect population size as well as hospitalisation frequency.",
    source: "Source: AIHW Australian Atlas of Healthcare Variation Time Series, 2021–22."
  },
  dotMap: {
    spec: "specs/chart-sa3-strip.json",
    renderer: "dotmap",
    cardClass: "chart-card--dotmap",
    title: "Where SA3 areas with published rates are located · 2021–22",
    tag: "activity",
    idiom: "Dot map",
    axisTitles: {},
    caveat: "316 rates shown; 24 are suppressed and state totals range from 5 to 87. Locations are schematic.",
    source: "Source: AIHW Australian Atlas of Healthcare Variation Time Series, 2021–22."
  },
  ridgeline: {
    spec: "specs/chart-sa3-ridgeline.json",
    title: "SA3 hysterectomy rates by state · 2021–22",
    tag: "activity",
    idiom: "Ridgeline plot",
    axisTitles: { x: "Hospitalisations per 100,000 women" },
    caveat: "Each ridge smooths the SA3 rates in one state; numbers mark its lowest and highest area. Suppressed rates are omitted, and the ACT and NT curves rest on only 5 to 6 areas.",
    source: "Source: AIHW Australian Atlas of Healthcare Variation Time Series, 2021–22."
  },
  range: {
    spec: "specs/chart-sa3-range.json",
    title: "SA3 rate ranges by state · 2021–22",
    tag: "activity",
    idiom: "Interval plot",
    axisTitles: { x: "Hospitalisations per 100,000 women", y: "State" },
    caveat: "24 SA3 values are suppressed; statewide counts of valid SA3s range from 5 to 87.",
    source: "Source: AIHW Australian Atlas of Healthcare Variation Time Series, 2021–22."
  },
  slope: {
    spec: "specs/chart-hyst-slopegraph.json",
    title: "Hospitalisation rates by state in 2014–15 and 2021–22",
    tag: "activity",
    idiom: "Slopegraph",
    axisTitles: { x: "Financial year", y: "Hospitalisations per 100,000 women" },
    caveat: "Age-standardised rates; SA and WA finish at the same rate.",
    source: "Source: AIHW Australian Atlas of Healthcare Variation Time Series, 2014–15 and 2021–22."
  },
  tileGrid: {
    spec: "specs/chart-hyst-tilegrid.json",
    title: "Hysterectomy rates by state, tile-grid map · 2014–15 to 2021–22",
    tag: "activity",
    idiom: "Tile-grid map",
    axisTitles: {},
    caption: "Tiles are not to scale; positions are approximate.",
    caveat: "Fill shows each state’s 2021–22 age-standardised rate per 100,000 women; each line runs from 2014–15 to 2021–22.",
    source: "Source: AIHW Australian Atlas of Healthcare Variation Time Series, 2014–15 to 2021–22."
  },
  heatmap: {
    spec: "specs/chart-hyst-heatmap.json",
    title: "Annual age-standardised hysterectomy rates by state · 2014–15 to 2021–22",
    tag: "activity",
    idiom: "Heatmap",
    axisTitles: { x: "Financial year", y: "State or territory" },
    caveat: "Changes around 2019–20 to 2021–22 overlap with COVID-era restrictions.",
    source: "Source: AIHW Australian Atlas of Healthcare Variation Time Series, 2014–15 to 2021–22."
  },
  indigenousDumbbell: {
    spec: "specs/chart-hyst-indigenous-dumbbell.json",
    title: "Hysterectomy rates by Indigenous status and state · 2021–22",
    tag: "activity",
    idiom: "Dumbbell plot",
    axisTitles: { x: "Age-standardised rate per 100,000 women" },
    caveat: "Hospitalisation rates are not measures of prevalence or need; Tasmania and ACT are suppressed.",
    source: "Source: AIHW Australian Atlas of Healthcare Variation Time Series, 2021–22."
  },

  privateShare: {
    spec: "specs/chart-hyst-private-waffle.json",
    title: "Private-patient share of hysterectomy hospitalisations by state · 2021–22",
    tag: "activity",
    idiom: "Waffle chart",
    axisTitles: {},
    caveat: "Each square is 1% of a state’s hysterectomy hospitalisations; nationally, 63% were private.",
    source: "Source: AIHW Australian Atlas of Healthcare Variation Time Series, 2021–22."
  },
  remotenessSes: {
    spec: "specs/chart-hyst-remoteness-ses-radial.json",
    title: "Hysterectomy rates by remoteness and SES group · 2021–22",
    tag: "activity",
    idiom: "Radial chart",
    axisTitles: {},
    caveat: "Radius shows the age-standardised rate per 100,000 women, scaled so that area follows the rate. Colour marks remoteness; each slice is one SES group. Outer regional and remote areas have suppressed SES groups.",
    source: "Source: AIHW Australian Atlas of Healthcare Variation Time Series, 2021–22."
  },
  endoLine: {
    spec: "specs/chart-endo-rate-line.json",
    title: "Annual endometriosis admissions and crude rates · 2015–16 to 2024–25",
    tag: "activity",
    idiom: "Line chart",
    axisTitles: { x: "Financial year", y: "Admissions per 100,000 population" },
    caveat: "Crude rates are not age-adjusted and are not a measure of disease prevalence.",
    source: "Source: AIHW PHE 357, Endometriosis hospital procedures, 2015–16 to 2024–25."
  },
  waterfall: {
    spec: "specs/chart-endo-waterfall.json",
    title: "Change in admissions by urgency, 2015–16 to 2024–25",
    tag: "activity",
    idiom: "Waterfall",
    axisTitles: { x: "Urgency group", y: "Hospitalisations" },
    caveat: "The waterfall compares total admissions at the start and end of the series.",
    source: "Source: AIHW PHE 357, Endometriosis hospital procedures, 2015–16 and 2024–25."
  },
  parallel: {
    spec: "specs/chart-endo-parallel.json",
    title: "Selected procedure rates by age group, 2024–25",
    tag: "activity",
    idiom: "Parallel-coordinates plot",
    axisTitles: { x: "Age group", y: "Hospitalisations per 100,000 women" },
    caveat: "Rates are for selected procedures in 2024–25, not unique people.",
    source: "Source: AIHW PHE 357, Endometriosis hospital procedures, 2024–25."
  },
  sankey: {
    spec: "data/endo-sankey.json",
    renderer: "sankey",
    title: "Procedure counts by age, procedure group and hospital sector · 2024–25",
    tag: "activity",
    idiom: "Sankey",
    axisTitles: {},
    caption: "Age, procedure and sector are separate totals; ribbons are not individual paths.",
    caveat: "Suppressed age counts are omitted.",
    source: "Source: AIHW PHE 357, Table 9, Endometriosis hospital procedures, 2015–16 to 2024–25."
  }
};

const story = {
  themes: [
    {
      id: "place",
      title: "Geographic Variation in Healthcare",
      thesis:
        "Waiting times and hysterectomy rates vary across Australia. Comparing national, state and local patterns shows how geography can shape the experience of care.",
      groups: [
        {
          label: "Waiting for care",
          findings: [
            {
              heading: "Waiting times differ across states and hospital networks",
              text: "The gap between Victoria’s 50-day median wait and NSW’s 99 days suggests that patients can face very different timelines for the same procedure. The figure “Longest elective surgery cluster in NSW and Queensland networks · 2024–25” shows that state averages are only part of the picture: waits vary sharply between local hospital networks too. That means a state-level comparison can conceal the experience of patients living within it.",
              layout: "wide",
              charts: [C.waitingMap]
            }
          ]
        },
        {
          label: "Variation within states",
          findings: [
            {
              heading: "State averages conceal substantial local variation",
              text: "The “SA3 hysterectomy rates by state · 2021–22” ridgeline plot and “SA3 rate ranges by state · 2021–22” interval plot show that areas within the same state can have very different rates. In Victoria, the range runs from 124 per 100,000 women in Whitehorse–West to 519 in Ballarat. The key story is not simply that states differ, but that the place someone lives within a state may also matter.",
              layout: "pair",
              charts: [C.ridgeline, C.range]
            },
            {
              heading: "Local differences become visible on the map",
              text: "The “Where SA3 areas with published rates are located · 2021–22” map adds a geographic dimension to the ranges: it shows where the measured areas sit, rather than only how high or low their rates are. The spread across the map reinforces that variation is not confined to one state or one region. The dots are schematic, however, so their positions show distribution rather than exact locations.",
              layout: "flip",
              charts: [C.dotMap]
            }
          ]
        },
        {
          label: "Remoteness and socioeconomic context",
          findings: [
            {
              heading: "The highest rates are not found in the most remote areas",
              text: "In “Hysterectomy rates by remoteness and SES group · 2021–22”, inner regional areas record 292 hospitalisations per 100,000 women, above major cities at 218 and remote areas at 193. This challenges a simple assumption that remoteness alone explains differences in care. The socioeconomic slices also show variation within remoteness categories, suggesting that geography and social circumstances should be considered together rather than as competing explanations.",
              charts: [C.remotenessSes]
            }
          ]
        }
      ]
    },
    {
      id: "who",
      title: "Healthcare Patterns by Demographics",
      thesis:
        "Differences in rates, waiting times and funding show that healthcare experiences are not uniform. Comparing these measures helps identify where further questions about access and service delivery arise.",
      groups: [
        {
          label: "First Nations women and hysterectomy rates",
          findings: [
            {
              heading: "National averages hide different state patterns",
              text: "In 2021–22, First Nations women had a higher national hysterectomy hospitalisation rate than Other Australian women (251 versus 231 per 100,000). However, state-level patterns differed: First Nations women had higher rates in NSW, Victoria and Queensland, while Other Australian women had higher rates in WA and the NT. These contrasting results highlight how national averages can conceal geographic variation in recorded hysterectomy hospitalisations.",
              charts:  [C.indigenousDumbbell]
            }
          ]
        },
        {
          label: "Public and private funding",
          findings: [
            {
              heading: "Private hospitals account for most hysterectomy admissions",
              text: "The “Private-patient share of hysterectomy hospitalisations by state · 2021–22” waffle chart shows that 63% of hysterectomy hospitalisations were privately funded nationally. The share ranges from 53% in the NT to 71% in WA, making the private sector the larger part of recorded activity in every state shown. This uneven funding mix matters because national totals can make the system look more uniform than the state-level picture suggests.",
              charts: [C.privateShare]
            }
          ]
        }
      ]
    },
    {
      id: "time",
      title: "Temporal Trends in Hysterectomy Rates",
      thesis:
        "Hysterectomy rates generally declined over the period, but the pace and shape of change differed by state. Looking at the full trajectory reveals more than a single national trend.",
      groups: [
        {
          label: "Change over time",
          findings: [
            {
              heading: "Declining rates did not erase differences between states",
              text: "The “Hospitalisation rates by state in 2014–15 and 2021–22” slopegraph shows broad declines, while the “Hysterectomy rates by state, tile-grid map · 2014–15 to 2021–22” reveals how uneven those trajectories were. The gap between the highest and lowest state rates widened from 103 to 123 per 100,000 women. A general decline in hysterectomy rates therefore did not mean states converged; the distance between them grew.",
              layout: "pair",
              charts: [C.slope, C.tileGrid]
            },
            {
              heading: "Tasmania followed a different trajectory",
              text: "The “Annual age-standardised hysterectomy rates by state · 2014–15 to 2021–22” heatmap highlights Tasmania’s rise to 420 hospitalisations per 100,000 women in 2016–17, followed by a fall to 279 in 2021–22. That peak stands out against the broader pattern of declining rates and shows why a start-to-end comparison can miss important changes in between. The trajectory is unusual, but the data alone do not identify its cause.",
              charts: [C.heatmap]
            }
          ]
        }
      ]
    },
    {
      id: "endometriosis",
      title: "Endometriosis Hospitalisations and Procedures",
      thesis:
        "Endometriosis hospitalisations have increased, while procedure patterns differ by age and hospital sector. Together, these charts show how recorded treatment is distributed and not the full prevalence of the condition.",
      groups: [
        {
          label: "Growth in hospital activity",
          findings: [
            {
              heading: "The rise in endometriosis admissions was driven mainly by elective care",
              text: "The “Annual endometriosis admissions and crude rates · 2015–16 to 2024–25” line chart shows admissions rising from 17,630 to 24,689, an increase of about 40%. The “Change in admissions by urgency, 2015–16 to 2024–25” waterfall indicates that elective admissions account for around 76% of that growth. The increase is therefore concentrated in planned hospital care, making elective treatment an important part of the story behind rising recorded activity.",
              layout: "pair",
              charts: [C.endoLine, C.waterfall]
            }
          ]
        },
        {
          label: "Age and procedure type",
          findings: [
            {
              heading: "Procedure patterns peak during the main reproductive years",
              text: "In “Selected procedure rates by age group, 2024–25”, six of ten selected procedures peak at ages 25–34 and four at 35–44. This pattern is consistent with endometriosis care being concentrated during reproductive years. Symptoms often improve after menopause, although the condition can persist. The decline in older age groups should therefore be read as a pattern in recorded procedures, not evidence that endometriosis disappears after a particular age.",
              charts: [C.parallel]
            },
            {
              heading: "Private care dominates the recorded procedure flow",
              text: "The “Procedure counts by age, procedure group and hospital sector · 2024–25” Sankey diagram shows that roughly 75% of recorded procedures were privately funded, with private care accounting for far more activity than public care. Laparoscopic excision or diathermy, a minimally invasive surgical approach used to treat endometriosis lesions, was the most common selected procedure, and women aged 25–44 accounted for around two-thirds of procedures. Together, these patterns show where treatment is concentrated and which procedure features most prominently in the recorded activity.",
              charts: [C.sankey]
            }
          ]
        }
      ]
    },
    {
      id: "verdict",
      title: "Key Findings and Implications",
      groups: [
        {
          label: "",
          findings: [
            {
              heading: "The data reveal variation in care, but not its full explanation",
              text: "Across the figures, place is associated with different waiting times and hysterectomy rates; state-level patterns also vary by Indigenous status and funding sector. Meanwhile, endometriosis hospitalisations have grown, particularly through elective care, and recorded procedures are concentrated in private hospitals and reproductive-age groups. Together, these findings show that healthcare activity is unevenly distributed. Explaining whether those differences reflect need, access or service organisation requires evidence beyond hospital records alone.",
              charts: []
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

  const card = el(
    "figure",
    `chart-card${item.cardClass ? ` ${item.cardClass}` : ""}`
  );

  const heading = el("h4", "chart-title", item.title);

  const tag = item.tag
    ? el("p", `chart-tag chart-tag--${item.tag}`, item.tag.toUpperCase())
    : null;

  const view = el("div", "chart-view");
  view.id = `chart-view-${index}`;

  // Let the rendered chart determine its height instead of
  // enforcing a 250px minimum that can leave blank space.
  view.style.minHeight = "0";
  view.style.height = "auto";

  view.setAttribute("role", "img");
  view.setAttribute(
    "aria-label",
    `${item.title}. ${item.caveat || ""}`
  );

  const caveat = el(
    "p",
    "chart-caveat",
    item.caveat ||
      "Rates describe recorded hospitalisations, not all people living with the condition."
  );

  const source = el(
    "p",
    "chart-source",
    item.source || "Source: AIHW supplied data tables."
  );

  const figureNumber = el(
    "figcaption",
    "chart-figure-number",
    `Figure ${index + 1}`
  );

  const caption = item.caption
    ? el("p", "chart-caption", item.caption)
    : null;

  card.append(
    ...[tag, heading, view, caption, caveat, source, figureNumber]
      .filter(Boolean)
  );

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

async function renderLhnWaitingMap(target, specification) {
  const [boundaryResponse, dataResponse] = await Promise.all([
    fetch(specification.boundariesUrl),
    fetch(specification.dataUrl)
  ]);
  if (!boundaryResponse.ok) {
    throw new Error(`Could not load Australia state boundaries: ${boundaryResponse.status}`);
  }
  if (!dataResponse.ok) {
    throw new Error(`Could not load LHN waiting-time data: ${dataResponse.status}`);
  }

  const boundaries = await boundaryResponse.json();
  const data = await dataResponse.json();
  const stateRecords = data.states;
  const networks = data.localHospitalNetworks;
  if (!Array.isArray(stateRecords) || !Array.isArray(networks) || networks.length === 0) {
    throw new Error("The waiting-time map is missing state or LHN records.");
  }

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 900 520");
  svg.setAttribute("class", "lhn-waiting-map");
  svg.setAttribute("role", "img");
  const published = networks.filter((network) =>
    network.availability === "published" && Number.isFinite(network.medianWaitDays)
  );
  const publishedCount = published.length;
  svg.setAttribute(
    "aria-label",
    `Australia map of state hysterectomy waiting times and ${publishedCount} published LHN waits.`
  );

  const element = (name, attributes = {}) => {
    const node = document.createElementNS(svgNS, name);
    Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
    return node;
  };
  const label = (text, x, y, className, attributes = {}) => {
    const node = element("text", { x, y, class: className, ...attributes });
    node.textContent = text;
    return node;
  };
  const ringsFor = (geometry) => {
    if (geometry.type === "Polygon") return [geometry.coordinates];
    if (geometry.type === "MultiPolygon") return geometry.coordinates;
    throw new Error(`Unsupported state boundary geometry: ${geometry.type}`);
  };
  const stateByName = new Map(stateRecords.map((state) => [state.stateName, state]));
  const stateColor = (wait) => {
    if (!Number.isFinite(wait)) return "#d9d9d9";
    const fraction = Math.max(0, Math.min(1, (wait - 50) / 50));
    const start = [222, 235, 247];
    const end = [33, 113, 181];
    const rgb = start.map((channel, index) =>
      Math.round(channel + (end[index] - channel) * fraction)
    );
    return `rgb(${rgb.join(", ")})`;
  };
  const radiusFor = (wait) => 12 * Math.sqrt(Math.min(wait, 350) / 350);
  const defs = element("defs");
  const stateGradientId = `lhn-state-wait-gradient-${target.id}`;
  const stateGradient = element("linearGradient", {
    id: stateGradientId,
    x1: "0%",
    y1: "0%",
    x2: "100%",
    y2: "0%"
  });
  stateGradient.append(
    element("stop", { offset: "0%", "stop-color": "#deebf7" }),
    element("stop", { offset: "100%", "stop-color": "#2171b5" })
  );
  defs.append(stateGradient);
  svg.append(defs);

  const extent = { west: 110, east: 155, south: -45, north: -5 };
  const mapArea = { x: 22, y: 22, width: 585, height: 455 };
  const centerLatitude = (extent.south + extent.north) / 2;
  const longitudeScale = Math.cos(centerLatitude * Math.PI / 180);
  const geoWidth = (extent.east - extent.west) * longitudeScale;
  const geoHeight = extent.north - extent.south;
  const scale = Math.min(mapArea.width / geoWidth, mapArea.height / geoHeight);
  const fittedWidth = geoWidth * scale;
  const fittedHeight = geoHeight * scale;
  const left = mapArea.x + (mapArea.width - fittedWidth) / 2;
  const top = mapArea.y + (mapArea.height - fittedHeight) / 2;
  const project = (longitude, latitude) => ({
    x: left + (longitude - extent.west) * longitudeScale * scale,
    y: top + (extent.north - latitude) * scale
  });

  boundaries.features.forEach((feature) => {
    const state = stateByName.get(feature.properties.shapeName);
    const path = ringsFor(feature.geometry).map((rings) =>
      rings.map((ring) => ring.map(([longitude, latitude], index) => {
        const point = project(longitude, latitude);
        return `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`;
      }).join(" ") + " Z").join(" ")
    ).join(" ");
    svg.append(element("path", {
      d: path,
      fill: stateColor(state?.medianWaitDays),
      stroke: "#ffffff",
      "stroke-width": 1.1,
      "fill-rule": "evenodd",
      class: "lhn-map-state"
    }));
  });

  const coordinatesAvailable = (network) =>
    Number.isFinite(network.longitude) && Number.isFinite(network.latitude);
  const numericWithCoordinates = published.filter(coordinatesAvailable);
  const selectedForLabels = new Set([
    ...[...published].sort((a, b) => a.medianWaitDays - b.medianWaitDays || a.network.localeCompare(b.network)).slice(0, 3),
    ...[...published].sort((a, b) => b.medianWaitDays - a.medianWaitDays || a.network.localeCompare(b.network)).slice(0, 5)
  ].map((network) => network.aihwCode));

  numericWithCoordinates
    .sort((a, b) => b.medianWaitDays - a.medianWaitDays)
    .forEach((network) => {
      const point = project(network.longitude, network.latitude);
      const circle = element("circle", {
        cx: point.x,
        cy: point.y,
        r: radiusFor(network.medianWaitDays),
        fill: "#f2c94c",
        "fill-opacity": 0.6,
        stroke: "#4d4b3f",
        "stroke-width": 0.8,
        class: "lhn-map-circle"
      });
      const title = element("title");
      title.textContent = `${network.network}: ${network.medianWaitDays} days`;
      circle.append(title);
      svg.append(circle);
    });

  const labelNetworks = numericWithCoordinates
    .filter((network) => selectedForLabels.has(network.aihwCode))
    .map((network) => ({ network, point: project(network.longitude, network.latitude) }))
    .sort((a, b) => a.point.y - b.point.y);
  const labelX = 650;
  const firstLabelY = 285;
  const lastLabelY = 465;
  labelNetworks.forEach(({ network, point }, index) => {
    const y = labelNetworks.length === 1
      ? (firstLabelY + lastLabelY) / 2
      : firstLabelY + index * (lastLabelY - firstLabelY) / (labelNetworks.length - 1);
    const leaderEndX = labelX - 8;
    svg.append(element("path", {
      d: `M ${point.x} ${point.y} L ${leaderEndX} ${y - 3}`,
      class: "lhn-map-leader"
    }));
    svg.append(label(
      `${network.network}: ${network.medianWaitDays} days`,
      labelX,
      y,
      "lhn-map-extreme-label"
    ));
  });

  const legendX = 650;
  svg.append(label("LHN WAIT (DAYS)", legendX, 36, "lhn-map-legend-heading"));
  [100, 200, 300].forEach((wait, index) => {
    const x = legendX + 22 + index * 70;
    const cy = 72;
    svg.append(element("circle", {
      cx: x,
      cy,
      r: radiusFor(wait),
      fill: "#f2c94c",
      "fill-opacity": 0.6,
      stroke: "#4d4b3f",
      "stroke-width": 0.8,
      class: "lhn-map-circle"
    }));
    svg.append(label(String(wait), x, 101, "lhn-map-legend-label", { "text-anchor": "middle" }));
  });
  svg.append(label("State median wait (days)", legendX, 157, "lhn-map-legend-heading"));
  svg.append(element("rect", {
    x: legendX,
    y: 166,
    width: 180,
    height: 10,
    rx: 1,
    fill: `url(#${stateGradientId})`,
    stroke: "#b9c5ca",
    "stroke-width": 0.5
  }));
  svg.append(label("50", legendX, 190, "lhn-map-legend-label"));
  svg.append(label("100", legendX + 180, 190, "lhn-map-legend-label", { "text-anchor": "end" }));
  svg.append(element("rect", {
    x: legendX,
    y: 201,
    width: 10,
    height: 10,
    fill: "#d9d9d9",
    stroke: "#aab3b6",
    "stroke-width": 0.6
  }));
  svg.append(label("Not published (ACT, NT)", legendX + 16, 210, "lhn-map-legend-label"));
  target.replaceChildren(svg);
  target.setAttribute("role", "img");
  target.setAttribute(
    "aria-label",
    `Map of Australian state waiting times and ${publishedCount} published LHN median waits. Circle size shows waits from 0 to 350 days.`
  );
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
  svg.setAttribute("viewBox", "0 0 760 600");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "Schematic dot map of Australian SA3 areas with selected area statistics");

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

  function rateColor(rate) {
    const stops = [
      { value: 114, color: [222, 235, 247] },
      { value: 317, color: [107, 174, 214] },
      { value: 519, color: [8, 81, 156] }
    ];
    const bounded = Math.max(stops[0].value, Math.min(stops[2].value, rate));
    const upperIndex = stops.findIndex((stop) => stop.value >= bounded);
    const upper = stops[Math.max(1, upperIndex)];
    const lower = stops[Math.max(0, upperIndex - 1)];
    const fraction = (bounded - lower.value) / (upper.value - lower.value);
    const channels = lower.color.map((channel, index) =>
      Math.round(channel + (upper.color[index] - channel) * fraction)
    );
    return `rgb(${channels.join(", ")})`;
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
    const rate = Number(point.rate);
    const circle = svgElement("circle", {
      cx: point.x,
      cy: point.y,
      r: 3,
      fill: rateColor(rate),
      "fill-opacity": "0.85",
      stroke: "#ffffff",
      "stroke-width": "0.8"
    });
    const title = svgElement("title");
    title.textContent = `${point.region}, ${point.state}: ${rate} hospitalisations per 100,000 women`;
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

  const defs = svgElement("defs");
  const gradient = svgElement("linearGradient", { id: "sa3-rate-gradient" });
  gradient.append(
    svgElement("stop", { offset: "0%", "stop-color": "#deebf7" }),
    svgElement("stop", { offset: "100%", "stop-color": "#08519c" })
  );
  defs.append(gradient);
  svg.prepend(defs);
  svg.append(textNode("SA3 rate per 100,000", 365, 476, {
    "text-anchor": "middle",
    class: "dotmap-rate-label"
  }));
  svg.append(svgElement("rect", {
    x: 250,
    y: 488,
    width: 230,
    height: 12,
    rx: 2,
    fill: "url(#sa3-rate-gradient)"
  }));
  svg.append(textNode("Lower · 114", 250, 516, { class: "dotmap-rate-label" }));
  svg.append(textNode("Higher · 519", 480, 516, {
    "text-anchor": "end",
    class: "dotmap-rate-label"
  }));
  const selectedAreas = [
    {
      region: "Ballarat",
      rate: 519,
      admissions: 235,
      population: 48988
    },
    {
      region: "Whitehorse - West",
      rate: 124,
      admissions: 56,
      population: 47554
    },
    {
      region: "Darwin City",
      rate: 114,
      admissions: 12
    }
  ];
  svg.append(textNode("Selected areas · rate per 100,000 · hospitalisations · female population", 380, 535, {
    "text-anchor": "middle",
    class: "dotmap-data-heading"
  }));
  selectedAreas.forEach((area, index) => {
    const population = area.population
      ? ` · population ${area.population.toLocaleString("en-AU")}`
      : "";
    svg.append(textNode(
      `${area.region}: ${area.rate} · ${area.admissions} hospitalisations${population}`,
      380,
      552 + index * 17,
      { "text-anchor": "middle", class: "dotmap-data-label" }
    ));
  });
  target.replaceChildren(svg);
  target.setAttribute("role", "group");
  target.setAttribute("aria-label", "Schematic dot map and selected SA3 statistics");
}

function renderTreemap(target, specification) {
  const records = specification.data?.values;

  const groups = ["Inner regional", "Outer regional", "Major cities", "Remote"].map((name) => {
    const children = records.filter((record) => record.remoteness === name);
    if (children.length === 0) {
      throw new Error(`The remoteness treemap is missing ${name} records.`);
    }
    return {
      name,
      overall: children[0].overall,
      children,
      value: children.reduce((sum, record) => sum + record.population, 0)
    };
  });
  const values = records.map((record) => record.rate);
  const minRate = Math.min(...values);
  const maxRate = Math.max(...values);
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  const width = 900;
  const height = 950;
  const margin = 12;
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", "Treemap of hysterectomy rates by remoteness and SES group; tile area represents female population");

  function svgElement(name, attributes = {}) {
    const element = document.createElementNS(svgNS, name);
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    return element;
  }

  function textNode(text, x, y, attributes = {}) {
    const element = svgElement("text", { x, y, ...attributes });
    element.textContent = text;
    return element;
  }

  function worst(row, side) {
    if (row.length === 0) return Infinity;
    const areas = row.map((item) => item.area);
    const total = areas.reduce((sum, area) => sum + area, 0);
    const smallest = Math.min(...areas);
    const largest = Math.max(...areas);
    return Math.max(
      (side * side * largest) / (total * total),
      (total * total) / (side * side * smallest)
    );
  }

  function placeRow(row, rect, output) {
    const total = row.reduce((sum, item) => sum + item.area, 0);
    if (rect.width >= rect.height) {
      const columnWidth = total / rect.height;
      let y = rect.y;
      row.forEach((item) => {
        const itemHeight = item.area / columnWidth;
        output.push({ item: item.value, x: rect.x, y, width: columnWidth, height: itemHeight });
        y += itemHeight;
      });
      rect.x += columnWidth;
      rect.width -= columnWidth;
    } else {
      const rowHeight = total / rect.width;
      let x = rect.x;
      row.forEach((item) => {
        const itemWidth = item.area / rowHeight;
        output.push({ item: item.value, x, y: rect.y, width: itemWidth, height: rowHeight });
        x += itemWidth;
      });
      rect.y += rowHeight;
      rect.height -= rowHeight;
    }
  }

  function squarify(items, bounds) {
    const valueOf = (item) => item.population ?? item.value;
    const totalValue = items.reduce((sum, item) => sum + valueOf(item), 0);
    const totalArea = bounds.width * bounds.height;
    const remaining = items
      .map((item) => ({ value: item, area: (valueOf(item) / totalValue) * totalArea }))
      .sort((a, b) => b.area - a.area);
    const rect = { ...bounds };
    const output = [];
    let row = [];

    while (remaining.length > 0) {
      const next = remaining[0];
      const side = Math.min(rect.width, rect.height);
      if (row.length === 0 || worst(row.concat(next), side) <= worst(row, side)) {
        row.push(remaining.shift());
      } else {
        placeRow(row, rect, output);
        row = [];
      }
    }
    if (row.length > 0) placeRow(row, rect, output);
    return output;
  }

  function colorForRate(rate) {
    const start = [226, 242, 238];
    const end = [92, 151, 139];
    const proportion = maxRate === minRate ? 0.5 : (rate - minRate) / (maxRate - minRate);
    const rgb = start.map((channel, index) =>
      Math.round(channel + (end[index] - channel) * proportion)
    );
    return `rgb(${rgb.join(", ")})`;
  }

  function addGroupLabel(group, rect) {
    svg.append(svgElement("rect", {
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
      fill: "none",
      stroke: "#18313b",
      "stroke-width": 2
    }));
    const labelY = group.name === "Remote" ? rect.y + rect.height + 16 : rect.y + 17;
    svg.append(textNode(`${group.name} · overall ${group.overall}`, rect.x + 7, labelY, {
      class: "treemap-group-label"
    }));
  }

  const bounds = {
    x: margin,
    y: margin,
    width: width - margin * 2,
    height: height - margin * 2 - 52
  };
  const groupByName = new Map(groups.map((group) => [group.name, group]));
  const [majorCities, innerRegional, outerRegional, remote] = [
    "Major cities",
    "Inner regional",
    "Outer regional",
    "Remote"
  ].map((name) => groupByName.get(name));
  const totalPopulation = groups.reduce((sum, group) => sum + group.value, 0);
  const majorHeight = bounds.height * (majorCities.value / totalPopulation);
  const lowerHeight = bounds.height - majorHeight;
  const lowerPopulation = innerRegional.value + outerRegional.value + remote.value;
  const innerWidth = bounds.width * (innerRegional.value / lowerPopulation);
  const rightWidth = bounds.width - innerWidth;
  const rightPopulation = outerRegional.value + remote.value;
  const outerHeight = lowerHeight * (outerRegional.value / rightPopulation);
  const groupRects = [
    { group: majorCities, rect: { ...bounds, height: majorHeight } },
    {
      group: innerRegional,
      rect: { x: bounds.x, y: bounds.y + majorHeight, width: innerWidth, height: lowerHeight }
    },
    {
      group: outerRegional,
      rect: {
        x: bounds.x + innerWidth,
        y: bounds.y + majorHeight,
        width: rightWidth,
        height: outerHeight
      }
    },
    {
      group: remote,
      rect: {
        x: bounds.x + innerWidth,
        y: bounds.y + majorHeight + outerHeight,
        width: rightWidth,
        height: lowerHeight - outerHeight
      }
    }
  ];

  groupRects.forEach(({ group, rect }) => {
    addGroupLabel(group, rect);
    const childBounds = {
      x: rect.x + 4,
      y: rect.y + (group.name === "Remote" ? 4 : 24),
      width: Math.max(1, rect.width - 8),
      height: Math.max(1, rect.height - (group.name === "Remote" ? 8 : 28))
    };
    squarify(group.children, childBounds).forEach(({ item, ...tile }) => {
      svg.append(svgElement("rect", {
        x: tile.x,
        y: tile.y,
        width: tile.width,
        height: tile.height,
        fill: colorForRate(item.rate),
        stroke: "#ffffff",
        "stroke-width": 2
      }));
      const tooltip = svgElement("title");
      tooltip.textContent = `${group.name}, ${item.ses}: ${item.rate} per 100,000 women; female population ${item.population.toLocaleString("en-AU")}`;
      const cell = svg.lastElementChild;
      cell.append(tooltip);
      const centerX = tile.x + tile.width / 2;
      const centerY = tile.y + tile.height / 2;
      const compact = tile.width < 70 || tile.height < 46;
      const fontSize = compact ? 11 : 13;
      const label = svgElement("text", {
        x: centerX,
        y: compact ? centerY + fontSize / 3 : centerY - 3,
        class: "treemap-tile-label",
        "font-size": fontSize
      });
      if (compact) {
        label.textContent = `${item.ses} · ${item.rate}`;
      } else {
        const sesLine = svgElement("tspan", { x: centerX, dy: 0 });
        sesLine.textContent = item.ses;
        const rateLine = svgElement("tspan", { x: centerX, dy: fontSize + 3 });
        rateLine.textContent = String(item.rate);
        label.append(sesLine, rateLine);
      }
      svg.append(label);
    });
  });

  const definitions = svgElement("defs");
  const gradient = svgElement("linearGradient", { id: "remoteness-rate-gradient" });
  gradient.append(
    svgElement("stop", { offset: "0%", "stop-color": colorForRate(minRate) }),
    svgElement("stop", { offset: "100%", "stop-color": colorForRate(maxRate) })
  );
  definitions.append(gradient);
  svg.prepend(definitions);
  svg.append(textNode("Age-standardised rate per 100,000 women", 20, 906, {
    class: "treemap-legend-title"
  }));
  svg.append(svgElement("rect", {
    x: 20,
    y: 914,
    width: 210,
    height: 10,
    rx: 2,
    fill: "url(#remoteness-rate-gradient)"
  }));
  svg.append(textNode(String(minRate), 20, 941, { class: "treemap-legend-label" }));
  svg.append(textNode(String(maxRate), 230, 941, {
    "text-anchor": "end",
    class: "treemap-legend-label"
  }));

  target.replaceChildren(svg);
  target.setAttribute("role", "group");
  target.setAttribute("aria-label", "Hysterectomy rate treemap by remoteness and SES group");
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
  select.setAttribute("aria-label", "Select year for procedure counts");
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
  svg.setAttribute("aria-label", "Sankey diagram of endometriosis procedure counts");
  const chartTop = 54;
  const chartHeight = 385;
  const gap = 22;
  const nodeWidth = 18;
  const columns = [
    { x: 180, label: "Age group" },
    { x: 435, label: "Procedure group" },
    { x: 700, label: "Hospital sector" }
  ];
  const formatCount = (value) => Math.round(value).toLocaleString("en-AU");
  const shortProcedureName = (name) => name
    .replace("Laparoscopic excision of lesion of pelvic cavity", "Laparoscopic excision")
    .replace("Laparoscopic diathermy of lesion of pelvic cavity", "Laparoscopic diathermy")
    .replace("Dilation and curettage of uterus [D&C]", "Dilation and curettage");

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
    const titleNode = target.closest("figure")?.querySelector(".chart-title");
    if (titleNode) {
      titleNode.textContent = `Procedure counts by age, procedure group and hospital sector · ${String(year).replace("-", "–")}`;
    }
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
    svg.append(textNode(
      "Unit: procedure counts, not hospitalisations",
      450,
      45,
      "sankey-unit-label",
      "middle"
    ));

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
      title.textContent = `${link.source} → ${link.target}: ${formatCount(link.value)} procedures`;
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
        title.textContent = `${node.name}: ${formatCount(node.value)} procedures`;
        rect.append(title);
        svg.append(rect);

        const labelX = index === 0 ? node.x - 8 : node.x + nodeWidth + 8;
        const anchor = index === 0 ? "end" : "start";
        const label = index === 1 ? shortProcedureName(node.name) : node.name;
        svg.append(textNode(
          `${label} · ${formatCount(node.value)}`,
          labelX,
          node.y + Math.min(node.height / 2, 14),
          "sankey-node-label",
          anchor
        ));
      });
    });

    if (!target.contains(controls)) {
      target.replaceChildren(controls, svg);
    }
  }

  select.addEventListener("change", draw);
  draw();
  target.setAttribute("role", "group");
  target.setAttribute("aria-label", "Sankey diagram of endometriosis procedure counts with year selector");
}
async function renderChart(item, container) {
  const target = createChartCard(item, container);

  try {
    const response = await fetch(item.spec);

    if (!response.ok) {
      throw new Error(`Could not load ${item.spec}: ${response.status}`);
    }

    const specification = await response.json();

    // Custom renderers
    if (item.renderer === "lhnWaitingMap") {
      await renderLhnWaitingMap(target, specification);
      return;
    }

    if (item.renderer === "dotmap") {
      await renderDotMap(target, specification);
      return;
    }

    if (item.renderer === "sankey") {
      renderSankey(target, specification);
      return;
    }



    // Standard Vega-Lite charts
    specification.title = null;
    applyAxisTitles(specification, item.axisTitles || {});

    await vegaEmbed(target, specification, {
      actions: false,
      renderer: "svg",
      tooltip: { theme: "light" }
    });

  } catch (error) {
    console.error(`Error rendering chart "${item.title}":`, error);

    const message = el(
      "p",
      "chart-error",
      `This graphic could not load. ${error.message}`
    );

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
  if (finding.footnote) text.append(el("p", "finding-footnote", finding.footnote));

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
  if (group.label) section.append(el("p", "group-label", group.label));
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
function buildTagKey() {
  const key = el("aside", "chart-key");
  key.setAttribute("aria-label", "How to read the chart tags");
  key.append(el("p", "chart-key-title", "HOW TO READ THE CHART TAGS"));
  [
    {
      type: "access",
      term: "Access",
      meaning: "How long admitted patients waited for a hysterectomy. Longer waits mean slower access to surgery."
    },
    {
      type: "activity",
      term: "Activity",
      meaning: "How much hospital care was recorded: hospitalisation rates, admissions and procedure counts. These count care delivered, not care needed."
    }
  ].forEach(({ type, term, meaning }) => {
    const row = el("p", "chart-key-row");
    row.append(el("span", `chart-tag chart-tag--${type}`, term.toUpperCase()), el("span", "chart-key-text", meaning));
    key.append(row);
  });
  return key;
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
  root.append(buildTagKey());
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