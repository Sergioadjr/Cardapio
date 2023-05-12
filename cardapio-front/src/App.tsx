import './App.css'
import { Card } from "./components/card/card";
import { useFoodData } from './hooks/useFoodData';
import { FoodData } from "./interface/FoodData";


function App() {

  const {data} = useFoodData();

  return (
    <div className="container">

      <h1> Cardápio</h1>
      <div className="card-grid">
        {data?.map(foodData =>
          <Card
            preco={foodData.preco}
            titulo={foodData.titulo}
            imagem={foodData.imagem}
          />
        )}
      </div>
    </div>

  )
}

export default App
