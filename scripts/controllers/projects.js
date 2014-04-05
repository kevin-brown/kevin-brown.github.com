Website.controller("ProjectsCtrl", ["$scope", "Project", "$routeParams",
function ($scope, Project, $routeParams)
{
    $scope.$evalAsync(function ()
    {
        Project.getAll();
    });

    $scope.$watch(function ()
    {
        if ("tool" in $routeParams) {
            $scope.projects = Project.withTool($routeParams.tool);
        } else if ("category" in $routeParams) {
            $scope.projects = Project.withCategory($routeParams.category);
        } else {
            $scope.projects = Project.projects();
        }
    });
}]);
