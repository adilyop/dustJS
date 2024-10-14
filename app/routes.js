// Define your Express routes here
// Check http://expressjs.com/fr/guide/routing.html for documentation

const { UserForm } = require('../js/userForm');
const ModalController = require('./controllers/ModalController');
const WelcomeController = require('./controllers/WelcomeController');
const UserListController = require('./controllers/UserListController');

//
module.exports.init = (app) => {
  app.get('/', WelcomeController.index);
  app.get('/user-list', UserListController.index);
  app.get('/modal-list', ModalController.index);

  // app.post('/submit', (req, res) => {
  //   const form = new UserForm().submit(req);

  //   if (form.errors) {
  //     req.flash('form', form);
  //     return res.redirect('/tt/tests/new');
  //   }

  //   // Continue processing valid data here
  // });
};


