function capitalizeText() {
    var inputText = document.getElementById("textInput").value;
    var capitalizedText = inputText.toUpperCase();
    document.getElementById("textInput").value = capitalizedText;
}

function lowercaseText() {
    var inputText = document.getElementById("textInput").value;
    var lowercaseText = inputText.toLowerCase();
    document.getElementById("textInput").value = lowercaseText;
}

function clearText() {
    document.getElementById("textInput").value = "";
}
