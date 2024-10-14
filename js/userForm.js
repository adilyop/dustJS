const { Form } = require('igo');
const { schema } = require('../models/user');

class UserForm extends Form(schema) {
  validate(req) {
    req.checkBody('email', 'error.email').notEmpty();
    req.checkBody('password', 'error.password').notEmpty();
  }
}