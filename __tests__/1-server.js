const app = require('../app');
const supertest = require('supertest');

describe('GET /', () => {
    it('should return 200 OK', () => {
        return supertest(app).get('/').expect(200);
    });

    it('should return a JSON object from the body', () => {
        return supertest(app)
            .get('/')
            .expect('Content-Type', /json/)
            .then((response) => {
                expect(response.body.msg).toBe('Hello World!');
            });
    });
});
