import { useState } from "react";

const Recipe = (props) => {
  const [click, setClick] = useState(false);
  console.log(props.ingredients)
  return (
    <div className={click?"m-auto card-group text-decoration-none":"m-2 card-group text-decoration-none"} style={click?{width: '75rem', display:"block" }:{width:'25rem'}}>
      <div
        onClick={()=>{setClick(!click)}}
        className="card crd border border-2 border-secondary rounded m-3"
      >
        <div className="w-50 crd-img text-center mx-auto d-block">
          <img
            className={
              click
                ? "img-fluid mt-5 fluid-center w-100 border border-warning border-3 rounded"
                : "img-fluid mt-5 fluid-center w-100 border border-warning border-3 rounded-circle"
            }
            src={props.image}
          />
        </div>
        <h2 className="w-75 mx-auto">{props.title}</h2>
        <p className="pb-5">
          Total Calories:
          <span className="ms-2 ">{Math.round(props.calories)}</span>
        </p>
        {click&&
        <div className="text-start ms-1 pb-5">
          <h3 className="ms-1 mb-3" >Ingredients</h3>
            {props.ingredients.map(ingredients=>(
              <div className="w-75 ms-2 mb-2">
                <p className="ms-3">-{ingredients.text}</p>
              </div>
            ))
            }
        </div>}
        <a 
          className="me-3  link align-bottom "
          href={props.url}
          target="_blank" 
          data-bs-toggle="tooltip"
          title={`Visit ${props.source} to view the recipe`}>View Recipe </a>
      </div>
    </div>
  );
};
export default Recipe;
