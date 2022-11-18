// schema must match seed
const mongoose = require('mongoose');
const Contact = require('../models/Contact');

require('dotenv').config();
const db = process.env.MY_MONGO_URI;

mongoose
  .connect(db)
  .then(() => console.log('Seed Connection Successful'))
  .catch((error) => console.log(error));

// MOCK DATA
const seedContacts = [
  {
    id: 1,
    firstName: 'Tina',
    lastName: 'Martin',
    email: 'tinafromaussie@outlook.com',
    phoneNumber: '659-350-4131',
    countryCode: 'AU'
  },
  {
    id: 2,
    firstName: 'Danny',
    lastName: 'Cruz',
    email: 'dannycruz@gmail.com',
    phoneNumber: '012-345-6789',
    countryCode: 'MX'
  },
  {
    id: 3,
    firstName: 'Trey',
    lastName: 'Johnson',
    email: 'tjohnson@yahoo.com',
    phoneNumber: '098-765-4321',
    countryCode: 'CA'
  },
  {
    id: 4,
    firstName: 'Jane',
    lastName: 'Jones',
    email: 'jjones@gmail.com',
    phoneNumber: '123-789-4560',
    countryCode: 'US'
  },
  {
    id: 5,
    firstName: 'John',
    lastName: 'Doe',
    email: 'jdoe@gmail.com',
    phoneNumber: '123-456-7890',
    countryCode: 'US'
  },
  {
    id: 6,
    firstName: 'Tina',
    lastName: 'Martin',
    email: 'tinafromaussie@outlook.com',
    phoneNumber: '659-350-4131',
    countryCode: 'AU'
  },
  {
    id: 7,
    firstName: 'Danny',
    lastName: 'Cruz',
    email: 'dannycruz@gmail.com',
    phoneNumber: '012-345-6789',
    countryCode: 'MX'
  },
  {
    id: 8,
    firstName: 'Trey',
    lastName: 'Johnson',
    email: 'tjohnson@yahoo.com',
    phoneNumber: '098-765-4321',
    countryCode: 'CA'
  },
  {
    id: 9,
    firstName: 'Jane',
    lastName: 'Jones',
    email: 'jjones@gmail.com',
    phoneNumber: '123-789-4560',
    countryCode: 'US'
  },
  {
    id: 10,
    firstName: 'John',
    lastName: 'Doe',
    email: 'jdoe@gmail.com',
    phoneNumber: '123-456-7890',
    countryCode: 'US'
  },
  {
    id: 11,
    firstName: 'Tina',
    lastName: 'Martin',
    email: 'tinafromaussie@outlook.com',
    phoneNumber: '659-350-4131',
    countryCode: 'AU'
  },
  {
    id: 12,
    firstName: 'Danny',
    lastName: 'Cruz',
    email: 'dannycruz@gmail.com',
    phoneNumber: '012-345-6789',
    countryCode: 'MX'
  },
  {
    id: 13,
    firstName: 'Trey',
    lastName: 'Johnson',
    email: 'tjohnson@yahoo.com',
    phoneNumber: '098-765-4321',
    countryCode: 'CA'
  },
  {
    id: 14,
    firstName: 'Jane',
    lastName: 'Jones',
    email: 'jjones@gmail.com',
    phoneNumber: '123-789-4560',
    countryCode: 'US'
  },
  {
    id: 15,
    firstName: 'John',
    lastName: 'Doe',
    email: 'jdoe@gmail.com',
    phoneNumber: '123-456-7890',
    countryCode: 'US'
  },
  {
    id: 16,
    firstName: 'Tina',
    lastName: 'Martin',
    email: 'tinafromaussie@outlook.com',
    phoneNumber: '659-350-4131',
    countryCode: 'AU'
  },
  {
    id: 17,
    firstName: 'Danny',
    lastName: 'Cruz',
    email: 'dannycruz@gmail.com',
    phoneNumber: '012-345-6789',
    countryCode: 'MX'
  },
  {
    id: 18,
    firstName: 'Trey',
    lastName: 'Johnson',
    email: 'tjohnson@yahoo.com',
    phoneNumber: '098-765-4321',
    countryCode: 'CA'
  },
  {
    id: 19,
    firstName: 'Jane',
    lastName: 'Jones',
    email: 'jjones@gmail.com',
    phoneNumber: '123-789-4560',
    countryCode: 'US'
  },
  {
    id: 20,
    firstName: 'John',
    lastName: 'Doe',
    email: 'jdoe@gmail.com',
    phoneNumber: '123-456-7890',
    countryCode: 'US'
  },
];

// seeding function
const seedDB = async () => {
  // deletes existing collection before initializing seeding
  await Contact.deleteMany({});
  await Contact.insertMany(seedContacts);
  console.log('Seeding Function Executed');
};
// call promise and its attachd callback to terminate connection after seeding
seedDB().then(() => {
  console.log('Connection Terminated');
  mongoose.connection.close();
});

