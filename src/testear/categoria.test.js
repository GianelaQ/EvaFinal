const request = require('supertest');
const app = require('../index');
const { generateToken } = require('../config/auth');

describe('Pruebas para las rutas de categorias', () => {
    let token;

    beforeAll(() => {
        
        token = generateToken({ username: 'testuser' });
    });

    it('Debe crear una nueva categoría', async () => {
        const response = await request(app)
            .post('/categorias')
            .set('Authorization', `Bearer ${token}`)
            .send({
                nombre: 'Juguetes',
                descripcion: 'hechos en china'
            });
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id');
    });

   

    it('Debe obtener todas las categorías', async () => {
        const response = await request(app)
            .get('/categorias')
            .set('Authorization', `Bearer ${token}`);
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });

    it('Debe actualizar una categoría existente por ID', async () => {
        const knownCategoryId = 15; 

        const updateResponse = await request(app)
            .put(`/categorias/${knownCategoryId}`)
            .set('Authorization', `Bearer ${token}`)
            .send({
                nombre: 'Maquillaje',
                descripcion: 'importados de corea'
            });

        expect(updateResponse.statusCode).toBe(200);
        expect(updateResponse.body).toHaveProperty('id', knownCategoryId.toString());
        expect(updateResponse.body).toHaveProperty('nombre', 'Maquillaje');
        expect(updateResponse.body).toHaveProperty('descripcion', 'importados de corea');
    });

    

    it('Debe eliminar una categoría existente', async () => {
      
        const knownCategoryId = 5;

        const deleteResponse = await request(app)
            .delete(`/categorias/${knownCategoryId}`)
            .set('Authorization', `Bearer ${token}`);

        expect(deleteResponse.statusCode).toBe(200);
    });
});


