import angular from 'angular';
import 'angular-ui-router';
import '/modules/html_templates/html_templates.module';

import HomeConfig from './home.config';
import HomeController from './home.controller';

export default angular.module('Home', ['ui.router', 'HTMLTemplates'])
                      .config(HomeConfig)
                      .controller('HomeController', HomeController);
