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
    // Define el número de columnas
    const rows = document.getElementById("rows").value;
    const columns = document.getElementById("columns").value;
    /*const columns = 3;
    const rows = Math.ceil(text.length / columns);*/
    let matrix = new Array(rows);

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
            }
        }
    }

    // Construye el texto cifrado
    let result = '';
    for (let j = 0; j < columns; j++) {
        for (let i = 0; i < rows; i++) {
            if (matrix[i][j]) {
                result += matrix[i][j];
            }
        }
    }

    return result;
}

function transposeDecrypt(text) {
    // Define el número de columnas
    const columns = 3;
    const rows = Math.ceil(text.length / columns);
    /*const rows = document.getElementById("rows").value;
    const columns = document.getElementById("columns").value;*/
    let matrix = new Array(rows);

    // Inicializa la matriz
    for (let i = 0; i < rows; i++) {
        matrix[i] = new Array(columns);
    }

    // Calcula la cantidad de celdas vacías
    const emptyCells = rows * columns - text.length;

    // Llena la matriz con el texto
    let k = 0;
    for (let j = 0; j < columns; j++) {
        for (let i = 0; i < rows; i++) {
            if (i >= rows - emptyCells) {
                matrix[i][j] = '';
            } else {
                matrix[i][j] = text[k++];
            }
        }
    }

    // Construye el texto descifrado
    let result = '';
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            result += matrix[i][j];
        }
    }

    return result;
}