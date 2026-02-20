// Data from https://github.com/sharmadhiraj/free-json-datasets?tab=readme-ov-file  

// Sources used: 
// 1. https://www.youtube.com/watch?v=sTOHoueLVJE
// 2. https://observablehq.com/@d3/d3-group
// 3. https://www.d3indepth.com/selections/
// 4. https://www.youtube.com/watch?v=fw1tQOv2U14
// 5. https://d3js.org/d3-scale-chromatic/categorical
// 6. https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary

// DO NOT MODIFY THE DATA, start your code below 
let myData = [
    {
      "language": "English(excl. creole languages)",
      "family": "Indo-European",
      "branch": "Germanic",
      "first_language_millions": "390",
      "second_language_millions": "1,138",
      "total_millions": "1,528"
    },
    {
      "language": "Mandarin Chinese(incl. Standard Chinese but excl. other varieties)",
      "family": "Sino-Tibetan",
      "branch": "Sinitic",
      "first_language_millions": "990",
      "second_language_millions": "194",
      "total_millions": "1,184"
    },
    {
      "language": "Hindi(excl. Urdu)",
      "family": "Indo-European",
      "branch": "Indo-Aryan",
      "first_language_millions": "345",
      "second_language_millions": "264",
      "total_millions": "609"
    },
    {
      "language": "Spanish(excl. creole languages)",
      "family": "Indo-European",
      "branch": "Romance",
      "first_language_millions": "484",
      "second_language_millions": "74",
      "total_millions": "558"
    },
    {
      "language": "Modern Standard Arabic(excl. dialects)",
      "family": "Afro-Asiatic",
      "branch": "Semitic",
      "first_language_millions": "0",
      "second_language_millions": "335",
      "total_millions": "335"
    },
    {
      "language": "French(excl. creole languages)",
      "family": "Indo-European",
      "branch": "Romance",
      "first_language_millions": "74",
      "second_language_millions": "238",
      "total_millions": "312"
    },
    {
      "language": "Bengali",
      "family": "Indo-European",
      "branch": "Indo-Aryan",
      "first_language_millions": "242",
      "second_language_millions": "43",
      "total_millions": "284"
    },
    {
      "language": "Portuguese(excl. creole languages)",
      "family": "Indo-European",
      "branch": "Romance",
      "first_language_millions": "250",
      "second_language_millions": "17",
      "total_millions": "267"
    },
    {
      "language": "Russian",
      "family": "Indo-European",
      "branch": "Balto-Slavic",
      "first_language_millions": "145",
      "second_language_millions": "108",
      "total_millions": "253"
    },
    {
      "language": "Indonesian",
      "family": "Austronesian",
      "branch": "Malayo-Polynesian",
      "first_language_millions": "75",
      "second_language_millions": "177",
      "total_millions": "252"
    },
    {
      "language": "Urdu(excl. Hindi)",
      "family": "Indo-European",
      "branch": "Indo-Aryan",
      "first_language_millions": "78",
      "second_language_millions": "168",
      "total_millions": "246"
    },
    {
      "language": "Standard German",
      "family": "Indo-European",
      "branch": "Germanic",
      "first_language_millions": "76",
      "second_language_millions": "58",
      "total_millions": "134"
    },
    {
      "language": "Japanese",
      "family": "Japonic",
      "branch": "—",
      "first_language_millions": "124",
      "second_language_millions": "2",
      "total_millions": "126"
    },
    {
      "language": "Nigerian Pidgin",
      "family": "English Creole",
      "branch": "Krio",
      "first_language_millions": "5",
      "second_language_millions": "116",
      "total_millions": "121"
    },
    {
      "language": "Egyptian Arabic(excl. other Arabic dialects)",
      "family": "Afro-Asiatic",
      "branch": "Semitic",
      "first_language_millions": "84",
      "second_language_millions": "35",
      "total_millions": "119"
    },
    {
      "language": "Marathi",
      "family": "Indo-European",
      "branch": "Indo-Aryan",
      "first_language_millions": "83",
      "second_language_millions": "16",
      "total_millions": "99"
    },
    {
      "language": "Vietnamese",
      "family": "Austroasiatic",
      "branch": "Vietic",
      "first_language_millions": "86",
      "second_language_millions": "11",
      "total_millions": "97"
    },
    {
      "language": "Telugu",
      "family": "Dravidian",
      "branch": "South-Central",
      "first_language_millions": "83",
      "second_language_millions": "13",
      "total_millions": "96"
    },
    {
      "language": "Hausa",
      "family": "Afro-Asiatic",
      "branch": "Chadic",
      "first_language_millions": "58",
      "second_language_millions": "36",
      "total_millions": "94"
    },
    {
      "language": "Turkish",
      "family": "Turkic",
      "branch": "Oghuz",
      "first_language_millions": "85",
      "second_language_millions": "6",
      "total_millions": "91"
    },
    {
      "language": "Western Punjabi(excl. Eastern Punjabi)",
      "family": "Indo-European",
      "branch": "Indo-Aryan",
      "first_language_millions": "—",
      "second_language_millions": "—",
      "total_millions": "90"
    },
    {
      "language": "Swahili",
      "family": "Niger–Congo",
      "branch": "Bantu",
      "first_language_millions": "4",
      "second_language_millions": "83",
      "total_millions": "87"
    },
    {
      "language": "Tagalog",
      "family": "Austronesian",
      "branch": "Malayo-Polynesian",
      "first_language_millions": "33",
      "second_language_millions": "54",
      "total_millions": "87"
    },
    {
      "language": "Tamil",
      "family": "Dravidian",
      "branch": "South",
      "first_language_millions": "79",
      "second_language_millions": "8",
      "total_millions": "86"
    },
    {
      "language": "Yue Chinese(incl. Cantonese)",
      "family": "Sino-Tibetan",
      "branch": "Sinitic",
      "first_language_millions": "85",
      "second_language_millions": "1",
      "total_millions": "86"
    },
    {
      "language": "Wu Chinese(incl. Shanghainese)",
      "family": "Sino-Tibetan",
      "branch": "Sinitic",
      "first_language_millions": "83",
      "second_language_millions": "<1",
      "total_millions": "83"
    },
    {
      "language": "Iranian Persian(excl. other Persian dialects)",
      "family": "Indo-European",
      "branch": "Iranian",
      "first_language_millions": "65",
      "second_language_millions": "17",
      "total_millions": "83"
    },
    {
      "language": "Korean",
      "family": "Koreanic",
      "branch": "—",
      "first_language_millions": "81",
      "second_language_millions": "<1",
      "total_millions": "82"
    },
    {
      "language": "Thai",
      "family": "Kra–Dai",
      "branch": "Zhuang–Tai",
      "first_language_millions": "27",
      "second_language_millions": "44",
      "total_millions": "71"
    },
    {
      "language": "Javanese",
      "family": "Austronesian",
      "branch": "Malayo-Polynesian",
      "first_language_millions": "—",
      "second_language_millions": "—",
      "total_millions": "69"
    },
    {
      "language": "Italian",
      "family": "Indo-European",
      "branch": "Romance",
      "first_language_millions": "63",
      "second_language_millions": "3",
      "total_millions": "66"
    },
    {
      "language": "Gujarati",
      "family": "Indo-European",
      "branch": "Indo-Aryan",
      "first_language_millions": "58",
      "second_language_millions": "5",
      "total_millions": "62"
    },
    {
      "language": "Levantine Arabic(excl. other Arabic dialects)",
      "family": "Afro-Asiatic",
      "branch": "Semitic",
      "first_language_millions": "58",
      "second_language_millions": "3",
      "total_millions": "60"
    },
    {
      "language": "Amharic",
      "family": "Afro-Asiatic",
      "branch": "Semitic",
      "first_language_millions": "35",
      "second_language_millions": "25",
      "total_millions": "60"
    },
    {
      "language": "Kannada",
      "family": "Dravidian",
      "branch": "South",
      "first_language_millions": "44",
      "second_language_millions": "15",
      "total_millions": "59"
    },
    {
      "language": "Bhojpuri",
      "family": "Indo-European",
      "branch": "Indo-Aryan",
      "first_language_millions": "53",
      "second_language_millions": "<1",
      "total_millions": "53"
    },
    {
      "language": "Sudanese Arabic(excl. other Arabic dialects)",
      "family": "Afro-Asiatic",
      "branch": "Semitic",
      "first_language_millions": "41",
      "second_language_millions": "11",
      "total_millions": "52"
    }
  ]



