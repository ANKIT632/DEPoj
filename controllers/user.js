const initDB = require('./initDB');

const getAllItems = async (req, res) => {
  const db = await initDB();
  const tx = db.transaction('users', 'readonly');
  const store = tx.objectStore('users');
  const allItems = await store.getAll();
  console.log(allItems);
  res.json(allItems);
};

const getItem = async (req, res) => {
  const db = await initDB();
  const tx = db.transaction('users', 'readonly');
  const store = tx.objectStore('users');
  const item = await store.get(Number(req.params.id));
  console.log(item);
  res.json(item);
};

const addItem = async (req, res) => {
  const db = await initDB();
  const tx = db.transaction('users', 'readwrite');
  const store = tx.objectStore('users');
  const id = await store.add(req.body);
  res.json({ id });
};

const updateItem = async (req, res) => {
  const db = await initDB();
  const tx = db.transaction('users', 'readwrite');
  const store = tx.objectStore('users');
  await store.put({ ...req.body, id: Number(req.params.id) });
  res.sendStatus(200);
};

const deleteItem = async (req, res) => {
  const db = await initDB();
  const tx = db.transaction('users', 'readwrite');
  const store = tx.objectStore('users');
  await store.delete(Number(req.params.id));
  res.sendStatus(200);
};

module.exports = {
  getAllItems,
  getItem,
  addItem,
  updateItem,
  deleteItem,
};
