angular.module("gifApp").service("GiphyService", [
  "$http",
  function($http) {
    console.log("loaded GiphyService");

    var API = "http://api.giphy.com/v1/gifs";

    this.random = function() {
      var params = {};
      params.rating = "y";
      params.tag = "pokemon";
      params.api_key = "dc6zaTOxFJmzC";
      return $http
        .get(API + "/random", { params: params })
        .then(function(res) {
          return res.data.data;
        })
        .catch(function(err) {
          console.log("Error requesting info from Giphy API", err);
        });
    };

    this.search = function(q) {
      var params = {};
      params.rating = "y";
      params.api_key = "dc6zaTOxFJmzC";
      params.q = q;
      return $http
        .get(API + "/search", { params: params })
        .then(function(res) {
          return res.data.data;
        })
        .catch(function(err) {
          console.log("Error requesting info from Giphy API", err);
        });
    };
  }
]);
