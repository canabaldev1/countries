const axios = require("axios");
const server = require("./src/server");
const { conn } = require("./src/db.js");
const PORT = 3001;
const fetchAllData = require("./src/controllers/fetchAllData.js");

conn
  .sync({ alter: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .then(() => {
    fetchAllData();
  })
  .then(() => console.log("Data loaded succesfully"))
  .catch((error) => console.error(error));
