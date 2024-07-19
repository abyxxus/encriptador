function processtext(){
    // Obtener el texto de la primera textarea
    const text = document.getElementById('textarea1').value;

    // muestra el texto obtenido en consola
    console.log(text);

    //convierte el texto en una lista 
    const chain = text.split('');

    //recorre cada dato de la lista
    for (let data = 0 ; data < chain.length; data++){
        
        // evañua cada vocal de la cadena y la cambia
        if(chain[data] == "a"){
            chain[data] = "ai";
        }
        else if(chain[data] == "e"){
            chain[data] = "enter";
        }
        else if(chain[data] == "i"){
            chain[data] = "imes";
        }
        else if(chain[data] == "o"){
            chain[data] = "ober";
        }
        else if(chain[data] == "u"){
            chain[data] = "ufat";
        }
    }

    //une la cadena 
    let newtext = chain.join('');

    // Obtener el texto actual de la segunda textarea
    const text2 = document.getElementById('textarea2').value;

    // Concatenar el texto procesado al texto actual de la segunda textarea
    const nuevoTexto2 = text2 + (text2 ? '\n' : '') + newtext;

    console.log(newtext);
    // Mostrar el texto procesado en la segunda textarea
    document.getElementById('textarea2').value = nuevoTexto2;
}

function reverseText() {
    // Obtener el texto de la segunda textarea
    let text = document.getElementById('textarea1').value;

    // Mostrar el texto obtenido en la consola
    console.log('Texto antes de desencriptar:', text);

    // Reemplazar las secuencias encriptadas por las vocales correspondientes
    text = text.replace(/ai/g, "a")
               .replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");

    console.log('Texto después de desencriptar:', text);


    // Obtener el texto actual de la segunda textarea
    const text2 = document.getElementById('textarea2').value;

    // Concatenar el texto procesado al texto actual de la segunda textarea
    const nuevoTexto2 = text2 + (text2 ? '\n' : '') + text;

    // Mostrar el texto procesado en la segunda textarea
    document.getElementById('textarea2').value = nuevoTexto2;
}