"get strict"

let url = "http://rickandmortyapi.com/api/character";

   
    async function mostrarData(){
        let res = await fetch(url);
        let data = await res.json();
        
        console.log(data.results);  
   
data.results.forEach(element => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<h2>${element.name}</h2> <p>Especie: ${element.species}</p> <p>ID: ${element.id}</p>`;
    document.getElementById("card-container").appendChild(card);
    });
}

    mostrarData();
