import express from 'express';

const app = express();

app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: 'game 1' },
    { id: 2, name: 'game 2' },
    { id: 3, name: 'game 3' },
    { id: 4, name: 'game 4' },
    { id: 5, name: 'game 5' },
  ]);
});

app.listen(3333);
