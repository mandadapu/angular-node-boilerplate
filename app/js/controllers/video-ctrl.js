'use strict';

function videoCtrl($scope, VideoService, GenreService) {

    $scope.selectedGenre = 'none';
    $scope.offset = '1';
    $scope.defaultMax = '40';
    $scope.loadMoreMax = '';
    $scope.numColumns = 5;
    $scope.rows = [];
    $scope.cols = [];
    $scope.cols.length = $scope.numColumns;

    $scope.query = { offset:$scope.offset, max:$scope.defaultMax};

    $scope.genreList =  GenreService.query(function (data) {
        $scope.genreList = data;
    });

    $scope.videos = VideoService.videos($scope.query, function (data) {
        $scope.videos = data;
    });

    $scope.$watch("videos.length", function(){
        $scope.rows.length = Math.ceil($scope.videos.length / $scope.numColumns);
        $scope.cols.length = $scope.numColumns;
    });

    $scope.loadMore = function(){
        $scope.query.offset =  $scope.videos.length;
        $scope.query.max = $scope.loadMoreMax;
        $scope.appendVideos();
    };

    $scope.changeGenre = function(selectedGenre){
        $scope.query.genres = selectedGenre;
        $scope.reLoadVideos();
    };



    $scope.reLoadVideos = function(){
        VideoService.videos($scope.query, function (data) {

            $scope.videos = data;
        });
    };

    $scope.appendVideos = function(){
        VideoService.videos($scope.query, function (data) {
            data.forEach(function (video) {
                $scope.videos.push(video);
            });

        });
    };
}

