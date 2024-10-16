const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
    host: 'localhost', // o tu host
    user: 'root',
    password: '',
    database: 'label'
});

db.connect(err => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Rutas
app.get('/recetas-veganas', (req, res) => {
    console.log('Solicitud a /recetas-veganas'); // Para depuración
    db.query('SELECT * FROM recetas WHERE nivel = "Facil"', (err, results) => {
        if (err) {
            console.error('Error en la consulta:', err);
            return res.status(500).json({ error: err });
        }
        console.log('Resultados:', results); // Para depuración
        res.json(results);
    });
});



app.get('/receta-semana', (req, res) => {
    db.query('SELECT nombre, poster FROM semana LIMIT 1', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
});

// Nueva ruta para obtener 30 recetas aleatorias
app.get('/recetas-aleatorias', (req, res) => {
    db.query('SELECT * FROM recetas ORDER BY RAND() LIMIT 30', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
});




app.listen(5000, () => {
    console.log('Servidor corriendo en http://localhost:5000');
});