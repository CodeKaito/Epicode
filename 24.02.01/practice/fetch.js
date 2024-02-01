// https://triveschool-api.herokuapp.com/api/agenda
// https://triveschool-api.herokuapp.com/api/deezer/search?q=metallica

fetch("https://triveschool-api.herokuapp.com/api/agenda")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("Error detected: ", err));
