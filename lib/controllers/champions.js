const { Router } = require('express');
const LeagueChampions = require('../models/LeagueChampions');
// const { champions } = require('../champions-data');

module.exports = Router()
  .get('/', async (req, res) => {
    const champions = await LeagueChampions.getAll();
    const filteredData = [];
    for (const champion of champions) {
      filteredData.push({
        id: champion.id,
        name: champion.name,
        quote: champion.quote,
      });
    }
    res.json(filteredData);
  })

  .get('/:id', async (req, res) => {
    const champion = await LeagueChampions.getById(req.params.id);

    res.json(champion);
  });
