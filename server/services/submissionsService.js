
let output = "";


const createSubmission = async function (submission) {
    output = "";
    const parsedSubmission = submission.toString().split('\n');
    const cases = parsedSubmission.shift();
    const outputs = {};
    for (line of parsedSubmission) {
        const [contestant, question, time, letter] = line.split(' ');
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
            }
        }
    }
    await parseOutput(outputs);
    return output;
};


const getLatestSubmission = async function () {
    return output;
};


const parseOutput = function (outputs) {
    for (object in outputs) {
        output += outputs[object].toString().replace(/,/g, ' ');
        output += '\n'
    }
};

module.exports = {
    createSubmission,
    getLatestSubmission
}