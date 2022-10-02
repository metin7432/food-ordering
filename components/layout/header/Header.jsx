import Logo from "./Logo";
import React, {useState} from "react";
import {FaUserAlt , FaShoppingCart, FaSearch} from 'react-icons/fa'
import HeaderCss from '../../../styles/header/Header.module.css'
import MiddleNavbar from "./MiddleNavbar";

import SearchModal from "./SearchModal";
import { SearchBackdrop } from "./SearchBackdrop";


const Header = () => {
  const [isSearchClick, setIsSearchClick] = useState(false)
  //{isSearchClick && <SearchModal closeModal={setIsSearchClick} />}
  return (
    <div>
    <div className={HeaderCss.container}>
       <Logo />
       <MiddleNavbar />
       <ul className={HeaderCss.navibar}>
            <li className={HeaderCss.userIco}><a href="#"><FaUserAlt /></a></li>
            <li className={HeaderCss.cartIco}><a href="#"><FaShoppingCart /></a></li>
            <li><button className={HeaderCss.searchBtn} onClick={() => setIsSearchClick(true)} ><FaSearch className={HeaderCss.searchBtnIco} /></button></li>
            <li><button className={HeaderCss.btn} href="#">Order Online</button></li>
        </ul>
        </div>

        {
          isSearchClick && <SearchModal closeModal={setIsSearchClick} />  // metod SearchModala gonderildi
        }
       
     
     

    </div>
  
  )
}

export default Header;