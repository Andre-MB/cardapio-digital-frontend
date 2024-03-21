import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card/card';
import { FoodData } from './interface/FoodData';
import { useFoodData } from './hooks/useFoodData';
import CreateModal from './components/create-modal/create-modal';

function App() {
  // const data: FoodData[] = []; // armazena os dados da api em um array de foodData
  const { data }= useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className='container'>
      <h1>Cardápio</h1>
      <div className='card-grid'>
        {data?.map(foodData => <Card 
          key={foodData.id}
          price={foodData.price} 
          title={foodData.title} 
          image={foodData.image} />
      )}
      </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App
