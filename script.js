const cars = [
  {
    id: 1,
    name: "Toyota Corolla",
    brand: "Toyota",
    manufacturedYear: 2019,
    doors: 4,
    price: 22000,
    available: "yes",
    image: "first car toyota.jpg",
  },
  {
    id: 2,
    name: "Honda Civic",
    brand: "Honda",
    manufacturedYear: 2020,
    doors: 4,
    price: 25000,
    available: "yes",
    image: "honda civic second.webp",
  },
  {
    id: 3,
    name: "Ford Mustang",
    brand: "Ford",
    manufacturedYear: 2018,
    doors: 2,
    price: 35000,
    available: "no",
    image: "mustant 3.png",
  },
  {
    id: 4,
    name: "BMW 3 Series",
    brand: "BMW",
    manufacturedYear: 2021,
    doors: 4,
    price: 45000,
    available: "yes",
    image: "BMW 3 Series 4.png",
  },
  {
    id: 5,
    name: "Chevrolet Camaro",
    brand: "Chevrolet",
    manufacturedYear: 2017,
    doors: 2,
    price: 32000,
    available: "no",
    image: "Chavrolet 5.jpg",
  },
  {
    id: 6,
    name: "Audi A4",
    brand: "Audi",
    manufacturedYear: 2022,
    doors: 4,
    price: 42000,
    available: "yes",
    image: "audi a4 6.jpg",
  },
  {
    id: 7,
    name: "Mercedes-Benz E-Class",
    brand: "Mercedes-Benz",
    manufacturedYear: 2020,
    doors: 4,
    price: 50000,
    available: "yes",
    image: "mercedes e klasa 7.jpg",
  },
  {
    id: 8,
    name: "Lexus IS",
    brand: "Lexus",
    manufacturedYear: 2019,
    doors: 4,
    price: 38000,
    available: "no",
    image: "lexus 8.webp",
  },
  {
    id: 9,
    name: "Volkswagen Golf",
    brand: "Volkswagen",
    manufacturedYear: 2021,
    doors: 4,
    price: 28000,
    available: "yes",
    image: "golf 9.jpg",
  },
  {
    id: 10,
    name: "Subaru Outback",
    brand: "Subaru",
    manufacturedYear: 2022,
    doors: 4,
    price: 32000,
    available: "yes",
    image: "subaru 10.png",
  },
];

function displayCars() {
  const carContainer = document.getElementById("car-container");

  cars.forEach((car) => {
    const carCard = document.createElement("div");
    carCard.classList.add("car-card");

    carCard.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>Brand: ${car.brand}</p>
            <p>Year: ${car.manufacturedYear}</p>
            <p>Doors: ${car.doors}</p>
            <p>Price: $${car.price.toLocaleString()}</p>
            <button onclick="addToCart(${car.id})" ${
      car.available === "no" ? "disabled" : ""
    }>
                ${car.available === "yes" ? "Add to Cart" : "Out of Stock"}
            </button>
        `;

    carContainer.appendChild(carCard);
  });
}

function addToCart(carId) {
  alert(`Car with ID ${carId} added to cart!`);
}

window.onload = displayCars;
