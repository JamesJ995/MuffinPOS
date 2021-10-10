const db = require('./connection');
const { User, Product, Category, Option } = require('../models');

db.once('open', async () => {
  await Option.deleteMany();

  const options = await Option.insertMany([
    { name: 'Cream' },
    { name: 'Sugar' },
  ]);

  console.log('seeds\n', options);

  await Category.deleteMany();

  console.log('options seeded');

  const categories = await Category.insertMany([
    // {
    //   name: 'Toast',
    //   addOns: [
    //     'Peanut Butter',
    //     'Apple Butter',
    //     'Pumpkin Butter',
    //     'Cinamon Butter',
    //     'Butter',
    //     'Avacado Spread',
    //   ],
    // },
    { name: 'Donuts' },
    { name: 'Coffee' },
    { name: 'Kolaches' },
    { name: 'Eggs' },
    // { name: 'Tacos', addOns: ['Mild Salsa', 'Medium Salsa', 'Fire Salsa'] },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    // {
    //   name: 'Cloud Toast',
    //   description: 'Toasted wonder bread',
    //   image: 'https://picsum.photos/200/200',
    //   category: categories[0]._id,
    //   price: 2.99,
    //   quantity: 500,
    // },
    // {
    //   name: 'Weat Toast',
    //   description: 'Toasted wheat bread',
    //   image: 'https://picsum.photos/200/200',
    //   category: categories[0]._id,
    //   price: 2.99,
    //   quantity: 500,
    // },
    // {
    //   name: 'Marble Toast',
    //   description: 'Toasted marble rye bread',
    //   image: 'https://picsum.photos/200/200',
    //   category: categories[0]._id,
    //   price: 2.99,
    //   quantity: 500,
    // },
    {
      name: 'Plain Donut',
      description: 'A plain donut',
      image: 'plain-donut.jpg',
      category: categories[0]._id,
      price: 1.0,
      quantity: 500,
      options: [],
    },
    {
      name: 'Chocolate Donut',
      description: 'A double chocolate donut',
      image: 'chocoDonut.jpg',
      category: categories[0]._id,
      price: 1.0,
      quantity: 500,
      options: [],
    },
    // {
    //   name: 'Party Donut',
    //   description: 'A sprinkle donut',
    //   image: 'https://picsum.photos/200/200',
    //   category: categories[1]._id,
    //   price: 1.0,
    //   quantity: 500,
    // },
    {
      name: 'Apple Fritter',
      description: "God's greatest gift to humanity",
      image: 'appleFritter.jpg',
      category: categories[0]._id,
      price: 1.5,
      quantity: 500,
      options: [],
    },
    {
      name: 'Coffee',
      description: "God's second greatest gift to humanity",
      image: 'coffee.jpg',
      category: categories[1]._id,
      price: 1.5,
      quantity: 500,
      options: [options[0]._id, options[1]._id],
    },
    {
      name: 'Sausage Kolache',
      description: 'Sausage wrapped in fluffy pastry',
      image: 'sausKolache.jpg',
      category: categories[2]._id,
      price: 2.99,
      quantity: 500,
      options: [],
    },
    {
      name: 'Sweet Kolache',
      description: 'Jelly wrapped in fluffy pastry',
      image: 'sweetKolache.jpg',
      category: categories[2]._id,
      price: 2.99,
      quantity: 500,
      options: [],
    },
    {
      name: 'Egg',
      description: 'just egg',
      image: 'egg.jpg',
      category: categories[3]._id,
      price: 1.99,
      quantity: 500,
      options: [],
    },
    // {
    //   name: 'Chorizo and Egg',
    //   description: 'Chorizo egg taco',
    //   image: 'https://picsum.photos/200/200',
    //   category: categories[4]._id,
    //   price: 1.99,
    //   quantity: 500,
    // },
    // {
    //   name: 'Hash and Egg',
    //   description: 'fried potatoe and egg taco',
    //   image: 'https://picsum.photos/200/200',
    //   category: categories[4]._id,
    //   price: 1.99,
    //   quantity: 500,
    // },
  ]);

  console.log('product seeds\n', products);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Javier',
    lastName: 'Vilchis',
    email: 'javier@vilchis.com',
    password: 'password12345',
    employeeID: '001',
  });

  await User.create({
    firstName: 'James',
    lastName: 'Johnson',
    email: 'james@johnson.com',
    password: 'password12345',
    employeeID: '002',
  });

  await User.create({
    firstName: 'Robby',
    lastName: 'Hare',
    email: 'robby@hare.com',
    password: 'password12345',
    employeeID: '003',
  });

  await User.create({
    firstName: 'Jeremy',
    lastName: 'Williams',
    email: 'jeremy@williams.com',
    password: 'password12345',
    employeeID: '004',
  });

  console.log('users seeded');

  process.exit();
});
