function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 1: Data fetched");
      resolve("User Data");
    }, 1000);
  });
}

function processUserData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Step 2: Processing ${data}`);
      resolve("Processed Data");
    }, 1000);
  });
}

function saveToDatabase(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Step 3: Saving ${data} to DB`);
      resolve("Database Entry Created");
    }, 1000);
  });
}

// Chaining promises together
fetchData()
  .then((userData) => processUserData(userData))
  .then((processedData) => saveToDatabase(processedData))
  .then((finalResult) => console.log(`Step 4: ${finalResult}`))
  .catch((error) => console.error("Error:", error)).;