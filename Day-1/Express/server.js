const express = require('express');
const app = express();
const config = require('config');
const port = config.get("port");

app.use(express.json());
app.use(express.urlencoded({
    "extended": true
}));

const Users = [{
        "name": "kamal",
        "email": "kelshazly@gmail.com",
        id: 1
    },
    {
        "name": "ahmed",
        "email": "ahme@gmail.com",
        id: 2
    },
    {
        "name": "samy",
        "email": "samy@gmail.com",
        id: 3
    }
]


app.get("/api/users", function (req, res) {
    res.send(Users);
})

app.get("/api/users/:id", function (req, res) {
    const user = Users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        res.status(404).send();
    } else {
        res.send(ur);
    }
})

app.post("/api/users", function (req, res) {
    const user = {
        name: req.body.name,
        email: req.body.email,
        id: Users.length + 1
    };
    Users.push(user)
    res.send(user);
})

app.listen(port, () => {
    console.log("app started on port " + port);
});