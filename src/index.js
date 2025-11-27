import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  //const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  return (
    <header className="header">
      <h1>FAST REACT PIZZA COMPANY</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaobj={pizza} />
        ))}
      </ul>
      {/* <Pizza
        name="Prosciutto"
        ingredient="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizza/prosciutto.jpg"
        price="100"
      />
      <Pizza
        name="Salamino"
        ingredient="Tomato, mozarella, and pepperoni"
        photoName="pizza/salamino.jpg"
        price="100"
      />
      <Pizza
        name="Funghi"
        ingredient="Tomato, mozarella, mushrooms, and onion"
        photoName="pizza/funghi.jpg"
        price="10"
      />
      <Pizza
        name="Spinaci"
        ingredient="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizza/spinaci.jpg"
        price="100"
      />
      <Pizza
        name="Margherita"
        ingredient="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizza/margherita.jpg"
        price="100"
      />
      <Pizza
        name="Focaccia"
        ingredient="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizza/focaccia.jpg"
        price="100"
      /> */}
    </main>
  );
}
function Pizza(props) {
  console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaobj.photoName} alt={props.pizzaobj.name} />
      <div>
        <h3>{props.pizzaobj.name}</h3>
        <p>{props.pizzaobj.ingredients}</p>
        <span>{props.pizzaobj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  //done it with js not a good practice and tough for logic codes
  // return React.createElement("footer", null, "we're currently open");
  const hour = new Date().getHours();
  const openhour = 12;
  const closehour = 22;
  if (hour >= openhour && hour <= closehour) {
    console.log("We're currently open");
  } else {
    console.log("We're closed");
  }

  return (
    <footer className="footer">
      {new Date().toLocaleDateString()} We're currently open
    </footer>
  );
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
