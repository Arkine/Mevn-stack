const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
	res.send('Got the index route')
});

module.exports = router;