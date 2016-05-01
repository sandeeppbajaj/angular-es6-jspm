import angular from 'angular';
import 'angular-ui-router';

import HomeConfig from './home.config';
import HomeController from './home.controller';

export default angular.module('Home', ['ui.router'])
                      .config(HomeConfig)
                      .controller('HomeController', HomeController);
