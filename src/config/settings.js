
const settings = {
  dev: {
    apiUrl: "http://localhost:3800/api",
  },
  staging: {
    apiUrl: "http://localhost:3800/api",
  },
  prod: {
    apiUrl: "http://localhost:3800/api",
  },
};

const getCurrentSettings = () => {
  return settings.prod;
};

export default getCurrentSettings();
