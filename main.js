var app = angular.module('deferredApp', []);

app.controller('mainController', function($scope, $q) {
    $scope.test = function() {
        var deferred = $q.defer();
        console.log($q.defer());

        var promise = deferred.promise;
        promise.then(function(value) {
                alert('sucess: ' + value);
            },
            function(value) {
                alert('failure: ' + value);
            });

$scope.loadUser = function(){
		getUser()
			.then(getStaff)
			.then(function(result){
				alert(JSON.stringify(result));
			});
};
function getUser(){
	var deferred =$q.defer();
	setTimeOut(function(){
		deferred.resolve({
			Id: 5,
			staffId: 11,
			Username: "Meatball"
		});
	},100);
	return deferred.promise;
}
function loadStaff(user){
	var deferred = $q.defer();
	setTimeOut(function(){
		deferred.resolve({
			staffId: 44,
			firstName: "poo",
			lastName: "bare",
		});
	},300);
	return deferred.promise;
}






















        if ($scope.fail) {
            deferred.reject("sorry bitches");
        }
        else {
            deferred.resolve("cool beans");
        }

    };
});