//The action to call the parse service should be here.
app.factory('ParseData', ['$http', '$resource', function ($http, $resource) {
        var headers = {
            'X-Parse-Application-Id': '8k7LXICOqCkunJ8L4dVgfnRo4UtTNvhX10FeOwDy',
            'X-Parse-REST-API-Key': 'GRSF9DEbUmJOruArM9kFcec89tSttiXadJLZiPXm',
            "Content-Type": "application/json"
        };
        var ParseFactory = $resource('https://api.parse.com/1/classes/BlogPosts/:id', {}, {
            'query': {
                headers: headers
            },
            'save': {
                method: 'POST',
                headers: headers
            }
        });
        return ParseFactory;
    }]);
