import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

app.get('/potato', (req, res) => {
    res.send('Hello Potato!');
    }
);

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
    }
);