const doSomethingStepOne = (state) => {
    console.log("state 1, step one", state)
    state.number = 1
    state.helloFromStateOne = true;
    console.log("state updated", state)
    return state;
}

const doSomethingStepTwo = (state) => {
    console.log("state 2, step two", state)
    state.number = 2
    console.log("state updated", state)
    return state;
}

const executeStepFunction = (event) => {
    return {}
}

module.exports.doSomethingStepOne = doSomethingStepOne;
module.exports.doSomethingStepTwo = doSomethingStepTwo;
module.exports.executeStepFunction = executeStepFunction;
