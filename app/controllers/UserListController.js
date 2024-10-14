
//
const dust = require('dustjs-linkedin');


const data = {
  products: [
    { name: "Laptop", price: "23", description: "High-performance laptop." },
    { name: "Smartphone", price: "43", description: "Latest model smartphone." },
    { name: "Headphones", price: "345", description: "Noise-cancelling headphones." },
    { name: "Smartwatch", price: "123", description: "Fitness and health tracking smartwatch." }
  ]
};

module.exports.index = (req, res) => {
  res.render('userList/index', data, (err, out) => {


    if (err) {
      return res.status(500).send('Error rendering template');
    }
    res.send(out);
  });
};
