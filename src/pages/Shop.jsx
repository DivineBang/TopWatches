import React from 'react'

import Card from '../components/Card/Card';

import AppContext from '../context';

function Shop(){

    const {items,addToCard,search,isItemAdded } = React.useContext(AppContext);
    return(
        <div className="Main">

           
          

            <div className="container-xxl watches">
                
                <div className="cards__set">
                    <div className="row">
                        <div className="col">
                            <div className="card__set">
                            {items.filter((obj) => obj.title.toLowerCase().includes(search.toLowerCase())).map((obj,index) =>(

                                <Card  key={index} addEd={isItemAdded(obj && obj.id)} onCard={(product) => addToCard(product)}  imgCard={obj.img} modelCard={obj.model}  titleCard={obj.title} priceCard={obj.price} />

                            )) 
                            }              
                            </div>
                        </div>
                    </div>    
                </div>    
                <div className="cards__set">
                    <div className="row">
                        <div className="col">
                            <div className="card__set">
                            {items.filter((obj) => obj.title.toLowerCase().includes(search.toLowerCase())).map((obj,index) =>(

                                <Card  key={index} addEd={isItemAdded(obj && obj.id)} onCard={(product) => addToCard(product)}  imgCard={obj.img} modelCard={obj.model}  titleCard={obj.title} priceCard={obj.price} />

                            )) 
                            }              
                            </div>
                        </div>
                    </div>    
                </div> 
                <div className="cards__set">
                    <div className="row">
                        <div className="col">
                            <div className="card__set">
                            {items.filter((obj) => obj.title.toLowerCase().includes(search.toLowerCase())).map((obj,index) =>(

                                <Card  key={index} addEd={isItemAdded(obj && obj.id)} onCard={(product) => addToCard(product)}  imgCard={obj.img} modelCard={obj.model}  titleCard={obj.title} priceCard={obj.price} />

                            )) 
                            }              
                            </div>
                        </div>
                    </div>    
                </div>   
                  
            </div>
      </div>
    );

}

export default Shop;