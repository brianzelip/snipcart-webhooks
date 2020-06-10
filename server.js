const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = new express();
const port = 3000;

app.set('views', '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => res.sendfile('index.html'));

// app.post('/order', (req, res) => {
//   console.log('req.body:::', req.body);
//   res.json(req.body);
// });

app.post('/order', (req, res) => {
  const body = req.body;
  console.log('body is:::::', body);

  if (body.eventName && !body.eventName === 'order.completed') {
    res.status(204).send({});
  }
  res.json(body);
  // const items = body.content.items;
  // const ids = items.map((item) => item.id);

  // now trigger a netlify build
});

app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);
