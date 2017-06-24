/**
 * Created by vitalik on 23.06.17.
 */
/**
 *@factory $albums - factory for edit function and button saved
 *@param btnsave, album
 */
(function () {
    angular.module("mainApp")
        .factory("$albums", function () {
            btnsave = false;

            album = {title : ' ',};

           return album;
        })
})();
