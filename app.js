/* ------------------------------------------------------------------
   Behind the State Averages: Women's Health Procedures Across Australia

   Structure
   Theme (numbered section, h2)
     └─ Evidence group (label for charts that support one claim)
          └─ Finding (analysis text + 1 or 2 charts)
   Standalone findings sit outside any theme.

------------------------------------------------------------------- */

const CHART_DISCRETE_COLORS = ["#FFA447", "#800F2F", "#590D22", "#333333"];
const FIGURE_9_COLORS = [
  "#0072B2",
  "#FFA447",
  "#800F2F",
  "#009E73",
  "#56B4E9",
  "#CC79A7",
  "#D55E00",
  "#333333"
];
const CHART_CONTINUOUS_RANGE = ["#ffccd5", "#590d22"];
const MAP_BORDER_COLOR = "#590d22";

function chartColorAt(proportion) {
  const channels = CHART_CONTINUOUS_RANGE.map((color) =>
    color.match(/[0-9a-f]{2}/gi).map((channel) => parseInt(channel, 16))
  );
  const bounded = Math.max(0, Math.min(1, proportion));
  const rgb = channels[0].map((channel, index) =>
    Math.round(channel + (channels[1][index] - channel) * bounded)
  );
  return `rgb(${rgb.join(", ")})`;
}

