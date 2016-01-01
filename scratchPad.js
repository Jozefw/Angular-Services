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




