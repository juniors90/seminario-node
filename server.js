const express = require("express");
const users = require("./routes/user.routes.js")

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(express.json());
app.use("/api/users/", users)

app.use( '/' , ( req, res) => {
    res.json({message : ' Hi! '} )
})

app.listen( app.get("port"), () => {
    console.log('Server ready in ', app.get("port"));
})

//const chalk = require('chalk' )
//console.log(chalk.yellow( 'hi!' ))