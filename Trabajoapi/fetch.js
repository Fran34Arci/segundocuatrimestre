"get strict"

let url = "http://rickandmortyapi.com/api/character";

   

async function mostrarData(){
    let res = await fetch(url);
    let data = await res.json();
    
    console.log(data.results);  

data.results.forEach(element => {
  const card = document.createElement("div");
  card.classList.add("card");

  const title = document.createElement("h2");
  title.textContent = "Nombre:" + element.name;

  const species = document.createElement("p");
  species.textContent = "Especie:" +element.species;

  const id = document.createElement("p");
  id.textContent = "ID:" + element.id;

  card.appendChild(title);
  card.appendChild(species);
  card.appendChild(id);

  document.getElementById("card-container").appendChild(card);
});

}


    mostrarData();
