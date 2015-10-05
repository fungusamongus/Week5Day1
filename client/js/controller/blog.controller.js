app.controller('blog.controller.js', ['$scope', '$location', 'ParseData', function ($scope, $location, ParseData) {
        $scope.posts = [];
        $scope.newPost = function (view) {
            $location.path(view);
        };
        ParseData.query().$promise.then(function (data) {
            $scope.posts = data.results;
        });
        $scope.viewPost = function (view) {
            console.log(view);
        };
    }]);
