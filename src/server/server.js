import express from "express";
import axios from 'axios'
import ReactDOM from "react-dom/server";
import {
	indexTemplate
} from "./indexTemplate";
import {
	App
} from '../App';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
	res.send(
		indexTemplate(ReactDOM.renderToString(App())),
	);
});

let token = '';

app.get('/auth', (req, res) => {
	axios.post(
			'https://www.reddit.com/api/v1/access_token',
			`grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`, {
				auth: {
					username: process.env.CLIENT_ID,
					password: '6u22DUNBrcg1Yb4yodODM44aSbcQKA'
				},
				headers: {
					'Content-type': 'application/x-www-form-urlencoded'
				}
			}
		)
		.then(({
			data
		}) => {
			if (data.access_token) token = data.access_token
			console.log(token)
			res.send(
				indexTemplate(ReactDOM.renderToString(App()), token),
			);
		})
});

app.listen(3000, () => {
	console.log("Server started on http://localhost:3000");
})