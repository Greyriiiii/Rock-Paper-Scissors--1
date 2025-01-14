let score = 0;
let visibleImages = [];

function startGame() {
    // Hide all images
    document.querySelectorAll('img').forEach(img => img.style.display = 'none');

    // Randomly pick rock, paper, or scissors for both images
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice1 = choices[Math.floor(Math.random() * choices.length)];
    const randomChoice2 = choices[Math.floor(Math.random() * choices.length)];

    // Display the chosen images
    const img1 = document.getElementById(randomChoice1 + '1');
    const img2 = document.getElementById(randomChoice2 + '2');

    img1.style.display = 'block';
    img2.style.display = 'block';

    // Track the visible images
    visibleImages = [img1, img2];
}

function minusOne() {
    if (visibleImages.length > 0) {
        // Randomly remove one of the visible images
        const randomIndex = Math.floor(Math.random() * visibleImages.length);
        const imgToRemove = visibleImages.splice(randomIndex, 1)[0];
        imgToRemove.style.display = 'none';

        // After removing an image, prevent further use of minusOne until startGame is called
        visibleImages = [];
    }
}        
function refresh() {
    location.reload();
}