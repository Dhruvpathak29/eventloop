var express = require('express');
var router = express.Router();
const {insert , insert1 , insert2,insert3} = require('../controllers/pro');

const {regii,login}=require('../controllers/loggg')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/regitr',regii);
router.post('/loginnn',login);


router.post('/add',insert);

router.delete('/userdelete/:id',insert1);

router.put('/userup/:id', insert2);

router.get('/userdataget',insert3);


module.exports = router;
