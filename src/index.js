// Fichier houseToRent.js

const houseToRent = [
  {
    name: "Modern flat",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://cf.bstatic.com/images/hotel/max1024x768/177/177622915.jpg",
    available: true,
  },
  {
    name: "Beautiful design house",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://images.adsttc.com/media/images/5de3/1ca6/3312/fda8/2a00/00b3/newsletter/001.jpg?1575165037",
    available: true,
  },
  {
    name: "Beautiful House",
    type: "House",
    img: "https://picsum.photos/500/500",
    desc: "This is the perfect house for you, come to visit it you'll love it",
    available: false,
  },
  {
    name: "Wonderful house with Garden",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://images.unsplash.com/photo-1585773690161-7b1cd0accfcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    available: true,
  },
  {
    name: "My super Flat ",
    type: "Flat",
    desc: "This is the perfect flat for you, come to visit it you'll love it ",
    img: "https://r-cf.bstatic.com/images/hotel/max1024x768/843/84330721.jpg",
    available: true,
  },
];

//Fichier createCards.js

function createCard(picture, title, description) {
  const cards = document.querySelector(".cards");
  // This function should create a card item
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.classList.add("card-img");
  cardImg.style.backgroundImage = `url(${picture})`;
  cardHeader.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = title;
  cardBody.appendChild(cardTitle);

  const cardDesc = document.createElement("p");
  cardDesc.classList.add("card-description");
  cardDesc.innerHTML = description;
  cardBody.appendChild(cardDesc);

  const cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  cardButton.innerHTML = "I want it!";
  cardBody.appendChild(cardButton);
}

//Fichier index.js

const cards = document.querySelector(".cards");
cards.innerHTML = "";

for (const house of houseToRent) {
  createCard(house.img, house.name, house.desc);
}

const selectFilter = document.querySelector(".select");
const searchFilter = document.querySelector(".search-input");
const availableFilter = document.querySelector(".available-checkbox");

const updateCards = () => {
  let filteredHouses = houseToRent;

  const selectValue = selectFilter.value;
  const inputValue = searchFilter.value;

  //Traitement du selecteur
  if (selectValue !== "All") {
    filteredHouses = filteredHouses.filter((h) => h.type === selectValue);
  }

  //Traitement de l'input
  if (inputValue.trim() !== "") {
    filteredHouses = filteredHouses.filter((h) =>
      h.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  }

  //Traitement checkbox
  if (availableFilter.checked) {
    filteredHouses = filteredHouses.filter((h) => h.available);
  }

  cards.innerHTML = "";

  for (const house of filteredHouses) {
    createCard(house.img, house.name, house.desc);
  }
};

selectFilter.addEventListener("change", updateCards);
searchFilter.addEventListener("input", updateCards);
availableFilter.addEventListener("change", updateCards);
