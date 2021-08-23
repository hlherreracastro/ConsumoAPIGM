//referencia
const aplicacion = document.querySelector('.container')

var idAlbum = document.getElementById("idAlbum").value

//peticion
//const url = 'https://theaudiodb.com/api/v1/json/1/album.php?' + idAlbum

//peticion
const url = 'https://theaudiodb.com/api/v1/json/1/album.php?m=2115888'

fetch(url)
//a estos .then se les llama promesas
.then(respuesta => respuesta.json())//se captura todo el objeto json para poder recorrerlo
.then(datos => {
    //datos.album da acceso al array que contiene los elementos o el contenido del archivo json
    datos.album.forEach(albumDetails => { //albumDetails es la variable que recorrera cada uno de los elementos del array
        console.log,(albumDetails.strAlbum,albumDetails.strArtist,albumDetails.strGenre)//se captura el strDetail que es un dato del array(en este caso el titulo) del json
        //estas lineas muestran los datos al usuario en pantalla
        const p = document.createElement('p')
        p.innerHTML = albumDetails.strAlbum
        p.innerHTML = albumDetails.strArtist
        p.innerHTML = albumDetails.strGenre
        aplicacion.appendChild(p)
    });
    //console.log(data.album)
})
//si alguna de las promesas falla capturamos el error
.catch(err => console.log(err))