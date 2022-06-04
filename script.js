let artistName = "Childish Gambino";

const lastFmToken = function() {

    const apiKey = "fd0e25cfe561d489c1dc55cb0411d206";
    const apiSecret = "7b17ff9482331afdc90694c482882043";

    fetch(`https://www.last.fm/api//2.0/?method=artist.getinfo&artist=${artistName}&api_key=${apiKey}&format=json`, {
        method: 'GET'
    })
    .then(function(response) {
        return response.json
    })
    .then(function (data) {
        console.log(data)
    })
}
lastFmToken();