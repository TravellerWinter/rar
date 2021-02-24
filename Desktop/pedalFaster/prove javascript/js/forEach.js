var results = document.getElementsByTagName("div")[1];
var solutions = [];

function getSolutions(person) {
    if (person.rate >= 65 && person.rate <= 90) {
        solutions.push(person);
    }
}

people.forEach(getSolutions);

for (var i = 0; i < solutions.length; i++) {

    var msg = document.createElement("p");
    msg.textContent = solutions[i].name + " " + solutions[i].rate;
    results.appendChild(msg);
}