let i;
let response = "";
for (i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        response += "Tech"
    }
    if (i % 5 == 0) {
        response += "Race"
    }
    if (i % 3 != 0 && i % 5 != 0) {
        response += i;
    }
    response += " "
}
console.log(response);