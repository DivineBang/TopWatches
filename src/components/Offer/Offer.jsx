
import styleOffer from './Offer.module.scss';


function Offer() {
 

  return (
    <div className={`container-xxl  ${styleOffer.offer}`}>
     
       
      <div className={styleOffer.offer__left}>
        <span>Гарантована якість та довговічність</span>
        <h1>Обмежені колекції для справжніх цінувальників</h1>
        <p>Елегантні годинники Rolex з унікальним дизайном</p>
        <div className={styleOffer.btn__set}>
          <a href="/" className={styleOffer.btn__offer_first}>Переглянути</a>
          <a href="/" className={styleOffer.btn__offer_second}>
            <svg   width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path  d="M4.375 4.33594V15.6641C4.375 16.3453 5.03906 16.7781 5.58594 16.4516L15.2695 10.6559C15.743 10.3727 15.743 9.62735 15.2695 9.34414L5.58594 3.54844C5.03906 3.22188 4.375 3.65469 4.375 4.33594Z" stroke="black"  strokeWidth="1.25" strokeMiterlimit="10"/>
            </svg>

            Watch video
          </a>
        </div>
      </div>
      <div className={styleOffer.offer__right}>
        <img src="./img/offer-img.png" alt="rolex"/>
      </div>
      
    </div> 
   
   
  );
}

export default Offer;