// Bar plot

// Set up dimesions of charts
const margin = { top: 70, right: 40, bottom: 60, left: 100}
const width = 800 - margin.left - margin.right
const height = 600 - margin.top - margin.bottom
const radius = height / 2 - 50;  // Make a radius for the pie chart

// Create svg container for the chart (called bar to differentiate from pie chart)
const bar = d3.select("#bar-chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
// Process data
  // Group languages by family and get the count of languages in each family
let lang_fam_count = d3.rollup(myData, v => v.length, d => d.family);
myData = Array.from(lang_fam_count, ([family, lang_fam_count]) => ({family, lang_fam_count})); // Converts map to an array
myData.forEach(d => { d.lang_fam_count = +d.lang_fam_count; });

// Sort data (so it appears greatest to least on the bar graph)
myData.sort((a, b) => b.lang_fam_count - a.lang_fam_count);

const x = d3.scaleLinear()
    .range([0, width])
    .domain([0, d3.max(myData, function(d) {return d.lang_fam_count;})]);
    // Returns max of data to use for x axis

const y = d3.scaleBand()
    .range([0, height])
    .padding(0.1) // Padding so the bars aren't touching each other.
    .domain(myData.map(function(d) { return d.family; }))

// Create axes 
const xAxis = d3.axisBottom(x);
const yAxis = d3.axisLeft(y);

// Add grid lines behind bars for aesthetic and better viewing
bar.selectAll("line.vertical-grid")
    .data(x.ticks(5))
    .enter()
    .append("line")
    .attr("class", "vertical-grid")
    .attr("x1", function (d) { return x(d); })
    .attr("y1", 0)
    .attr("x2", function (d) { return x(d); })
    .attr("y2", height)
    .style("stroke", "lightgray")
    .style("stroke-width", 0.5)

// Add bars 
bar.selectAll(".bar")
    .data(myData)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("y", d => y(d.family))
    .attr("height", y.bandwidth())
    .attr("x", 0)
    .attr("width", d => x(d.lang_fam_count))
    .attr("fill", "lightblue")
    .attr("cursor", "pointer") // Makes the cursor into a pointer when hovering the bars, signifies to users they can click on them.

// Select bars by clicking and un clicking
bar.selectAll(".bar")
    .on("click", function() {
        const current = d3.select(this).attr("fill");
        d3.select(this)
            .attr("fill", current === "darkblue" ? "lightblue" : "darkblue"); // If light blue, clicking makes dark blue. If dark blue, clicking makes light blue.
    });

// Add axes
bar.append("g")
    .attr("class", "x-axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

  bar.append("g")
    .call(yAxis);

// Add titles
bar.append("text") // X Axis
    .attr("transform", "translate(" + width / 2 + "," + (height + margin.bottom /2) + ")")
    .style("text-anchor", "middle")
    .style("font-family", "sans-serif")
    .attr("dy", "1em")
    .text("Number of Languages");

bar.append("text") // Y Axis
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 15)
    .style("text-anchor", "middle")
    .style("font-family", "sans-serif")
    .text("Language Family");

  bar.append("text") // Main title
    .attr("x", width/2 - margin.left*2)
    .attr("y", margin.top - 100)
    .style("font-size", "18px")
    .style("font-weight", "bold")
    .style("font-family", "sans-serif")
    .text("Number of Languages in each Language Family");




// Pie chart

// Make the pie chart
const piechart = d3.select("#pie-chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

// Make the color scheme (used a color scheme with 12 colors as there are 12 language families)
const color = d3.scaleOrdinal()
  .domain(myData.map(d => d.family))
  .range(d3.schemePaired);

// Convert data into angles for pie chart
const pie = d3.pie()
  .value(d => d.lang_fam_count);

// Make the arc/slice shapes
const arc = d3.arc()
  .innerRadius(0)
  .outerRadius(radius);

// Add titles
piechart.append("text") // Main title
    .attr("x", 0)
    .attr("y", -height/2 + 30)
    .attr("text-anchor", "middle")
    .style("font-size", "18px")
    .style("font-weight", "bold")
    .text("Proportion of Each Language Family");

// Placeholer text on the bottom 
const selected = piechart.append("text")
  .attr("x", -100)
  .attr("y", height/2 - 20)
  .text("");

// Make it interactive
const total_langs = d3.sum(myData, d => d.lang_fam_count); // sums up the total number of languages so we can obtain percentages later

// Display language information when corresponding pie slice is clicked
piechart.selectAll("path")
  .data(pie(myData))
  .enter()
  .append("path")
  .attr("d", arc)
  .attr("fill", d => color(d.data.family))
  .attr("stroke", "white")
  .attr("cursor", "pointer")
  .on("click", function(event, d) {
      selected.text(d.data.family + ": " + d.data.lang_fam_count + " (" + (d.data.lang_fam_count/total_langs * 100).toFixed(2) + "%)");
  });
  
//Add a legend
const legend = d3.select("#pie-chart svg")
  .append("g")
  .attr("transform", "translate(" + width - 130 + ", 20)");

legend.selectAll("rect")
  .data(myData)
  .enter()
  .append("rect")
  .attr("y", (d, i) => i * 20)
  .attr("width", 15)
  .attr("height", 15)
  .attr("fill", d => color(d.family));

legend.selectAll("text")
  .data(myData)
  .enter()
  .append("text")
  .attr("x", 20) // So the text doesn't overlap the colors
  .attr("y", (d, i) => i * 20 + 12) // Evenly spaced
  .text(d => d.family);