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
        artistAPI=`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`, 
        artistFetch = fetch(artistAPI),
        [artistRes] = await Promise.all([artistFetch]),
        artistData = await artistRes.json();

        //console.log(artistRes);
        console.log(artistData);

        if(artistData.artists === null){
            $artistTemplate = `<h2>No existe este Artist Name<mark>${artist}</mark></h2`
        }
        else{
            let artist = artistData.artists[0];
            $artistTemplate = `
            <h2>${artist.strArtist}</h2>
            <h3> Country: ${artist.strCountry}</h3>
            <img src="${artist.strArtistThumb}" alt="${artist.strArtist}">
            <p> ${artist.strBiographyES} </p>
            <a href="${artist.strWebsite}">Website</a>
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