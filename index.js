import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './src/routes/users.js';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
const port = 2100;

app.use('/users', usersRoutes);

app.get('/', (request, respond) => {
    respond.status(200).json({
        message: 'hi3'
    });
});

app.listen(port, (request, respond) => {
    console.log('server is ready');
});