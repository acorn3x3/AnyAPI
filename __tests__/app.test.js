const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

const { champions } = require('../lib/champions-data');

describe('champions routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/champions should return a list of champions', async () => {
    const res = await request(app).get('champions');
    const expected = champions.map((champions) => {
      return { id: champions.id, name: champions.name, quote: champions.quote };
    });
    expect(res.body).toEqual(expected);
  });
});
