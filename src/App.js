import './App.css';
import Productlist from './components/ProductList';

function App() {

  return (
    <div className="App">
      <Productlist products={[{no:"1",name:"Milk", price:"50", img:""},{no:"2",name:"Chocolate", price:"100", img:""},{no:"3",name:"Chicken currry", price:"200", img:""}]}/>
    </div>
  );
}

export default App;