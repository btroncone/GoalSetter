(function(){

    angular
        .module('goalSetter')
        .controller('Goals', Goals);

    function Goals(){
        var vm = this;
        vm.title = "Goals";
    }

})();
