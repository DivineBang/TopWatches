
import React from 'react'
import styleCard from './Card.module.scss';


function Card({id,titleCard,modelCard,priceCard,imgCard,onCard,addEd = false}) {


    const [action,setAction] = React.useState(addEd);
    const changeButton = () => {
        onCard({id,titleCard,modelCard,imgCard});
        setAction(!action);
    }

  return (
   
    <div className={styleCard.card}>
        <div className={styleCard.card__set}>
            <div className={styleCard.card__img}>
                <img src={imgCard} alt="item" />
            </div>
            <p>{modelCard}</p>
            <h4>{titleCard}</h4>
            <div onClick={changeButton} className={action ? styleCard.btn__card_action :  styleCard.btn__card }>
                {action ? (
                         <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M35 11.6667L15 31.6667L5.83334 22.5L8.18334 20.15L15 26.95L32.65 9.31665L35 11.6667Z" fill="white" />
                        </svg> 
                    ) : (

                        <div className={styleCard.btn__car_mod}>
                            <span>{priceCard}</span>
                            Додати до кошику 
                        </div>
                        
                    )}
            </div>
        </div>
    </div>
       
  );
}

export default Card;
