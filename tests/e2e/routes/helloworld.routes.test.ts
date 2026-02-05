import request from 'supertest';

const serverUrl = process.env.SERVER_URL;

describe('GET /helloworld', () => {
  it('should return status 200', async () => {
    const response = await request(serverUrl).get('/helloworld');
    expect(response.status).toBe(200);
  });

  it('should return JSON content-type', async () => {
    const response = await request(serverUrl).get('/helloworld');
    expect(response.type).toBe('application/json');
  });

  it('should return message + data property values', async () => {
    const response = await request(serverUrl).get('/helloworld');
    expect(response.body).toEqual({ message: 'HelloWorld', data: { foo: 'foo' }   });
  });
});
