console.log("JS working");
let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

function fillSelect(teamList) {
  console.log("fillSelect Started");
  const selectTeamEl = document.getElementById("teamList");
  for (let i in teamList) {
    const teamName = teamList[i].name;
    const teamVal = teamList[i].code;

    const optionsEl = new Option(teamName, teamVal);
    selectTeamEl.appendChild(optionsEl);
    console.log("fillselect Finished");
  }
}
fillSelect(teams);
