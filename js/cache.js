window.onload = function() {
    const asText = document.getElementById('asText');
    const textbox = document.getElementById('textbox');

    asText.addEventListener('change', function(e) {
        const file = asText.files[0];
        const textType = /text.*/;

        if (file.type.match(textType)) {
            const reader = new FileReader();

            reader.onload = function(e) {
                textbox.innerText = reader.result;
                localStorage['text'] = reader.result;
            }

            reader.readAsText(file);
        } else {
            textbox.innerText = "Dateityp nicht unterstützt";
        }
    });
}

function loadCache() {


  //document.querySelector("#myicon").src = imageUrl;
  document.getElementById("textboxload") = localStorage['text'];
}
