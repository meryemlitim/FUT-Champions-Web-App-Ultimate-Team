const  data={
    players: [
      {
        name: "Lionel Messi",
        photo: "https://cdn.sofifa.net/players/158/023/25_120.png",
        position: "RW",
        nationality: "Argentina",
        flag: "https://cdn.sofifa.net/flags/ar.png",
        club: "Inter Miami",
        logo: "https://cdn.sofifa.net/meta/team/239235/120.png",
        rating: 93,
        pace: 85,
        shooting: 92,
        passing: 91,
        dribbling: 95,
        defending: 35,
        physical: 65
      },
      {
        name: "Cristiano Ronaldo",
        photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
        position: "ST",
        nationality: "Portugal",
        flag: "https://cdn.sofifa.net/flags/pt.png",
        club: "Al Nassr",
        logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
        rating: 91,
        pace: 84,
        shooting: 94,
        passing: 82,
        dribbling: 87,
        defending: 34,
        physical: 77
      },
      {
        name: "Yassine Bounou",
        photo: "https://cdn.sofifa.net/players/209/981/25_120.png",
        position: "GK",
        nationality: "Morocco",
        flag: "https://cdn.sofifa.net/flags/ma.png",
        club: "Al-Hilal",
        logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
        rating: 84,
        diving: 81,
        handling: 82,
        kicking: 77,
        reflexes: 86,
        speed: 38,
        positioning: 83
      },
      {
        name: "Gianluigi Donnarumma",
        photo: "https://cdn.sofifa.net/players/230/621/25_120.png",
        position: "GK",
        nationality: "Italy",
        flag: "https://cdn.sofifa.net/flags/it.png",
        club: "Paris Saint-Germain",
        logo: "https://cdn.sofifa.net/meta/team/591/120.png",
        rating: 89,
        diving: 88,
        handling: 84,
        kicking: 75,
        reflexes: 90,
        speed: 50,
        positioning: 85
      },
      {
        name: "Jan Oblak",
        photo: "https://cdn.sofifa.net/players/200/389/25_120.png",
        position: "GK",
        nationality: "Slovenia",
        flag: "https://cdn.sofifa.net/flags/si.png",
        club: "Atletico Madrid",
        logo: "https://cdn.sofifa.net/meta/team/7980/120.png",
        rating: 91,
        diving: 89,
        handling: 90,
        kicking: 78,
        reflexes: 92,
        speed: 50,
        positioning: 88
      }
    
    ]
  }

  
  const GKplayer = data.players.filter(player => player.position.toUpperCase() === "GK");
console.log(GKplayer);
function GK_function(){
     window.location.href ="players.html"

}
function displayPlayerCards() {
    const container = document.getElementById('player-cards-container');

    data.players.forEach(player => { 
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="playerImgName">
            <img src="${parseInt(player.photo)}" alt="${player.name}">
            <h3>${player.name}</h3>
            <p><strong>Position:</strong> ${player.position}</p>

            </div>

            <div class="content">
             <img  src="${player.flag}" alt="${player.nationality}" style="width: 20px;">
                <p> ${player.nationality}</p>
                <p><strong>Club:</strong> ${player.club}</p>
                
                
                    <span>Rating: ${player.rating}</span>
                
            </div> 
        `;

        container.appendChild(card);
    });
}


displayPlayerCards();
const addPlayerbtn=document.querySelector(".addPlayerbtn"); 
addPlayerbtn.onclick=function(){
    window.location.href="add_player.html" 
}    

const card=document.querySelectorAll('.card').forEach(card=>{
    card.onclick=function(event){
        // window.location.href="players.html"
        // var img=event.target.getAttribute("src")
         
        document.querySelector(".gk").innerHTML=card.innerHTML
        document.querySelector(".gk").classList.add("card")

        console.log(document.querySelector(".gk").innerHTML)
       
    }
})




// function GK_function(){
//     const gkinput=document.getElementById("GK_input")
//     const GK_input=gkinput.value.toUpperCase()
//     for(let i=0 ; i<GKplayer.length ; i++){
//         if(GKplayer[i].name.toUpperCase().indexOf(GK_input)>-1){
//             alert("gkkkkk")
//         }
//         else{
//             alert("nooo")
//         }




//     }

// }

// function GK_function() {
//     const gkinput = document.getElementById("GK_input"); 
//     const GK_input = gkinput.value.toUpperCase(); 
//     const test2=document.querySelector(".remove_gk")

//     for (let i = 0; i < GKplayer.length; i++) {
//         if (GKplayer[i].name.toUpperCase().indexOf(GK_input) > -1) {
//             alert(`your search is ${GKplayer[i].name}`);
//             const remove_gk=document.createElement("img");
//             remove_gk.setAttribute("src", "img/remove.png");
//            remove_gk.classList.add("remove_btn")
//             document.test2.appendChild(remove_gk);

//             return; 
           
//         }
//     }

//     alert("No matching goalkeeper found."); 
// }

