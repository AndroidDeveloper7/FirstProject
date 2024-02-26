const express = require("express");
const user = "DHOLAKPUR"
const app = express();
const PORT = 8000;
let max = 1000
let min = 500

const { StreamChat } = require('stream-chat');


// Or if you are on commonjs
// const StreamChat = require('stream-chat').StreamChat;

// Define values.
const api_key = 'fapgw466me76'
const api_secret = 'wb62f5krjhz9z7uu9vxkjh2fahdhhm3dnjdxwunnna8em652zu8x5cg7ueha9rhy'
const user_id = 'john'

// Initialize a Server Client
const serverClient = StreamChat.getInstance( api_key, api_secret);
// Create User Token
const token = serverClient.createToken(user_id);

//Routes
app.get("/users", (req,res) => {

    const number = Number(req.query.number);
    // const json = JSON.stringify(req.body);
    var result = "";

    console.log(`number:${number}`);
    console.log(`data:${JSON.stringify(req.query)}`);

    if (number > max) {
        result = "Pass"
    } else if (number < min) {
        result = "Fail"
    } else {
        result = "Average"
    }


    return res.json({
        status : 1,
        data : token,
        result : result
    })
});

app.post("")

app.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));