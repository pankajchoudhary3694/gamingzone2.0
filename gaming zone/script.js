// Sample Games Data
const games = [
    { name: "Fs 18", logo: "logo.png", apk: "https://an1.com/5138-farming-simulator-18-mod-apk.html#google_vignette" },
    { name: "fs23", logo: "fs 23.png", apk: "https://an1.com/file_7339-dw.html" },
    { name: "fs20", logo: "fs20.png", apk: "https://an1.com/file_6707-dw.html" },
    { name: "fs14", logo: "fs14.png", apk: "https://an1.com/file_403-dw.html" },
    { name: "fs16", logo: "fs16.png", apk: "https://an1.com/file_742-dw.html" },
    { name: "Hill Climb Racing (MOD, Unlimited Money)", logo: "hill.png", apk: "https://an1.com/file_1584-dw.html" },
    { name: "Download Vegas Crime Simulator 2 (MOD, Unlimited Money)", logo: "vigas2.png", apk: "https://an1.com/file_6219-dw.html" },
    { name: "Sniper 3D: Fun Free Online FPS (MOD, Unlimited Coins) ", logo: "gun3d.png", apk: "https://an1.com/file_266-dw.html" },
    { name: "Game 9", logo: "images/game3-logo.jpg", apk: "apk/game3.apk" },
    { name: "Game 9", logo: "images/game3-logo.jpg", apk: "apk/game3.apk" },
    { name: "Game 9", logo: "images/game3-logo.jpg", apk: "apk/game3.apk" },
    { name: "Game 9", logo: "images/game3-logo.jpg", apk: "apk/game3.apk" },
    { name: "Game 9", logo: "images/game3-logo.jpg", apk: "apk/game3.apk" },
    { name: "Game 9", logo: "images/game3-logo.jpg", apk: "apk/game3.apk" },
    { name: "Game 9", logo: "images/game3-logo.jpg", apk: "apk/game3.apk" },
    { name: "Game 9", logo: "images/game3-logo.jpg", apk: "apk/game3.apk" },
    { name: "Game 9", logo: "images/game3-logo.jpg", apk: "apk/game3.apk" },
    { name: "Game 9", logo: "images/game3-logo.jpg", apk: "apk/game3.apk" },
    { name: "Game 9", logo: "images/game3-logo.jpg", apk: "apk/game3.apk" },
    { name: "Game 9", logo: "images/game3-logo.jpg", apk: "apk/game3.apk" },
    { name: "Game 9", logo: "images/game3-logo.jpg", apk: "apk/game3.apk" },
];

// Display Games
const gamesContainer = document.getElementById('games-container');
games.forEach(game => {
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card';
    gameCard.innerHTML = `
        <img src="${game.logo}" alt="${game.name}">
        <h3>${game.name}</h3>
        <a href="${game.apk}" download>Download APK</a>
    `;
    gamesContainer.appendChild(gameCard);
});

// Search Functionality
const searchInput = document.getElementById(' search-game ');
const searchBtn = document.getElementById('search-game name');

searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredGames = games.filter(game => game.name.toLowerCase().includes(searchTerm));
    gamesContainer.innerHTML = '';
    filteredGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <img src="${game.logo}" alt="${game.name}">
            <h3>${game.name}</h3>
            <a href="${game.apk}" download>Download APK</a>
        `;
        gamesContainer.appendChild(gameCard);
    });
});