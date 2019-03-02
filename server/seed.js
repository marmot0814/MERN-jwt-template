require('dotenv').config();
const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE);

const db = require('./models');

const users = [
  { username: 'admin', password: 'admin', isAdmin: true },
  { username: 'user1', password: 'user1', isAdmin: false },
  { username: 'user2', password: 'user1', isAdmin: false }
];

const seed = async () => {
  try {
    await db.User.remove();
    console.log('DROP ALL USERS');

    await Promise.all(
      users.map(async user => {
        const data = await db.User.create(user);
        await data.save();
      }),
    );
    console.log('CREATED USERS', JSON.stringify(users));
  } catch (err) {
    console.error(err);
  }
};

seed();