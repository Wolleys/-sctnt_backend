const { connect } = require("./dbConn");
const PORT = process.env.PORT || 3300;
const { swaggerDocs: V1SwaggerDocs } = require("../v1/swagger");

// Start server, spin up swagger documentation and connect to MySQL DB
const startServer = (app) => {
  try {
    app.listen(PORT, () => {
      console.log("SERVER: started on port", PORT);
      V1SwaggerDocs(app, PORT);
      setTimeout(connect, 1000);
    });
  } catch (error) {
    console.error(error);
    process.exit();
  }
};

module.exports = startServer;
