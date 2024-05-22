const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const path = require('path');

const rootDir = require('./util/path');
const formRouter = require('./routes/Form');

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(formRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, '/', 'views', '404.html'));
}); 

app.listen(port, () => console.log(`server running on port ${port}`));
