// src/config.js
const config = {
    // TODO: not using the api_base_url but left this file here in case we want to have config vars
    api_base_url: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080',
};

export default config;
