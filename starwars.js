import fetch from "node-fetch";

const jsonTypicodeurlPath = "https://swapi.dev/api/films/1";

const fetchData = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    console.log(response);
    const json = response.json;
    console.log(json);
  } catch (errorCode) {
    console.log(errorCode);
  }
};

fetchData(jsonTypicodeurlPath);
