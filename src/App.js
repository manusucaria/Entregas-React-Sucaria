import './App.css';
import  Router  from './app/Router';
import CartContext from './context/cartContext';

function App() {
  return (
    <div className="App">
      <CartContext>
        <Router basename={process.env.PUBLIC_URL}/>
      </CartContext>
    </div>
  );
}

export default App;
