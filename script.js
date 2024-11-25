function getWord() {
    fetch ("https://random-word-api.herokuapp.com/word")
    .then(res=>res.json()) // So we will then need to pass the response in the Json format
    .then(word=>document.getElementById("random_words").innerText=word[0]) //So this will actually display the random word on the page, Notice were calling an id over to our html title so the word will display there.
    .then(word=>console.log(word[0])) // We then need to catch the particle or word. Since this is an array we will call the first spot in our array. Remember this just outputs the word in the console
    .catch(err=>console.log(err)); // naturally this is our catch statment, this will prevent our application from crashing or any errors
 }

getWord();// Finally, our function is called

