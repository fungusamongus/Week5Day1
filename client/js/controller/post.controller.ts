interface Post {
		author: string;
		title: string;
		content: string;
	}

app.controller('post.controller.js', ['$scope','$location', 'ParseData', function ($scope, $location, ParseData) {
	
	
	
	$scope.post = function (view: string){
		
		
		
		var post: Post = {
		author: $scope.author,
		title: $scope.title,
		content: $scope.content
		}
		ParseData.save(post)
		$location.path(view);
		
	
	}
}]);

