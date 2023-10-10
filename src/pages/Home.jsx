import React from 'react'
import Card from '../components/Card/Card';
import Offer from '../components/Offer/Offer';

import {Link} from 'react-router-dom';

import AppContext from '../context';

function Home () {

    const {items,addToCard,searchChangeInput,search,setSearch,isItemAdded } = React.useContext(AppContext);

    return(
        <div className='Main'>
            <Offer/>
   
  
            <div className="container-xxl watches">
                <div className="row">
                    <div className="col">
                    <h2 className="title__first">
                        <span>Ексклюзивні годинники Rolex:</span> Час на вибір
                    </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3 className="title__second">
                            Відчуйте власну унікальність з Rolex на вашому зап'ясті. Оберіть час, який вам підходить
                    </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="search">
                        <input value={search} onChange={searchChangeInput} placeholder='Search...' />
                        {search && 
                            (<svg className='search__close' onClick={() => setSearch('')} width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.3824 6.7692L23.2308 7.6176L7.61757 23.2296L6.76917 22.3818L22.3824 6.7692Z" fill="black"/>
                            <path d="M7.61757 6.7692L23.2308 22.3812L22.3824 23.2302L6.76917 7.6182L7.61757 6.7692Z" fill="black"/>
                            </svg>
                            )}

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
                
                <div className="row">
                    <div className="col">
                        <Link to='/shop'>
                        <div className="next">
                            <svg  className="next__img" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.7413 9.37506H3.125C2.95924 9.37506 2.80027 9.44091 2.68306 9.55812C2.56585 9.67533 2.5 9.8343 2.5 10.0001C2.5 10.1658 2.56585 10.3248 2.68306 10.442C2.80027 10.5592 2.95924 10.6251 3.125 10.6251H14.7413L10.1825 15.1826C10.0651 15.2999 9.99921 15.4591 9.99921 15.6251C9.99921 15.791 10.0651 15.9502 10.1825 16.0676C10.2999 16.1849 10.459 16.2508 10.625 16.2508C10.791 16.2508 10.9501 16.1849 11.0675 16.0676L16.6925 10.4426C16.7507 10.3845 16.7969 10.3155 16.8284 10.2396C16.8599 10.1637 16.8761 10.0823 16.8761 10.0001C16.8761 9.91785 16.8599 9.83645 16.8284 9.76052C16.7969 9.68458 16.7507 9.61561 16.6925 9.55756L11.0675 3.93256C10.9501 3.8152 10.791 3.74927 10.625 3.74927C10.459 3.74927 10.2999 3.8152 10.1825 3.93256C10.0651 4.04992 9.99921 4.20909 9.99921 4.37506C9.99921 4.54103 10.0651 4.7002 10.1825 4.81756L14.7413 9.37506Z" fill="white"/>
                            </svg>
                            Дивитись Більше
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;