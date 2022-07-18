const findBtn = document.querySelector(".btn-find-сharacters");
const сharacterNameInput = document.querySelector(".сharacter-input");
const сharacterContainer = document.querySelector(".сharacter-container");

const createCharacterNode = ({
  name,
  image,
  species,
  location,
  created,
  episode,
}) => {
  const container = document.createElement("div");
  container.classList.add("сharacter.card");

  const avatar = document.createElement("img");
  avatar.classList.add("character.image");
  avatar.setAttribute("src", image);

  const bodyContainer = document.createElement("div");
  bodyContainer.classList.add("card.body");

  const nameItem = document.createElement("h4");
  nameItem.add("character.name");
  nameItem.innerText = name;

  const speciesItem = document.createElement("h5");
  speciesItem.classList.add("character.species");
  speciesItem.innerText = species;

  const locationNameItem = document.createElement("h4");
  locationNameItem.classList.add("character.location");
  locationNameItem.innerText = location;

  const createdItem = document.createElement("h5");
  createdItem.classList.add("character.created");
  createdItem.innerText = created;

  const episodeItem = document.createElement("h5");
  episodeItem.classList.add("character.episode");
  episodeItem.innerText = `${episode},`;

  bodyContainer.append(nameItem);
  bodyContainer.append(speciesItem);
  bodyContainer.append(locationNameItem);
  bodyContainer.append(createdItem);
  bodyContainer.append(episodeItem);
  container.append(avatar, bodyContainer);
  return container;
};

const url = "https://rickandmortyapi.com/api/character";
fetch(url)
  .then((res) => res.json())
  .then((data) => {
    const rawData = data.results;
    return rawData.map((character) => {
      let created = character.created;
      let species = character.species;
      let img = character.image;
      let episodes = character.episode;
      let name = character.name;
      let location = character.location;
    });
  })
  .catch((error) => {
    console.log(JSON.stringify(error));
  });
