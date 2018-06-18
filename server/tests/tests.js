
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

    describe.only('Gists tests', function () {
        it('Should create a new gist', async function () {
            const savePurchaseStub = sinon.stub(gistsGateway, "getGistComments").callsFake(gistMock.gistComments);
            const created = await gistsService.getGistComments();
            expect(created).to.equal(gistMock.gistComments());
        });
        // it('Should output the latest submission', async function () {
        //     const output = await submissionsService.getLatestSubmission();
        //     const expectedOutput = "1 2 66\n3 1 11\n";
        //     expect(output).to.equal(expectedOutput);
        // });
    });
});
