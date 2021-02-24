// JavaScript source code

function priceRange(person) {
    return (person.rate >= 65) && (person.rate <= 90);
}

var result = [];
result = people.filter(priceRange);

var results = document.getElementById("result");

for (var i = 0; i < result.length; i++) {

    var msg = document.createElement("p");
    msg.textContent = result[i].name + " " + result[i].rate;
    results.appendChild(msg);
}