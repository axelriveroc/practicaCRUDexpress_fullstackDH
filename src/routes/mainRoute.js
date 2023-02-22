const express = require('express'); 
const router = express.Router(); 
const mainController = require('../controllers/mainController'); 


router.get( '/' , mainController.index ); 
router.get('/login', mainController.login); 
router.get('/create' , mainController.create);
 
router.post('/create', mainController.postCreate);


module.exports = router; 