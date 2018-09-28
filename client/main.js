import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import HomePage from '../imports/ui/home/HomePage';

Meteor.startup(() => {
  ReactDOM.render(<HomePage />, document.getElementById('app'));
});