
const expect = require('chai').expect
const submissionsService = require('../services/submissionsService');

describe('Submission Tests tests', function () {
    describe('Input submissions', function () {
        it('Should input a new submission', async function () {
            const newSubmission = {
                submission: `1\n1 2 10 I\n3 1 11 C\n1 2 19 R\n1 2 21 C\n1 1 25 C`
            }
            const submission = await submissionsService.createSubmission(newSubmission.submission);
            // const caches = await cacheService.getAll();
            // expect(cache.key).to.be.equal(newCache.key);
            expect(submission).to.be.equal(1);
        });
    });

    after(function (done) {
        sleep(5000);
        done();
        process.exit();
    });
});

const sleep = function (timeout) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, timeout);
    });
};