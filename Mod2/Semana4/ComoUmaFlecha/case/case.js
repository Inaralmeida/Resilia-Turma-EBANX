//declaração do objeto
const user = {
  _name: "Lina",
  setName: (newName) => {
    this._name = newName;
  },
  getName: () => {
    return this._name;
  },
};

console.log(user.getName());
user.setName("Marilia");
console.log(user.getName());
user.setName("Gloria");

//Exemplo com possível tratador de evento + callback
function eventHandler(text, func) {
  this._name = "bea";
  console.log(text, func());
}

eventHandler("normalzão", user.getName);
eventHandler("Usando o bind", user.getName.bind(user));

eventHandler("Usando =>", () => {
  return user.getName();
});

const button = "button";
button.addEventListener("click", (event) => {});
