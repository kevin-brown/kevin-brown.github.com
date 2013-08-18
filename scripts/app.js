var Website = angular.module("website", ["ui.bootstrap"]);

Website.config(["$routeProvider", function($routeProvider)
{
    $routeProvider
    .when("/home", {
        controller: "IndexCtrl",
        templateUrl: "views/index.html"
    })
    .when("/projects", {
        controller: "ProjectsCtrl",
        templateUrl: "views/projects.html"
    })
    .when("/resume", {
        controller: "ResumeCtrl",
        templateUrl: "views/resume.html"
    })
    .otherwise({
        redirectTo: "/home"
    });
}]);
