angular.module("gifApp").controller("SearchController", [
  "GiphyService",
  function(GiphyService) {
    console.log("loaded gif controller");

    var vm = this;

    this.random = function() {
      GiphyService.random().then(function(gif) {
        vm.results = [];
        vm.results.push({ url: gif.image_url });
      });
    };

    this.search = function() {
      GiphyService.search(vm.q).then(function(gifs) {
        //.map property iterates through array
        vm.results = gifs.map(function(gif) {
          //used in line 31 of index.html
          return { url: gif.images.fixed_height.url };
        });

        // another way to iterate thorugh array
        // for (var i = 0; i < gifs.length; i++) {
        //   var gif =gifs[i];
        //   vm.results.push({url: gif.images.fixed_height.url})
        // }

        console.log(vm.results);
      });
    };
  }
]);
