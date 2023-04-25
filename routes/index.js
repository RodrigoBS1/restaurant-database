var express = require('express');
var router = express.Router();

const orderController = require('../controllers').order;

router.get('/order', orderController.list);
router.post('/order', orderController.add);
router.put('/order/:id', orderController.update);
router.get('/order/:id', orderController.getById);
router.delete('/order/:id', orderController.delete);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Restaurant Page' });
});

module.exports = router;

// npx sequelize-cli model:generate --name Table --attributes isOpen:boolean
// npx sequelize-cli model:generate --name Party --attributes numberOfAdults:integer,numberOfChildren:integer,tableId:integer
// npx sequelize-cli model:generate --name Section --attributes name:string,tableId:integer
// npx sequelize-cli model:generate --name Employee --attributes name:string,sectionId:integer
// npx sequelize-cli model:generate --name Dish --attributes name:string,description:string,isGlutenFree:boolean,isSpicy:boolean
// npx sequelize-cli model:generate --name Order --attributes partyId:integer,dishId:integer