const C = {
  waitingMapState: {
    figureName: "Figure 1",
    spec: "specs/map-hyst-waiting-times-state.json",
    title: "State hysterectomy wait times · 2024–2025",
    idiom: "Choropleth",
    axisTitles: {},
    caveat: "State median wait is unpublished for ACT and NT (shown in orange).",
    source: "Source: AIHW Elective surgery waiting times 2024–25, Table 4.7; supplied state waiting-time CSV."
  },
  waitingMapLhn: {
    figureName: "Figure 2",
    spec: "specs/map-hyst-waiting-times-lhn.json",
    title: "Hysterectomy wait times by local hospital network · 2024–2025",
    idiom: "Proportional symbols",
    axisTitles: {},
    caveat: "48 of 71 LHNs published; network data show 94 days for ACT and 57 for NT although state medians are unpublished.",
    source: "Source: AIHW waiting-time data; supplied LHN waiting-time CSV and coordinates."
  },
  volumeMap: {
    figureName: "Figure 2",
    spec: "specs/map-hyst-volume.json",
    title: "Recorded hysterectomy hospitalisations by state · 2021–2022",
    idiom: "Proportional-symbol map",
    axisTitles: {},
    caveat: "Counts reflect population size as well as hospitalisation frequency.",
    source: "Source: AIHW Australian Atlas of Healthcare Variation Time Series, 2021–22."
  },
  dotMap: {
    figureName: "Figure 5",
    spec: "specs/chart-sa3-strip.json",
    renderer: "dotmap",
    cardClass: "chart-card--dotmap",
    title: "Locations of SA3 areas with published hysterectomy hospitalisation rates · 2021–2022",
    idiom: "Dot map",
    axisTitles: {},
    caveat: "316 rates shown; 24 are suppressed and state totals range from 5 to 87. Locations are schematic.",
    source: "Source: AIHW Australian Atlas of Healthcare Variation Time Series, 2021–22."
  },
  ridgeline: {
    figureName: "Figure 3",
    spec: "specs/chart-sa3-ridgeline.json",
    title: "SA3 hysterectomy hospitalisation rates by state · 2021–2022",
    idiom: "Ridgeline plot",
    axisTitles: { x: "Hospitalisations per 100,000 women" },
    caveat: "Each ridge smooths the SA3 rates in one state; numbers mark its lowest and highest area. Suppressed rates are omitted, and the ACT and NT curves rest on only 5 to 6 areas.",
    source: "Source: AIHW Australian Atlas of Healthcare Variation Time Series, 2021–22."
  },
  range: {
    figureName: "Figure 4",
    spec: "specs/chart-sa3-range.json",
    title: "SA3 hysterectomy hospitalisation rate ranges by state · 2021–2022",
    idiom: "Interval plot",
    axisTitles: { x: "Hospitalisations per 100,000 women", y: "State" },
    caveat: "24 SA3 values are suppressed; statewide counts of valid SA3s range from 5 to 87.",
    source: "Source: AIHW Australian Atlas of Healthcare Variation Time Series, 2021–22."
  },
  slope: {
    figureName: "Figure 9",
    spec: "specs/chart-hyst-slopegraph.json",
    title: "Hysterectomy hospitalisation rates by state · 2014–2022",
    idiom: "Slopegraph",
    axisTitles: { x: "Financial year", y: "Hospitalisations per 100,000 women" },
    caveat: "Age-standardised rates; SA and WA finish at the same rate.",
    source: "Source: AIHW Australian Atlas of Healthcare Variation Time Series, 2014–15 and 2021–22."
  },
  tileGrid: {
    figureName: "Figure 10",
    spec: "specs/chart-hyst-tilegrid.json",
    cardClass: "chart-card--tilegrid",
    title: "Hysterectomy hospitalisation rates by state · 2014–2022",
    idiom: "Tile-grid map",
    axisTitles: {},
    caveat: "Fill shows each state’s 2021–22 age-standardised rate per 100,000 women; each line runs from 2014–15 to 2021–22.",
    source: "Source: AIHW Australian Atlas of Healthcare Variation Time Series, 2014–15 to 2021–22."
  },
  heatmap: {
    figureName: "Figure 11",
    spec: "specs/chart-hyst-heatmap.json",
    title: "Annual age-standardised hysterectomy hospitalisation rates by state · 2014–2022",
    idiom: "Heatmap",
    axisTitles: { x: "Financial year", y: "State or territory" },
    caveat: "Changes around 2019–20 to 2021–22 overlap with COVID-era restrictions.",
    source: "Source: AIHW Australian Atlas of Healthcare Variation Time Series, 2014–15 to 2021–22."
  },
  indigenousDumbbell: {
    figureName: "Figure 7",
    spec: "specs/chart-hyst-indigenous-dumbbell.json",
    title: "Hysterectomy hospitalisation rates by Indigenous status and state · 2021–2022",
    idiom: "Dumbbell plot",
    axisTitles: { x: "Age-standardised rate per 100,000 women" },
    caveat: "Hospitalisation rates are not measures of prevalence or need; Tasmania and ACT are suppressed.",
    source: "Source: AIHW Australian Atlas of Healthcare Variation Time Series, 2021–22."
  },
  privateShare: {
    figureName: "Figure 8",
    spec: "specs/chart-hyst-private-waffle.json",
    title: "Private-patient share of hysterectomy hospitalisations by state · 2021–2022",
    idiom: "Waffle chart",
    axisTitles: {},
    caveat: "Each square is 1% of a state’s hysterectomy hospitalisations; nationally, 63% were private.",
    source: "Source: AIHW Australian Atlas of Healthcare Variation Time Series, 2021–22."
  },
  remotenessSes: {
    figureName: "Figure 6",
    spec: "specs/chart-hyst-remoteness-ses-radial.json",
    cardClass: "chart-card--remoteness",
    title: "Hysterectomy hospitalisation rates by remoteness and SES group · 2021–2022",
    idiom: "Radial chart",
    axisTitles: {},
    caveat: "Area: age-standardised rate/100k; colour: remoteness; slices: SES; Outer Regional/Remote SES suppressed.",
    source: "Source: AIHW Australian Atlas of Healthcare Variation Time Series, 2021–22."
  },
  endoLine: {
    figureName: "Figure 12",
    spec: "specs/chart-endo-rate-line.json",
    title: "Annual endometriosis admissions and crude admission rates · 2015–2025",
    idiom: "Line chart",
    axisTitles: { x: "Financial year", y: "Admissions per 100,000 population" },
    caveat: "Crude rates are not age-adjusted and are not a measure of disease prevalence.",
    source: "Source: AIHW PHE 357, Endometriosis hospital procedures, 2015–16 to 2024–25."
  },
  waterfall: {
    figureName: "Figure 13",
    spec: "specs/chart-endo-waterfall.json",
    title: "Change in endometriosis admissions by urgency · 2015–2025",
    idiom: "Waterfall",
    axisTitles: { x: "Urgency group", y: "Hospitalisations" },
    caveat: "The waterfall compares total admissions at the start and end of the series.",
    source: "Source: AIHW PHE 357, Endometriosis hospital procedures, 2015–16 and 2024–25."
  },
  parallel: {
    figureName: "Figure 14",
    spec: "specs/chart-endo-parallel.json",
    title: "Selected endometriosis procedure rates by age group · 2024–2025",
    idiom: "Parallel-coordinates plot",
    axisTitles: { x: "Age group", y: "Procedures per 100,000 women" },
    caveat: "Rates are for selected procedures in 2024–25, not unique people.",
    source: "Source: AIHW PHE 357, Endometriosis hospital procedures, 2024–25."
  },
};

