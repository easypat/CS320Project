import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

Template.Passwords.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  usersList() {
    return Stuff.find();
  },
});
