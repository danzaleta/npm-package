const messages = [
    "Jorga",
    "Pepe",
    "Jones",
    "Tato",
    "Lalito",
    "Rotoplas"
];

const randomMSG = ()=>{
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
}

module.exports = {randomMSG};