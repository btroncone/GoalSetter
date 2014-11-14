(function(){

    angular
        .module('goalSetter')
        .controller('Dashboard', Dashboard);

    function Dashboard(){
        var vm = this;
        vm.title = "Dashboard";
    }

})();
