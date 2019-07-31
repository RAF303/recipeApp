import React from 'react';
import style from '../recipe.module.css';
// import style from './recipe.module.css'

const Recipe = ({ title, calories, image, ingredients }) => {
	return (
		<div className={style.recipe}>
			<div className={style.f1_card}>
				<div className={style.front} id={style.face}>
					<img className={style.image} src={image} alt="" />
				</div>
				<div className={style.back} id={style.face}>
					<h1>{title}</h1>
					<ol>
						{ingredients.map(ingredient => (
							<li>{ingredient.text}</li>
						))}
					</ol>
					<p>Calories {calories}</p>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
