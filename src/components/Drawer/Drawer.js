

import styleDrawer from  "./Drawer.module.scss"


function Drawer({onClickClose,things = [],onRemove}) {

  return (
    <div className={styleDrawer.overlay}>
        <div className={styleDrawer.drawer}>
          <div className={styleDrawer.drawer__header}>
            <h3>Кошик</h3>
            <div onClick={onClickClose} className={styleDrawer.drawer__close}>
              <svg  width="29" height="29" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.3824 6.7692L23.2308 7.6176L7.61757 23.2296L6.76917 22.3818L22.3824 6.7692Z" fill="black"/>
                <path d="M7.61757 6.7692L23.2308 22.3812L22.3824 23.2302L6.76917 7.6182L7.61757 6.7692Z" fill="black"/>
              </svg>
            </div>
          </div>

          {
            things.length > 0 ?      
            (
              <div className="drawer__set">
                <div className={styleDrawer.drawer__content}>
                  {things.map((obj) =>(

                    <div key={obj.id} className={styleDrawer.drawer__item}>
                      <div className={styleDrawer.drawer__wrapp}>
                        <img src={obj.imgCard} alt="watch" />
                      </div>
                      <div className={styleDrawer.drawer__info}>
                        <p>
                          {obj.modelCard}
                        </p>
                        <h4>
                          {obj.titleCard}
                        </h4>
                      </div>
                      <div onClick={() => onRemove(obj.id)} className={styleDrawer.drawer__delet}>
                        <svg width="19" height="19" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.3824 6.7692L23.2308 7.6176L7.61757 23.2296L6.76917 22.3818L22.3824 6.7692Z" fill="black"/>
                          <path d="M7.61757 6.7692L23.2308 22.3812L22.3824 23.2302L6.76917 7.6182L7.61757 6.7692Z" fill="black"/>
                        </svg>
                      </div>
                    </div>

                    )) 
                  }  
                </div>
                <div className={styleDrawer.drawer__result}>
                  <div className={styleDrawer.drawer__all}>
                    <span>Всього:</span>
                    <div></div>
                    <span>
                      $15,000
                    </span>
                  </div>
                  <div className={styleDrawer.drawer__bnt}>
                    Замовити
                  </div>
                </div>
              </div>
            ) : (

            <div className={styleDrawer.drawer__space}>
              <h2>
                Корзина порожня
              </h2>
              <p>
                Додайте хочаб один товар...
              </p>
              <button onClick={onClickClose}>
                Повернутись назад
              </button>
            </div>)

          }


         

        </div>
    </div>
  );

}

export default Drawer;
