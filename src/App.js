import './App.css';
import  Router  from './app/Router';
import CartContext from './context/cartContext';

function App() {
  return (
    <div className="App">
    <CartContext>
      <Router />
    </CartContext>
    </div>
  );
}

export default App;
