async function fetchRandomAnimeGif() {
    const apiKey = 'YOUR_TENOR_API_KEY'; // Replace with your Tenor API key
    const limit = 1; // Number of gifs to retrieve

    const apiUrl = `https://api.tenor.com/v1/random?q=anime&key=${apiKey}&limit=${limit}`;

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
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
