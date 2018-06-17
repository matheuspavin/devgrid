
const expect = require('chai').expect
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
});
