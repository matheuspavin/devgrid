const router = require('express').Router();
const submissionsService = require('../services/submissionsService');

router.post('/', async (req, res, next) => {
	const key = req.params.key;
	const body = req.body;
	const result = await cacheService.insertCache(key, body);
	return res.send(result);
})