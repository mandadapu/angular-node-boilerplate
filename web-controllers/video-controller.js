var resource = require('../app_modules/resource');
log = require('../config/log-config'),

module.exports = function(app){

    app.post('/api/video', function(req, res){

        resource.video.get({},req.body,cbSuccess,cbFailure);

        function cbSuccess(data){
            res.send(getVideoArray(data));
        };

        function cbFailure(error, respHeader){
            throw "REST API error";
        };

        function getVideoArray(data){

            var videos = [ ];
            for (i = 0, length = data.result.length; i < length; i++) {
                videos.push({image_url:data.result[i].image_url,title:data.result[i].title});
            }
            return videos;
        };
    }
 )};


