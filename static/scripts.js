document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const stopButton = document.getElementById('stopButton');

    if (playButton) {
        playButton.addEventListener('click', function() {
            audioPlayer.play();
            fetch('/play', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ track: audioPlayer.src })
            })
            .then(response => response.json())
            .then(data => console.log(data.message))
            .catch(error => console.error('Error playing song:', error));
        });
    }

    if (pauseButton) {
        pauseButton.addEventListener('click', function() {
            audioPlayer.pause();
            fetch('/pause', {
                method: 'POST'
            })
            .then(response => response.json())
            .then(data => console.log(data.message))
            .catch(error => console.error('Error pausing song:', error));
        });
    }

    if (stopButton) {
        stopButton.addEventListener('click', function() {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
            fetch('/stop', {
                method: 'POST'
            })
            .then(response => response.json())
            .then(data => console.log(data.message))
            .catch(error => console.error('Error stopping song:', error));
        });
    }
});
