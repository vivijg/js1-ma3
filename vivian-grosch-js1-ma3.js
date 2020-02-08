//Task 1
const sum = (a, b) => a - b;


// task 2
const url = "https://api.rawg.io/api/games?genres=sports";

fetch(url)
  .then(data => data.json())
   .then(response => {
      loopThroughJson(response); 
   });

function loopThroughJson(json) {
  const results = json.results;
 
  for(let i = 0; i < results.length; i++) {
  console.log(results[i].name)
 }
}


//task 3

const word = 'These cats are outrageous.'; 
const newWord = word.replace(/outrageous/, 'giraffes'); 
    document.write(newWord); 


//Task 4

// Tried this one for days so would love to get the answer for this



//task5
    const container = document.querySelector(".container");
    const btn = document.querySelector(".btn");
        container.removeChild(btn);


//Task 6

// Didn't know where to put the ".after", would like an explanation here to.

const animals = document.createElement("li");
animals.className = "parrots";
    console.log(animals);

const parrots = document.createTextNode("Parrots");
animals.appendChild(parrots);
    console.log(parrots);

container.appendChild(animals);

const animalsClassLog = document.createTextNode(parrots);


//Task 7

//Explain?