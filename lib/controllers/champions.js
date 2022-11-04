const { Router } = require('express');
// const LeagueChampion = require('../models/LeagueChampion');
const { champions } = require('../champions-data');

module.exports = Router()
  .get('/:id', async (req, res) => {
    let match;
    for (const champion of champions) {
      if (champion.id === req.params.id) {
        match = champion;
      }
    }
    return res.json(match);
  })

  .get('/', (req, res) => {
    // const champions = await LeagueChampions.getAll();
    const filteredData = [];
    for (const champion of champions) {
      filteredData.push({
        id: champion.id,
        name: champion.name,
        quote: champion.quote,
      });
    }
    res.json(filteredData);
  });
