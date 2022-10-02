
import MiddleNavbarCss from '../../../styles/header/MiddleNavbar.module.css'

const MiddleNavbar = () => {
  return (
    <nav className={MiddleNavbarCss.menu}>
    <ul>
    <li><a href="#">HOME</a></li>
    <li><a href="#">MENU</a></li>
    <li><a href="#">ABOUT</a></li>
    <li><a href="#">BOOKTABLE</a></li>
   </ul>
  </nav>
  )
}

export default MiddleNavbar;