(function(){
    angular
        .module('goalSetter')
        .factory('GoalSetterFactory', GoalSetterFactory);

    GoalSetterFactory.$inject = ['$ionicLoading', 'Azureservice'];

    function GoalSetterFactory($ionicLoading, Azureservice){

        var service = {
            getGoals: getGoals,
            saveGoal: saveGoal,
            completeGoal: completeGoal,
            fixDates: fixDates
        };
        return service;

        function getGoals(){
            $ionicLoading.show({
                template: 'Loading Goals...'
            });
            return Azureservice.query('Goal').then(function(goals){
                $ionicLoading.hide();
                return goals;
            });
        }

        function saveGoal(goal){
            $ionicLoading.show({
                template: 'Saving Goal...'
            });
            return Azureservice.insert("Goal",{
                Description: goal.description,
                Date: moment(goal.date)
            }).then(function(){
                $ionicLoading.hide();
            });
        }

        function completeGoal(goal){

        }

        function fixDates(goals){
            return _.each(goals, function(goal){
                goal.date = moment(goal.date).format('MMM Do YY')
            });
        }
    }
})();