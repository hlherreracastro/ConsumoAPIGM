//referencia
const aplicacion = document.querySelector('.container')

//var idVideo = document.getElementById("idVideo").value

//peticion
//const url = 'https://theaudiodb.com/api/v1/json/1/mvid.php?' + idVideo

//peticion
const url = 'https://theaudiodb.com/api/v1/json/1/mvid.php?i=112024'

fetch(url)
//a estos .then se les llama promesas
.then(respuesta => respuesta.json())//se captura todo el objeto json para poder recorrerlo
.then(datos => {
    //datos.album da acceso al array que contiene los elementos o el contenido del archivo json
    datos.mvids.forEach(video => { //tituloAlbum es la variable que recorrera cada uno de los elementos del array
        console.log(video.strMusicVid, video.strTrack, video.strTrackThumb)//se captura el strAlbum que es un dato del array(en este caso el titulo) del json
        //estas lineas muestran los datos al usuario en pantalla
        const p = document.createElement('p')
        p.innerHTML = "<div class='row gx-4 gx-lg-5 align-items-center my-5'>"+
        "<div class='col-lg-5'>"+"<img class='img-fluid rounded mb-4 mb-lg-0' src=" + video.strTrackThumb +">"+"</div>"+
        "<div class='col-lg-7'>"+
            "<h1 class='font-weight-light'>" +video.strTrack+ "</h1>"+
            "<a class='btn btn-primary' href="+ video.strMusicVid +">Go to Video!</a>"+
        "</div>"+
    "</div>"
    
        aplicacion.appendChild(p)
    });
    //console.log(data.album)
})
//si alguna de las promesas falla capturamos el error
.catch(err => console.log(err))