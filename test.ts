import request from 'supertest';
import app from './app';

describe('Testing api endpoint', () => {
  test('sanity check for /test', async () => {
    const res = await request(app).get('/api/test');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      test: 'is working as it should',
    });
  });

  test('testing get endpoint', async() => {
    const res = await request(app).get('/api/puppies');
    expect(res.statusCode).toEqual(200);
  })

  test('testing post endpoint', async() => {
    const res = await request(app).post('/api/puppies');
    expect(res.statusCode).toEqual(201);
  })

  
});
