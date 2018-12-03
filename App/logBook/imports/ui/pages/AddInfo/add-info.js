import { AutoForm } from 'meteor/aldeed:autoform';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Template } from 'meteor/templating';
import { Users } from '../../../api/userinfo/userinfo.js';

/* eslint-disable object-shorthand, no-unused-vars */

/**
 * After successful addition of a new Stuff document, go to List page.
 * See: https://github.com/aldeed/meteor-autoform#callbackshooks
 */
AutoForm.hooks({
  AddInfoForm: {
    /**
     * After successful form submission, go to Account.
     * @param formType The form.
     * @param result The result of form submission.
     */
    onSuccess: function onSuccess(formType, result) {
      FlowRouter.go('Account');
    },
  },
});

Template.Add_Info_Page.helpers({
  usersCollection() {
    return Users;
  },
});
