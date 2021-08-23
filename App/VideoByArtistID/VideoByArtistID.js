//referencia
const aplicacion = document.querySelector('.container')

var idVideo = document.getElementById("idVideo").value

//peticion
//const url = 'https://theaudiodb.com/api/v1/json/1/mvid.php?' + idVideo

//peticion
const url = 'https://theaudiodb.com/api/v1/json/1/mvid.php?i=112024'

etch(url)
//a estos .then se les llama promesas
.then(respuesta => respuesta.json())//se captura todo el objeto json para poder recorrerlo
.then(datos => {
    //datos.album da acceso al array que contiene los elementos o el contenido del archivo json
    datos.mvids.forEach(video => { //tituloAlbum es la variable que recorrera cada uno de los elementos del array
        console.log(video.strMusicVid, video.strTrack)//se captura el strAlbum que es un dato del array(en este caso el titulo) del json
        //estas lineas muestran los datos al usuario en pantalla
        const p = document.createElement('p')
        p.innerHTML = video.strTrack
        p.innerHTML = video.strMusicVid
        aplicacion.appendChild(p)
    });
    //console.log(data.album)
})
//si alguna de las promesas falla capturamos el error
.catch(err => console.log(err))