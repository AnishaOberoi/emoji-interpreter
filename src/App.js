import React, { useState } from "react";
import "./styles.css";

var foods = {
	"🥗": "Salad",
	"🧁": "Cupcake",
	"🌭": "Hotdog",
	"🍝": "Pasta",
	"🍣": "Sushi"
};
var animals = {
	"🐬": "Dolphin",
	"🦒": "Giraffe",
	"🦢": "Swan",
	"🦉": "Owl",
	"🐙": "Octopus"
};

var posts = {
	"🕵️": "Detective",
	"🧚‍": "Fairy",
	"👩‍🍳": "Chef",
	"🧑‍💻": "Programmer",
	"🦸": "Superman"
};

var gifts = {
	"🎁": "Gift",
	"👗": "Dress",
	"🏀": "Basketball",
	"🎄": "Christmas Tree",
	"🧸": "Teddy Bear"
};

var foodKeys = Object.keys(foods);
var animalsKeys = Object.keys(animals);
var postKeys = Object.keys(posts);
var giftKeys = Object.keys(gifts);
export default function App() {
	const [userInputMeaning, emojiMeaning] = useState("");

	function emojiInput(e) {
		var Input1 = e.target.value;
		var Input2 = e.target.value;
		var Input3 = e.target.value;
		var Input4 = e.target.value;
		var meaning1 = animals[Input1];
		var meaning2 = foods[Input2];
		var meaning3 = posts[Input3];
		var meaning4 = gifts[Input4];

		if (meaning1 === undefined && meaning2 === undefined && meaning3 === undefined && meaning4 === undefined) {
			meaning1 = "Not Found in Database";
			meaning2 = "Not Found in Database";
			meaning3 = "Not Found in Database";
			meaning4 = "Not Found in Database";
			emojiMeaning(meaning1);
		}else if(meaning1 === undefined && meaning2 === undefined && meaning3 === undefined){
			meaning1 = "Not Found in Database";
			meaning2 = "Not Found in Database";
			meaning3 = "Not Found in Database";
			emojiMeaning(meaning4);
		}else if(meaning2 === undefined && meaning3 === undefined && meaning4 === undefined){
			meaning3 = "Not Found in Database";
			meaning2 = "Not Found in Database";
			meaning4 = "Not Found in Database";
			emojiMeaning(meaning1);
		}else if(meaning1 === undefined && meaning3 === undefined && meaning4 === undefined){
			meaning1 = "Not Found in Database";
			meaning3 = "Not Found in Database";
			meaning4 = "Not Found in Database";
			emojiMeaning(meaning2);
		}else if(meaning1 === undefined && meaning2 === undefined && meaning4 === undefined){
			meaning1 = "Not Found in Database";
			meaning2 = "Not Found in Database";
			meaning4 = "Not Found in Database";
			emojiMeaning(meaning3);
		}

	}

	function emojiClickHandlerAnimal(emoji) {
		var meaning1 = animals[emoji];
		emojiMeaning(meaning1);
	}
	function emojiClickHandlerFood(emoji) {
		var meaning2 = foods[emoji];
		emojiMeaning(meaning2);
	}

	function emojiClickHandlerPost(emoji) {
		var meaning3 = posts[emoji];
		emojiMeaning(meaning3);
	}

	function emojiClickHandlerGift(emoji) {
		var meaning4 = gifts[emoji];
		emojiMeaning(meaning4);
	}


	return (
		<div className="App">
		<nav class = "navigation">
			<h1>EMOJI INTERPRETER APP </h1>
		</nav>
		<div class = "mid">
			<h2> Enter your Emoji </h2>
			<input onChange={emojiInput} />
			<h2>{userInputMeaning}</h2>
			<h3> or </h3>
			<h3>Click to know</h3>
		</div>
			<div class = "outer-div">
			<div class= "inner-div">
			{foodKeys.map(function (keys) {
				return (
					<span> <li onClick={() => emojiClickHandlerFood(keys)}>{keys}  </li></span>
				);
			})}
			</div>
			<div class = "inner-div">
			{animalsKeys.map(function (keys) {
				return (
					<span><li onClick={() => emojiClickHandlerAnimal(keys)}>{keys}</li></span>
				);
			})}
			</div>
			<div class= "inner-div">
			{postKeys.map(function (keys) {
				return (
					<span> <li onClick={() => emojiClickHandlerPost(keys)}>{keys}  </li></span>
				);
			})}
			</div>
			<div class= "inner-div">
			{giftKeys.map(function (keys) {
				return (
					<span> <li onClick={() => emojiClickHandlerGift(keys)}>{keys}  </li></span>
				);
			})}
			</div>
			</div>
		</div>
	);
}
