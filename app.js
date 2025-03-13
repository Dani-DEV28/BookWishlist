import { setEngine } from 'crypto';
import express from 'express';

const app = express();
app.use(express.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');
app.use(express.static('public'));

const PORT = 3000;
const memoryStored = [];

app.get('/', (req, res) => {
    res.render('home');
})

app.post('/', (req, res) => {
    res.render('home');
})

app.post('/summary', (req, res) => {
    const {
        bookTitle,
        comments,
        rating
    } = req.body;

    console.log(bookTitle);
    console.log(comments);
    console.log(rating);

    const storeValues = {
        bookTitle: bookTitle,
        comments: comments,
        rating: rating,
    };

    console.log(storeValues.bookTitle);
    console.log(storeValues.comments);
    console.log(storeValues.rating);

    memoryStored.push(storeValues);

    console.log(memoryStored[0].bookTitle);
    console.log(memoryStored[0].comments);

    res.render('summary', {memoryStored});
})

app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
});
