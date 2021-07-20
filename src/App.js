import React, {useEffect, useState } from 'react';
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

      <div className="container">
        <header className="title">
          <h1>Recipe Finder</h1>
        </header>
        
        <form onSubmit ={getSearch} className ="searchForm mb-3 w-100">
          <input className="searchBar w-75" type ="text" value={search} onChange={updateSearch}/>
          <button onClick = {getSearch} className="searchButton" type="submit">Search</button>
        </form>
      </div>
      <div className="container border-start border-end">
     
      <div className="d-flex flex-wrap justify-content-center ">
      {recipes.map((recipe) =>(
        <Recipe 
        key={recipe.recipe.key}
        title={recipe.recipe.label}
        ingredients={recipe.recipe.ingredients}
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        url={recipe.recipe.url}
        source={recipe.recipe.source}
        />
      ))}
      </div>
    </div>
    </div>
  )
}

export default App;
