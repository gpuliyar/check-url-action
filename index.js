const core = require('@actions/core');
const axios = require('axios');

const main = async() => {
  try {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    const url = core.getInput('url', {required: true});
    const initDelayStr = core.getInput('init-delay', {required: true});
    const retryCountStr = core.getInput('retry-count', {required: true});
    const retryDelayStr = core.getInput('retry-delay', {required: true});
    const codesAllowed = core.getInput('codes-allowed', {required: true});

    const initDelay = parseInt(initDelayStr) > 30000 ? 30000 : parseInt(initDelayStr);
    var retryCount = parseInt(retryCountStr) > 5 ? 5 : parseInt(retryCountStr);
    const retryDelay = parseInt(retryDelayStr) > 30000 ? 30000 : parseInt(retryDelayStr);
    const codesAllowedArr = codesAllowed.split(',').map(Number);

    await sleep(initDelay);
    var failed = true;

    do {
      try {
        await axios.get(url).then(response => {
          failed = !codesAllowedArr.includes(response.status);
        }).catch(function (error) {
          console.log(`Error accessing url: ${error.message}`);
        });
      } catch(error) {
        console.log(`Error accessing url: ${error.message}`);
      }

      await sleep(retryDelay);
    } while(retryCount-- > 0 && failed);

    failed && core.setFailed('Failed to access url');
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
