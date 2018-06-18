const router = require('express').Router();
const gistsService = require('../services/gistsService');

router.post('/', async (req, res, next) => {
	const body = req.body;
	const result = await gistsService.createGist(body.content);
	return res.send(result);
});

router.get('/:gist_id/comments', async (req, res, next) => {
    const gist = req.params.gist_id;
	const result = await gistsService.getGistComments(gist);
	return res.send(result);
});


module.exports = router;
