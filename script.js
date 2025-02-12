"use strict";

const carList = document.querySelector(".car-list");
const availabilitySelect = document.querySelector(".availability");
const sortSelect = document.querySelector(".options");

let availability;
let sortOption;

availabilitySelect.addEventListener("change", (e) => {
  availability = availabilitySelect.value;
});

sortSelect.addEventListener("change", (e) => {
  sortOption = sortSelect.value;
});

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

function carCreator() {
  const getName = (car) => {
    return car.name;
  };

  const getBrand = (car) => {
    return car.brand;
  };

  const getYear = (car) => {
    return car.manufacturedYear;
  };

  const getDoors = (car) => {
    return car.doors;
  };

  const getImage = (car) => {
    return car.image;
  };

  const getId = (car) => {
    return car.id;
  };

  const getPrice = (car) => {
    return car.price;
  };

  const isAvailable = (car) => {
    return car.available;
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

const creator = carCreator();

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
    setCars(manager.getCars().filter((car) => creator.getId(car) !== id));
  };

  return { getCars, setCars, resetCars, deleteCar };
}

const manager = carManager();

function displayCars(filteredCars) {
  carList.innerHTML = "";

  filteredCars.forEach((car) => {
    const carCard = document.createElement("li");
    carCard.classList.add("car-card");

    carCard.innerHTML = `
     <h3>${creator.getName(car)}</h3>
     <div class="li-div">
      <img src="${creator.getImage(car)}" class="car-img" 
      id="${creator.getId(car)}">
        <div class="info-div">
           <p><strong>Brand:</strong> ${creator.getBrand(car)}</p>
            <p><strong>Year:</strong> ${creator.getYear(car)}</p>
            <p><strong>Doors:</strong> ${creator.getDoors(car)}</p>
            <div class="price-div">
             <p class="price-p"><strong>Price:</strong></p>
             <h4>$${creator.getPrice(car)}</h4> 
            </div>
        </div>
        <span><strong>Available:</strong> ${creator.isAvailable(car)}</span>
        <button class="delete-btn">Delete</button>
     </div>
    `;

    const span = carCard.querySelector("span");

    if (creator.isAvailable(car) === "Yes") {
      span.style.backgroundColor = "rgb(54, 187, 54)";
    } else {
      span.style.backgroundColor = "rgb(217, 48, 48)";
    }

    const deleteBtn = carCard.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", () => {
      manager.deleteCar(creator.getId(car));
      carCard.remove();
      displayCars(manager.getCars());
    });

    carList.appendChild(carCard);
  });
}

function updateCarList() {
  manager.resetCars();

  let carsData = manager.getCars();

  if (availability === "available") {
    carsData = carsData.filter((car) => creator.isAvailable(car) === "Yes");
  } else if (availability === "availableNot") {
    carsData = carsData.filter((car) => creator.isAvailable(car) === "No");
  }

  if (sortOption === "AZ") {
    carsData.sort((carA, carB) =>
      creator.getName(carA).localeCompare(creator.getName(carB))
    );
  } else if (sortOption === "ZA") {
    carsData.sort((carA, carB) =>
      creator.getName(carB).localeCompare(creator.getName(carA))
    );
  } else if (sortOption === "priceLowest") {
    carsData.sort(
      (carA, carB) => creator.getPrice(carA) - creator.getPrice(carB)
    );
  } else if (sortOption === "priceHighest") {
    carsData.sort(
      (carA, carB) => creator.getPrice(carB) - creator.getPrice(carA)
    );
  }

  manager.setCars(carsData);
  displayCars(manager.getCars());
}

availabilitySelect.addEventListener("change", updateCarList);
sortSelect.addEventListener("change", updateCarList);

displayCars(manager.getCars());
