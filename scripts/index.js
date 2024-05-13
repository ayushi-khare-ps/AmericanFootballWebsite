"use strict";

window.onload = function () {
    initAmericanFootballTeams();

    //const AFT = document.getElementById("favTeam");

}

let teams = [
    {
        teamcode: "DAL",
        name: "Dallas Cowboys",
        locatedIn: "Arlington, TX"
    },
    {
        teamcode: "DEN",
        name: "Denver Broncos",
        locatedIn: "Denver, CO"
    },
    {
        teamcode: "HOU",
        name: "Houston Texans",
        locatedIn: "Houston, TX"
    },
    {
        teamcode: "KAN",
        name: "Kansas City Chiefs",
        locatedIn: "Kansas City, MO"
    }
];

function initAmericanFootballTeams() {
    let teamList = document.getElementById("favTeam");
    let teamLength = teams.length;

    for (let i = 0; i < teamLength; i++) {
        let theOption = new Option(teams[i].name, teams[i].teamcode);
        teamList.appendChild(theOption);
    }

    
}

//const selBtn = document.getElementById("selectBtn");

function displayMsg() {

    const favTeam = document.getElementById("favTeam");
    let favTeamIndex = favTeam.selectedIndex;
    const msgField = document.getElementById("your-selection");
    if (favTeamIndex != 0){
    

        msgField.innerHTML = `You selected the ${teams[favTeamIndex - 1].name} who plays in ${teams[favTeamIndex - 1 ].locatedIn}`;
    }
    else{

        msgField.innerHTML = "";
    }

}