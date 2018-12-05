import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

/* eslint-disable object-shorthand */

export const Users = new Mongo.Collection('Users');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('users', function usersPublication() {
    return Users.find();
  });
}

/**
 * Create the schema for Users
 */
export const UsersSchema = new SimpleSchema({
  service: {
    label: 'Service',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Users',
      placeholder: 'Service (i.e. Gmail)',
    },
  },

  user: {
    label: 'User',
    type: String,
    optional: false,
    max: 30,
    autoform: {
      group: 'Users',
      placeholder: 'User Name',
    },
  },

  password: {
    label: 'Password',
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: 'Users',
      placeholder: 'Password',
    },
  },
});

Users.attachSchema(UsersSchema);
