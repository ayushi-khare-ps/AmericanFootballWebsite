"use strict";

window.onload = function (){
    initAmericanFootballTeams();
}

let teams = [
    { teamcode:"DAL", 
      name:"Dallas Cowboys", 
      locatedIn:"Arlington, TX"
    },
    { teamcode:"DEN", 
      name:"Denver Broncos", 
      locatedIn:"Denver, CO"
    },
    { teamcode:"HOU", 
      name:"Houston Texans", 
      locatedIn:"Houston, TX"
    },
    { teamcode:"KAN", 
      name:"Kansas City Chiefs", 
      locatedIn:"Kansas City, MO"
    }
  ];

  function initAmericanFootballTeams(){
    let teamList = document.getElementById("favTeam");
    let teamLength = teams.length;

    for (let i=0; i< teamLength; i++){
        let theOption = new Option(teams[i].name, teams[i].teamcode);
        teamList.appendChild(theOption);
    }

    
  }
