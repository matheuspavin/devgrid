const router = require('express').Router();
const submissionsService = require('../services/submissionsService');

router.post('/', async (req, res, next) => {
	const body = req.body;
	const result = await submissionsService.createSubmission(body.submission);
	console.log(result);
	return res.send(result);
});

router.get('/', async (req, res, next) => {
	const result = await submissionsService.getLatestSubmission();
	return res.send(result);
});


module.exports = router;
