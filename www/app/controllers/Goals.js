(function(){

    angular
        .module('goalSetter')
        .controller('Goals', Goals);

    Goals.$inject = ['GoalSetterFactory'];

    function Goals(GoalSetterFactory){
        var vm = this;
        vm.title = "Goals";
        vm.goals = [];
        vm.toggleGoal = toggleGoal;
        vm.date = date;
        vm.previousDay = previousDay;
        vm.nextDay = nextDay;
        vm.offset = 0;

        activate();

        function activate(){
            return GoalSetterFactory.getGoals().then(function(data){
                vm.goals = data;
            })
        }

        function toggleGoal(goal){
            goal.complete = !goal.complete;
        }

        function date(){
            if(vm.offset === 0){
                return moment().format('MMM Do YY');
            }else {
                return moment().add(vm.offset, 'days').format('MMM Do YY');
            }
            //}else{
            //    return moment().subtract(vm.offset,'days').format('MMM Do YY');
            //}
        }

        function previousDay(){
            vm.offset = vm.offset - 1;
        }

        function nextDay(){
            vm.offset = vm.offset + 1;
        }
    }

})();
