"use strict";

const carList = document.querySelector(".car-list");
const availabilitySelect = document.querySelector(".availability");
const sortSelect = document.querySelector(".options");

const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    brand: "Toyota",
    manufacturedYear: 2019,
    doors: 4,
    price: 22000,
    available: "Yes",
    image: "first car toyota.jpg",
  },
  {
    id: 2,
    name: "Honda Civic",
    brand: "Honda",
    manufacturedYear: 2020,
    doors: 4,
    price: 25000,
    available: "Yes",
    image: "honda civic second.webp",
  },
  {
    id: 3,
    name: "Ford Mustang",
    brand: "Ford",
    manufacturedYear: 2018,
    doors: 2,
    price: 35000,
    available: "No",
    image: "mustant 3.png",
  },
  {
    id: 4,
    name: "BMW 3 Series",
    brand: "BMW",
    manufacturedYear: 2021,
    doors: 4,
    price: 45000,
    available: "Yes",
    image: "BMW 3 Series 4.png",
  },
  {
    id: 5,
    name: "Chevrolet Camaro",
    brand: "Chevrolet",
    manufacturedYear: 2017,
    doors: 2,
    price: 32000,
    available: "No",
    image: "Chavrolet 5.jpg",
  },
  {
    id: 6,
    name: "Audi A4",
    brand: "Audi",
    manufacturedYear: 2022,
    doors: 4,
    price: 42000,
    available: "Yes",
    image: "audi a4 6.jpg",
  },
  {
    id: 7,
    name: "Mercedes-Benz E-Class",
    brand: "Mercedes-Benz",
    manufacturedYear: 2020,
    doors: 4,
    price: 50000,
    available: "Yes",
    image: "mercedes e klasa 7.jpg",
  },
  {
    id: 8,
    name: "Lexus IS",
    brand: "Lexus",
    manufacturedYear: 2019,
    doors: 4,
    price: 38000,
    available: "No",
    image: "lexus 8.webp",
  },
  {
    id: 9,
    name: "Volkswagen Golf",
    brand: "Volkswagen",
    manufacturedYear: 2021,
    doors: 4,
    price: 28000,
    available: "Yes",
    image: "golf 9.jpg",
  },
  {
    id: 10,
    name: "Subaru Outback",
    brand: "Subaru",
    manufacturedYear: 2022,
    doors: 4,
    price: 32000,
    available: "Yes",
    image: "subaru 10.png",
  },
];

function displayCars(filteredCars) {
  carList.innerHTML = "";

  filteredCars.forEach((car) => {
    const carCard = document.createElement("li");
    carCard.classList.add("car-card");

    carCard.innerHTML = `
     <h3>${car.name}</h3>
     <div class="li-div">
      <img src="${car.image}" class="car-image-${car.id} car-img">
        <div class="info-div">
           <p><strong>Brand:</strong> ${car.brand}</p>
            <p><strong>Year:</strong> ${car.manufacturedYear}</p>
            <p><strong>Doors:</strong> ${car.doors}</p>
            <div class="price-div">
             <p class="price-p"><strong>Price:</strong></p>
             <h4>$${car.price}</h4> 
            </div>
        </div>
        <span><strong>Available:</strong> ${car.available}</span>
        <button class="delete-btn">Delete</button>
     </div>
    `;

    carList.appendChild(carCard);
  });
}
