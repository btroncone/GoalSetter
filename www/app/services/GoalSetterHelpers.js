(function(){
    angular
        .module('goalSetter')
        .factory('GoalSetterHelper', GoalSetterHelper);

    function GoalSetterHelper(){

        var GoalSetterHelper = {
            fixGoalDates: fixGoalDates
        };
        return GoalSetterHelper;

        function fixGoalDates(goals){
            return _.each(goals, function(goal){
                goal.date = moment(goal.date).format('MMM Do YY')
            });
        }

    }
})();