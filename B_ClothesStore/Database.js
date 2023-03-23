const mysql = require('mysql').mysql;

// URL de conexión a la base de datos de MongoDB
const url = 'mongodb://<username>:<password>@<host>:<port>/<database>';

// Conectar a la base de datos
mysql.connect(url, function(err, client) {
  if (err) {
    console.log('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conectado a la base de datos correctamente');

    // Hacer algo con la base de datos aquí
    const db = client.db('<database>');

    // Cerrar la conexión cuando haya terminado
    client.close();
  }
});
