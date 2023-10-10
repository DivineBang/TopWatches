import React from 'react';
import axios from 'axios';
import { Routes,Route } from 'react-router-dom';
import Drawer from './components/Drawer/Drawer';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import Shop from './pages/Shop';

import AppContext from './context';



function App() {

  /* Открыть/закрыть корзину */
  const [overlay,setOverlay] = React.useState(false); 

 /*  Настройка поиска товаров через Инпут */
  const [search,setSearch] = React.useState('');  

  const searchChangeInput = (event) => {
    setSearch(event.target.value);
  }

  /* Попытка настроить отображения выбраного товара в корзине */
  const isItemAdded = (id) => {
    return stuff.some((product) => Number(product.id) === Number(id) )
  }
  
/*   Перебираем товари через API и добавляем в корзину  */
  const [items,setItems] = React.useState([]);
  const [stuff,setStuff] = React.useState([]);  


  React.useEffect(() =>{ 

    
    async function fetchData(){

      const cartResponse = await axios.get('https://651d0c7244e393af2d59106a.mockapi.io/cart');
      const itemsResponse = await axios.get('https://651d0c7244e393af2d59106a.mockapi.io/items');
      
      setStuff(cartResponse.data);
      setItems(itemsResponse.data);
      
    }
    fetchData();
  }, []);


  const addToCard = (product) => {
    
    if (stuff.find ((item) => Number(item.id) === Number(product.id))) {
      axios.delete(`https://651d0c7244e393af2d59106a.mockapi.io/cart/${product.id}`); 
      setStuff((prev) =>prev.filter((item) => Number(item.id) !== Number(product.id))); 

    }else{
      axios.post('https://651d0c7244e393af2d59106a.mockapi.io/cart', product);
      setStuff((prev) =>[...prev, product]);

    }
 
  };

  const deleteToCard = (id) => {
    axios.delete(`https://651d0c7244e393af2d59106a.mockapi.io/cart/${id}`); 
    setStuff((prev) =>prev.filter((item) => item.id !== id)); 
   
  }


  return (
    <AppContext.Provider value = {{stuff,search,setSearch,searchChangeInput,items,addToCard,isItemAdded}}>
  
      <div className="app">

          {overlay && <Drawer things={stuff}  onClickClose={() => setOverlay(false)} onRemove={deleteToCard}/> }

          <Header onClickCart={() => setOverlay(true)}/>

          <Routes>
            <Route exact path="/" element={ <Home />} />
              
           
            <Route path='/shop' element={ <Shop />} />
              
            
          </Routes>
              
  

          <Footer/>
      
      </div>
    </AppContext.Provider>
  );

}

export default App;
