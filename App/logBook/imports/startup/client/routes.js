import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/layouts/header/Header.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/About_Page/About.js'; //import the path to the js file that imports the needed HTML file!
import '../../ui/pages/CreateAccount/Create.js';
import '../../ui/pages/Login/auth.js';

// Set up all routes in the app
FlowRouter.route('/junk', {
  name: 'App_home',
  action() {
    BlazeLayout.render('App_body', {main: 'App_home' });
  },
});

FlowRouter.route('/', {
  name: 'about_page',
  action() {
    BlazeLayout.render('App_body', { main: 'about_page' });
  },
});


FlowRouter.route('/createAccount', {
  name: 'create_account_page',
  action() {
    BlazeLayout.render('App_body', { main: 'create_account_page' });
  },
});

FlowRouter.route('/Login', {
  name: 'Login_Form',
  action() {
    BlazeLayout.render('App_body', { main: 'Login_Form' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
