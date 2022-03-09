const express = require("express");
const app = express();
const port = 3000;
X
app.use(express.static(_dirname + "/docs"));

app.get("/", (req,res) => {
   res.sendFile(_dirname + "/index.html");
});

app.listen(port, () => {
   console.log('Example app listening at http://localhost:port');
});
function myFunc(){
    alert("You Clicked me");
 }
