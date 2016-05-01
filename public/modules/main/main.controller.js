export default class MainController{
  constructor($scope) {
    let siteName = 'JSPM Angular Project';
    $scope.pageTitle = siteName;

    $scope.$on('$stateChangeSuccess', function(event, toState) {
      if(toState.data != null && toState.data.pageTitle != null) {
        $scope.pageTitle = toState.data.pageTitle + ' | ' + siteName;
      } else {
        $scope.pageTitle = siteName;
      }
    });
  }
}
