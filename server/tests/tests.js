
const expect = require('chai').expect
const sinon = require('sinon');
const rest = require('../infra/rest');
const gistMock = require('./gistMock');
const gistsGateway = require('../gateways/gistsGateway');
const gistsService = require('../services/gistsService');
const submissionsService = require('../services/submissionsService');

describe('Submission Tests tests', function () {
    describe('Contestant submissions', function () {
        it('Should input a new submission', async function () {
            const newSubmission = {
                submission: `1\n1 2 10 I\n3 1 11 C\n1 2 19 R\n1 2 21 C\n1 1 25 C`
            }
            const output = await submissionsService.createSubmission(newSubmission.submission);
            const expectedOutput = "1 2 66\n3 1 11\n";
            expect(output).to.equal(expectedOutput);
        });
        it('Should output the latest submission', async function () {
            const output = await submissionsService.getLatestSubmission();
            const expectedOutput = "1 2 66\n3 1 11\n";
            expect(output).to.equal(expectedOutput);
        });
    });

    describe('Gists tests', function () {
        it('Should get the comments of a gist', async function () {
            sinon.stub(gistsGateway, "getGistComments").callsFake(gistMock.gistComments);
            const created = await gistsService.getGistComments('fa4ad4071fcd10df7700882d8bc0ed4f');
            expect(created[0].body).to.equal(gistMock.gistComments('fa4ad4071fcd10df7700882d8bc0ed4f')[0].body);
        });
        it('Should insert a new gist', async function () {
            const username = {
                user: 'teste',
                password: 'pass'
            }
            const requestBody =
            {
                description: 'Description of the gist',
                public: 'true',
                files: {
                    'Name of the gist':
                        { content: 'Content of the gist' }
                }
            }
            sinon.stub(gistsGateway, "createGist").callsFake(gistMock.createGist);
            const created = await gistsService.createGist(requestBody, username);
            expect(created.description).to.equal('Descrição do gist');
        });
    });
});
