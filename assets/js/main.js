function create_game(player1, hour, player2){
    return `
    <li>
        <img src="./assets/images/times/icon-${player1}.svg" alt="Bandeira ¨${player1}"/>
        <strong>${hour}</strong>
        <img src="./assets/images/times/icon-${player2}.svg" alt="Bandeira ${player2}"/>
    </li>
    `
}



let delay = -0.3;

function create_card(date, day, games){

    delay = delay + 0.3;
    return `
    <div class="card" style="animation-delay:${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `

}


document.querySelector('#cards').innerHTML = 
    create_card(
            "21/11",
            "seguNDA",
            create_game("brazil","13:00","serbia")
            +create_game("hungary","18:00","argentina")
            +create_game("colombia","18:00","japan")
            ) +
        create_card(
            "24/11",
            "quinta",
            create_game("british columbia","13:00","cameroon")
            +create_game("india","18:00","armenia")
            +create_game("comoros","18:00","jordan")
            ) +
     create_card(
            "01/25",
            "SEXTA",
            create_game("brazil","13:00","serbia")
            +create_game("hungary","18:00","argentina")
            +create_game("colombia","18:00","japan")
     )