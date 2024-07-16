const { openDB } = require('idb');

const initDB = async () => {
  const db = await openDB('UserDB', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('user')) {
        db.createObjectStore('user', { keyPath: 'id', autoIncrement: true });
      }
    }
  });
  return db;
};

module.exports = initDB;
