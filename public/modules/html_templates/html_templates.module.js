;(function(){

'use strict';

angular.module('HTMLTemplates', []).run(['$templateCache', function($templateCache) {

  $templateCache.put('modules/home/home.tpl.html', '<h2>Home</h2> {{ home.title }} ');

}]);

})();