// routes
const drawers = require('../controllers/controller');


module.exports = app => {
    app.get('/drawers', drawers.showAll);
    app.get('/drawers/:id', drawers.show);
    app.post('/drawers', drawers.create);
    app.put('/drawers/:id', drawers.update);
    app.delete('/drawers/:id', drawers.delete);
    app.post('/drawers/:id', drawers.review);
}