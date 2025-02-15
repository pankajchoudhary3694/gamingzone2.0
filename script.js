// Sample Games Data
const games = [
    { name: "Game 1", logo: "images/game1-logo.jpg", apk: "apk/game1.apk" },
    { name: "Game 2", logo: "images/game2-logo.jpg", apk: "apk/game2.apk" },
    { name: "Game 3", logo: "images/game3-logo.jpg", apk: "apk/game3.apk" },
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
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

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