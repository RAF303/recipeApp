import React, { useEffect, useState } from 'react';
import Recipe from './components /Recipe';
import './App.css';
require('dotenv').config('../env');
console.log(process.env.APP_KEY);

const App = () => {
	const APP_ID = 'cfec7198';
	const APP_KEY = '73e82457234360c0df008f6d50159c0a';
	// const APP_ID = process.env.APP_ID;
	// const APP_KEY = process.env.APP_KEY;

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('banana');

	useEffect(() => {
		getRecipes();
		// eslint-disable-next-line
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();
		setRecipes(data.hits);
		console.log(data.hits);
	};

	const updateSearch = e => {
		setSearch(e.target.value);
		console.log(search);
	};

	const getSearch = e => {
		e.preventDefault();
		setQuery(search);
	};

	return (
		<div className="App">
			<form onSubmit={getSearch} className="search-form">
				<input
					className="search-bar"
					type="text"
					value={search}
					onChange={updateSearch}
				/>
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
			<div className="recipes">
				{recipes.map((recipe, i) => (
					<Recipe
						key={i}
						title={recipe.recipe.label}
						calories={recipe.recipe.calories}
						image={recipe.recipe.image}
						ingredients={recipe.recipe.ingredients}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
