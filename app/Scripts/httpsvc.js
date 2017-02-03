myApp.factory('httpSvc', function ($http, $q) {
          var errorMessage = {
          get: 'An error occurred while fetching data',
          put: 'An error occurred while updating data',
          post: 'An error occurred while adding data',
          delete: 'An error occurred while deleting data'
        };
	return {
		get: function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'https://api.github.com/users'})
          .then(function(data){
            deferred.resolve(data);
          }, function(data){
            deferred.reject(data.developerMessage || errorMessage.get);
          });
        return deferred.promise;
      }
	};
});