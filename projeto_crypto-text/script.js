function encodeText() {
    var inputText = document.getElementById("inputText").value;
    var shiftAmount = parseInt(document.getElementById("shiftAmount").value);
    
    if (isNaN(shiftAmount)) {
        alert("Você esqueceu o valor de deslocamento.");
        return;
    }

    var encodedText = cipherEncode(inputText, shiftAmount);
    document.getElementById("outputText").value = encodedText;
}

function decodeText() {
    var inputText = document.getElementById("inputText").value;
    var shiftAmount = parseInt(document.getElementById("shiftAmount").value);
    
    if (isNaN(shiftAmount)) {
        alert("Por favor insira a quantida certa.");
        return;
    }

    var decodedText = cipherDecode(inputText, shiftAmount);
    document.getElementById("outputText").value = decodedText;
}

function cipherEncode(text, shift) {
    return text.replace(/[a-zA-Z]/g, function (char) {
        var base = char.toLowerCase() === char ? 'a' : 'A';
        return String.fromCharCode((char.charCodeAt(0) - base.charCodeAt(0) + shift) % 26 + base.charCodeAt(0));
    });
}

function cipherDecode(text, shift) {
    return cipherEncode(text, 26 - shift); // Decodificação é essencialmente codificação com o inverso do deslocamento
}
