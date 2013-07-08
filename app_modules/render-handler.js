var m = require("mustache");
var fs = require("fs");
var path = require("path");

var pages = {};
exports.renderPage = function(httpRes, pageName, data) {
    if(! pages[pageName]) {
        // load page from views directory
        var inputFilePath = path.join("app", pageName + ".html");
        pages[pageName] = fs.readFileSync(inputFilePath, "utf8");
    }
    var html = m.render(pages[pageName], data);

    httpRes.writeHead(200, {'Content-Type': 'text/html'});
    httpRes.end(html);
};
