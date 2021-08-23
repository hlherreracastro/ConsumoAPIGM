//referencia
const aplicacion = document.querySelector('.container')

//var idArtistName = document.getElementById("idArtistId").value

//peticion
//const url = 'https://theaudiodb.com/api/v1/json/1/artist.php?' + idArtistId


//peticion
const url = 'https://theaudiodb.com/api/v1/json/1/artist.php?i=112024'

fetch(url)
//a estos .then se les llama promesas
.then(respuesta => respuesta.json())//se captura todo el objeto json para poder recorrerlo
.then(datos => {
    //datos.album da acceso al array que contiene los elementos o el contenido del archivo json
    datos.artists.forEach(details => { //detalle es la variable que recorrera cada uno de los elementos del array
        console.log(details.strArtist,details.strGenre, details.strBiographyEN)//se captura el detalle que es un dato del array(en este caso el titulo) del json
        //estas lineas muestran los datos al usuario en pantalla
        const p = document.createElement('p')
        p.innerHTML = details.strArtist
        p.innerHTML = details.strGenre
        p.innerHTML = details.strBiographyEN
        aplicacion.appendChild(p)
    });
    //console.log(data.album)
})
//si alguna de las promesas falla capturamos el error
.catch(err => console.log(err))