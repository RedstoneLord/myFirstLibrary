function randomColor() {
    const hexChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = "#";
    for (var i = 0; i < 6; i++) {
        color += hexChars[Math.floor(Math.random() * hexChars.length)];
    }
    return color;
}

function randomInt(limit) {
    let int = Math.floor(Math.random() * (limit + 1));
    return int;
}

function generateTable(rows, columns) {
    let table = "<table>";
    for (var x = 0; x < rows; x++) {
        table += "<tr>";
        for (var y = 0; y < columns; y++) {
            table += '<td></td>';
        }
        table += "</tr>";
    }
    table += "</table>";
    return table;
}
