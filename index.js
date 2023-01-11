// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
let newCats;

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name) {
    return [...cats, name];
}

function prependCat(name){
    newCats = cats.slice();
    newCats.unshift(name);
    return newCats;
}

function removeLastCat(name){
    newCats = cats.slice(0,-1);
    return newCats;
}

function removeFirstCat(name){
    newCats = cats.slice(1);
    return newCats;
}