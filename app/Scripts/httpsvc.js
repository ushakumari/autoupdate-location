myApp.factory('httpSvc', function ($http, $q) {
  var api_path = 'https://stagingpredict5.influencehealth.com:3000/predict'; 
  var token ='';
          var errorMessage = {
          get: 'An error occurred while fetching data',
          put: 'An error occurred while updating data',
          post: 'An error occurred while adding data',
          delete: 'An error occurred while deleting data'
        };
  return {
    getLocations: function (token) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: api_path + '/v1/clients/universitycolorado/orgs/primary/locations',
          headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json;charset=utf-8'
          }})
          .then(function(data){
            deferred.resolve(data);
          }, function(data){
            console.log(data);
            deferred.reject(data.developerMessage || errorMessage.get);
          });
        return deferred.promise;
      },
      postSession: function () {
        var deferred = $q.defer();
        $http({ method: 'POST', url: api_path + '/v1/clients/system/authToken', 
          data: {"Username":"mohamed.t-ext@influencehealth.com","Password":"Medseek123"} })
          .then(function (data, status, headers) {
            deferred.resolve(data);
          },function () {
            deferred.reject(errorMessage.post);
          });
        return deferred.promise;
      },
  };
});