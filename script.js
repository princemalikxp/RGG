document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById('playButton');

    playButton.addEventListener('click', function () {
        fetchRandomAnimeGif();
    });

    async function fetchRandomAnimeGif() {
        const apiKey = 'qG0FZ6oNPwcvNswx35dzHHuHfsY9qDSy'; // Replace with your Giphy API key
        const limit = 1; // Number of gifs to retrieve

        const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=anime&rating=g&limit=${limit}`;

        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            if (data.data) {
                const gifUrl = data.data.image_original_url;
                applyBackgroundGif(gifUrl);
            } else {
                console.error('No gifs found in the response data:', data);
            }
        } catch (error) {
            console.error('Error fetching or parsing data:', error);
        }
    }

    function applyBackgroundGif(gifUrl) {
        document.body.innerHTML = `
            <video id="backgroundVideo" autoplay loop muted playsinline>
                <source src="${gifUrl}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div id="content">
                <!-- Your page content goes here -->
                <button id="playButton">Play Random Anime Gif</button>
            </div>
        `;

        const backgroundVideo = document.getElementById('backgroundVideo');
        backgroundVideo.addEventListener('loadeddata', function () {
            // The video is loaded, play it
            backgroundVideo.play();
        });
    }
});
