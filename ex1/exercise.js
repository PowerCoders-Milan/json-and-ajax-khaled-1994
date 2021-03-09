var object = {
    id: 1,
    title: "this is a note",
    content: "This is the amazing content of the note!"
  };
  
object.nome = "khaled";
console.log(object);
let myJSON = JSON.stringify(object);
console.log(myJSON);

const my = JSON.parse(myJSON);
console.log(my);