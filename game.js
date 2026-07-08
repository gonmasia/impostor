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
    impostorIndexes: [],
    impostorCount: 1,
    recentImpostors: [],
    previousImpostors: [],
    secretWord: '',
    category: '',
    currentRound: 0,
    currentPlayerIndex: 0,
    roundClosed: false,
    usedWords: [],
    customWordsList: [],
    editablePlayers: [],
    darkMode: false,
    soundEnabled: true,
    _audioContext: null,
    _wordSoundPlayed: false,

    // Session management
    sessionActive: false,
    sessionRounds: [],
    sessionScores: {},

    // Shared AudioContext (fix memory leak - one instance reused)
    getAudioContext() {
        if (!this._audioContext) {
            this._audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (this._audioContext.state === 'suspended') {
            this._audioContext.resume();
        }
        return this._audioContext;
    },

    // Sound effects using Web Audio API
    playSound(type) {
        if (!this.soundEnabled) return;

        try {
            const audioContext = this.getAudioContext();
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
                    oscillator.frequency.value = 523.25;
                    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
                    oscillator.start(audioContext.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(783.99, audioContext.currentTime + 0.2);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
                    oscillator.stop(audioContext.currentTime + 0.4);
                    break;
                case 'celebration':
                    oscillator.frequency.value = 523.25;
                    gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
                    oscillator.start(audioContext.currentTime);
                    oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.15);
                    oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.3);
                    oscillator.frequency.setValueAtTime(1046.5, audioContext.currentTime + 0.45);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.7);
                    oscillator.stop(audioContext.currentTime + 0.7);
                    break;
            }
        } catch (e) {
            // Audio not supported, fail silently
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

    // --- Toast / Modal / Celebration system ---

    showToast(message, type = 'info', duration = 3000) {
        const existing = document.querySelector('.game-toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.className = `game-toast toast-${type}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        requestAnimationFrame(() => toast.classList.add('visible'));

        setTimeout(() => {
            toast.classList.remove('visible');
            setTimeout(() => toast.remove(), 300);
        }, duration);
    },

    showModal(title, body, actions) {
        const overlay = document.getElementById('gameOverlay');
        overlay.innerHTML = `
            <div class="modal-box">
                <h3>${title}</h3>
                <div class="modal-body">${body}</div>
                <div class="modal-actions" id="modalActions"></div>
            </div>
        `;
        overlay.style.display = 'flex';
        requestAnimationFrame(() => overlay.classList.add('visible'));

        const actionsDiv = document.getElementById('modalActions');
        actions.forEach(action => {
            const btn = document.createElement('button');
            btn.className = action.class || 'btn-modal';
            btn.textContent = action.label;
            btn.addEventListener('click', () => {
                this.closeOverlay();
                if (action.onClick) action.onClick();
            });
            actionsDiv.appendChild(btn);
        });
    },

    showCelebration(winner) {
        this.playSound('celebration');
        const overlay = document.getElementById('gameOverlay');
        const isImpostor = winner === 'impostor';
        const icon = isImpostor ? '🎭' : '👥';
        const text = isImpostor ? '¡Ganó el Impostor!' : '¡Ganó el Grupo!';
        const cls = isImpostor ? 'celebration-impostor' : 'celebration-group';

        overlay.innerHTML = `
            <div class="celebration-box ${cls}">
                <div class="celebration-icon">${icon}</div>
                <h2 class="celebration-title">${text}</h2>
                <p class="celebration-round">Ronda ${this.currentRound} guardada</p>
                <button class="btn-celebration" id="closeCelebration">CONTINUAR</button>
            </div>
        `;
        overlay.style.display = 'flex';
        requestAnimationFrame(() => overlay.classList.add('visible'));

        document.getElementById('closeCelebration').addEventListener('click', () => {
            this.closeOverlay();
        });
    },

    closeOverlay() {
        const overlay = document.getElementById('gameOverlay');
        overlay.classList.remove('visible');
        setTimeout(() => {
            overlay.style.display = 'none';
            overlay.innerHTML = '';
        }, 300);
    },

    // --- Theme ---

    toggleTheme() {
        this.darkMode = !this.darkMode;
        document.body.classList.toggle('light-mode');
        const themeIcon = document.getElementById('themeIcon');
        themeIcon.textContent = this.darkMode ? '☀️' : '🌙';
        localStorage.setItem('impostorTheme', this.darkMode ? 'light' : 'dark');
    },

    loadTheme() {
        const savedTheme = localStorage.getItem('impostorTheme');
        if (savedTheme === 'light') {
            this.darkMode = true;
            document.body.classList.add('light-mode');
            document.getElementById('themeIcon').textContent = '☀️';
        }
    },

    // --- History & Stats ---

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
            winner: winner,
            impostorGuessedWord: impostorGuessedWord,
            impostorCount: this.impostorCount
        };

        const history = JSON.parse(localStorage.getItem('impostorGameHistory') || '[]');
        history.unshift(gameData);
        if (history.length > 50) history.splice(50);
        localStorage.setItem('impostorGameHistory', JSON.stringify(history));
        this.updatePlayerStats(gameData);
    },

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

    loadGameHistory() {
        return JSON.parse(localStorage.getItem('impostorGameHistory') || '[]');
    },

    loadPlayerStats() {
        return JSON.parse(localStorage.getItem('impostorPlayerStats') || '{}');
    },

    // --- Instructions ---

    toggleInstructions() {
        const content = document.getElementById('instructionsContent');
        const arrow = document.getElementById('instructionsArrow');
        content.classList.toggle('collapsed');
        arrow.classList.toggle('open');
        this.playSound('click');
    },

    // --- Impostor suggestion ---

    suggestedImpostorCount(playerCount) {
        if (playerCount <= 5) return 1;
        if (playerCount <= 8) return 2;
        if (playerCount <= 12) return 3;
        return Math.floor(playerCount * 0.25);
    },

    updateImpostorSuggestion() {
        const playerCount = parseInt(document.getElementById('playerCount').value);
        const suggestionBadge = document.getElementById('impostorSuggestion');
        const impostorInput = document.getElementById('impostorCount');

        if (!playerCount || playerCount < 4) {
            suggestionBadge.textContent = '';
            return;
        }

        const suggested = this.suggestedImpostorCount(playerCount);
        impostorInput.max = Math.floor(playerCount / 2);
        suggestionBadge.textContent = `Sugerido: ${suggested}`;
        suggestionBadge.setAttribute('data-suggested', suggested);
    },

    // --- Category change ---

    handleCategoryChange() {
        const category = document.getElementById('category').value;
        const customSection = document.getElementById('customWordsSection');
        customSection.style.display = category === 'personalizada' ? 'block' : 'none';
    },

    // --- Name entry ---

    goToNameEntry() {
        this.playSound('click');
        const playerCount = parseInt(document.getElementById('playerCount').value);
        const impostorCount = parseInt(document.getElementById('impostorCount').value);

        if (playerCount < 4) {
            this.showToast('El número de jugadores debe ser mínimo 4', 'error');
            return;
        }
        if (impostorCount < 1) {
            this.showToast('Debe haber al menos 1 impostor', 'error');
            return;
        }
        if (impostorCount >= playerCount) {
            this.showToast('Los impostores deben ser menos que los jugadores', 'error');
            return;
        }
        if (impostorCount > Math.floor(playerCount / 2)) {
            this.showToast('Máximo 50% de impostores', 'error');
            return;
        }

        this.playerCount = playerCount;
        this.impostorCount = impostorCount;
        this.category = document.getElementById('category').value;

        if (this.category === 'personalizada') {
            const customWordsInput = document.getElementById('customWords').value.trim();
            if (!customWordsInput) {
                this.showToast('Debes escribir al menos 10 palabras separadas por comas', 'error');
                return;
            }
            this.customWordsList = customWordsInput.split(',').map(w => w.trim()).filter(w => w.length > 0);
            if (this.customWordsList.length < 10) {
                this.showToast(`Solo escribiste ${this.customWordsList.length} palabras. Necesitas al menos 10.`, 'error');
                return;
            }
        }

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

        setTimeout(() => {
            document.getElementById('playerName1').focus();
            document.getElementById('playerName1').select();
        }, 300);
    },

    backToStart() {
        this.showScreen('screen-start');
    },

    // --- Start game ---

    startGame() {
        this.playSound('success');
        this.players = [];
        for (let i = 1; i <= this.playerCount; i++) {
            const nameInput = document.getElementById(`playerName${i}`);
            let name = nameInput.value.trim();
            if (!name) name = `Jugador ${i}`;
            this.players.push({ id: i, name: name, isImpostor: false });
        }

        if (!this.sessionActive) {
            this.sessionActive = true;
            this.sessionRounds = [];
            this.sessionScores = {};
            this.recentImpostors = [];
            this.previousImpostors = [];
            this.currentRound = 1;
        }

        this.roundClosed = false;
        this.selectImpostors();
        this.selectSecretWord();
        this.currentPlayerIndex = 0;

        this.showScreen('screen-reveal');
        this.updateRevealScreen();
    },

    // --- Algorithms ---

    selectImpostors() {
        this.players.forEach(p => p.isImpostor = false);
        this.impostorIndexes = [];

        // Peso reducido si fue impostor en la ronda anterior (0.15) o hace dos rondas (0.5),
        // por nombre para que siga funcionando si se editan los jugadores entre rondas
        const weights = this.players.map(p => {
            if (this.recentImpostors.includes(p.name)) return 0.15;
            if (this.previousImpostors.includes(p.name)) return 0.5;
            return 1.0;
        });

        for (let i = 0; i < this.impostorCount; i++) {
            let random = Math.random() * weights.reduce((s, w) => s + w, 0);
            for (let j = 0; j < weights.length; j++) {
                if (weights[j] === 0) continue;
                random -= weights[j];
                if (random <= 0) {
                    this.impostorIndexes.push(j);
                    this.players[j].isImpostor = true;
                    weights[j] = 0;
                    break;
                }
            }
        }
        this.previousImpostors = [...this.recentImpostors];
        this.recentImpostors = this.players.filter(p => p.isImpostor).map(p => p.name);
    },

    selectSecretWord() {
        let words;

        if (this.category === 'personalizada') {
            words = this.customWordsList;
        } else if (this.category === 'aleatorio') {
            const categories = Object.keys(wordDatabase);
            const randomCategory = categories[Math.floor(Math.random() * categories.length)];
            words = wordDatabase[randomCategory];
        } else {
            words = wordDatabase[this.category];
        }

        let available = words.filter(w => !this.usedWords.includes(w));
        if (available.length === 0) {
            this.usedWords = [];
            available = [...words];
        }

        const word = available[Math.floor(Math.random() * available.length)];
        this.usedWords.push(word);
        this.secretWord = word;
    },

    // --- Reveal flow ---

    updateRevealScreen() {
        const player = this.players[this.currentPlayerIndex];
        const total = this.players.length;
        const current = this.currentPlayerIndex + 1;

        document.getElementById('currentPlayerName').textContent = player.name;
        document.getElementById('revealProgress').textContent = `Jugador ${current} de ${total}`;

        // Progress bar
        const progressBar = document.getElementById('revealProgressBar');
        if (progressBar) {
            progressBar.style.width = `${(current / total) * 100}%`;
        }

        // Round context
        const roundCtx = document.getElementById('revealRoundContext');
        if (roundCtx && this.sessionActive) {
            roundCtx.textContent = `Ronda ${this.currentRound}`;
            roundCtx.style.display = 'inline-block';
        }
    },

    revealWord() {
        const player = this.players[this.currentPlayerIndex];
        const wordDisplay = document.getElementById('wordDisplay');
        const btn = document.getElementById('nextPlayerBtn');
        const isLast = this.currentPlayerIndex === this.players.length - 1;

        // La tarjeta del impostor usa el mismo color y sonido que las demás:
        // cualquier diferencia visible o audible delataría el rol a los que están cerca
        let cardHTML;
        if (player.isImpostor) {
            cardHTML = `
                <div class="word-card crewmate">
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
            cardHTML = `
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

        wordDisplay.innerHTML = `
            <p class="hold-hint"><strong>${player.name}</strong>, tu rol se muestra solo mientras presionás</p>
            <div class="hold-area" id="holdArea">
                <div class="hold-placeholder" id="holdPlaceholder">
                    <span class="hold-lock">🔒</span>
                    <span class="hold-text">MANTENÉ PRESIONADO<br>PARA VER TU ROL</span>
                </div>
                <div class="hold-card" id="holdCard" style="display: none;">${cardHTML}</div>
            </div>
            <p class="warning hold-warning">Al soltar se oculta: así podés pasar el celular tranquilo</p>
        `;

        if (btn) {
            btn.textContent = isLast ? '🎭 ¡A JUGAR!' : 'SIGUIENTE JUGADOR';
            btn.disabled = true;
        }

        this._wordSoundPlayed = false;
        this.setupHoldToReveal();
        this.showScreen('screen-word');
    },

    setupHoldToReveal() {
        const holdArea = document.getElementById('holdArea');
        const placeholder = document.getElementById('holdPlaceholder');
        const card = document.getElementById('holdCard');
        const btn = document.getElementById('nextPlayerBtn');

        const show = (e) => {
            e.preventDefault();
            placeholder.style.display = 'none';
            card.style.display = 'block';
            if (!this._wordSoundPlayed) {
                this.playSound('reveal');
                this._wordSoundPlayed = true;
            }
            if (btn) btn.disabled = false;
        };
        const hide = () => {
            card.style.display = 'none';
            placeholder.style.display = 'flex';
        };

        holdArea.addEventListener('pointerdown', show);
        holdArea.addEventListener('pointerup', hide);
        holdArea.addEventListener('pointerleave', hide);
        holdArea.addEventListener('pointercancel', hide);
        holdArea.addEventListener('contextmenu', e => e.preventDefault());
    },

    nextPlayer() {
        this.currentPlayerIndex++;

        if (this.currentPlayerIndex >= this.players.length) {
            this.showFinalScreen();
        } else {
            this.showScreen('screen-reveal');
            this.updateRevealScreen();
        }
    },

    // --- Final screen ---

    showFinalScreen() {
        const playOrder = this.generatePlayOrder();
        const orderListHTML = playOrder.map((player, index) => {
            return `<div class="player-order-item">
                        <span class="order-number">${index + 1}</span>
                        <span class="player-name">${player.name}</span>
                    </div>`;
        }).join('');

        document.getElementById('playOrderList').innerHTML = orderListHTML;

        if (this.sessionActive) {
            document.getElementById('sessionInfo').style.display = 'flex';
            document.getElementById('currentRoundNumber').textContent = this.currentRound;
            document.getElementById('totalRoundsPlayed').textContent = this.sessionRounds.length;
        }

        this.updateFinalScreenState();
        this.renderScoreboard();
        this.showScreen('screen-final');
    },

    generatePlayOrder() {
        // Mantiene el orden de la lista y solo sortea quién arranca.
        // El impostor puede arrancar, pero con probabilidad baja (peso 0.2 vs 1.0):
        // si nunca pudiera, arrancar primero probaría inocencia.
        const weights = this.players.map(p => p.isImpostor ? 0.2 : 1.0);
        let random = Math.random() * weights.reduce((s, w) => s + w, 0);
        let start = 0;
        for (let i = 0; i < weights.length; i++) {
            random -= weights[i];
            if (random <= 0) {
                start = i;
                break;
            }
        }
        return [...this.players.slice(start), ...this.players.slice(0, start)];
    },

    updateFinalScreenState() {
        const declareBtn = document.getElementById('declareWinnerBtn');
        const result = document.getElementById('roundResult');
        if (this.roundClosed) {
            declareBtn.style.display = 'none';
            result.style.display = 'block';
        } else {
            declareBtn.style.display = '';
            result.style.display = 'none';
            result.innerHTML = '';
        }
    },

    renderScoreboard() {
        const board = document.getElementById('scoreboard');
        const entries = Object.entries(this.sessionScores);

        if (!this.sessionActive || entries.length === 0) {
            board.style.display = 'none';
            board.innerHTML = '';
            return;
        }

        entries.sort((a, b) => b[1] - a[1]);
        const maxScore = entries[0][1];
        board.style.display = 'block';
        board.innerHTML = `
            <h3>🏆 Puntaje de la sesión</h3>
            <div class="scoreboard-list">
                ${entries.map(([name, points]) => `
                    <div class="scoreboard-item ${points === maxScore && maxScore > 0 ? 'leader' : ''}">
                        <span class="scoreboard-name">${name}</span>
                        <span class="scoreboard-points">${points}</span>
                    </div>
                `).join('')}
            </div>
        `;
    },

    // --- New round ---

    playAgain() {
        this.playSound('click');
        this.currentRound++;

        document.getElementById('nextRoundNumber').textContent = this.currentRound;
        document.getElementById('impostorCountRound').value = this.impostorCount;
        document.getElementById('categoryRound').value = this.category;
        document.getElementById('customWordsRound').value = this.customWordsList.join(', ');
        document.getElementById('customWordsSectionRound').style.display =
            this.category === 'personalizada' ? 'block' : 'none';

        this.editablePlayers = this.players.map(p => p.name);
        this.renderPlayerEditor();
        this.updateImpostorSuggestionRound();

        this.showScreen('screen-new-round');
    },

    updateImpostorSuggestionRound() {
        const suggested = this.suggestedImpostorCount(this.editablePlayers.length);
        document.getElementById('impostorSuggestionRound').textContent = `Sugerido: ${suggested}`;
    },

    // --- Player editing between rounds ---

    renderPlayerEditor() {
        const list = document.getElementById('playerEditList');
        document.getElementById('playerEditCount').textContent = this.editablePlayers.length;
        list.innerHTML = this.editablePlayers.map((name, index) => `
            <div class="player-edit-item">
                <span class="player-name">${name}</span>
                <button class="btn-remove-player" onclick="game.removePlayer(${index})" aria-label="Quitar jugador">✕</button>
            </div>
        `).join('');
    },

    removePlayer(index) {
        if (this.editablePlayers.length <= 4) {
            this.showToast('Se necesitan mínimo 4 jugadores', 'error');
            return;
        }
        this.playSound('click');
        this.editablePlayers.splice(index, 1);
        this.renderPlayerEditor();
        this.updateImpostorSuggestionRound();
    },

    addPlayer() {
        const input = document.getElementById('newPlayerName');
        const name = input.value.trim();

        if (!name) {
            this.showToast('Escribí el nombre del jugador', 'error');
            return;
        }
        if (this.editablePlayers.some(n => n.toLowerCase() === name.toLowerCase())) {
            this.showToast('Ya hay un jugador con ese nombre', 'error');
            return;
        }

        this.playSound('click');
        this.editablePlayers.push(name);
        input.value = '';
        this.renderPlayerEditor();
        this.updateImpostorSuggestionRound();
    },

    handleCategoryChangeRound() {
        const category = document.getElementById('categoryRound').value;
        const customSection = document.getElementById('customWordsSectionRound');
        customSection.style.display = category === 'personalizada' ? 'block' : 'none';
        this.playSound('click');
    },

    startNewRound() {
        this.impostorCount = parseInt(document.getElementById('impostorCountRound').value);
        this.category = document.getElementById('categoryRound').value;

        if (this.editablePlayers.length < 4) {
            this.showToast('Se necesitan al menos 4 jugadores', 'error');
            return;
        }

        if (this.category === 'personalizada') {
            const customWordsText = document.getElementById('customWordsRound').value.trim();
            if (!customWordsText) {
                this.showToast('Por favor ingresa palabras personalizadas', 'error');
                return;
            }
            this.customWordsList = customWordsText.split(',').map(w => w.trim()).filter(w => w);
            if (this.customWordsList.length < 10) {
                this.showToast('Necesitas al menos 10 palabras personalizadas', 'error');
                return;
            }
        }

        const maxImpostors = Math.floor(this.editablePlayers.length / 2);
        if (!this.impostorCount || this.impostorCount < 1) {
            this.showToast('Debe haber al menos 1 impostor', 'error');
            return;
        }
        if (this.impostorCount > maxImpostors) {
            this.showToast(`Máximo ${maxImpostors} impostores para ${this.editablePlayers.length} jugadores`, 'error');
            return;
        }

        this.playSound('success');
        this.players = this.editablePlayers.map((name, index) => ({
            id: index + 1,
            name: name,
            isImpostor: false
        }));

        this.roundClosed = false;
        this.selectImpostors();
        this.selectSecretWord();
        this.currentPlayerIndex = 0;

        this.showScreen('screen-reveal');
        this.updateRevealScreen();
    },

    // --- End game with confirmation + summary ---

    endGame() {
        const roundsPlayed = this.sessionRounds.length;
        let summaryHTML = '<p>¿Seguro que querés terminar la sesión?</p>';

        if (roundsPlayed > 0) {
            const groupWins = this.sessionRounds.filter(r => r.winner === 'group').length;
            const impostorWins = this.sessionRounds.filter(r => r.winner === 'impostor').length;
            summaryHTML = `
                <div class="end-summary">
                    <p style="margin-bottom: 15px;">Resumen de la sesión:</p>
                    <div class="end-summary-stats">
                        <div class="end-stat"><span class="end-stat-value">${roundsPlayed}</span><span class="end-stat-label">Rondas</span></div>
                        <div class="end-stat"><span class="end-stat-value">${groupWins}</span><span class="end-stat-label">👥 Grupo</span></div>
                        <div class="end-stat"><span class="end-stat-value">${impostorWins}</span><span class="end-stat-label">🎭 Impostor</span></div>
                    </div>
                </div>
            `;
        }

        this.showModal('Terminar Sesión', summaryHTML, [
            {
                label: 'TERMINAR',
                class: 'btn-modal btn-modal-danger',
                onClick: () => {
                    this.sessionActive = false;
                    this.sessionRounds = [];
                    this.sessionScores = {};
                    this.currentRound = 0;
                    this.roundClosed = false;
                    this.players = [];
                    this.editablePlayers = [];
                    this.secretWord = '';
                    this.category = '';
                    this.currentPlayerIndex = 0;
                    this.usedWords = [];
                    this.recentImpostors = [];
                    this.previousImpostors = [];
                    this.showScreen('screen-start');
                }
            },
            {
                label: 'CANCELAR',
                class: 'btn-modal btn-modal-cancel',
                onClick: () => {}
            }
        ]);
    },

    // --- Winner ---

    toggleWinnerSection() {
        const winnerSection = document.getElementById('winnerSection');
        winnerSection.classList.toggle('winner-visible');
        this.playSound('click');
    },

    declareWinner(winner) {
        if (this.roundClosed) return;
        this.roundClosed = true;

        const roundData = {
            roundNumber: this.currentRound,
            word: this.secretWord,
            category: this.category,
            winner: winner,
            impostors: this.players.filter(p => p.isImpostor).map(p => p.name),
            timestamp: new Date()
        };
        this.sessionRounds.push(roundData);

        // Puntaje individual: +1 a cada jugador del bando ganador
        this.players.forEach(p => {
            const won = (winner === 'impostor') === p.isImpostor;
            if (this.sessionScores[p.name] === undefined) this.sessionScores[p.name] = 0;
            if (won) this.sessionScores[p.name]++;
        });

        this.saveGameToHistory(winner);

        // Cerrar la ronda en la pantalla final
        document.getElementById('winnerSection').classList.remove('winner-visible');
        document.getElementById('totalRoundsPlayed').textContent = this.sessionRounds.length;
        this.updateFinalScreenState();
        document.getElementById('roundResult').innerHTML = winner === 'impostor'
            ? '🎭 Ronda cerrada — Ganó el Impostor'
            : '👥 Ronda cerrada — Ganó el Grupo';
        this.renderScoreboard();

        // Show celebration overlay
        this.showCelebration(winner);
    },

    // --- Stats ---

    viewStats() {
        this.renderStats();
        this.showScreen('screen-stats');
    },

    backToFinal() {
        this.showScreen('screen-final');
    },

    showStatsTab(tab, evt) {
        document.querySelectorAll('.stats-tab').forEach(btn => btn.classList.remove('active'));
        if (evt && evt.target) {
            evt.target.classList.add('active');
        }

        document.querySelectorAll('.stats-content').forEach(c => c.classList.remove('active'));

        if (tab === 'session') {
            document.getElementById('stats-session').classList.add('active');
        } else if (tab === 'history') {
            document.getElementById('stats-history').classList.add('active');
        } else if (tab === 'players') {
            document.getElementById('stats-players').classList.add('active');
        }
    },

    renderStats() {
        this.renderSessionRounds();
        this.renderGameHistory();
        this.renderPlayerStats();
    },

    renderSessionRounds() {
        const roundsList = document.getElementById('sessionRoundsList');

        if (!this.sessionActive || this.sessionRounds.length === 0) {
            roundsList.innerHTML = '<p style="text-align: center; padding: 40px; opacity: 0.7;">No hay rondas en esta sesión aún.<br><br>Declara un ganador después de cada ronda para verlas aquí.</p>';
            return;
        }

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
        `;

        const scoreEntries = Object.entries(this.sessionScores).sort((a, b) => b[1] - a[1]);
        if (scoreEntries.length > 0) {
            html += `
                <div class="scoreboard" style="display: block;">
                    <h3>🏆 Puntaje individual</h3>
                    <div class="scoreboard-list">
                        ${scoreEntries.map(([name, points]) => `
                            <div class="scoreboard-item">
                                <span class="scoreboard-name">${name}</span>
                                <span class="scoreboard-points">${points}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }

        html += `<h4 style="margin: 20px 0 10px 0; text-align: center; opacity: 0.8;">Historial de Rondas</h4>`;

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

    renderGameHistory() {
        const history = this.loadGameHistory();
        const historyList = document.getElementById('gameHistoryList');

        if (history.length === 0) {
            historyList.innerHTML = '<p style="text-align: center; padding: 40px; opacity: 0.7;">No hay partidas jugadas aún</p>';
            return;
        }

        historyList.innerHTML = history.map(g => {
            const date = new Date(g.date);
            const dateStr = date.toLocaleDateString('es-AR', {
                day: '2-digit', month: '2-digit', year: 'numeric',
                hour: '2-digit', minute: '2-digit'
            });
            const winnerText = g.winner === 'impostor' ? '🎭 Ganó el Impostor' : '👥 Ganó el Grupo';
            const winClass = g.winner === 'impostor' ? 'impostor-win' : 'group-win';
            return `
                <div class="history-item ${winClass}">
                    <div class="history-date">${dateStr}</div>
                    <div class="history-word">Palabra: ${g.word}</div>
                    <div style="font-size: 0.9rem; opacity: 0.8;">Categoría: ${g.category}</div>
                    <div class="history-winner">${winnerText}</div>
                    <div style="font-size: 0.85rem; opacity: 0.7; margin-top: 5px;">
                        ${g.players.length} jugadores, ${g.impostorCount} impostor${g.impostorCount > 1 ? 'es' : ''}
                    </div>
                </div>
            `;
        }).join('');
    },

    renderPlayerStats() {
        const stats = this.loadPlayerStats();
        const statsList = document.getElementById('playerStatsList');

        const players = Object.keys(stats);
        if (players.length === 0) {
            statsList.innerHTML = '<p style="text-align: center; padding: 40px; opacity: 0.7;">No hay estadísticas de jugadores aún</p>';
            return;
        }

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
    game.updateImpostorSuggestion();
    game.showScreen('screen-start');
});
