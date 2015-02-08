(function(){
    angular
        .module('goalSetter')
        .controller('Statistics', Statistics);

    Statistics.$inject = ['GoalSetterFactory', 'GoalSetterHelper'];

    function Statistics(GoalSetterFactory, GoalSetterHelper){
        var vm = this;
        vm.title = "Statistics";
        vm.goals = [];
        vm.completed = 0;
        vm.todaysGoals = 0;
        vm.completedToday = 0;

        activate();

        function activate(){
            return GoalSetterFactory.getGoals().then(function(goals){
                vm.goals = GoalSetterHelper.fixGoalDates(goals);
                vm.completed = _.where(vm.goals, {'complete': true}).length;
                vm.todaysGoals = _.where(vm.goals, {'date': moment().format('MMM Do YY')}).length;
                vm.completedToday = _.where(vm.goals, {'complete': true, 'date': moment().format('MMM Do YY')}).length;
            })
        }
    }
})();
