document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById('playButton');
    const gifContainer = document.getElementById('gifContainer');

    playButton.addEventListener('click', function () {
        fetchRandomAnimeGif();
    });

    async function fetchRandomAnimeGif() {
        const apiKey = 'AIzaSyAtRbVWltUMe3MHMUqiaEfZm1844lZ9Ymc'; // Replace with your Tenor API key
        const limit = 1; // Number of gifs to retrieve

        const apiUrl = `https://api.tenor.com/v1/random?q=anime&key=${apiKey}&limit=${limit}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.results && data.results.length > 0) {
                const gifUrl = data.results[0].media[0].gif.url;
                displayGif(gifUrl);
            } else {
                console.error('No gifs found.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function displayGif(gifUrl) {
        gifContainer.innerHTML = `<img src="${gifUrl}" alt="Random Anime Gif" style="max-width: 100%;">`;
    }
});
