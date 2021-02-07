const axios = require("axios").default;

/* Constants */

const API_BASE_URL = "https://freefacts.azurewebsites.net/";

const getRandomFacts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}facts/random`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getFacts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}facts/`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getRandomFacts,
  getFacts,
};
