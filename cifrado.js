function encryptText() {
    const inputText = document.getElementById("text").value;
    const resultText = transposeEncrypt(inputText);
    document.getElementById("result").value = resultText;
}

function decryptText() {
    const inputText = document.getElementById("text").value;
    const resultText = transposeDecrypt(inputText);
    document.getElementById("result").value = resultText;
}

function transposeEncrypt(text) {
    const rows = document.getElementById("rows").value;
    const columns = document.getElementById("columns").value;

    let matrix = new Array(rows);
    let result = '';

    if (text.length <= columns * rows) {

        // Inicializa la matriz
        for (let i = 0; i < rows; i++) {
            matrix[i] = new Array(columns);
        }

        // Llena la matriz con el texto
        let k = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                if (k < text.length) {
                    matrix[i][j] = text[k++];
                } else {
                    matrix[i][j] = "-";
                }
            }
        }

        // Construye el texto cifrado
        for (let j = 0; j < columns; j++) {
            for (let i = 0; i < rows; i++) {
                if (matrix[i][j]) {
                    result += matrix[i][j];
                }
            }
        }
    } else {
        alert("La longitud del texto es mayor que la de la matriz.");
        result = '';
    }

    document.getElementById("longText").value = text.length;
    document.getElementById("longMatriz").value = rows * columns;
    return result;
}

function transposeDecrypt(text) {
    const columns = document.getElementById("rows").value;
    const rows = document.getElementById("columns").value;
    
    let matrix = new Array(rows);
    let result = '';

    if (text.length <= columns * rows) {

        // Inicializa la matriz
        for (let i = 0; i < rows; i++) {
            matrix[i] = new Array(columns);
        }

        // Llena la matriz con el texto
        let k = 0;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                if (k < text.length) {
                    matrix[i][j] = text[k++];
                } else {
                    matrix[i][j] = "-";
                }
            }
        }

        // Construye el texto cifrado
        result = '';
        for (let j = 0; j < columns; j++) {
            for (let i = 0; i < rows; i++) {
                if (matrix[i][j]) {
                    result += matrix[i][j];
                }
            }
        }
    } else {
        alert("La longitud del texto es mayor que la de la matriz.");
        result = '';
    }

    document.getElementById("longText").value = text.length;
    document.getElementById("longMatriz").value = rows * columns;
    return result;
}