
function myFirstFunction() {
    return "my greeting";
}

console.log(myFirstFunction)


// Callbakcs
function sayHiLater (anyFunctionReference) {
    // simulate some code running
    // takes some time..
    anyFunctionReference();
}
// call sayHiLater so that it says "Hi"
const sayHi = () => {
    console.log("hi");
}

sayHiLater(sayHi);

const sayHello = () => {
    console.log("hello");
}
sayHiLater(sayHello)

function interact (genericInteraction, name) {
    console.log(genericInteraction(name));
}

const poke = (name) => {
    return "poke " + name;
}

interact(poke, "Thomas");

const hug = (name) => {
    return "Hug " + name + " where name is Napster for instance"
}
interact(hug, "Napster")
interact((name) => "Hug " + name, "Napster")






