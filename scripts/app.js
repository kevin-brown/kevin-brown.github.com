var Website = angular.module("website", ["ui.bootstrap"]);

Website.config(["$routeProvider", function($routeProvider)
{
    $routeProvider.when("/home", {
        controller: "IndexCtrl",
        templateView: "views/index.html"
    }).otherwise({
        redirectTo: "/home"
    });
}]);
