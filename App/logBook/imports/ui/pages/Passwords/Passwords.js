import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Users } from '../../../api/userinfo/userinfo.js';

Template.Passwords.helpers({

  /**
   * @returns {*} All of the Stuff documents.
   */
  usersList() {
    return Users.find();
  },
  isOwner() {
    return this.owner === Meteor.userId();
  },
});

Template.Passwords.events({
  'click .delete'() {
    Users.remove(this._id);
  },
});
