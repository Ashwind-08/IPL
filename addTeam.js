


let localTeam = JSON.parse(localStorage.getItem("teamArray"));
let localPlayers = JSON.parse(localStorage.getItem("playerArray"));

$("#addteamform").submit(function (e) {

    /* The preventDefault() method cancels the event if it is cancelable,
     meaning that the default action that belongs to the event will not occur.
     Here the Submit Event will prevent */
  e.preventDefault();


    let inp_val = $("#inp1").val();//using jQuery to gather information from the user by input tag  
    let shortName = '';
    for(let i=0;i<inp_val.length;i++){
        if(i == 0){
            shortName += inp_val[i++].toUpperCase();//makes all the user  entered data into UpperCase and user types no letter
            continue;
        }else if(inp_val[i] == ' '){
            shortName += inp_val[++i].toUpperCase();//user typed data stored in the ShortName 
            i++;
        }
    }

    // maintaining small JSON data Storage

    let addData = {
        "id": localTeam.length,
        "teamFullName":$("#inp1").val() ,
        "sName": shortName,
        
        "teamIcon": $("#inp3").val(),
        "WonCount": $("#inp4").val(),


    }

   localTeam.push(addData);//this will push into team Array as the Grid Format
   localStorage.setItem("teamArray", JSON.stringify(localTeam)); 

   location.href = `./teams.html?name=${addData.sName}`;
})

     