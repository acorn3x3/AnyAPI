const { Router } = require('express');
const LeagueLocations = require('../models/LeagueLocations');

module.exports = Router().get('/', async (req, res) => {
  const locations = await LeagueLocations.getAll();
  const filteredData = [];
  for (const location of locations) {
    filteredData.push({
      id: location.id,
      name: location.name,
      biome: location.biome,
    });
  }
  res.json(filteredData);
});
