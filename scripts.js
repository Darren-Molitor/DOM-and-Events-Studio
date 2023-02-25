// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    const takeoff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");

    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");

    let rocket = document.getElementById("rocket");
    let flightStatus = document.getElementById("flightStatus");
    rocket.style.bottom = "0px";
    rocket.style.left = "150px";

    takeoff.addEventListener("click", function(){
        let response1 = confirm("Confirm that the shuttle is ready for takeoff.");
        if (response1) {
            flightStatus.innerText = "Shuttle in flight...";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerText = 10000;
        }
    });

    landing.addEventListener("click",function(){
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerText = 0;
        rocket.style.bottom = "0px";
        rocket.style.left = "150px";
    
    });

    missionAbort.addEventListener("click",function(){
        response2 = confirm("Confirm that you want to abort the mission.");
        if (response2) {
            flightStatus.textContent = "Mission aborted!";
            shuttleBackground.style.backgroundColor = "red";
            spaceShuttleHeight.innerText = 0;
            rocket.style.bottom = "0px";
            rocket.style.left = "150px";
        
        }
    });
        missionAbort.addEventListener("mouseover", function(event) {
            event.target.style.backgroundColor = "red";
        });
        missionAbort.addEventListener("mouseout", function(event) {
            event.target.style.backgroundColor = "";
        });

    down.addEventListener("click",function(){
        rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
        spaceShuttleHeight.innerText = 0;
    });
    up.addEventListener("click",function(){
        rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        spaceShuttleHeight.innerText = 10000;
    });
    let shuttleWidth = 0;
    left.addEventListener("click",function(){
        if (shuttleWidth.innerHTML != -10000){
            rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
            shuttleWidth.innerHTML = parseInt(shuttleWidth.innerHTML)+10000;
        }
        
    });
    right.addEventListener("click",function(){
        rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
    });
    
});


