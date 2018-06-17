

const createSubmission = async function (submission) {
    const parsedSubmission = submission.split('\n');
    const cases = parsedSubmission.shift();
    const outputs = {};
    for (line of parsedSubmission) {
        const parsedLine = line.split(' ');
        const contestant = parsedLine[0];
        const question = parsedLine[1];
        const time = parsedLine[2];
        const letter = parsedLine[3];
        if (outputs.hasOwnProperty(contestant)) {
            if (letter === 'C') {
                outputs[contestant][1]++;
                outputs[contestant][2] =  outputs[contestant][2] + Number(time);
            } else if (letter === 'I') {
                outputs[contestant][2] = outputs[contestant][2] + 20;
            }
        } else {
            if (letter === 'C') {
                outputs[contestant] = [contestant, 1, time]
            } else if (letter === 'I') {
                outputs[contestant] = [contestant, 0, 20];
                console.log(outputs)
            }
        }
    }
    return submission;
};

module.exports = {
    createSubmission
}