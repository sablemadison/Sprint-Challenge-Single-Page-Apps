import React, { useEffect, useState }  from "react";
import Header from "./components/Header.js";
import { Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import axios from 'axios';


export default function App() {
  const [charList, setCharList] = useState()
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
    <div>
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage}/>
      <Route path="/characters" component={CharacterList} />
    </main>
    </div>
  );
}
