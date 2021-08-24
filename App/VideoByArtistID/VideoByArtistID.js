//referencia
//const aplicacion = document.querySelector('.container')

function buscar(idVideo)
{   
    var idVideo=document.getElementById("idVideo").value;
    var detalles="";

    if(idVideo==""){
       
        detalles ="<tr>" +
        "<td  > Sin informacion </td>"+
        "</tr>";
        document.getElementById("informacion").innerHTML = detalles;
        
    }else  {
       
        if(window.XMLHttpRequest){
            xmlhttp=new XMLHttpRequest();                   
        } else{
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");        
        } 
            xmlhttp.onreadystatechange=function() {
            if(this.readyState ==4 && this.status ==200){
            var data= JSON.parse(this.responseText);
                data.Search.forEach(video => {
                    detalles += "<tr>"+
                    
                               "<td><a href='"+ movie.imdbID+"'>Link al video</td>"+
                               "<td>"+ video.strTrack+"</td>"+
                               //"<td>"+ video.strTrackThumb+"</td>"+
                               "<td><img src="+ video.strTrackThumb+"></td>"+
                               "</tr>";
                               
                              
                                                    
                });
              
                document.getElementById("informacion").innerHTML=detalles;
               
                }
                
            };           
            xmlhttp.open("POST","https://theaudiodb.com/api/v1/json/1/mvid.php?i=" + idVideo, true);
       
            xmlhttp.send();
        }
}

//var idVideo = document.getElementById("idVideo").value

//peticion
//const url = 'https://theaudiodb.com/api/v1/json/1/mvid.php?i=' + idVideo

//peticion
//const url = 'https://theaudiodb.com/api/v1/json/1/mvid.php?i=112024'

/*fetch(url)
//a estos .then se les llama promesas
.then(respuesta => respuesta.json())//se captura todo el objeto json para poder recorrerlo
.then(datos => {
    //datos.album da acceso al array que contiene los elementos o el contenido del archivo json
    datos.mvids.forEach(video => { //tituloAlbum es la variable que recorrera cada uno de los elementos del array
        console.log(video.strMusicVid, video.strTrack, video.strTrackThumb)//se captura el strAlbum que es un dato del array(en este caso el titulo) del json
        //estas lineas muestran los datos al usuario en pantalla
        const p = document.createElement('p')
        p.innerHTML = video.strTrack
        p.innerHTML = video.strMusicVid
        p.innerHTML = video.strTrackThumb
        aplicacion.appendChild(p)
    });
    //console.log(data.album)
})
//si alguna de las promesas falla capturamos el error
.catch(err => console.log(err))*/