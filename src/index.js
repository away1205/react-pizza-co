import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import pizzaData from './data';
// => Before React 18 --- Import ReactDOM from 'react-dom';

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: 'red', fontSize: '48px', textTransform: 'uppercase' }; // ex
  const style = {};

  return (
    <header className='header footer'>
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  ); // JSX
}

function Menu() {
  let numPizza = pizzaData.length;
  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      {numPizza > 0 ? (
        // React Fragment
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className='pizzas'>
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working with our menu 🍕</p>
      )}
    </main>
  );
}

function Pizza(props) {
  const { name, ingredients, price, photoName, soldOut } = props.pizzaObj;

  // if (soldOut) return null;

  return (
    <li className={`pizza ${soldOut ? 'sold-out' : ''}`}>
      <img src={photoName} alt={name}></img>
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? 'SOLD OUT' : price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const thisHour = new Date().getHours();
  const isOpen = thisHour >= 10 && thisHour <= 22;

  return (
    <footer className='footer'>
      {isOpen ? (
        <OrderHour />
      ) : (
        <p>We're happy to welcome you between 10.00 - 22.00 ❤️</p>
      )}
    </footer>
  );

  // return React.createElement('footer', null, "We're currently open!"); // No JSX
}

function OrderHour() {
  return (
    <div className='order'>
      <p>We're open until 22:00. Come visit us or order Online</p>
      <btn className='btn'>Order</btn>
    </div>
  );
}

// React 18
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Before React 18
// React.render(<App />, document.querySelector('#root'));
