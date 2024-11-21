const db = require("../config/db");

exports.testAPI = (req, res) => {
  res.status(200).json({
    message: "API is working!",
    timestamp: new Date().toISOString(),
  });
};

exports.testDB = (req, res) => {
  db.query("SELECT 1", (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Database connection failed!",
        error: err.message,
      });
    }
    res.status(200).json({
      message: "Database is connected!",
      results,
    });
  });
};
