// Base de datos de palabras por categoría
const wordDatabase = {
    comida: [
        'Pizza', 'Hamburguesa', 'Sushi', 'Tacos', 'Pasta', 'Helado', 'Chocolate',
        'Café', 'Pan', 'Queso', 'Arroz', 'Pollo', 'Ensalada', 'Sopa', 'Galletas',
        'Banana', 'Manzana', 'Naranja', 'Fresa', 'Agua', 'Jugo', 'Refresco'
    ],
    animales: [
        'Perro', 'Gato', 'León', 'Tigre', 'Elefante', 'Jirafa', 'Mono', 'Caballo',
        'Vaca', 'Cerdo', 'Oveja', 'Gallina', 'Pez', 'Tiburón', 'Ballena', 'Delfín',
        'Águila', 'Loro', 'Serpiente', 'Cocodrilo', 'Rana', 'Mariposa', 'Abeja'
    ],
    peliculas: [
        'Titanic', 'Avatar', 'Frozen', 'Toy Story', 'Matrix', 'Inception', 'Gladiador',
        'Avengers', 'Star Wars', 'Harry Potter', 'Jurassic Park', 'Batman', 'Spiderman',
        'Shrek', 'Coco', 'Up', 'Nemo', 'Cars', 'Ratatouille', 'Wall-E'
    ],
    deportes: [
        'Fútbol', 'Básquetbol', 'Tenis', 'Voleibol', 'Béisbol', 'Golf', 'Natación',
        'Ciclismo', 'Atletismo', 'Boxeo', 'Karate', 'Yoga', 'Surf', 'Esquí', 'Hockey',
        'Rugby', 'Ping Pong', 'Badminton', 'Escalada', 'Gimnasia'
    ],
    lugares: [
        'París', 'Nueva York', 'Tokio', 'Londres', 'Roma', 'Egipto', 'China', 'Brasil',
        'Australia', 'Playa', 'Montaña', 'Desierto', 'Selva', 'Ciudad', 'Pueblo',
        'Aeropuerto', 'Hospital', 'Escuela', 'Parque', 'Museo', 'Cine', 'Restaurante'
    ],
    profesiones: [
        'Doctor', 'Maestro', 'Policía', 'Bombero', 'Chef', 'Piloto', 'Ingeniero',
        'Arquitecto', 'Dentista', 'Enfermero', 'Músico', 'Actor', 'Deportista', 'Pintor',
        'Escritor', 'Programador', 'Abogado', 'Científico', 'Veterinario', 'Fotógrafo'
    ],
    objetos: [
        'Teléfono', 'Computadora', 'Reloj', 'Llave', 'Lápiz', 'Libro', 'Mesa', 'Silla',
        'Cama', 'Almohada', 'Espejo', 'Cepillo', 'Tijeras', 'Martillo', 'Linterna',
        'Paraguas', 'Mochila', 'Botella', 'Vaso', 'Plato', 'Cuchara', 'Tenedor'
    ],
    vehiculos: [
        'Auto', 'Moto', 'Bicicleta', 'Camión', 'Autobús', 'Tren', 'Avión', 'Barco',
        'Submarino', 'Helicóptero', 'Cohete', 'Ambulancia', 'Taxi', 'Patrulla',
        'Camioneta', 'Scooter', 'Lancha', 'Yate', 'Tractor', 'Excavadora'
    ],
    festividades: [
        'Navidad', 'Año Nuevo', 'Pascua', 'Halloween', 'Cumpleaños', 'San Valentín',
        'Día del Padre', 'Día de la Madre', 'Independencia', 'Graduación', 'Boda',
        'Carnaval', 'Acción de Gracias', 'Día de Muertos'
    ],
    musica: [
        'Guitarra', 'Piano', 'Batería', 'Violín', 'Trompeta', 'Flauta', 'Saxofón',
        'Rock', 'Pop', 'Jazz', 'Reggae', 'Hip Hop', 'Salsa', 'Bachata', 'Tango',
        'Concierto', 'Disco', 'Canción', 'Banda', 'Cantante'
    ],
    naturaleza: [
        'Árbol', 'Flor', 'Rosa', 'Sol', 'Luna', 'Estrella', 'Nube', 'Lluvia', 'Trueno',
        'Río', 'Lago', 'Mar', 'Océano', 'Montaña', 'Valle', 'Bosque', 'Pradera',
        'Volcán', 'Cascada', 'Arcoíris', 'Viento', 'Nieve'
    ],
    tecnologia: [
        'Internet', 'WiFi', 'Email', 'Redes Sociales', 'Instagram', 'Facebook', 'YouTube',
        'Netflix', 'Spotify', 'Google', 'App', 'Software', 'Hardware', 'Mouse', 'Teclado',
        'Monitor', 'USB', 'Bluetooth', 'Tablet', 'Smartwatch', 'Videojuego', 'PlayStation'
    ],
    argentina: [
        'Maradona', 'Messi', 'Gardel', 'Evita Perón', 'San Martín', 'Sarmiento', 'Borges',
        'Charly García', 'Soda Stereo', 'Fangio', 'Del Potro', 'Ginóbili', 'Batistuta',
        'Riquelme', 'Kempes', 'Mafalda', 'Les Luthiers', 'Mirtha Legrand', 'Susana Giménez',
        'Ricardo Darín', 'Fito Páez', 'Mercedes Sosa', 'Tango', 'Asado', 'Mate',
        'Obelisco', 'Iguazú', 'Glaciar Perito Moreno', 'Boca Juniors', 'River Plate'
    ],
    series: [
        'Los Simuladores', 'Casados con Hijos', 'Okupas', 'El Marginal', 'Stranger Things',
        'Breaking Bad', 'Game of Thrones', 'Friends', 'The Office', 'La Casa de Papel',
        'Narcos', 'Black Mirror', 'The Crown', 'Peaky Blinders', 'Squid Game',
        'The Mandalorian', 'Wednesday', 'The Last of Us', 'The Boys', 'Sex Education'
    ],
    videojuegos: [
        'FIFA', 'Fortnite', 'Minecraft', 'GTA', 'Call of Duty', 'League of Legends',
        'Counter Strike', 'Valorant', 'Among Us', 'Fall Guys', 'Rocket League', 'Overwatch',
        'The Last of Us', 'God of War', 'Zelda', 'Mario Bros', 'Pokemon', 'Roblox',
        'Free Fire', 'PUBG', 'Clash Royale', 'Candy Crush', 'Subway Surfers'
    ],
    marcasargentinas: [
        'Arcor', 'Quilmes', 'Fernet Branca', 'Havanna', 'Terma', 'Bagley', 'Milka Argentina',
        'La Serenísima', 'Marolio', 'Cindor', 'Sancor', 'Cachafaz', 'Tofi', 'Águila',
        'YPF', 'Aerolíneas Argentinas', 'Mercado Libre', 'Globant', 'Despegar', 'Farmacity'
    ],
    comidasargentinas: [
        'Asado', 'Empanadas', 'Milanesa', 'Choripán', 'Locro', 'Mate', 'Dulce de Leche',
        'Alfajor', 'Facturas', 'Pizza Argentina', 'Fugazzeta', 'Humita', 'Tamales', 'Provoleta',
        'Chimichurri', 'Bife de Chorizo', 'Medialunas', 'Panqueques', 'Pastelitos', 'Fernet con Cola'
    ],
    provincias: [
        'Buenos Aires', 'Córdoba', 'Santa Fe', 'Mendoza', 'Tucumán', 'Entre Ríos', 'Salta',
        'Chaco', 'Corrientes', 'Misiones', 'Santiago del Estero', 'San Juan', 'Jujuy',
        'Río Negro', 'Neuquén', 'Formosa', 'Chubut', 'San Luis', 'Catamarca', 'La Rioja',
        'La Pampa', 'Santa Cruz', 'Tierra del Fuego'
    ]
};

