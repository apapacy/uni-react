import express from 'express';

const PORT = 3000;
const app = express();

//... your other express middlewares

// the listen method returns the currently running instance of
// http.Server object
const httpServer = app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});



// export httpServer object so we can access it in bootstrap
module.exports = httpServer;
