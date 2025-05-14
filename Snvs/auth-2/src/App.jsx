import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  addToCart = (product) => {
    this.setState((prevState) => ({
      cart: [...prevState.cart, product],
    }));
  };

  removeFromCart = (productId) => {
    this.setState((prevState) => ({
      cart: prevState.cart.filter((item) => item.id !== productId),
    }));
  };

  render() {
    const products = [
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Headphones", price: 200 },
      { id: 3, name: "Phone", price: 800 },
      { id: 4, name: "Keyboard", price: 100 },
    ];

    return (
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white py-4 shadow-md">
          <h1 className="text-center text-2xl font-bold">Shopping App</h1>
        </header>

        <main className="container mx-auto p-4">
          <Login />
          <Header />
          <section>
            <h2 className="text-xl font-semibold mb-4">Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="p-4 border shadow rounded-lg flex flex-col items-center bg-white"
                >
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <p className="text-gray-700 mb-4">${product.price}</p>
                  <button
                    onClick={() => this.addToCart(product)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </section>

          <BuyNow cart={this.state.cart} removeFromCart={this.removeFromCart} />
        </main>
      </div>
    );
  }
}

const Login = () => {
  return (
    <div className="bg-white p-4 shadow rounded-lg mb-8">
      <h2 className="text-xl font-semibold">Login</h2>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password:</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
};

const Header = () => {
  return (
    <header className="bg-white p-4 shadow rounded-lg flex justify-between items-center mb-8">
      <h1 className="text-2xl font-bold">Welcome to Shopping App</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">
              Cart
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const BuyNow = ({ cart, removeFromCart }) => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="bg-white p-4 shadow rounded-lg">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b py-2"
            >
              <span>{item.name}</span>
              <span>${item.price}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-4 font-bold text-lg">
            Total: ${cart.reduce((total, item) => total + item.price, 0)}
          </div>
        </div>
      )}
    </section>
  );
};

export default App;
