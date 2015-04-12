(function(){
    angular
        .module('goalSetter')
        .controller('GoalCreator', GoalCreator);

    GoalCreator.$inject = ['GoalSetterFactory', '$state'];

    function GoalCreator(GoalSetterFactory, $state){
        var vm = this;
        vm.goal = {};
        vm.saveGoal = saveGoal;

        function saveGoal(){
            GoalSetterFactory.saveGoal(vm.goal).then(function(){
                $state.go("tab.goals");
            })
        }
    }
})();