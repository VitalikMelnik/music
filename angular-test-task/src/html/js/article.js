/**
 * Created by vitalik on 23.06.17.
 */
/**
 *
 *@controller - ArticleListController
 *@config  - Work with albums
 *@param $scope,$http,$albums,$window
 */

(function () {
    angular.module("mainApp")
        .controller("ArticleListController", function ($scope,$http,$albums,$window) {
            
               $scope.album = $albums.album;


               //get json

            /**
             *@function $http.get - get all albums from server
             *@param  {object} - $scope.log - final data
             */

                $http.get('/albums/all').then(
                    function (response) {
                        var todos = response.data;
                        $scope.log = [];
                        angular.forEach(todos, function(value, key) {
                            this.push(angular.fromJson(todos[key]));
                        },  $scope.log);
                    },
                    function(err) {
                        console.log('Error: ' + err);
                 });
            
                // $http.get('../html/data/400-id.json').then(
                //     function(response) {
                //         var todos = response.data;
                //         //console.log(angular.fromJson($scope.todos[10]),);
                //
                //     }, function(err) {
                //         console.log('Error: ' + err);
                //     });
                // console.log($scope.todos);


            // count 

            /**
             *@function $http.get - get count albums from server
             *@param  {object} - $scope.count - final object with integer count
             */

            $http.get('/albums/count',).then(
                function(response) {
                    $scope.count = response.data;

                    //console.log($scope.count.value);
                }, function(err) {
                    console.log('Error: ' + err);
                });



            //go to edit html page

            /**
             *@function editAlbum , $http.get - Transferring to another page, getting a specific alon and editing it
             *@param  {object} , id - final object for edit change
             */

            $scope.editAlbum = function(id){
                //console.log(id);
                $http.get('/albums/get/'+ id)
                    .then(
                        function(response){
                            var person = response.data;
                            //console.log(person);
                            // var filterInt = function (value) {
                            //     if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
                            //         return Number(value);
                            //     return NaN;
                            // }
                            person.year = Number.parseInt(person.year);
                            person.price = Number.parseFloat(person.price);
                            $albums.album = person;
                            $albums.btnsave = true;
                            //console.log($albums);
                            $window.location.href = "index.html#!/create_album";
                        },
                        function(response){
                            console.log('false');
                            $scope.msg = "Service not Exists";
                            // $scope.statusval = response.status;
                            // $scope.statustext = response.statusText;
                            // $scope.headers = response.headers();
                        }
                    );
               }

            // delete data

            /**
             *@function removeRow - delete album from server
             *@param  {object} - id- int from page for server
             *@config delete album from page and from object log
             */
            
            $scope.removeRow = function(id){
                 //console.log(id);
                 $http.delete('/albums/delete/'+ id)
                    .then(
                        function(response){
                            //console.log('true');
                        },
                        function(response){
                            //console.log('false');
                            $scope.msg = "Service not Exists";
                            // $scope.statusval = response.status;
                            // $scope.statustext = response.statusText;
                            // $scope.headers = response.headers();
                        }
                    );
                var index = -1;
                var comArr = eval( $scope.log );
                for( var i = 0; i < comArr.length; i++ ) {
                    if( comArr[i].id === id ) {
                        index = i;
                        break;
                    }
                }
                if( index === -1 ) {
                    console.log("Fixed your bag!!");
                }
                // console.log(comArr.length);
                $scope.log.splice( index, 1 );
                $scope.count.value -=1;
            };


            //modal window
            
            $scope.modal = false;

            /**
             *@function open_modal - opened new modal window
             *@param  {object} - id- int from page for server
             *@config opening window for previe data
             */
                               
            $scope.open_modal = function(id) {
                $scope.modal = true;
                $http.get('/albums/get/'+ id)
                    .then(
                        function(response){
                            $scope.modal_data = response.data;
                            $scope.modal_data.logoUrl = ' " ' +$scope.modal_data.logoUrl + ' " ';
                            //console.log($scope.modal_data);
                        },
                        function(response){
                            console.log('false');
                            $scope.msg = "Service not Exists";
                        }
                    );
            }

            /**
             *@function close_modal - closed  modal window
             *@config closed window and clear modal_data
             */
            
            $scope.close_modal = function() {
                $scope.modal = false;
                $scope.modal_data = {};
            }
        })
})();

