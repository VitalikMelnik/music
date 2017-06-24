/**
 * Created by vitalik on 22.06.17.
 */
/**
 *@config  - Generating image and master data
 *@param $sce , $background
 */

(function () {
    angular.module("mainApp")
        .controller("RootController", function ($sce , $background) {
            var vm = this;
            background = '/html/img/' + $background.get() + '.jpg';
            vm.img = background;
            //console.log(vm.img);
            vm.authorName = "Music Library";
            vm.myDescription = "Enthusiast & programmer. Amateur: ohhh, hmmmm, I don't know. I`m egoist with a real love for everything beautiful.";
            vm.toTrustedHTML = function(html) {
                return $sce.trustAsHtml( html );
            }
        })
            //console.log(vm.backgound = $background.get());
})();

   
