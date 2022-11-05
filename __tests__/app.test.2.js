const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { locations } = require('../lib/locations-data');

describe('location routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/locations  should return a list of locations', async () => {
    const res = await request(app).get('/locations');
    const expected = locations.map((locations) => {
      return { id: locations.id, name: locations.name, biome: locations.biome };
    });
    expect(res.body).toEqual(expected);
  });
});
it('/locations/:id should return champion detail', async () => {
  const res = await request(app).get('/locations/1');
  const demacia = {
    id: '1',
    name: 'Demacia',
    monster: 'Silverwing',
    biome: 'Plains',
  };
  expect(res.body).toEqual(demacia);
});
afterAll(() => {
  pool.end();
});
