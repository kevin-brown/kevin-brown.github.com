Website.controller("IndexCtrl", ["$scope", "Project", function($scope, Project)
{
    $scope.$evalAsync(function ()
    {
        Project.getAll();
    });

    $scope.$watch(function () {
        if ($scope.web || $scope.native) {
            return;
        }

        var webProjects = Project.withCategory("web");
        var nativeProjects = Project.withCategory("native");

        if (webProjects.length === 0 || nativeProjects.length === 0) {
            return;
        }

        for (var i = webProjects.length - 1; i >= 0; i--) {
            var project = webProjects[i];

            if (project.images === null) {
                webProjects.splice(i, 1);
            }
        }

        for (var i = nativeProjects.length - 1; i >= 0; i--) {
            var project = nativeProjects[i];

            if (project.images === null) {
                nativeProjects.splice(i, 1);
            }
        }

        var webIndex = Math.floor(Math.random() * webProjects.length);
        var web = webProjects[webIndex];

        var webImageIndex = Math.floor(Math.random() * web.images.length);
        web.image = web.images[webImageIndex];

        var nativeIndex = Math.floor(Math.random() * nativeProjects.length);
        var native = nativeProjects[nativeIndex];

        var nativeImageIndex = Math.floor(Math.random() * native.images.length);
        native.image = native.images[nativeImageIndex];

        $scope.web = web;
        $scope.native = native;
    });
}]);
