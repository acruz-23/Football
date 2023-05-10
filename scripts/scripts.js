console.log("JS working");
let teams = [
  {
    code: "before you load the actual teams.",
    name: "Select a Team",
    plays: "N/A",
  },
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];
const selectTeamEl = document.getElementById("teamList");
function fillSelect(teamList) {
  console.log("fillSelect Started");

  for (let i in teamList) {
    const teamName = teamList[i].name;
    const teamVal = teamList[i].code;

    const optionsEl = new Option(teamName, teamVal);
    selectTeamEl.appendChild(optionsEl);
    console.log("fillselect Finished");
  }
}
fillSelect(teams);
const formEl = document.querySelector("form");

const teamBtnEl = document.getElementById("teamBtn");

formEl.onsubmit = displayTeamInfo;
function displayTeamInfo() {
  console.log("logSubmissionMessage started");
  const selectedIndex = selectTeamEl.selectedIndex;
  if (selectedIndex == 0) {
    formReset();
  } else {
    const playLocation = teams[selectedIndex].plays;
    const teamVal = teams[selectedIndex].code;
    const teamName = teams[selectedIndex].name;
    const message = `You Selected the ${teamName} (${teamVal}) who play in ${playLocation}.`;
    document.getElementById("teamInfo").innerHTML = message;
    if (teamVal == "DAL") {
      document.getElementById("teamImg").src = "./images/dallasCowboys.png";
    }
    if (teamVal == "DEN") {
      document.getElementById("teamImg").src = "./images/denverBroncos.png";
    }
    if (teamVal == "HOU") {
      document.getElementById("teamImg").src = "./images/HoustonTexans.png";
    }
    if (teamVal == "KAN") {
      document.getElementById("teamImg").src =
        "./images/kansas-city-chiefs-logo.png";
    }

    console.log("logSubmissionMessage finished");
  }

  return false;
}
function formReset() {
  console.log("formReset Start");
  const selectedIndex = selectTeamEl.selectedIndex;
  selectTeamEl.selectedIndex = 0;
  document.getElementById("teamInfo").innerHTML = "";
  document.getElementById("teamImg").src = "";
  console.log("formReset Finish");
}
