import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import Users from './data/Users.js';
import Templates from './data/Templates.js';
// import MimModel from './models/MimModel.js';
import Template from './models/TemplateModel.js';
import User from './models/UserModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // await MimModel.deleteMany();
    await Template.deleteMany();
    await User.deleteMany();

    const createUsers = await User.insertMany(Users);
    const adminUser = createUsers[0]._id;

    await Template.insertMany(Templates);

    console.log('Data imported'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    // await MimModel.deleteMany();
    await Template.deleteMany();
    await User.deleteMany();

    console.log('Data destroyed'.red.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