const story = {
  themes: [
    {
      id: "place",
      title: "Geographic Variation in Healthcare",
      thesis:
        "Waiting times and hysterectomy rates vary across Australia. Combining AIHW waiting-time data with hysterectomy hospitalisation rates shows how different measures and places reveal different patterns of care.",
      groups: [
        {
          label: "Waiting for care",
          findings: [
            {
              heading: "Waiting times differ across states and hospital networks",
              text: "The 50-day median wait in Victoria versus 99 days in NSW shows that public-hospital timelines differ across states. Comparing sources, Queensland had the highest 2021–22 hysterectomy hospitalisation rate (286 per 100,000; Figure 9), while NSW had the longest published state median wait in 2024–25 (99 days; Figure 1); Victoria had a lower rate of 204 and the shortest published wait, 50 days. These are different measures from different years, so the contrast does not show that one causes or predicts the other. It does show why hospitalisation rates and waiting times should not be treated as interchangeable measures of access or need. These waits cover public hospitals only; in 2021–22, 63% of hysterectomy hospitalisations were privately funded (Figure 8). Figure 2 shows even wider local variation: NSW network waits range from 44 to 338 days, and Queensland’s from 56 to 324. State medians are unpublished for the ACT and NT (Figure 1), but supplied network data show 94 days for the ACT and 57 for the NT. State averages therefore conceal substantial network variation.",
              layout: "pair",
              charts: [C.waitingMapState, C.waitingMapLhn]
            }
          ]
        },
        {
          label: "Variation within states",
          findings: [
            {
              heading: "State averages conceal substantial local variation",
              text: "Figures 3 and 4 show that areas within the same state can have very different hysterectomy hospitalisation rates. In Victoria, the range runs from 124 per 100,000 women in Whitehorse–West to 519 in Ballarat. The key story is not simply that states differ, but that the place someone lives within a state may also matter.",
              layout: "pair",
              charts: [C.ridgeline, C.range]
            },
            {
              heading: "Local differences become visible on the map",
              text: "Figure 5 adds a geographic dimension to the ranges shown in Figure 4: it shows where the measured SA3 areas sit, rather than only how high or low their rates are. The spread across the map reinforces that variation is not confined to one state or one region. The dots are schematic, however, so their positions show distribution rather than exact locations.",
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
              text: "In Figure 6, inner regional areas record 292 hospitalisations per 100,000 women, above major cities at 218 and remote areas at 193. This challenges a simple assumption that remoteness alone explains differences in care. The socioeconomic slices also show variation within remoteness categories, suggesting that geography and social circumstances should be considered together rather than as competing explanations.",
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
              text: "In 2021–22, First Nations women had a higher national hysterectomy hospitalisation rate than Other Australian women (251 versus 231 per 100,000). However, Figure 7 shows contrasting state-level patterns: First Nations women had higher rates in NSW, Victoria and Queensland, while Other Australian women had higher rates in WA and the NT. These results highlight how national averages can conceal geographic variation in recorded hysterectomy hospitalisations.",
              charts: [C.indigenousDumbbell]
            }
          ]
        },
        {
          label: "Public and private funding",
          findings: [
            {
              heading: "Private hospitals account for most hysterectomy admissions",
              text: "Figure 8 shows that 63% of hysterectomy hospitalisations were privately funded nationally. The share ranges from 53% in the NT to 71% in WA, making the private sector the larger part of recorded activity in every state shown. This uneven funding mix matters because national totals can make the system look more uniform than the state-level picture suggests.",
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
              text: "Figure 9 shows broad declines in hysterectomy hospitalisation rates, while Figure 10 shows how trajectories differed between states. Comparing only the 2014–15 and 2021–22 endpoints, the gap between the highest and lowest rates widened from 103 to 123 per 100,000 women. The gap was wider in between: in 2016–17, Tasmania’s rate of 420 versus the NT’s 200 created a 220-point difference (Figure 11). The endpoints alone therefore miss important variation over time.",
              layout: "pair",
              charts: [C.slope, C.tileGrid]
            },
            {
              heading: "Tasmania followed a different trajectory",
              text: "Figure 11 highlights Tasmania’s rise to 420 hospitalisations per 100,000 women in 2016–17, followed by a fall to 279 in 2021–22. That peak stands out against the broader pattern of declining rates and shows why a start-to-end comparison can miss important changes in between. The trajectory is unusual, but the data alone do not identify its cause.",
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
        "Endometriosis hospitalisations have increased, while recorded procedure patterns differ by age. These charts describe hospital activity, not the full prevalence of the condition.",
      groups: [
        {
          label: "Growth in hospital activity",
          findings: [
            {
              heading: "The rise in endometriosis admissions was driven mainly by elective care",
              text: "Figure 12 shows admissions rising from 17,630 to 24,689 between 2015–16 and 2024–25, an increase of about 40%. Figure 13 indicates that elective admissions account for around 76% of that growth. The increase is therefore concentrated in planned hospital care, making elective treatment an important part of the story behind rising recorded activity.",
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
              text: "In Figure 14, six of ten selected procedures peak at ages 25–34 and four at ages 35–44. This pattern is consistent with endometriosis care being concentrated during reproductive years. Symptoms often improve after menopause, although the condition can persist. The decline in older age groups should therefore be read as a pattern in recorded procedures, not evidence that endometriosis disappears after a particular age.",
              charts: [C.parallel]
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
              text: "Across Figures 1–14, AIHW elective-surgery waiting-time data for 2024–25 and hysterectomy hospitalisation-rate data through 2021–22 show different state patterns: the highest historical rate and longest later wait are in different states. Because the datasets measure different outcomes in different years, this comparison is descriptive, not evidence that waiting time and hospitalisation rates are linked. State-level patterns also vary by Indigenous status and funding sector. Meanwhile, endometriosis hospitalisations have grown, particularly through elective care, and recorded procedures are concentrated in reproductive-age groups. Together, these findings show that healthcare activity is unevenly distributed. Explaining whether those differences reflect need, access or service organisation requires evidence beyond hospital records alone.",
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
    item.figureName
  );

  const caption = item.caption
    ? el("p", "chart-caption", item.caption)
    : null;

  card.append(
    ...[heading, view, caption, caveat, source, figureNumber]
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

function applyChartPalette(specification, item) {
  const isMap = Boolean(specification.projection) ||
    item?.idiom?.toLowerCase().includes("map");
  const useMaroonLines = ["Figure 2", "Figure 3", "Figure 4", "Figure 12", "Figure 13"]
    .includes(item?.figureName);
  const staticColorMap = new Map();
  const nextStaticColor = (color) => {
    if (!staticColorMap.has(color)) {
      staticColorMap.set(color, CHART_DISCRETE_COLORS[staticColorMap.size % CHART_DISCRETE_COLORS.length]);
    }
    return staticColorMap.get(color);
  };
  const isColor = (value) =>
    typeof value === "string" &&
    (/^#[0-9a-f]{3,8}$/i.test(value) || /^(rgb|hsl)a?\(/i.test(value));

  const config = specification.config || {};
  const range = config.range || {};
  config.range = {
    ...range,
    category: CHART_DISCRETE_COLORS,
    ramp: CHART_CONTINUOUS_RANGE
  };
  if (config.title && typeof config.title === "object") {
    config.title.color = "#333333";
  }
  if (config.axis) {
    config.axis.labelColor = useMaroonLines ? MAP_BORDER_COLOR : "#333333";
    config.axis.titleColor = useMaroonLines ? MAP_BORDER_COLOR : "#333333";
    config.axis.domainColor = useMaroonLines ? MAP_BORDER_COLOR : "#333333";
    config.axis.tickColor = useMaroonLines ? MAP_BORDER_COLOR : "#333333";
    config.axis.grid = false;
  }
  if (config.legend) {
    config.legend.labelColor = "#333333";
    config.legend.titleColor = "#333333";
  }
  specification.config = config;

  function applyColorChannel(channel) {
    if (!channel || typeof channel !== "object") return;
    if (item?.figureName === "Figure 3") return;
    if (item?.figureName === "Figure 8") return;
    if (item?.figureName === "Figure 10" && channel.condition) return;
    if (item?.figureName === "Figure 11" &&
      channel.condition?.test === "datum.year === '2016–17'") return;
    const conditions = Array.isArray(channel.condition)
      ? channel.condition
      : [channel.condition];
    const typedChannels = [channel, ...conditions].filter((condition) =>
      condition && typeof condition === "object" && condition.type
    );
    const type = typedChannels.length ? typedChannels[0].type : channel.type;
    if (item?.figureName === "Figure 13" && type === "nominal" &&
      channel.scale !== null) {
      channel.scale = {
        ...(channel.scale || {}),
        range: ["#ff8fa3", "#800F2F"]
      };
      delete channel.scale.scheme;
    } else if (type === "quantitative" || type === "temporal") {
      if (channel.scale !== null) {
        channel.scale = { ...(channel.scale || {}), range: CHART_CONTINUOUS_RANGE };
        delete channel.scale.scheme;
      }
    } else if (type === "nominal" || type === "ordinal") {
      if (channel.scale !== null) {
        channel.scale = { ...(channel.scale || {}), range: CHART_DISCRETE_COLORS };
        if (item?.figureName === "Figure 9") {
          channel.scale.range = FIGURE_9_COLORS;
        }
        delete channel.scale.scheme;
      }
    }

    if (isColor(channel.value)) channel.value = nextStaticColor(channel.value);
    conditions.forEach((condition) => {
      if (condition && isColor(condition.value)) {
        condition.value = nextStaticColor(condition.value);
      }
    });
    if (item?.figureName === "Figure 14") {
      if (channel.value === CHART_DISCRETE_COLORS[0]) channel.value = "#ffccd5";
      conditions.forEach((condition) => {
        if (condition?.value === CHART_DISCRETE_COLORS[0]) {
          condition.value = "#ffccd5";
        }
      });
    }
  }

  function visit(node) {
    if (!node || typeof node !== "object") return;
    if (node.encoding) {
      ["color", "fill", "stroke"].forEach((channelName) => {
        if (useMaroonLines && ["line", "rule", "tick"].includes(node.mark?.type) &&
          node.encoding[channelName]) {
          node.encoding[channelName] = { value: MAP_BORDER_COLOR };
        } else {
          applyColorChannel(node.encoding[channelName]);
        }
      });
    }
    if (node.mark && typeof node.mark === "object") {
      if (isMap && node.mark.type === "geoshape" &&
        !node.encoding?.color && !node.encoding?.fill) {
        node.mark.fill = "#FFCCD5";
      }
      ["color", "fill", "stroke"].forEach((attribute) => {
        const color = node.mark[attribute];
        if (attribute === "stroke" && isMap && isColor(color)) {
          node.mark[attribute] = MAP_BORDER_COLOR;
        } else if (item?.spec === "specs/map-hyst-waiting-times-lhn.json" &&
          node.mark.type === "geoshape" && attribute === "fill") {
          node.mark[attribute] = "#FFCCD5";
        } else if (item?.figureName === "Figure 7" &&
          node.mark.type === "rect" && attribute === "color" && isColor(color)) {
          node.mark[attribute] = "#FFDFE8";
          node.mark.opacity = 0.5;
        } else if (!isColor(color) || /^(#fff(?:fff)?|#ffffff)$/i.test(color)) {
          return;
        } else {
          node.mark[attribute] = node.mark.type === "text" || attribute === "stroke"
            ? "#333333"
            : nextStaticColor(color);
        }
      });
      if (isMap && node.mark.type === "geoshape") {
        node.mark.stroke = MAP_BORDER_COLOR;
      }
      if (node.mark.point && typeof node.mark.point === "object") {
        const inheritedColor = node.mark.color || node.mark.fill;
        if (inheritedColor && !node.mark.point.color && !node.mark.point.fill) {
          node.mark.point.color = inheritedColor;
        }
      }
      if (useMaroonLines && ["line", "rule", "tick"].includes(node.mark.type)) {
        node.mark.color = MAP_BORDER_COLOR;
      }
      if (item?.figureName === "Figure 12" && node.mark.type === "line") {
        node.mark.color = "#ff8fa3";
        if (node.mark.point && typeof node.mark.point === "object") {
          node.mark.point.color = "#ff8fa3";
        }
      }
      if (item?.figureName === "Figure 7" && node.mark.type === "rule") {
        node.mark.color = "#432818";
      }
    }
    if (node.header && typeof node.header === "object") {
      node.header.labelColor = "#333333";
    }
    if (node.title && typeof node.title === "object") {
      node.title.color = "#333333";
    }
    if (node.axis && typeof node.axis === "object") {
      node.axis.labelColor = useMaroonLines ? MAP_BORDER_COLOR : "#333333";
      node.axis.titleColor = useMaroonLines ? MAP_BORDER_COLOR : "#333333";
      node.axis.domainColor = useMaroonLines ? MAP_BORDER_COLOR : "#333333";
      node.axis.tickColor = useMaroonLines ? MAP_BORDER_COLOR : "#333333";
      node.axis.grid = false;
    }
    if (node.legend && typeof node.legend === "object") {
      node.legend.labelColor = "#333333";
      node.legend.titleColor = "#333333";
      if (isMap && node.legend.symbolStrokeColor) {
        node.legend.symbolStrokeColor = MAP_BORDER_COLOR;
      }
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
    if (!Number.isFinite(wait)) return "#FFCCD5";
    const fraction = Math.max(0, Math.min(1, (wait - 50) / 50));
    return chartColorAt(fraction);
  };
  const radiusFor = (wait) => 11 * Math.sqrt(Math.min(wait, 350) / 350);
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
    element("stop", { offset: "0%", "stop-color": CHART_CONTINUOUS_RANGE[0] }),
    element("stop", { offset: "100%", "stop-color": CHART_CONTINUOUS_RANGE[1] })
  );
  defs.append(stateGradient);
  svg.append(defs);

  const extent = { west: 110, east: 155, south: -45, north: -5 };
  const mapArea = { x: 44, y: 38, width: 540, height: 420 };
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
      stroke: MAP_BORDER_COLOR,
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
        fill: CHART_DISCRETE_COLORS[3],
        "fill-opacity": 0.6,
        stroke: MAP_BORDER_COLOR,
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
      fill: CHART_DISCRETE_COLORS[3],
      "fill-opacity": 0.6,
      stroke: MAP_BORDER_COLOR,
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
    stroke: MAP_BORDER_COLOR,
    "stroke-width": 0.5
  }));
  svg.append(label("50", legendX, 190, "lhn-map-legend-label"));
  svg.append(label("100", legendX + 180, 190, "lhn-map-legend-label", { "text-anchor": "end" }));
  svg.append(element("rect", {
    x: legendX,
    y: 201,
    width: 10,
    height: 10,
    fill: CHART_DISCRETE_COLORS[0],
    stroke: MAP_BORDER_COLOR,
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
async function prepareDotMap(specification) {
  const boundaryUrl = specification.usermeta?.boundaryDataUrl;
  if (typeof boundaryUrl !== "string") {
    throw new Error("The dot map is missing its state boundary data URL.");
  }
  const boundaryResponse = await fetch(boundaryUrl);
  if (!boundaryResponse.ok) {
    throw new Error(`Could not load Australia state boundaries: ${boundaryResponse.status}`);
  }
  const boundaries = await boundaryResponse.json();
  const records = specification.data?.values;
  if (!Array.isArray(records) || records.length === 0) {
    throw new Error("The dot map has no SA3 records to display.");
  }
  if (!Array.isArray(boundaries.features)) {
    throw new Error("The dot map boundary file has no geographic features.");
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
  const mapBounds = { x: 145, y: 52, width: 470, height: 405 };
  const project = (longitude, latitude) => ({
    x: mapBounds.x + ((longitude - 110) / 46) * mapBounds.width,
    y: mapBounds.y + ((-10 - latitude) / 37) * mapBounds.height
  });
  const stateAbbreviations = Object.keys(stateCodes);
  const grouped = new Map(stateAbbreviations.map((state) => [state, []]));
  records.forEach((record) => {
    const group = grouped.get(record.state);
    if (group) group.push(record);
  });

  function geometryRings(geometry) {
    if (geometry.type === "Polygon") return [geometry.coordinates];
    if (geometry.type === "MultiPolygon") return geometry.coordinates;
    throw new Error(`Unsupported SA3 map boundary geometry: ${geometry.type}`);
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

  const projectedBoundaries = boundaries.features.map((feature) => {
    const polygons = geometryRings(feature.geometry).map((rings) =>
      [rings[0].map(([longitude, latitude]) => {
        const point = project(longitude, latitude);
        return [point.x, point.y];
      })]
    );
    return {
      type: "Feature",
      properties: feature.properties,
      geometry: {
        type: polygons.length === 1 && feature.geometry.type === "Polygon"
          ? "Polygon"
          : "MultiPolygon",
        coordinates: feature.geometry.type === "Polygon" ? polygons[0] : polygons
      }
    };
  });

  const points = [];
  stateAbbreviations.forEach((state) => {
    const feature = stateFeatures.get(stateCodes[state]);
    if (!feature) throw new Error(`Australia boundary is missing for ${state}.`);
    const stateRecords = grouped.get(state) || [];
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
      const position = project(longitude, latitude);
      points.push({ ...record, x: position.x, y: position.y });
    });
  });

  specification.data.values = points;
  specification.datasets.stateBoundaries = projectedBoundaries;
  specification.datasets.stateLabels = specification.datasets.stateLabels.map((label) => {
    const position = project(label.longitude, label.latitude);
    return { ...label, x: position.x, y: position.y };
  });
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
    const proportion = maxRate === minRate ? 0.5 : (rate - minRate) / (maxRate - minRate);
    return chartColorAt(proportion);
  }

  function addGroupLabel(group, rect) {
    svg.append(svgElement("rect", {
      x: rect.x,
      y: rect.y,
      width: rect.width,
      height: rect.height,
      fill: "none",
      stroke: "#333333",
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

function alignChartSourceRule(view) {
  const card = view.closest(".chart-card");
  const notes = card?.querySelectorAll(".chart-caption, .chart-caveat, .chart-source");
  const graphic = view.querySelector("svg, canvas");

  if (!notes?.length || !graphic) return;

  const updateNoteWidths = () => {
    const width = `${graphic.getBoundingClientRect().width}px`;
    notes.forEach((note) => {
      note.style.width = width;
    });
  };

  updateNoteWidths();
  new ResizeObserver(updateNoteWidths).observe(graphic);
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
      alignChartSourceRule(target);
      return;
    }

    if (item.renderer === "dotmap") {
      await prepareDotMap(specification);
    }

    // Standard Vega-Lite charts
    specification.title = null;
    if (item.renderer !== "dotmap") applyChartPalette(specification, item);
    applyAxisTitles(specification, item.axisTitles || {});

    await vegaEmbed(target, specification, {
      actions: false,
      renderer: "svg",
      tooltip: { theme: "light" }
    });
    alignChartSourceRule(target);

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
  const includesFigure7 = finding.charts.some((item) => item.figureName === "Figure 7");
  const includesFigure8 = finding.charts.some((item) => item.figureName === "Figure 8");
  const article = el(
    "article",
    `finding${finding.layout ? ` finding--${finding.layout}` : ""}${finding.charts.length ? "" : " finding--text-only"}${includesFigure7 ? " finding--figure-7" : ""}${includesFigure8 ? " finding--figure-8" : ""}`
  );

  const text = el("div", "finding-text");
  const analysis = el("div", "finding-analysis");
  analysis.append(el("p", "", finding.text));
  if (finding.footnote) analysis.append(el("p", "finding-footnote", finding.footnote));
  text.append(el("h3", "", finding.heading), analysis);

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
    const glossary = main.querySelector(".glossary");
    const sources = main.querySelector(".sources");
    const before = glossary || sources;
    if (before) {
      main.insertBefore(root, before);
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
  // Render the story directly, without the chart-tag key.
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