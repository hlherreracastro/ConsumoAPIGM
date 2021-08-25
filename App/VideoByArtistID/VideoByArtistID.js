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
    artistAPI=`https://theaudiodb.com/api/v1/json/1/mvid.php?i=${artist}`, 
    artistFetch = fetch(artistAPI),
    [artistRes] = await Promise.all([artistFetch]),
    artistData = await artistRes.json();

    //console.log(artistRes);
    console.log(artistData);

    if(artistData.mvids === null){
        $artistTemplate = `<h2>No existe este video by Artist ID<mark>${artist}</mark></h2`
    }
    else{
        let artist = artistData.mvids[7];
        $artistTemplate = `
        <h2>${artist.strTrack}</h2>
        <img src="${artist.strTrackThumb}" alt="${artist.strTrack}">
        <a href="${artist.strMusicVid}" target="_blank">Link al Video>>></a>
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