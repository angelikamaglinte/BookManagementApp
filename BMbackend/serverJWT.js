const express = require('express');
const bodyParser = require('body-parser');
const { fileAuth, generateJWT } = require('./auth');
const booksRouter = require('./routes/booksJWT');
const cors = require('cors'); // added import cors to allow policy

const app = express();
// added this for cors to work
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(bodyParser.json());

app.post('/login', (req, res) => {

    const { username, password } = req.body;
    // get user from file
    const user = fileAuth(username, password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    // JWT Auth
    const token = generateJWT(username);
    res.json({ token });
    
});

app.use('/books', booksRouter);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});