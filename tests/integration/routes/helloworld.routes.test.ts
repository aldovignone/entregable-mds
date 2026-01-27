import request from 'supertest';
import app from '../../../src/server.js';

describe('GET /helloworld', () => {
  it('should return status 200', async () => {
    const response = await request(app).get('/helloworld');
    expect(response.status).toBe(200);
  });

  it('should return JSON content-type', async () => {
    const response = await request(app).get('/helloworld');
    expect(response.type).toBe('application/json');
  });

  it('should return message property with HelloWorld value', async () => {
    const response = await request(app).get('/helloworld');
    expect(response.body).toEqual({ message: 'HelloWorld!' });
  });

  it('should have correct message value', async () => {
    const response = await request(app).get('/helloworld');
    expect(response.body.message).toBe('HelloWorld!');
  });
});
