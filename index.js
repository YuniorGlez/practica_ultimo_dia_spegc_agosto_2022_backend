const express = require('express');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/football')

const app = express();
app.use(express.json());

app.post('/register', async function (req, res) {
    const { hashSync } = require('bcrypt');
    const UserModel = require('./api/user.model')
    let body = req.body;
    let { email, password } = body;
    const newUser = await UserModel.create({
        email,
        password: hashSync(password, 10)
    });
    return res.json(newUser);
});

app.post('/login', function (req, res) {
    const UserModel = require('./api/user.model')
    UserModel.findOne({ email: req.body.email })
        .then(usuarioDB => {

            // Verifica que exista un usuario con el mail escrita por el usuario.
            if (!usuarioDB) {
                return res.status(400).json({ message: "Usuario o contraseña incorrectos" })
            }
            const bcrypt = require('bcrypt');
            // Valida que la contraseña escrita por el usuario, sea la almacenada en la db
            if (!bcrypt.compareSync(req.body.password, usuarioDB.password)) {
                return res.status(400).json({ message: "Usuario o contraseña incorrectos" });
            }
            const { sign } = require('jsonwebtoken');
            // Genera el token de autenticación y guarda dentro del token toda la info
            // de usuarioDB en este caso
            let token = sign({ ...usuarioDB }, "SECRET")
            res.json({
                usuario: usuarioDB,
                token,
            })

        })
        .catch(erro => {
            return res.status(500).json(erro)
        })
});




const leaguesRouter = require('./api/leagues/leagues.router')
app.use('/api/leagues', leaguesRouter)

const teamsRouter = require('./api/teams/teams.router')
app.use('/api/teams', teamsRouter)


app.listen(5000);