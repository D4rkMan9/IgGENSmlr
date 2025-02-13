function capturar() {
    const elemento = document.getElementById("captura_preview");

    html2canvas(elemento, {
        scale: 4 // Ajusta la escala para aumentar la resolución (3x para obtener 1080x1920)
    }).then(canvas => {
        let link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = document.getElementById('texto').value.trim() + "_igen" + ".png";
        link.click();
    });
}



function generar_cap (){
    let string = document.getElementById('texto').value.trim();
    let value = document.getElementById("texto_size").value;

    document.getElementById('content_preview').innerHTML = string || 'No ingresaste texto';

    document.getElementById("content_preview").style.fontSize = value + "px";  // Usamos 'value' directamente

    
}




