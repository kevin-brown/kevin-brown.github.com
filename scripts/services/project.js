Website.factory("Project", ["$http", function($http)
{
    var projects = [];

    return {
        getAll: function ()
        {
            $http.get("/projects.json")
            .success(function (data)
            {
                projects = data;
            });
        },
        projects: function ()
        {
            return projects;
        }
    };
}]);
