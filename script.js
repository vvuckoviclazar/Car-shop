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

function carManager() {
  let filteredCars = [...cars];

  const getCars = () => {
    return filteredCars;
  };

  const setCars = (newCars) => {
    filteredCars = newCars;
  };

  const resetCars = () => {
    filteredCars = [...cars];
  };

  const deleteCar = (id) => {
    setCars(filteredCars.filter((car) => car.id !== id));
  };

  return { getCars, setCars, resetCars, deleteCar };
}

const manager = carManager();

let availability;
let sortOption;

availabilitySelect.addEventListener("change", (e) => {
  availability = e.target.value;

  const [key, value] = availability.split("-");

  let carsData = [...cars];

  carsData = carsData.filter(
    (car) =>
      (typeof car[key] === "number" ? String(car[key]) : car[key]) === value
  );

  manager.setCars(carsData);
  displayCars(manager.getCars());
});

sortSelect.addEventListener("change", (e) => {
  sortOption = e.target.value;

  let carsData = manager.getCars();

  if (sortOption === "AZ") {
    carsData.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOption === "ZA") {
    carsData.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortOption === "priceLowest") {
    carsData.sort((a, b) => a.price - b.price);
  } else if (sortOption === "priceHighest") {
    carsData.sort((a, b) => b.price - a.price);
  }

  manager.setCars(carsData);
  displayCars(carsData);
});

function carCreator(car) {
  let name = car.name;
  let brand = car.brand;
  let year = car.manufacturedYear;
  let doors = car.doors;
  let price = car.price;
  let available = car.available;
  let image = car.image;
  let id = car.id;

  const getName = () => {
    return name;
  };

  const getBrand = () => {
    return brand;
  };

  const getYear = () => {
    return year;
  };

  const getDoors = () => {
    return doors;
  };

  const getImage = () => {
    return image;
  };

  const getId = () => {
    return id;
  };

  const getPrice = () => {
    return price;
  };

  const isAvailable = () => {
    return available;
  };

  return {
    getName,
    getBrand,
    getDoors,
    getYear,
    getImage,
    getId,
    getPrice,
    isAvailable,
  };
}

function displayCars(filteredCars) {
  carList.innerHTML = "";
  console.log("filteredCars", filteredCars);
  filteredCars.forEach((car) => {
    const carLi = carCreator(car);
    const carCard = document.createElement("li");
    carCard.classList.add("car-card");
    carCard.id = carLi.getId();

    carCard.innerHTML = `
      <h3>${carLi.getName()}</h3>
      <div class="li-div">
        <img src="${carLi.getImage()}" class="car-img" id="${carLi.getId()}">
        <div class="info-div">
          <p><strong>Brand:</strong> ${carLi.getBrand()}</p>
          <p><strong>Year:</strong> ${carLi.getYear()}</p>
          <p><strong>Doors:</strong> ${carLi.getDoors()}</p>
          <div class="price-div">
            <p class="price-p"><strong>Price:</strong></p>
            <h4>$${carLi.getPrice()}</h4> 
          </div>
        </div>
        <span class="${
          carLi.isAvailable() === "Yes" ? "car-available" : "car-notAvailable"
        }">
          <strong>Available:</strong> ${carLi.isAvailable()}
        </span>
        <button class="delete-btn">Delete</button>
      </div>
    `;

    carList.appendChild(carCard);
  });
}

carList.addEventListener("click", (e) => {
  const carCard = e.target.closest("li");
  if (!carCard) return;

  const id = parseInt(carCard.id);
  const selectedCar = manager.getCars().find((car) => car.id === id);
  if (!selectedCar) return;

  if (e.target.classList.contains("delete-btn")) {
    manager.deleteCar(id);
    displayCars(manager.getCars());
  }
});

displayCars(manager.getCars());

// const [key, value] =
// dynamic variables javascript
// array destructuring javascript
// string metod split
