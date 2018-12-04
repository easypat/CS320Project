import { Template } from 'meteor/templating';
import { Users } from '../../../api/userinfo/userinfo.js';

Template.Passwords.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  usersList() {
    return Users.find();
  },
});