// Estado del juego
const game = {
    players: [],
    impostorIndex: null,
    impostorIndexes: [],
    impostorCount: 1,
    secretWord: '',
    category: '',
    totalRounds: 3,
    currentRound: 0,
    currentPlayerIndex: 0,
    startingPlayerIndex: 0,
    roundClues: [],
    allClues: [],
    votes: {},
    groupScore: 0,
    impostorScore: 0,
    usedWords: [],
    customWordsList: [],
    darkMode: false,
    gameHistory: [],
    playerStats: {},
    soundEnabled: true,

    // Session management
    sessionActive: false,
    sessionRounds: [],
    sessionStartTime: null,

    // Sound effects using Web Audio API
    playSound(type) {
        if (!this.soundEnabled) return;

        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        switch(type) {
            case 'click':
                oscillator.frequency.value = 800;
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
                break;
            case 'reveal':
                oscillator.frequency.value = 600;
                gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);
                break;
            case 'success':
                oscillator.frequency.value = 523.25; // C5
                gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
                oscillator.start(audioContext.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
                oscillator.stop(audioContext.currentTime + 0.4);
                break;
        }
    },

    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        localStorage.setItem('impostorSound', this.soundEnabled ? 'on' : 'off');
        const soundIcon = document.getElementById('soundIcon');
        if (soundIcon) {
            soundIcon.textContent = this.soundEnabled ? '🔊' : '🔇';
        }
    },

    loadSoundPreference() {
        const savedSound = localStorage.getItem('impostorSound');
        if (savedSound === 'off') {
            this.soundEnabled = false;
            const soundIcon = document.getElementById('soundIcon');
            if (soundIcon) {
                soundIcon.textContent = '🔇';
            }
        }
    },

    // Toggle theme
    toggleTheme() {
        this.darkMode = !this.darkMode;
        document.body.classList.toggle('light-mode');
        const themeIcon = document.getElementById('themeIcon');
        themeIcon.textContent = this.darkMode ? '☀️' : '🌙';

        // Save to localStorage
        localStorage.setItem('impostorTheme', this.darkMode ? 'light' : 'dark');
    },

    // Load theme from localStorage
    loadTheme() {
        const savedTheme = localStorage.getItem('impostorTheme');
        if (savedTheme === 'light') {
            this.darkMode = true;
            document.body.classList.add('light-mode');
            document.getElementById('themeIcon').textContent = '☀️';
        }
    },

    // Save game to history
    saveGameToHistory(winner, impostorGuessedWord = false) {
        const gameData = {
            id: Date.now(),
            date: new Date().toISOString(),
            players: this.players.map(p => ({
                name: p.name,
                isImpostor: p.isImpostor
            })),
            word: this.secretWord,
            category: this.category,
            winner: winner, // 'group' or 'impostor'
            impostorGuessedWord: impostorGuessedWord,
            impostorCount: this.impostorCount
        };

        // Load existing history
        const history = JSON.parse(localStorage.getItem('impostorGameHistory') || '[]');
        history.unshift(gameData); // Add to beginning

        // Keep only last 50 games
        if (history.length > 50) {
            history.splice(50);
        }

        localStorage.setItem('impostorGameHistory', JSON.stringify(history));
        this.updatePlayerStats(gameData);
    },

    // Update player statistics
    updatePlayerStats(gameData) {
        const stats = JSON.parse(localStorage.getItem('impostorPlayerStats') || '{}');

        gameData.players.forEach(player => {
            if (!stats[player.name]) {
                stats[player.name] = {
                    gamesPlayed: 0,
                    gamesAsImpostor: 0,
                    wins: 0,
                    losses: 0
                };
            }

            stats[player.name].gamesPlayed++;

            if (player.isImpostor) {
                stats[player.name].gamesAsImpostor++;
                if (gameData.winner === 'impostor') {
                    stats[player.name].wins++;
                } else {
                    stats[player.name].losses++;
                }
            } else {
                if (gameData.winner === 'group') {
                    stats[player.name].wins++;
                } else {
                    stats[player.name].losses++;
                }
            }
        });

        localStorage.setItem('impostorPlayerStats', JSON.stringify(stats));
    },

    // Load game history
    loadGameHistory() {
        return JSON.parse(localStorage.getItem('impostorGameHistory') || '[]');
    },

    // Load player stats
    loadPlayerStats() {
        return JSON.parse(localStorage.getItem('impostorPlayerStats') || '{}');
    },

    // Toggle instructions
    toggleInstructions() {
        const content = document.getElementById('instructionsContent');
        const arrow = document.getElementById('instructionsArrow');

        content.classList.toggle('collapsed');
        arrow.classList.toggle('open');

        this.playSound('click');
    },

    // Update impostor suggestion based on player count
    updateImpostorSuggestion() {
        const playerCount = parseInt(document.getElementById('playerCount').value);
        const suggestionBadge = document.getElementById('impostorSuggestion');
        const impostorInput = document.getElementById('impostorCount');

        if (!playerCount || playerCount < 4) {
            suggestionBadge.textContent = '';
            return;
        }

        // Intelligent suggestion algorithm
        let suggested;
        if (playerCount <= 5) {
            suggested = 1;
        } else if (playerCount <= 8) {
            suggested = 2;
        } else if (playerCount <= 12) {
            suggested = 3;
        } else {
            // For larger groups: roughly 25% impostors
            suggested = Math.floor(playerCount * 0.25);
        }

        // Update max value for impostor input
        impostorInput.max = Math.floor(playerCount / 2); // Max 50% impostors

        suggestionBadge.textContent = `Sugerido: ${suggested}`;
        suggestionBadge.setAttribute('data-suggested', suggested);
    },

    // Manejar cambio de categoría
    handleCategoryChange() {
        const category = document.getElementById('category').value;
        const customSection = document.getElementById('customWordsSection');

        if (category === 'personalizada') {
            customSection.style.display = 'block';
        } else {
            customSection.style.display = 'none';
        }
    },

    // Ir a pantalla de ingreso de nombres
    goToNameEntry() {
        this.playSound('click');
        const playerCount = parseInt(document.getElementById('playerCount').value);
        const impostorCount = parseInt(document.getElementById('impostorCount').value);

        if (playerCount < 4) {
            alert('El número de jugadores debe ser mínimo 4');
            return;
        }

        if (impostorCount < 1) {
            alert('Debe haber al menos 1 impostor');
            return;
        }

        if (impostorCount >= playerCount) {
            alert('El número de impostores debe ser menor al número de jugadores');
            return;
        }

        if (impostorCount > Math.floor(playerCount / 2)) {
            alert('El número de impostores no puede ser mayor al 50% de los jugadores');
            return;
        }

        this.playerCount = playerCount;
        this.impostorCount = impostorCount;
        this.category = document.getElementById('category').value;

        // Si es personalizada, validar y guardar las palabras
        if (this.category === 'personalizada') {
            const customWordsInput = document.getElementById('customWords').value.trim();

            if (!customWordsInput) {
                alert('Debes escribir al menos 10 palabras separadas por comas');
                return;
            }

            // Separar por comas y limpiar
            this.customWordsList = customWordsInput
                .split(',')
                .map(word => word.trim())
                .filter(word => word.length > 0);

            if (this.customWordsList.length < 10) {
                alert(`Solo escribiste ${this.customWordsList.length} palabras. Necesitas al menos 10 palabras.`);
                return;
            }
        }

        // Generar inputs para nombres
        const nameInputsDiv = document.getElementById('nameInputs');
        nameInputsDiv.innerHTML = '';

        for (let i = 1; i <= playerCount; i++) {
            const inputGroup = document.createElement('div');
            inputGroup.className = 'name-input-group';
            inputGroup.innerHTML = `
                <label>Jugador ${i}:</label>
                <input type="text" id="playerName${i}" placeholder="Nombre del jugador ${i}" value="Jugador ${i}">
            `;
            nameInputsDiv.appendChild(inputGroup);
        }

        this.showScreen('screen-names');

        // Enfocar primer input
        setTimeout(() => {
            document.getElementById('playerName1').focus();
            document.getElementById('playerName1').select();
        }, 300);
    },

    // Volver al inicio
    backToStart() {
        this.showScreen('screen-start');
    },

    // Iniciar juego
    startGame() {
        this.playSound('success');
        // Recoger nombres de jugadores
        this.players = [];
        for (let i = 1; i <= this.playerCount; i++) {
            const nameInput = document.getElementById(`playerName${i}`);
            let name = nameInput.value.trim();

            if (!name) {
                name = `Jugador ${i}`;
            }

            this.players.push({
                id: i,
                name: name,
                isImpostor: false
            });
        }

        // Iniciar sesión de juego
        if (!this.sessionActive) {
            this.sessionActive = true;
            this.sessionRounds = [];
            this.sessionStartTime = new Date();
            this.currentRound = 1;
        }

        // Seleccionar impostores aleatorios
        this.impostorIndexes = [];
        const availableIndexes = [...Array(this.playerCount).keys()];

        for (let i = 0; i < this.impostorCount; i++) {
            const randomIdx = Math.floor(Math.random() * availableIndexes.length);
            const impostorIdx = availableIndexes.splice(randomIdx, 1)[0];
            this.impostorIndexes.push(impostorIdx);
            this.players[impostorIdx].isImpostor = true;
        }

        // Mantener compatibilidad con código viejo
        this.impostorIndex = this.impostorIndexes[0];

        // Seleccionar jugador que empieza (estrategia inteligente)
        this.selectStartingPlayer();

        // Seleccionar palabra secreta
        this.selectSecretWord();

        this.currentPlayerIndex = 0;
        this.allClues = [];

        this.showScreen('screen-reveal');
        this.updateRevealScreen();
    },

    // Seleccionar jugador inicial de manera inteligente
    selectStartingPlayer() {
        // Crear lista de jugadores que NO son impostores
        const nonImpostors = [];
        this.players.forEach((player, index) => {
            if (!player.isImpostor) {
                nonImpostors.push(index);
            }
        });

        // Estrategia: elegir a alguien del "medio" del grupo (entre 30% y 70% de la lista)
        // Esto hace que los impostores tengan que escuchar varias pistas antes de hablar
        const thirtyPercent = Math.floor(nonImpostors.length * 0.3);
        const seventyPercent = Math.floor(nonImpostors.length * 0.7);

        // Si el grupo es muy pequeño, usar todo el rango
        const startRange = nonImpostors.length > 3 ? thirtyPercent : 0;
        const endRange = nonImpostors.length > 3 ? seventyPercent : nonImpostors.length;

        // Seleccionar aleatoriamente dentro del rango del medio
        const middleRange = nonImpostors.slice(startRange, endRange);
        const randomMiddleIdx = Math.floor(Math.random() * middleRange.length);
        this.startingPlayerIndex = middleRange[randomMiddleIdx];

        // Marcar quién empieza
        this.players[this.startingPlayerIndex].startsFirst = true;
    },

    // Seleccionar palabra secreta
    selectSecretWord() {
        let words;

        if (this.category === 'personalizada') {
            // Usar palabras personalizadas
            words = this.customWordsList;
        } else if (this.category === 'aleatorio') {
            // Seleccionar categoría aleatoria
            const categories = Object.keys(wordDatabase);
            const randomCategory = categories[Math.floor(Math.random() * categories.length)];
            words = wordDatabase[randomCategory];
        } else {
            // Usar categoría seleccionada
            words = wordDatabase[this.category];
        }

        let word;

        do {
            word = words[Math.floor(Math.random() * words.length)];
        } while (this.usedWords.includes(word));

        this.usedWords.push(word);
        this.secretWord = word;
    },

    // Actualizar pantalla de revelación
    updateRevealScreen() {
        const player = this.players[this.currentPlayerIndex];
        document.getElementById('currentPlayerName').textContent = player.name;
    },

    // Revelar palabra
    revealWord() {
        this.playSound('reveal');
        const player = this.players[this.currentPlayerIndex];
        const wordDisplay = document.getElementById('wordDisplay');

        if (player.isImpostor) {
            wordDisplay.innerHTML = `
                <div class="word-card impostor">
                    <h1>🎭 ERES EL IMPOSTOR</h1>
                    <p style="font-size: 1.2rem; margin-top: 20px;">
                        Escucha las pistas de los demás e intenta adivinar la palabra secreta.
                        Debes dar pistas convincentes sin saber cuál es la palabra.
                    </p>
                    <div class="impostor-tips">
                        <strong>Tips:</strong>
                        <ul>
                            <li>Da pistas vagas pero creíbles</li>
                            <li>Imita el estilo de otros jugadores</li>
                            <li>No seas demasiado específico</li>
                        </ul>
                    </div>
                </div>
            `;
        } else {
            wordDisplay.innerHTML = `
                <div class="word-card crewmate">
                    <h1>🔍 TU PALABRA ES:</h1>
                    <div class="secret-word">${this.secretWord}</div>
                    <p style="font-size: 1rem; margin-top: 20px; opacity: 0.9;">
                        Da pistas que ayuden a otros a identificar al impostor,<br>
                        pero no reveles la palabra directamente.
                    </p>
                    <div class="crewmate-tips">
                        <strong>Tips:</strong>
                        <ul>
                            <li>Sé específico pero no obvio</li>
                            <li>Evita sinónimos directos</li>
                            <li>Piensa en características únicas</li>
                        </ul>
                    </div>
                </div>
            `;
        }

        this.showScreen('screen-word');
    },

    // Siguiente jugador en revelación
    nextPlayer() {
        this.currentPlayerIndex++;

        if (this.currentPlayerIndex >= this.players.length) {
            // Todos vieron su palabra/rol, mostrar pantalla final
            this.showFinalScreen();
        } else {
            this.showScreen('screen-reveal');
            this.updateRevealScreen();
        }
    },

    // Mostrar pantalla final para jugar
    showFinalScreen() {
        // Generar el orden de jugadores
        const playOrder = this.generatePlayOrder();
        const orderListHTML = playOrder.map((player, index) => {
            return `<div class="player-order-item">
                        <span class="order-number">${index + 1}</span>
                        <span class="player-name">${player.name}</span>
                    </div>`;
        }).join('');

        document.getElementById('playOrderList').innerHTML = orderListHTML;

        // Actualizar info de la sesión
        if (this.sessionActive) {
            document.getElementById('sessionInfo').style.display = 'flex';
            document.getElementById('currentRoundNumber').textContent = this.currentRound;
            document.getElementById('totalRoundsPlayed').textContent = this.sessionRounds.length;
        }

        this.showScreen('screen-final');
    },

    // Generar orden de juego empezando desde startingPlayerIndex
    generatePlayOrder() {
        const order = [];
        const totalPlayers = this.players.length;

        for (let i = 0; i < totalPlayers; i++) {
            const playerIndex = (this.startingPlayerIndex + i) % totalPlayers;
            order.push(this.players[playerIndex]);
        }

        return order;
    },


    // Jugar de nuevo - ir a configuración de nueva ronda
    playAgain() {
        this.playSound('click');

        // Incrementar contador de ronda
        this.currentRound++;

        // Mostrar pantalla de configuración de nueva ronda
        document.getElementById('nextRoundNumber').textContent = this.currentRound;

        // Pre-llenar con la configuración anterior
        document.getElementById('impostorCountRound').value = this.impostorCount;
        document.getElementById('categoryRound').value = this.category;

        // Actualizar sugerencia
        const suggestionBadge = document.getElementById('impostorSuggestionRound');
        const playerCount = this.players.length;
        let suggested;
        if (playerCount <= 5) {
            suggested = 1;
        } else if (playerCount <= 8) {
            suggested = 2;
        } else if (playerCount <= 12) {
            suggested = 3;
        } else {
            suggested = Math.floor(playerCount * 0.25);
        }
        suggestionBadge.textContent = `Sugerido: ${suggested}`;

        this.showScreen('screen-new-round');
    },

    // Handle category change in new round screen
    handleCategoryChangeRound() {
        const category = document.getElementById('categoryRound').value;
        const customSection = document.getElementById('customWordsSectionRound');

        if (category === 'personalizada') {
            customSection.style.display = 'block';
        } else {
            customSection.style.display = 'none';
        }

        this.playSound('click');
    },

    // Iniciar nueva ronda con la configuración seleccionada
    startNewRound() {
        this.playSound('success');

        // Obtener configuración de la nueva ronda
        this.impostorCount = parseInt(document.getElementById('impostorCountRound').value);
        this.category = document.getElementById('categoryRound').value;

        if (this.category === 'personalizada') {
            const customWordsText = document.getElementById('customWordsRound').value.trim();
            if (!customWordsText) {
                alert('Por favor ingresa palabras personalizadas');
                return;
            }
            this.customWordsList = customWordsText.split(',').map(w => w.trim()).filter(w => w);
            if (this.customWordsList.length < 10) {
                alert('Necesitas al menos 10 palabras personalizadas');
                return;
            }
        }

        // Validar número de impostores
        const maxImpostors = Math.floor(this.players.length / 2);
        if (this.impostorCount > maxImpostors) {
            alert(`El número máximo de impostores para ${this.players.length} jugadores es ${maxImpostors}`);
            return;
        }

        // Reiniciar con los mismos jugadores pero nueva palabra y nuevos impostores
        this.players.forEach(p => {
            p.isImpostor = false;
            p.startsFirst = false;
        });

        this.impostorIndexes = [];
        const availableIndexes = [...Array(this.players.length).keys()];

        for (let i = 0; i < this.impostorCount; i++) {
            const randomIdx = Math.floor(Math.random() * availableIndexes.length);
            const impostorIdx = availableIndexes.splice(randomIdx, 1)[0];
            this.impostorIndexes.push(impostorIdx);
            this.players[impostorIdx].isImpostor = true;
        }

        // Mantener compatibilidad
        this.impostorIndex = this.impostorIndexes[0];

        // Seleccionar nuevo jugador inicial
        this.selectStartingPlayer();

        this.selectSecretWord();
        this.currentPlayerIndex = 0;

        this.showScreen('screen-reveal');
        this.updateRevealScreen();
    },

    // Terminar juego y volver al inicio
    endGame() {
        // Cerrar sesión
        this.sessionActive = false;
        this.sessionRounds = [];
        this.sessionStartTime = null;
        this.currentRound = 0;

        // Reiniciar todo
        this.players = [];
        this.impostorIndex = null;
        this.secretWord = '';
        this.category = '';
        this.currentPlayerIndex = 0;
        this.usedWords = [];

        // Volver a la pantalla de inicio
        this.showScreen('screen-start');
    },

    // Toggle winner section
    toggleWinnerSection() {
        const winnerSection = document.getElementById('winnerSection');
        if (winnerSection.style.display === 'none') {
            winnerSection.style.display = 'block';
        } else {
            winnerSection.style.display = 'none';
        }
        this.playSound('click');
    },

    // Declare winner and save game
    declareWinner(winner) {
        // Guardar ronda en la sesión
        const roundData = {
            roundNumber: this.currentRound,
            word: this.secretWord,
            category: this.category,
            winner: winner,
            impostors: this.players.filter(p => p.isImpostor).map(p => p.name),
            timestamp: new Date()
        };
        this.sessionRounds.push(roundData);

        // Guardar en historial global
        this.saveGameToHistory(winner);
        this.playSound('success');

        const winnerText = winner === 'impostor' ? '🎭 ¡Ganó el Impostor!' : '👥 ¡Ganó el Grupo!';
        alert(winnerText + `\n\nRonda ${this.currentRound} guardada.`);

        // Hide winner section after declaring
        document.getElementById('winnerSection').style.display = 'none';
    },

    // View statistics
    viewStats() {
        this.renderStats();
        this.showScreen('screen-stats');
    },

    // Back to final screen
    backToFinal() {
        this.showScreen('screen-final');
    },

    // Show stats tab
    showStatsTab(tab) {
        // Update tab buttons
        document.querySelectorAll('.stats-tab').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');

        // Update content
        document.querySelectorAll('.stats-content').forEach(content => {
            content.classList.remove('active');
        });

        if (tab === 'session') {
            document.getElementById('stats-session').classList.add('active');
        } else if (tab === 'history') {
            document.getElementById('stats-history').classList.add('active');
        } else if (tab === 'players') {
            document.getElementById('stats-players').classList.add('active');
        }
    },

    // Render statistics
    renderStats() {
        this.renderSessionRounds();
        this.renderGameHistory();
        this.renderPlayerStats();
    },

    // Render session rounds
    renderSessionRounds() {
        const roundsList = document.getElementById('sessionRoundsList');

        if (!this.sessionActive || this.sessionRounds.length === 0) {
            roundsList.innerHTML = '<p style="text-align: center; padding: 40px; opacity: 0.7;">No hay rondas en esta sesión aún.<br><br>Declara un ganador después de cada ronda para verlas aquí.</p>';
            return;
        }

        // Calculate session stats
        const groupWins = this.sessionRounds.filter(r => r.winner === 'group').length;
        const impostorWins = this.sessionRounds.filter(r => r.winner === 'impostor').length;

        let html = `
            <div class="session-summary">
                <h3>📊 Resumen de la Sesión</h3>
                <div style="display: flex; gap: 15px; justify-content: center; margin-top: 10px;">
                    <div class="session-stat">
                        <div class="stat-value">${this.sessionRounds.length}</div>
                        <div class="stat-label">Rondas</div>
                    </div>
                    <div class="session-stat">
                        <div class="stat-value">${groupWins}</div>
                        <div class="stat-label">👥 Grupo</div>
                    </div>
                    <div class="session-stat">
                        <div class="stat-value">${impostorWins}</div>
                        <div class="stat-label">🎭 Impostor</div>
                    </div>
                </div>
            </div>
            <h4 style="margin: 20px 0 10px 0; text-align: center; opacity: 0.8;">Historial de Rondas</h4>
        `;

        html += this.sessionRounds.map(round => {
            const winnerText = round.winner === 'impostor' ? '🎭 Impostor' : '👥 Grupo';
            const winClass = round.winner === 'impostor' ? 'impostor-win' : 'group-win';

            return `
                <div class="session-round-item ${winClass}">
                    <div class="round-header">
                        <span style="font-weight: bold;">Ronda ${round.roundNumber}</span>
                        <span style="opacity: 0.8;">${round.category}</span>
                    </div>
                    <div class="round-word">${round.word}</div>
                    <div class="round-winner">Ganó: ${winnerText}</div>
                    <div style="font-size: 0.85rem; opacity: 0.7; margin-top: 5px;">
                        Impostores: ${round.impostors.join(', ')}
                    </div>
                </div>
            `;
        }).join('');

        roundsList.innerHTML = html;
    },

    // Render game history
    renderGameHistory() {
        const history = this.loadGameHistory();
        const historyList = document.getElementById('gameHistoryList');

        if (history.length === 0) {
            historyList.innerHTML = '<p style="text-align: center; padding: 40px; opacity: 0.7;">No hay partidas jugadas aún</p>';
            return;
        }

        historyList.innerHTML = history.map(game => {
            const date = new Date(game.date);
            const dateStr = date.toLocaleDateString('es-AR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });

            const winnerText = game.winner === 'impostor' ? '🎭 Ganó el Impostor' : '👥 Ganó el Grupo';
            const winClass = game.winner === 'impostor' ? 'impostor-win' : 'group-win';

            return `
                <div class="history-item ${winClass}">
                    <div class="history-date">${dateStr}</div>
                    <div class="history-word">Palabra: ${game.word}</div>
                    <div style="font-size: 0.9rem; opacity: 0.8;">Categoría: ${game.category}</div>
                    <div class="history-winner">${winnerText}</div>
                    <div style="font-size: 0.85rem; opacity: 0.7; margin-top: 5px;">
                        ${game.players.length} jugadores, ${game.impostorCount} impostor${game.impostorCount > 1 ? 'es' : ''}
                    </div>
                </div>
            `;
        }).join('');
    },

    // Share game
    async shareGame() {
        const stats = this.loadPlayerStats();
        const history = this.loadGameHistory();

        let shareText = `🎭 EL IMPOSTOR - Juego de pistas\n\n`;
        shareText += `📊 Estadísticas de la partida:\n`;
        shareText += `Jugadores: ${this.players.map(p => p.name).join(', ')}\n`;
        shareText += `Palabra: ${this.secretWord}\n`;
        shareText += `Categoría: ${this.category}\n\n`;
        shareText += `¡Juega con nosotros! 🎮`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'El Impostor - Juego de Pistas',
                    text: shareText,
                    url: window.location.href
                });
                this.playSound('success');
            } catch (err) {
                // User cancelled or error occurred
                if (err.name !== 'AbortError') {
                    this.copyToClipboard(shareText);
                }
            }
        } else {
            // Fallback to clipboard
            this.copyToClipboard(shareText);
        }
    },

    // Copy to clipboard fallback
    copyToClipboard(text) {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(text).then(() => {
                alert('✅ ¡Texto copiado al portapapeles!');
                this.playSound('success');
            }).catch(() => {
                alert('❌ No se pudo copiar el texto');
            });
        } else {
            // Old method fallback
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();
            try {
                document.execCommand('copy');
                alert('✅ ¡Texto copiado al portapapeles!');
                this.playSound('success');
            } catch (err) {
                alert('❌ No se pudo copiar el texto');
            }
            document.body.removeChild(textArea);
        }
    },

    // Render player stats
    renderPlayerStats() {
        const stats = this.loadPlayerStats();
        const statsList = document.getElementById('playerStatsList');

        const players = Object.keys(stats);
        if (players.length === 0) {
            statsList.innerHTML = '<p style="text-align: center; padding: 40px; opacity: 0.7;">No hay estadísticas de jugadores aún</p>';
            return;
        }

        // Sort by win rate
        players.sort((a, b) => {
            const winRateA = stats[a].gamesPlayed > 0 ? (stats[a].wins / stats[a].gamesPlayed) : 0;
            const winRateB = stats[b].gamesPlayed > 0 ? (stats[b].wins / stats[b].gamesPlayed) : 0;
            return winRateB - winRateA;
        });

        statsList.innerHTML = players.map((playerName, index) => {
            const stat = stats[playerName];
            const winRate = stat.gamesPlayed > 0 ? Math.round((stat.wins / stat.gamesPlayed) * 100) : 0;

            return `
                <div class="player-stat-card">
                    <div class="player-stat-name">${index + 1}. ${playerName}</div>
                    <div class="player-stat-grid">
                        <div class="stat-item">
                            <div class="stat-value">${stat.gamesPlayed}</div>
                            <div class="stat-label">Partidas</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${winRate}%</div>
                            <div class="stat-label">Victorias</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${stat.wins}</div>
                            <div class="stat-label">Ganadas</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">${stat.gamesAsImpostor}</div>
                            <div class="stat-label">Como Impostor</div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    },

    // Mostrar pantalla
    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }
};

// Inicializar
window.addEventListener('load', () => {
    game.loadTheme();
    game.loadSoundPreference();
    game.updateImpostorSuggestion(); // Initialize impostor suggestion
    game.showScreen('screen-start');
});
