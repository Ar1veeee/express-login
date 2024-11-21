const db = require("../config/db");
const bcrypt = require("bcrypt");

const createUser = async (username, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return new Promise((resolve, reject) => {
    db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, hashedPassword],
      (error, results) => {
        if (error) reject(error);
        resolve(results);
      }
    );
  });
};

const findUserByEmail = (email) => {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      (error, results) => {
        if (error) reject(error);
        resolve(results[0]);
      }
    );
  });
};

const User = {
  findUserById: async (user_id) => {
    const query = `
        SELECT * FROM users WHERE id = ?
      `;
    return new Promise((resolve, reject) => {
      db.query(query, [user_id], (error, results) => {
        if (error) {
          reject(error);
        }
        resolve(results.length > 0 ? results[0] : null);
      });
    });
  },
};

module.exports = { createUser, findUserByEmail, User };
