export default function HomeConfig($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      views: {
        '': {
          controller: 'HomeController',
          controllerAs: 'home',
          templateProvider: function ($templateCache) {
            return $templateCache.get('modules/home/home.tpl.html');
          }
        }
      },

      data: {
        pageTitle: 'Home'
      }
    });
}
