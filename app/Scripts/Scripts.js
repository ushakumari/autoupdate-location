var myApp = angular
				.module('myModule',[])
				.controller('myController',function($scope,$http,$log,httpSvc){
					var successCallBack= function(res){
						$scope.users = res.data;
					};

					var errorCallBack= function(res){
						$scope.error = err.data;
					};
					$scope.output = httpSvc.get().then(successCallBack, errorCallBack);

var init = function(res){
	console.log('inside');
	
};
/*					$http({
						method: 'GET',
						url: 'https://api.github.com/users'})
					.then(successCallBack, errorCallBack);
					$scope.message ="Angular JS";*/

					

				});

