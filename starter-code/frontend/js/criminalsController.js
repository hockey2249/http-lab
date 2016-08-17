angular.module('SmoothCrimnal', [])
	.controller('CriminalsController', CriminalsController);

CriminalsController.$inject = ['$http'];


function CriminalsController($http){
		var self = this;
		self.all = [];  
	    self.addCriminals = addCriminals;
	    self.newCriminals = {};
 		
 		function getCriminals(){
    		$http
		      .get('http://localhost:3000/crimnals')
		      .then(function(response){
		       self.all = response.data.criminals;
    
    });
 }
		 getCriminals();
		
		function addCriminals(){
			$http
				.post('http://localhost:3000/criminals', self.newCriminal)
				.then(function(response){
					self.all.push(response.data.criminal);
				
				});
			
		}

}