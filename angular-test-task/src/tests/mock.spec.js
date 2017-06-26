describe('My tests', function() {
	// it('has a dummy spec to test 2 + 2', function() {
	// 	expect(true).toBeTruthy();
	// });

	it("has four items", function() {
		expect($scope.log.length).toBe(400);
	});

	it('expects submitLogin() to have been called', function() {
		spyOn(component, 'submitLogin').and.callThrough();

		//make the call to submitLogin
		component.submitLogin();

		//check internal function
		expect(component.submitLogin).toHaveBeenCalled();
		expect(component.apiService.login).toHaveBeenCalled();
	})

	it('is correctly fills form',function(){
		loadFixtures("create_album.html");
		var form = new GC.form_helper($("#simple_form"));
		form.fill({
			"name_input": "Simple test passed",
			"check": true
		});
		expect($("#check")).toBeChecked();
		expect($("#name")).toHaveValue("Simple test passed");
	});
});




describe('Testing Routes', function(){
	var $route,$stateProvider, $urlRouterProvider, $location, $httpBackend;

	beforeEach(function(){
		module('plunker');

		inject(function($injector){
			$route = $injector.get('$route');
			$rootScope = $injector.get('$rootScope');
			$location = $injector.get('$location');
			$httpBackend = $injector.get('$httpBackend');


		});
	})

	it('should navigate to home', function(){
		// navigate using $apply to safely run the $digest cycle
		$rootScope.$apply(function() {
			$location.path('/welcome');
		});
		expect($location.path()).toBe('/welcome');
		expect($route.current.templateUrl).toBe('welcome_page.html');
		expect($route.current.controller).toBe('WelcomeController');
	})

	it('should redirect not registered urls to home', function(){
		// navigate using $apply to safely run the $digest cycle
		$rootScope.$apply(function() {
			$location.path('/articles');
		});
		expect($location.path()).toBe('/articles');
		expect($route.current.templateUrl).toBe('article.html');
		expect($route.current.controller).toBe('ArticleListController');
	})
})