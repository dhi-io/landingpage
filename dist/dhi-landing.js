/**
 * dhi-landing
 * @version v0.1.0 - 2014-07-22
 * @link https://github.com/ganarajpr/dhi-landing
 * @author Ganaraj P R ()
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function(window, document, undefined) {
'use strict';
// Source: app.js
angular.module('ganarajpr.DhiLanding', [
  'ngAnimate',
  'ngRoute',
  'mgcrea.ngStrap'
]).constant('version', 'v0.1.0').config([
  '$locationProvider',
  '$routeProvider',
  function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(false);
    $routeProvider.when('/', { templateUrl: 'views/home.html' }).when('/features', { templateUrl: 'views/features.html' }).when('/contact', { templateUrl: 'views/contact.html' }).otherwise({ redirectTo: '/' });
  }
]);

// Source: main.js
angular.module('ganarajpr.DhiLanding').controller('MainCtrl', [
  '$scope',
  '$location',
  'version',
  function ($scope, $location, version) {
    $scope.$path = $location.path.bind($location);
    $scope.version = version;
  }
]);

// Source: sample.js
angular.module('ganarajpr.DhiLanding').directive('ngHelloWorld', function () {
  return {
    restrict: 'EAC',
    scope: true,
    compile: function compile(tElement, tAttrs) {
      tElement.html('<span>hello {{name}}</span>');
      return function postLink(scope, element, attrs, controller) {
        scope.name = 'world';
      };
    }
  };
});

// Source: sample.js
angular.module('ganarajpr.DhiLanding').filter('time', function () {
  return function (obj) {
    return +new Date(obj);
  };
}).filter('startFrom', function () {
  return function (obj, index) {
    return obj && obj.slice(index);
  };
});

// Source: sample.js
angular.module('ganarajpr.DhiLanding');

})(window, document);
