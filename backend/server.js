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

const credentials ={
    host: 'localhost', // o tu host
    user: 'root',
    password: '',
    database: 'label'


}

db.connect(err => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Rutas

app.post('/api/login', (req, res) => {
    const {username, password} = req.body
    const values = [username, password]
    const connection = mysql.createConnection(credentials)
    connection.query("SELECT * FROM usuarios WHERE nombre = ? AND contrasena = ?", values, (err, result) => {
        if(err){
            res.status(500).send(err)
        }else{
            if(result.length > 0){
                res.status(200).send({
                    "id": result[0].id,
                    "nombre": result[0].nombre
                })
            }else{
                res.status(400).send('Usuario no encontrado')
            }
        }
    })
    connection.end()
})



app.post('/registrar', (req, res) => {
    const { usuario, gmail, contrasena } = req.body;
    const query = 'INSERT INTO usuarios (nombre, correo_electronico, contrasena) VALUES (?, ?, ?)';
    
    db.query(query, [usuario, gmail, contrasena], (err, result) => {
      if (err) {
        console.log('Error inserting data:', err);
        return res.status(500).send('Error al registrar usuario');
      }
      res.status(200).send('Usuario registrado exitosamente');
    });
  });






app.get('/recetas-veganas', (req, res) => {
    db.query('SELECT * FROM recetas WHERE nivel = "Facil"', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
});

app.patch('/recetas/:id/like', (req, res) => {
    const id = req.params.id;
    const { like } = req.body; // El valor de "like" debe ser 0 o 1

    // Validar que el valor de "like" sea 0 o 1
    if (![0, 1].includes(like)) {
        return res.status(400).json({ message: 'El valor de "like" debe ser 0 o 1' });
    }

    // Actualizamos el valor de "likes" en la base de datos (lo establecemos en 0 o 1)
    db.query('UPDATE recetas SET likes = ? WHERE id = ?', [like, id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }

        // Verificamos si se actualizó alguna fila
        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Receta no encontrada' });
        }

        // Devolvemos un mensaje de éxito
        res.json({ message: 'Like actualizado correctamente' });
    });
});

app.get('/recetas-desayuno', (req, res) => {
    db.query('SELECT * FROM recetas WHERE tipo = "Desayuno"', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
});

app.get('/recetas-merienda', (req, res) => {
    db.query('SELECT * FROM recetas WHERE tipo = "Merienda"', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
});


app.get('/recetas-intermedio', (req, res) => {
    db.query('SELECT * FROM recetas WHERE nivel = "Intermedio"', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
});



app.get('/receta-semana', (req, res) => {
    db.query('SELECT id, nombre, poster FROM semana LIMIT 1', (err, results) => {
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

// Nueva ruta para obtener una receta aleatoria por ID
// Nueva ruta para obtener una receta aleatoria por ID
app.get('/recetas-aleatorias/:id', (req, res) => {
    const id = req.params.id;

    // Primero, obtenemos la receta
    db.query('SELECT * FROM recetas WHERE id = ?', [id], (err, recetaResults) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (recetaResults.length === 0) {
            return res.status(404).json({ message: 'Receta no encontrada' });
        }

        const receta = recetaResults[0];

        // Ahora, obtenemos los ingredientes relacionados
        db.query('SELECT * FROM ingrediente WHERE receta_id = ?', [id], (err, ingredientesResults) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
 // Agregamos los ingredientes a la receta, con sus proteínas
 receta.ingredientes = ingredientesResults.map(ingrediente => ({
    ingrediente: ingrediente.ingrediente,
    proteina: ingrediente.proteina,
    calorias: ingrediente.calorias, 
    grasa: ingrediente.grasa,
    fibra: ingrediente.fibra,
   grasasSaturadas: ingrediente.grasas_saturadas,
   sodio: ingrediente.sodio,
   azucares: ingrediente.azucares,
   carbohidratos: ingrediente.carbohidratos
}));

// Devolvemos la receta con los ingredientes
res.json(receta);
        });
    });
});

app.get('/receta-semana/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM recetas WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        if (results.length === 0) {
            return res.status(404).json({ message: 'Receta no encontrada' });
        }
        res.json(results[0]);
    });
});





app.listen(5000, () => {
    console.log('Servidor corriendo en http://localhost:5000');
});