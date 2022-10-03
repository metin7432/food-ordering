import React from 'react'
import SearchModalCss from '../../../styles/header/SearchModal.module.css'


const SearchModal = ({closeModal}) => {
  return (
   
    <div className={SearchModalCss.modal} >
      <button className={SearchModalCss.btn} onClick={() => closeModal(false)} >X</button>
      <h1 className={SearchModalCss.title}>Search</h1>
        <input type="text" className={SearchModalCss.giris} />
       
      <table className={SearchModalCss.table}>
       <tr>
        <td><img src="/images/f1.png" alt="pizza" height='35px' width='35px' /></td>
        <td>Emin Pizza</td>
        <td>$10</td>
       </tr>
       <tr>
        <td><img src="/images/o1.jpg" alt="hamburger" height='35px' width='35px' /></td>
        <td>Meto Burger</td>
        <td>$10</td>
       </tr>
       <tr>
        <td><img src="/images/hero-bg.jpg" alt="burger" height='35px' width='35px' /></td>
        <td>Kadriye Burgers</td>
        <td>$10</td>
       </tr>
       <tr>
        <td><img src="/images/k1.jpeg" alt="kola" height='35px' width='35px' /></td>
        <td>Sino Kola</td>
        <td>$10</td>
       </tr>
      
       </table>
       
       </div>
   
  
  )
}

export default SearchModal;

