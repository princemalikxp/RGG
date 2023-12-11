document.addEventListener("DOMContentLoaded", function () {
    const playButton = document.getElementById('playButton');
    const backgroundDiv = document.getElementById('backgroundDiv');

    playButton.addEventListener('click', function () {
        setLocalBackgroundGif('path/to/your/local/anime.gif');
    });

    function setLocalBackgroundGif(gifPath) {
        backgroundDiv.style.cssText = `
            background: url(${gifPath}) no-repeat center center fixed;
            background-size: cover;
            animation: fadeIn 2s ease-in-out;
        `;

        const content = document.getElementById('content');
        content.innerHTML = `
            <!-- Your page content goes here -->
            <button id="playButton">Play Random Anime Gif</button>
        `;
    }
});
