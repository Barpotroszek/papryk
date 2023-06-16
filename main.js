const lista = [
"biurkowo-posokowy",
"celebryta",
"dresowo-pokowy",
"fotografier",
"imprezowy",
"kaktusowo-posokowy",
"krasnalowy",
"krościenkowy",
"podejrzliwy",
"podziemny",
"posokowy",
"pringlesowy",
"profesor",
"rozegrany",
"rozgrany",
"slender",
"szafowo-posokowy",
"słodki",
"ukrywający coś",
"walący fote z ukrycia",
"wspólnotowy",
"zatajony",
"zwierzakowy",
"świąteczno-elegancki",
"świąteczny","agent",
"czapkowy",
"domówkowy",
"dreptający",
"głoszący",
"jakby malowany",
"pozujący",
"silny",
"skrzywiony",
"z idolem",
"zdziwiony",
"śpiący",
]

const colors = new Array(
    "red", "#70ff70", "pink", "grey", "lightblue"
)

const container = document.querySelector(".container");
const template = document.getElementsByTagName("template")[0];
const item = template.content.querySelector(".wrapper")
let i = 0;
for (const name of lista) {
    const e = document.importNode(item, true)
    e.style = "--color:" + colors[i%colors.length];
    i++;
    e.querySelector("img").src = "foty/"+name+".jpeg";
    e.querySelector(".text").textContent = name + " Patryk";
    container.appendChild(e);
}