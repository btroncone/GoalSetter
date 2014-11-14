(function(){

    angular
        .module('goalSetter')
        .controller('Statistics', Statistics);

    function Statistics(){
        var vm = this;
        vm.title = "Statistics";
    }

})();
