import React, { Component,useEffect, useState } from 'react';
import Recipe from "./Recipe";
import './App.css';

const App=()=>{
  const APP_ID="98fb884e";
  const APP_KEY="e7d2c2d8c0a5a798d0b55a8a4e6a671c" 
  const exampleRequest=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('chicken')
  useEffect(()=> {getRecipes();},[query]);

  const getRecipes = async() =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }
  const updateSearch =(e)=>{
    setSearch(e.target.value);
  }
  const getSearch =(e)=>{
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }
  return(
    <div className="App">
      <form onSubmit ={getSearch} className ="searchForm">
        <input className="searchBar" type ="text" value={search} onChange={updateSearch}/>
        <button onClick = {getSearch} className="searchButton" type="submit">Search</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe 
        key={recipe.recipe.key}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}/>
      ))}
    </div>
  )
}

export default App;
