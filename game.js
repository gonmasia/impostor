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
        const playerCount = parseInt(document.getElementById('playerCount').value);
        const impostorCount = parseInt(document.getElementById('impostorCount').value);

        if (playerCount < 4 || playerCount > 10) {
            alert('El número de jugadores debe estar entre 4 y 10');
            return;
        }

        if (impostorCount >= playerCount) {
            alert('El número de impostores debe ser menor al número de jugadores');
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

        this.currentRound = 0;
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
            const startsFirstBadge = player.startsFirst
                ? `<div style="background: rgba(255, 215, 0, 0.3); border: 2px solid #ffd700; padding: 15px; border-radius: 10px; margin-top: 20px;">
                    <p style="font-size: 1.1rem; font-weight: bold; color: #ffd700; margin: 0;">
                        ⭐ ¡TÚ EMPIEZAS EL JUEGO!
                    </p>
                    <p style="font-size: 0.9rem; margin-top: 8px; opacity: 0.9;">
                        Serás el primero en dar una pista
                    </p>
                   </div>`
                : '';

            wordDisplay.innerHTML = `
                <div class="word-card crewmate">
                    <h1>🔍 TU PALABRA ES:</h1>
                    <div class="secret-word">${this.secretWord}</div>
                    ${startsFirstBadge}
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
        this.showScreen('screen-final');
    },


    // Jugar de nuevo
    playAgain() {
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
    game.showScreen('screen-start');
});
