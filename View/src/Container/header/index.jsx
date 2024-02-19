import React,{useState} from 'react'
import Navbar from '../../Components/Header';

export default function Header(){

    const [searchText,setSearchText]=useState("");

    function handleChange(event){
        setSearchText(event.target.value);
    }

  return (
      <Navbar value={searchText} handleChange={handleChange}/>
  )
}
