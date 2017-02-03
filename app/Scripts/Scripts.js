var myApp = angular
				.module('myModule',[])
				.controller('myController',function($scope,httpSvc){
					var authToken = '';
					var getLocations = function(res){
						authToken = res.data.results.Token;
						httpSvc.getLocations(authToken).then(successCallBack, errorCallBack);
					};

					var successCallBack= function(res){
						console.log(res.data.results.Locations)
						$scope.locations = res.data.results.Locations;
					};

					var errorCallBack= function(err){
						console.log(err.data);
						$scope.error = err.data;
					};

					httpSvc.postSession().then(getLocations, errorCallBack);
				});

