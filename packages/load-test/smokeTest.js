"use strict";
exports.__esModule = true;
exports.options = void 0;
var http_1 = require("k6/http");
exports.options = {
    vus: 1,
    duration: '10s'
};
var query = "\nquery {\n  testGetFilterHospitalList\n}\n";
var headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer abc'
};
exports["default"] = (function () {
    (0, http_1.post)("".concat(__ENV.DEV_API_URL, "/graphql"), JSON.stringify({ query: query }), {
        headers: headers
    });
});
