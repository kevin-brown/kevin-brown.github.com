Website.controller("ProjectsCtrl", ["$scope", "Project",
function ($scope, Project)
{
    $scope.$evalAsync(function ()
    {
        Project.getAll();
    });

    $scope.$watch(function ()
    {
        $scope.projects = Project.projects();
    });
}]);
