const requestUrl = 'https://api.musixmatch.com/ws/1.1/artist.search?q_artist=prodigy&page_size=5'
const api = "4c5e6e6c524011ed4c7ec9b1de5d6368"

fetch(requestUrl)
  .then(function (data) {
    console.log(data);
  })