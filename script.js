async function fetchRandomAnimeGif() {
    const apiKey = 'AIzaSyAtRbVWltUMe3MHMUqiaEfZm1844lZ9Ymc'; // Replace with your Tenor API key
    const limit = 1; // Number of gifs to retrieve

    const apiUrl = `https://api.tenor.com/v1/random?q=anime&key=${apiKey}&limit=${limit}`;

    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        console.log('Response Status:', response.status);

        const responseData = await response.json();
        console.log('Response Data:', responseData);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        if (responseData.results && responseData.results.length > 0) {
            const gifUrl = responseData.results[0].media[0].gif.url;
            displayGif(gifUrl);
        } else {
            console.error('No gifs found in the response data:', responseData);
        }
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
    }
}
