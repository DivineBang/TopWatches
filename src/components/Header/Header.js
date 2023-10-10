
import styleHeader from './Header.module.scss';
import {Link} from 'react-router-dom';


function Header({onClickCart}) {
  
    return (
      
      <div className={` ${styleHeader.header} container-xxl`}>
          <div className="row ">
            <div className="col">
              <div className={`d-flex align-items-center  ${styleHeader.logo}`}>
                <Link to='/'>
                  <svg width="145" height="25" viewBox="0 0 145 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.85 2.675V6H9.625V20H5.725V6H0.5V2.675H14.85ZM27.5266 13.4C27.5266 14.4333 27.3766 15.3833 27.0766 16.25C26.7766 17.1 26.3432 17.8333 25.7766 18.45C25.2099 19.05 24.5266 19.5167 23.7266 19.85C22.9432 20.1833 22.0599 20.35 21.0766 20.35C20.1099 20.35 19.2266 20.1833 18.4266 19.85C17.6432 19.5167 16.9682 19.05 16.4016 18.45C15.8349 17.8333 15.3932 17.1 15.0766 16.25C14.7599 15.3833 14.6016 14.4333 14.6016 13.4C14.6016 12.3667 14.7599 11.425 15.0766 10.575C15.4099 9.725 15.8599 9 16.4266 8.4C17.0099 7.8 17.6932 7.33333 18.4766 7C19.2766 6.66667 20.1432 6.5 21.0766 6.5C22.0266 6.5 22.8932 6.66667 23.6766 7C24.4766 7.33333 25.1599 7.8 25.7266 8.4C26.2932 9 26.7349 9.725 27.0516 10.575C27.3682 11.425 27.5266 12.3667 27.5266 13.4ZM23.7266 13.4C23.7266 12.25 23.4932 11.35 23.0266 10.7C22.5766 10.0333 21.9266 9.7 21.0766 9.7C20.2266 9.7 19.5682 10.0333 19.1016 10.7C18.6349 11.35 18.4016 12.25 18.4016 13.4C18.4016 14.55 18.6349 15.4667 19.1016 16.15C19.5682 16.8167 20.2266 17.15 21.0766 17.15C21.9266 17.15 22.5766 16.8167 23.0266 16.15C23.4932 15.4667 23.7266 14.55 23.7266 13.4ZM38.8371 13.525C38.8371 12.375 38.5788 11.4583 38.0621 10.775C37.5454 10.075 36.7788 9.725 35.7621 9.725C35.4288 9.725 35.1204 9.74167 34.8371 9.775C34.5538 9.79167 34.3204 9.81667 34.1371 9.85V16.575C34.3704 16.725 34.6704 16.85 35.0371 16.95C35.4204 17.05 35.8038 17.1 36.1871 17.1C37.9538 17.1 38.8371 15.9083 38.8371 13.525ZM42.6371 13.425C42.6371 14.4417 42.5121 15.3667 42.2621 16.2C42.0121 17.0333 41.6454 17.75 41.1621 18.35C40.6788 18.95 40.0788 19.4167 39.3621 19.75C38.6454 20.0833 37.8204 20.25 36.8871 20.25C36.3704 20.25 35.8871 20.2 35.4371 20.1C34.9871 20 34.5538 19.8583 34.1371 19.675V24.625H30.4121V7.3C30.7454 7.2 31.1288 7.10833 31.5621 7.025C31.9954 6.925 32.4454 6.84167 32.9121 6.775C33.3954 6.70833 33.8788 6.65833 34.3621 6.625C34.8621 6.575 35.3371 6.55 35.7871 6.55C36.8704 6.55 37.8371 6.71667 38.6871 7.05C39.5371 7.36667 40.2538 7.825 40.8371 8.425C41.4204 9.00833 41.8621 9.725 42.1621 10.575C42.4788 11.425 42.6371 12.375 42.6371 13.425ZM57.375 4.525C57.575 5.20833 57.7917 5.98333 58.025 6.85C58.275 7.7 58.5333 8.58333 58.8 9.5C59.0833 10.4167 59.3667 11.3333 59.65 12.25C59.9333 13.1667 60.2083 14.0167 60.475 14.8C60.6917 13.95 60.9083 13.025 61.125 12.025C61.3583 11.025 61.575 9.99167 61.775 8.925C61.975 7.85833 62.1667 6.8 62.35 5.75C62.55 4.68333 62.7333 3.65833 62.9 2.675H66.95C66.3667 5.575 65.6917 8.51667 64.925 11.5C64.175 14.4833 63.3583 17.3167 62.475 20H58.9C58.3167 18.4 57.75 16.725 57.2 14.975C56.65 13.2083 56.1083 11.4417 55.575 9.675C55.0417 11.4417 54.5083 13.2083 53.975 14.975C53.4417 16.725 52.8833 18.4 52.3 20H48.725C47.8417 17.3167 47.0167 14.4833 46.25 11.5C45.5 8.51667 44.8333 5.575 44.25 2.675H48.475C48.6417 3.65833 48.825 4.68333 49.025 5.75C49.225 6.8 49.4333 7.85833 49.65 8.925C49.8667 9.99167 50.0833 11.025 50.3 12.025C50.5333 13.025 50.7667 13.95 51 14.8C51.3 13.9833 51.5917 13.1167 51.875 12.2C52.1583 11.2833 52.4333 10.3667 52.7 9.45C52.9667 8.53333 53.2083 7.65 53.425 6.8C53.6583 5.95 53.8667 5.19167 54.05 4.525H57.375ZM73.523 17.4C73.8897 17.4 74.2397 17.3917 74.573 17.375C74.9064 17.3583 75.173 17.3333 75.373 17.3V14.475C75.223 14.4417 74.998 14.4083 74.698 14.375C74.398 14.3417 74.123 14.325 73.873 14.325C73.523 14.325 73.1897 14.35 72.873 14.4C72.573 14.4333 72.3064 14.5083 72.073 14.625C71.8397 14.7417 71.6564 14.9 71.523 15.1C71.3897 15.3 71.323 15.55 71.323 15.85C71.323 16.4333 71.5147 16.8417 71.898 17.075C72.298 17.2917 72.8397 17.4 73.523 17.4ZM73.223 6.5C74.323 6.5 75.2397 6.625 75.973 6.875C76.7064 7.125 77.2897 7.48333 77.723 7.95C78.173 8.41667 78.4897 8.98333 78.673 9.65C78.8564 10.3167 78.948 11.0583 78.948 11.875V19.625C78.4147 19.7417 77.673 19.875 76.723 20.025C75.773 20.1917 74.623 20.275 73.273 20.275C72.423 20.275 71.648 20.2 70.948 20.05C70.2647 19.9 69.673 19.6583 69.173 19.325C68.673 18.975 68.2897 18.525 68.023 17.975C67.7564 17.425 67.623 16.75 67.623 15.95C67.623 15.1833 67.773 14.5333 68.073 14C68.3897 13.4667 68.8064 13.0417 69.323 12.725C69.8397 12.4083 70.4314 12.1833 71.098 12.05C71.7647 11.9 72.4564 11.825 73.173 11.825C73.6564 11.825 74.0814 11.85 74.448 11.9C74.8314 11.9333 75.1397 11.9833 75.373 12.05V11.7C75.373 11.0667 75.1814 10.5583 74.798 10.175C74.4147 9.79167 73.748 9.6 72.798 9.6C72.1647 9.6 71.5397 9.65 70.923 9.75C70.3064 9.83333 69.773 9.95833 69.323 10.125L68.848 7.125C69.0647 7.05833 69.3314 6.99167 69.648 6.925C69.9814 6.84167 70.3397 6.775 70.723 6.725C71.1064 6.65833 71.5064 6.60833 71.923 6.575C72.3564 6.525 72.7897 6.5 73.223 6.5ZM82.1914 3.575L85.9164 2.975V6.85H90.3914V9.95H85.9164V14.575C85.9164 15.3583 86.0497 15.9833 86.3164 16.45C86.5997 16.9167 87.1581 17.15 87.9914 17.15C88.3914 17.15 88.7997 17.1167 89.2164 17.05C89.6497 16.9667 90.0414 16.8583 90.3914 16.725L90.9164 19.625C90.4664 19.8083 89.9664 19.9667 89.4164 20.1C88.8664 20.2333 88.1914 20.3 87.3914 20.3C86.3747 20.3 85.5331 20.1667 84.8664 19.9C84.1997 19.6167 83.6664 19.2333 83.2664 18.75C82.8664 18.25 82.5831 17.65 82.4164 16.95C82.2664 16.25 82.1914 15.475 82.1914 14.625V3.575ZM92.3115 13.425C92.3115 12.475 92.4615 11.5833 92.7615 10.75C93.0782 9.9 93.5282 9.16667 94.1115 8.55C94.6949 7.91667 95.4032 7.41667 96.2365 7.05C97.0699 6.68333 98.0199 6.5 99.0865 6.5C99.7865 6.5 100.428 6.56667 101.012 6.7C101.595 6.81667 102.162 6.99167 102.712 7.225L101.937 10.2C101.587 10.0667 101.203 9.95 100.787 9.85C100.37 9.75 99.9032 9.7 99.3865 9.7C98.2865 9.7 97.4615 10.0417 96.9115 10.725C96.3782 11.4083 96.1115 12.3083 96.1115 13.425C96.1115 14.6083 96.3615 15.525 96.8615 16.175C97.3782 16.825 98.2699 17.15 99.5365 17.15C99.9865 17.15 100.47 17.1083 100.987 17.025C101.503 16.9417 101.978 16.8083 102.412 16.625L102.937 19.675C102.503 19.8583 101.962 20.0167 101.312 20.15C100.662 20.2833 99.9449 20.35 99.1615 20.35C97.9615 20.35 96.9282 20.175 96.0615 19.825C95.1949 19.4583 94.4782 18.9667 93.9115 18.35C93.3615 17.7333 92.9532 17.0083 92.6865 16.175C92.4365 15.325 92.3115 14.4083 92.3115 13.425ZM105.437 20V1.2L109.162 0.599999V6.9C109.412 6.81667 109.728 6.74167 110.112 6.675C110.512 6.59167 110.895 6.55 111.262 6.55C112.328 6.55 113.212 6.7 113.912 7C114.628 7.28333 115.195 7.69167 115.612 8.225C116.045 8.75833 116.345 9.39167 116.512 10.125C116.695 10.8583 116.787 11.675 116.787 12.575V20H113.062V13.025C113.062 11.825 112.903 10.975 112.587 10.475C112.287 9.975 111.72 9.725 110.887 9.725C110.553 9.725 110.237 9.75833 109.937 9.825C109.653 9.875 109.395 9.93333 109.162 10V20H105.437ZM119.533 13.525C119.533 12.3583 119.708 11.3417 120.058 10.475C120.425 9.59167 120.9 8.85833 121.483 8.275C122.067 7.69167 122.733 7.25 123.483 6.95C124.25 6.65 125.033 6.5 125.833 6.5C127.7 6.5 129.175 7.075 130.258 8.225C131.342 9.35833 131.883 11.0333 131.883 13.25C131.883 13.4667 131.875 13.7083 131.858 13.975C131.842 14.225 131.825 14.45 131.808 14.65H123.358C123.442 15.4167 123.8 16.025 124.433 16.475C125.067 16.925 125.917 17.15 126.983 17.15C127.667 17.15 128.333 17.0917 128.983 16.975C129.65 16.8417 130.192 16.6833 130.608 16.5L131.108 19.525C130.908 19.625 130.642 19.725 130.308 19.825C129.975 19.925 129.6 20.0083 129.183 20.075C128.783 20.1583 128.35 20.225 127.883 20.275C127.417 20.325 126.95 20.35 126.483 20.35C125.3 20.35 124.267 20.175 123.383 19.825C122.517 19.475 121.792 19 121.208 18.4C120.642 17.7833 120.217 17.0583 119.933 16.225C119.667 15.3917 119.533 14.4917 119.533 13.525ZM128.283 12.1C128.267 11.7833 128.208 11.475 128.108 11.175C128.025 10.875 127.883 10.6083 127.683 10.375C127.5 10.1417 127.258 9.95 126.958 9.8C126.675 9.65 126.317 9.575 125.883 9.575C125.467 9.575 125.108 9.65 124.808 9.8C124.508 9.93333 124.258 10.1167 124.058 10.35C123.858 10.5833 123.7 10.8583 123.583 11.175C123.483 11.475 123.408 11.7833 123.358 12.1H128.283ZM138.533 17.325C139.216 17.325 139.699 17.2583 139.983 17.125C140.266 16.9917 140.408 16.7333 140.408 16.35C140.408 16.05 140.224 15.7917 139.858 15.575C139.491 15.3417 138.933 15.0833 138.183 14.8C137.599 14.5833 137.066 14.3583 136.583 14.125C136.116 13.8917 135.716 13.6167 135.383 13.3C135.049 12.9667 134.791 12.575 134.608 12.125C134.424 11.675 134.333 11.1333 134.333 10.5C134.333 9.26667 134.791 8.29167 135.708 7.575C136.624 6.85833 137.883 6.5 139.483 6.5C140.283 6.5 141.049 6.575 141.783 6.725C142.516 6.85833 143.099 7.00833 143.533 7.175L142.883 10.075C142.449 9.925 141.974 9.79167 141.458 9.675C140.958 9.55833 140.391 9.5 139.758 9.5C138.591 9.5 138.008 9.825 138.008 10.475C138.008 10.625 138.033 10.7583 138.083 10.875C138.133 10.9917 138.233 11.1083 138.383 11.225C138.533 11.325 138.733 11.4417 138.983 11.575C139.249 11.6917 139.583 11.825 139.983 11.975C140.799 12.275 141.474 12.575 142.008 12.875C142.541 13.1583 142.958 13.475 143.258 13.825C143.574 14.1583 143.791 14.5333 143.908 14.95C144.041 15.3667 144.108 15.85 144.108 16.4C144.108 17.7 143.616 18.6833 142.633 19.35C141.666 20.0167 140.291 20.35 138.508 20.35C137.341 20.35 136.366 20.25 135.583 20.05C134.816 19.85 134.283 19.6833 133.983 19.55L134.608 16.525C135.241 16.775 135.891 16.975 136.558 17.125C137.224 17.2583 137.883 17.325 138.533 17.325Z" fill="black"/>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-xxl-6 ">
              <ul className= {`d-flex justify-content-end align-items-center ${styleHeader.menu}`}>
                <li  className={styleHeader.menu__item}>
                  <Link to='/'>
                    Головна
                  </Link>
                </li>
                <li  className={styleHeader.menu__item}>
                  <Link to='/shop'>
                    Про Rolex
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <div className={`d-flex justify-content-end align-items-center ${styleHeader.cart}`}>
                  <div className={styleHeader.cart__item}>
                    <a href="/" >
                      Contact us
                    </a>
                  </div>  
                  <div onClick={onClickCart} className={styleHeader.cart__item_img}>
                    <svg  width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.74625 4.37C3.74625 4.20423 3.81209 4.04526 3.9293 3.92805C4.04651 3.81084 4.20548 3.745 4.37125 3.745H4.91875C5.8275 3.745 6.35 4.33625 6.6525 4.92624C6.85875 5.33 7.00749 5.82249 7.13124 6.24999H20C20.1931 6.25005 20.3836 6.29487 20.5566 6.38092C20.7295 6.46698 20.8801 6.59194 20.9966 6.74599C21.1131 6.90004 21.1923 7.07899 21.2281 7.26881C21.2638 7.45862 21.255 7.65413 21.2025 7.83999L19.3325 14.4337C19.1837 14.9569 18.8685 15.4172 18.4344 15.745C18.0004 16.0728 17.4714 16.2501 16.9275 16.25H10.5787C10.0303 16.2502 9.49709 16.07 9.06114 15.7373C8.6252 15.4046 8.31075 14.9378 8.16624 14.4087L7.36374 11.465C7.35914 11.4518 7.35497 11.4385 7.35125 11.425L6.06249 7.05375L5.93749 6.6325C5.81249 6.2 5.70249 5.81749 5.53749 5.49624C5.33874 5.10874 5.15625 4.99625 4.9175 4.99625H4.37C4.20423 4.99625 4.04526 4.9304 3.92805 4.81319C3.81084 4.69598 3.745 4.53701 3.745 4.37125L3.74625 4.37ZM8.55624 11.0875L9.37249 14.0825C9.44486 14.3469 9.60214 14.5802 9.8201 14.7464C10.0381 14.9126 10.3046 15.0026 10.5787 15.0025H16.9287C17.2005 15.0022 17.4649 14.9134 17.6816 14.7494C17.8984 14.5854 18.0558 14.3552 18.13 14.0937L20 7.49999H7.49999L8.55624 11.0875ZM12.5 19.3737C12.5 19.871 12.3025 20.3479 11.9508 20.6996C11.5992 21.0512 11.1223 21.2487 10.625 21.2487C10.1277 21.2487 9.6508 21.0512 9.29917 20.6996C8.94754 20.3479 8.74999 19.871 8.74999 19.3737C8.74999 18.8765 8.94754 18.3996 9.29917 18.0479C9.6508 17.6963 10.1277 17.4987 10.625 17.4987C11.1223 17.4987 11.5992 17.6963 11.9508 18.0479C12.3025 18.3996 12.5 18.8765 12.5 19.3737ZM11.25 19.3737C11.25 19.208 11.1841 19.049 11.0669 18.9318C10.9497 18.8146 10.7908 18.7487 10.625 18.7487C10.4592 18.7487 10.3003 18.8146 10.1831 18.9318C10.0658 19.049 9.99999 19.208 9.99999 19.3737C9.99999 19.5395 10.0658 19.6985 10.1831 19.8157C10.3003 19.9329 10.4592 19.9987 10.625 19.9987C10.7908 19.9987 10.9497 19.9329 11.0669 19.8157C11.1841 19.6985 11.25 19.5395 11.25 19.3737ZM18.75 19.3737C18.75 19.871 18.5525 20.3479 18.2008 20.6996C17.8492 21.0512 17.3723 21.2487 16.875 21.2487C16.3777 21.2487 15.9008 21.0512 15.5492 20.6996C15.1975 20.3479 15 19.871 15 19.3737C15 18.8765 15.1975 18.3996 15.5492 18.0479C15.9008 17.6963 16.3777 17.4987 16.875 17.4987C17.3723 17.4987 17.8492 17.6963 18.2008 18.0479C18.5525 18.3996 18.75 18.8765 18.75 19.3737ZM17.5 19.3737C17.5 19.208 17.4341 19.049 17.3169 18.9318C17.1997 18.8146 17.0408 18.7487 16.875 18.7487C16.7092 18.7487 16.5503 18.8146 16.4331 18.9318C16.3158 19.049 16.25 19.208 16.25 19.3737C16.25 19.5395 16.3158 19.6985 16.4331 19.8157C16.5503 19.9329 16.7092 19.9987 16.875 19.9987C17.0408 19.9987 17.1997 19.9329 17.3169 19.8157C17.4341 19.6985 17.5 19.5395 17.5 19.3737Z" fill="#000"/>
                    </svg>
                  </div>
                </div>
              </div>
          </div>
      </div>
      
      
    );
  }
  
  export default Header;