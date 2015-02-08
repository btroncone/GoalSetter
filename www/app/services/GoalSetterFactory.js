(function(){
    angular
        .module('goalSetter')
        .factory('GoalSetterFactory', GoalSetterFactory);

    GoalSetterFactory.$inject = ['$ionicLoading', 'Azureservice'];

    function GoalSetterFactory($ionicLoading, Azureservice){
        var goals = [];
        var service = {
            goals: goals,
            getGoals: getGoals,
            saveGoal: saveGoal,
            completeGoal: completeGoal
        };
        return service;

        function getGoals(){
            $ionicLoading.show({
                template: 'Loading Goals...'
            });
            return Azureservice.query('Goal').then(function(goals){
                $ionicLoading.hide();
                return goals;
            }, onError);
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
            }, onError);
        }

        function completeGoal(goal){
            return Azureservice.update("Goal",{
                id: goal.id,
                complete:!goal.complete
            }).then(function(data){
                console.log(data);
            }, onError);
        }

        function onError(error){
            //in general, display user friendly error message
            console.log(error);
            $ionicLoading.hide();
        }

    }
})();