import React from 'react';

import './recipes.css'

export default function Recipes(props) {
  return (
    <section className="recipes">
      <h3>Whole30 Recipes</h3>
      <div className="recipe"> {props.text} </div>
      <div className="recipe"> {props.text} </div>
      <div className="recipe"> {props.text} </div>
      <div className="recipe"> {props.text} </div>
      <div className="recipe"> {props.text} </div>
      <div className="recipe"> {props.text} </div>
    </section>
  )
}

Recipes.defaultProps = { text: 'Recipe'}


//on load- call API and return 12 recipes
//PREVIEW [picture & title only] 


//on click of specific recipes- enlarge and include
//FULL VIEW [picture, title, ingredients, body
