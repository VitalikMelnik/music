/**
 * Created by vitalik on 21.06.17.
 */
/**
 *@config  - choice between content
 *@param $stateProvider, $urlRouterProvider
 */


(function () {
    'use strict';

    angular.module("mainApp")
        .config(function($stateProvider, $urlRouterProvider,){

            $stateProvider
                .state('welcome', {
                    url: '/welcome',
                    controller: 'WelcomeController',
                    controllerAs: '$welcome',
                    templateUrl: 'templates/welcom_page.html'
                })
                 .state('articleList', {
                    url: '/articles',
                    controller: 'ArticleListController',
                    controllerAs: '$articleList',
                    templateUrl: 'templates/article.html'
                })
                // .state('article', {
                //     url: '/article/:article_link',
                //     controller: 'ArticleController',
                //     controllerAs: '$article',
                //     templateUrl: 'templates/article_list.html'
                // })
                .state('creat_album', {
                    url: '/create_album',
                    controller: 'CreateAlbumController',
                    controllerAs: '$createAlbum',
                    templateUrl: 'templates/create_album.html'
                })
                // .state('updateArticle', {
                //     url: '/update/article/:id',
                //     params: {
                //         state: "updateArticle"
                //     },
                //     controller: 'ArticleCreateController',
                //     controllerAs: '$create',
                //     templateUrl: 'templates/article_create.html'
                // });
            $urlRouterProvider.when('/', '/welcome');
            $urlRouterProvider.when('', '/welcome');
        })
})();
