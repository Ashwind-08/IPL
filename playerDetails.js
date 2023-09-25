

let urlData = location.href;//this will return a entire URL of the current page 
let newUrl = new URL(urlData);//URL Constructor  this will create a new URL Definee dby the Parameters
let playerUrl = newUrl.searchParams.get("name");//Getting the palyers name form that newURL
console.log(playerUrl);


// geting data from local storage
 
teamsDetails = JSON.parse(localStorage.getItem("teamArray"));
playersDetails = JSON.parse(localStorage.getItem("playerArray"));

let playerData = document.getElementById("playerinfo");
for (var i = 0; i < playersDetails.length; i++) {
    // comaparing the playerUrl and the playerName which is there in the local storage
  if (playersDetails[i].playerName == playerUrl) {
    var playingOrN = " ";
    //checking whether the player is palying are onbench for displaying to the players list
    if (playersDetails[i].isPlaying == true) {
      playingOrN = "Playing";
    } else {
      playingOrN = "On Bench";
    }
    //rendering a palyers data into the page by using String literal Dynamically creating the webpage
    // rendering information using table tag
    //assigning value to the property by using ${} --used to insert a variable to a string

    playerData.innerHTML += `

        <div id="playerimg">
        <img src="${playersDetails[i].playerImg}" alt="">
    </div>
        <div id="achivement">
        <table>
        <tr>
            <td>Player Name  </td>
            <td>${playersDetails[i].playerName}  </td>
        </tr>
    <table>
        <tr>
            <td> Team Name </td>
            <td> ${playersDetails[i].playerTeam}  </td>
        </tr>
    <table>
        <tr>
            <td> Team Code </td>
            <td>${playersDetails[i].from}   </td>
        </tr>
    <table>
        <tr>
            <td> Worth </td>
            <td>${playersDetails[i].price}  </td> 
        </tr>
    <table>
        <tr>
            <td> Is playing </td>
            <td> ${playingOrN} </td>
        </tr>
    </table>
    </div>
    
        `;
  }
}
