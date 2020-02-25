import React, { useState } from "react";
import styled from 'styled-components';

const StyledLi = styled.li`
border:1px dotted steelblue;
width: 500px;
margin 0 auto;
background-color:white;
color: steelblue;
opacity: .8;
 `
export default function SearchForm() {
 
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
}

  const results = !searchTerm
  ? people
  :people.filter(person => 
    person.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  )
  
  return (
    <section className="search-form">
     <div>
       <div>
         <p></p>
       </div>
     <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
       {results.map(item => ( 
         <StyledLi>{item}</StyledLi>
       ))}
      </ul>
     </div>
    </section>
  );
  }

  const people = ['Rick Sanchez',

    'Morty Smith',
    
    'Summer Smith',
    
    'Beth Smith',
    
    'Jerry Smith',
    
    'Abadango Cluster Princess',
    
    'Abradolf Lincler',
    
    'Adjudicator Rick',
    
    'Agency Director',
    
    'Alan Rails',
    
    'Albert Einstein',
    
    'Alexander',
    
    'Alien Googah',
    
    'Alien Morty',
    
    'Alien Rick',
    
    'Amish Cyborg',
    
    'Annie',
    
    'Antenna Morty',
    
    'Antenna Rick',
    
    'Ants in my Eyes Johnson', ]