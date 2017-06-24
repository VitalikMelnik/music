/**
 * Created by vitalik on 23.06.17.
 */
/**
 *@factory $background - factory for generation image
 *@param backgroundList 
 */
(function () {
    angular.module("mainApp")
        .factory("$background", function () {

            var backgroundList = [
                "background",
                "background2",
                "background3",
                "background4",
                "background5",
                "background6",
                "background7",
                "background8"
                
            ];

            return {
                get: function () {
                    return backgroundList[Math.floor(Math.random() * backgroundList.length)];
                }
            }
        })
})();
