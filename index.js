// Importamos el express.
var express = require('express');
var app = express();

// Importamos el cors para parser el body.
var cors = require('cors');
app.use(cors());

// Importamos el body-parser, para parsear la informacion que nos mande el usuario.
var bodyParser = require('body-parser')
app.use(bodyParser());

// Escuchar el puerto
app.listen(8090, function(){
    console.log('El servidor esta corriendo satisfactoriamente');
});


//Funcion para que el usuario Obtenga todos los post del API
app.get('/v1/post/all', function(req, res){
    var limit = req.query.limit || 10;
    var date = req.query.date || '15/09/2018';
    var name = req.query.name || 'Juan López';
    var description = req.query.description || 'Celebrando la Independencia';

    var resp={
        success: true,
        message: '',
        limit: limit,
        date:date,
        name: name,
        description: description
    }

    res.send(resp);
});



//Funcion para que el usuario cree nuevos Post
app.post('/v1/post/new', function(req, res){
    
    var date = req.body.date;
    var name = req.body.name;
    var description = req.body.description;

    var resp={
        success: true,
        message: '',
        date:date,
        name: name,
        description: description    
    }
    res.send(resp.success);
});


//Funcion para que el usuario Agregue Comentarios
app.post('/v1/comments/add', function(req, res){
    var date = req.body.date;
    var comments = req.body.comments;

    var resp={
        success: true,
        message: '',
        date:date,
        comments: comments    
    }
    res.send(`request => ${resp.success}`);
});


// Funcion para acumular los likes de en los post.
app.put('/v1/post/like/:id', function(req, res){
    var id=req.body.id;

    var resp={
        success: true,
        message: '',
        id:id
    }

    res.send(`Got a PUT request at / ${resp.id}`);
});


// Funcion para eliminar el post pasado por id.
app.delete('/v1/post/delete/:id', function (req, res) {
    var id=req.body.id;

    var resp={
        success: true,
        message: '',
        id:id
    }

    res.send(`Got a DELETE request at /${resp.id}`);
  });