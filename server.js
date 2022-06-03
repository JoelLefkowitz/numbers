const express = require("express")
const app = express()
const port = 3000
var bodyParser = require('body-parser')
const cors = require('cors');
const { json } = require("express/lib/response");

app.set('view engine', 'ejs')

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
	res.render('index.ejs')
})

app.post("/numbers", (req, res, next) => {
	if ("primeNumber" in req.body) { res.send(getPrime(req.body.primeNumber)) }
	else { next() }
})

app.post("/numbers", (req, res) => {
	res.send(getEven(req.body.evenNumber))
})

app.listen(port, () => {
	console.log(`Server.js backend app listening on port ${port}`)
})

let prime = (x) => {
	for (let i = 2; i < x; i++) {
		if (x % i === 0) {
			return false;
		}
	} return true;
}

let getPrime = (x) => {
	if (x === "") {
		return "<p>You <mark>need</mark> to <mark>enter</mark> something</p>"
	} else if (Number(x) === 2) {
		return `<p><mark>${x}</mark> is a <mark>prime</mark> number`;
	} else if (Number(x) < 1) {
		return "<p>Prime numbers are <mark>larger</mark> than 1";
	} else if (Number(x) === 1) {
		return "<p>1 is <mark>neither</mark> a composite or prime number</p>"
	} else if (prime(Number(x))) {
		return `<p><mark>${x}</mark> is a <mark>prime</mark> number`;
	} else {
		return `<p><mark>${x}</mark> is a <mark>composite</mark> number`;
	}
}

let even = (x) => {
	if (x % 2 == 0) { return true; } else { return false; }
}

let getEven = (x) => {
	if (x === "") {
		return "<p>You <mark>need</mark> to <mark>enter</mark> something</p>";
	}
	if (even(x)) {
		return `<p><mark>${x}</mark> is <mark>even</mark>`
	} else {
		return `<p><mark>${x}</mark> is <mark>odd</mark>`
	}
}