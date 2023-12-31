import express from 'express'; 
import router from './routes.js';
import fs from 'fs'; 
import https from 'https'; 
import cors from 'cors'; 

const app = express(); 
const port = 3000; 

app.use(express.json()); 
app.use(router); 
app.use(cors);

app.listen(port, () => console.log("Api running")); 

https.createServer({
    cert: fs.readFileSync('src/SSL/code.crt'), 
    key: fs.readFileSync('src/SSL/code.key')
}, app).listen(3001, () => console.log("Rodando em HTTPS")); 
// In our case someone who access it in the https port will see a warning message saying that this connection is not safe. It happens because the certificate we generated is free and anyone can generate that. So, it's not a credential certificate generated by a company that certificates that our connection is safe. In a business context, a trust company provides that SSL certificate for us or the hosting service company provides that too and then, we will be able to use the https connection. 

// 443 default SSL port