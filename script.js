let artistName = "Logic";
const musicMatch = function() {

    const apiKey = "70f48e3a238075767ef29e2921e77a8b";

    fetch(`https://api.musixmatch.com/ws/1.1/artist.search?apikey=${apiKey}&q_artist=${artistName}&page_size=10&format=json`, {
        method: 'GET'
    })
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)
        }
    )
}

musicMatch();