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
        withCategory: function (category)
        {
            var filtered = [];

            for (var i = 0; i < projects.length; i++)
            {
                var project = projects[i];

                if (project.category == category) {
                    filtered.push(project);
                }
            }

            return filtered;
        },
        withTool: function (tool)
        {
            var filtered = [];

            for (var i = 0; i < projects.length; i++)
            {
                var project = projects[i];
                var tools = project.tools;

                for (var t = 0; t < tools.length; t++)
                {
                    if (tools[t].slug == tool)
                    {
                        filtered.push(project);
                        break;
                    }
                }
            }

            return filtered;
        },
        projects: function ()
        {
            return projects;
        }
    };
}]);
