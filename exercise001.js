const promise = new Promise((resolve, reject) => {
  // Generate random number between 0 and 9
  const randomInt = Math.floor(Math.random() * 10);

  if (randomInt % 2 === 0) {
    // Success
    setTimeout(() => resolve("done"), 2000);
  } else {
    // Failure
    setTimeout(() => reject("error"), 2000);
  }
});

// Your solution(s) to exercise001 here!
// promise
//   .then((response) => {
//     console.log(`Yay! Promise resolved with response:  ${response}`);
//   })
//   .catch((response) => {
//     console.log(`Promise rejected with response: ${response}`);
//   });

const getPromiseResponse = async () => {
  try {
    const promiseResponse = await promise;
    console.log(`Yay! Promise resolved with response: ${promiseResponse}`);
  } catch (errorCode) {
    console.error(`Promise rejected with response: ${errorCode}`);
    //console.log(errorCode);
  }
};

getPromiseResponse();
