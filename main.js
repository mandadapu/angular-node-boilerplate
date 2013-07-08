/*
 * home page.
 */

renderHandler = require('./app_modules/render-handler');
resource = require('./app_modules/resource');

exports.index = function(req, res){
  res.render('index');
};

exports.renderIndex = function(req, res){
    resource.video.get({},{offset:1, max:40 },cbSuccess,cbFailure);

    function cbSuccess(data){

        renderHandler.renderPage(res, 'render-index', {"videos":getVideoArray(data)}) ;
    }
    function cbFailure(error, respHeader){
        throw "REST API error";
    }

    function getVideoArray(data){

        var videos = [ ];
        for (i = 0, length = data.result.length; i < length; i++) {
            videos.push({image_url:data.result[i].image_url});
        }
        return videos;
    }

};

