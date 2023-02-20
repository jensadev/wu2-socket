const app = require('../app');
const supertest = require('supertest');

describe('GET /', () => {
    it('should return 200 OK', () => {
        return supertest(app).get('/').expect(200);
    });

    it('should return a string', () => {
        return supertest(app)
            .get('/')
            .expect('Content-Type', /text\/html/);
    });
});
