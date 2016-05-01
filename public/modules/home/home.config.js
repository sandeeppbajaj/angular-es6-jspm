export default function HomeConfig($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      views: {
        '': {
          controller: 'HomeController',
          controllerAs: 'home',
          templateUrl: 'modules/home/home.tpl.html'
        }
      },

      data: {
        pageTitle: 'Home'
      }
    });
}
