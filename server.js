const express = require ('express');
const app = express();
app.get('/',(req,res) => 
{
    res.send("hello from akshaya ");

});

app.listen(3000,()=> {
    console.log('server is listening to port 3000');
});