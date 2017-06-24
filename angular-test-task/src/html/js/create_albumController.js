/**
 * Created by vitalik on 23.06.17.
 */
/**
 *
 *@controller - CreateAlbumController
 *@config  - Work with edit or add albums
 *@param $scope,$http,$albums,$window
 */

(function () {
    angular.module("mainApp")
        .controller("CreateAlbumController", function ($scope,$http,$albums,$window) {


            $scope.user = $albums.album;

            /**
             *@function submitForm - Processing the form, and then sending a specific request to the server
             *@param  {object} - $scope.data- window object  && $scope.user - object for server
             *@config post request for server
             */

            $scope.submitForm = function() {
                // check to make sure the form is completely valid
                if ($scope.userForm.$valid && $albums.btnsave == false) {
                    // console.log($scope.user);
                    $scope.data = $scope.user;
                    $scope.user = {};
                    $scope.userForm.title.$pristine  = true;
                    for (x in $scope.data) {
                        $scope.data[x] = String($scope.data[x]);
                    }
                    // console.log($scope.user);
                    $http.post('/albums/add',$scope.data );
                        // .success(function (data, status, headers, config) {
                        //     $scope.PostDataResponse = data;
                        // })
                        // .error(function (data, status, header, config) {
                        //     $scope.ResponseDetails = "Data: " + data +
                        //         "<hr />status: " + status +
                        //         "<hr />headers: " + header +
                        //         "<hr />config: " + config;
                        // });
                }else {
                    $scope.data = $scope.user;
                    $scope.user = {};
                    $scope.userForm.title.$pristine  = true;
                    for (x in $scope.data) {
                        $scope.data[x] = String($scope.data[x]);
                    }
                    $http.post('/albums/update/' + $albums.album.id ,$scope.data );
                        // .success(function (data, status, headers, config) {
                        //     $scope.PostDataResponse = data;
                        // })
                        // .error(function (data, status, header, config) {
                        //     $scope.ResponseDetails = "Data: " + data +
                        //         "<hr />status: " + status +
                        //         "<hr />headers: " + header +
                        //         "<hr />config: " + config;
                        // });
                }

            };

            
            /**
             *@function editLocation- change location
             *@config location and clear data
             */

            $scope.editLocation = function(){
                $albums.btnsave = false;
                $albums.album = {};
                $window.location.href = "index.html#!/articles";
            }
        
        
        })
})();