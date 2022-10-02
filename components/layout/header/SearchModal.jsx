import React from 'react'
import SearchModalCss from '../../../styles/header/SearchModal.module.css'
import  SearchBackdrop  from "./SearchBackdrop";

const SearchModal = ({closeModal}) => {
  return (
    <div>
    <div className={SearchModalCss.modal} >
        <input type="text" className={SearchModalCss.input} />
        <div>
        <button onClick={() => closeModal(false)}>Cancel</button>
        <button>Ok</button>
       </div>
       
    </div>
   
    </div>
  )
}

export default SearchModal;