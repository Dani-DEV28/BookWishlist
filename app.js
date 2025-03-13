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
    } = req.body;

    let rating = req.body.rating;

    const ratingType = ["one", "two", "three", "four", "five"];

    let ratingTrue = true;

    for (let index = 0; index < ratingType.length; index++) {
        if (rating == ratingType[index]){
            ratingTrue = true;
            break;
        }else {
            ratingTrue = false;
        }
    }

    if (!ratingTrue) {
        rating = "";
    }

    console.log(bookTitle);
    console.log(comments);
    console.log(rating);

    const storeValues = {
        bookTitle: bookTitle,
        comments: comments,
        rating: rating,
    };

    memoryStored.push(storeValues);

    res.render('summary', {memoryStored});
})

app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT}`);
});
