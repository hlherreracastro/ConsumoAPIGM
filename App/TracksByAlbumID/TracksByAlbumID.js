const d = document,
$form = d.getElementById("song-search"),
$loader = d.querySelector(".loader"),
$error = d.querySelector(".error"),
$main = d.querySelector("main"),
$artist = d.querySelector(".artist");


$form.addEventListener("submit", async e =>{
    e.preventDefault();

    try{
        $loader.style.display = "block";

        let artist = e.target.artist.value.toLowerCase(), 
        $artistTemplate = "", 
        artistAPI=`https://theaudiodb.com/api/v1/json/1/track.php?m=${artist}`, 
        artistFetch = fetch(artistAPI),
        [artistRes] = await Promise.all([artistFetch]),
        artistData = await artistRes.json();

        //console.log(artistRes);
        console.log(artistData);

        if(artistData.track === null){
            $artistTemplate = `<h2>No existe este ID Artist<mark>${artist}</mark></h2`
        }
        else{
            let artist = artistData.track[0];
            $artistTemplate = `
            <h2>${artist.strArtist}</h2>
            <h3>Album: ${artist.strAlbum}</h3>
            <h3>Track: ${artist.strTrack}</h3>
            <p>Track Number: ${artist.intTrackNumber} </p>
            `;
        }

        $loader.style.display = "none";
        $artist.innerHTML = $artistTemplate;

    }catch(err){
        console.log(err);
        let message = err.statusText || "Ocurrio un error";
        $error.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
        $loader.style.display = "none";
    }
});