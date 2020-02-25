import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [charList, setCharList] = useState([])
// consr [statement, setState] 
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(objData => {
      console.log('data here:', objData.data.results)
      setCharList(objData.data.results)
    })
    .then(error => {
      console.log('error here', error)
    })
  }, []);

  return (
    <section className="character-list">
      {charList.map((item) => (
         <CharacterCard name={item.name} image={item.image}  /> 
        
  ))}
   
    </section>
  );
}
