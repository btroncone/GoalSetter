(function(){
    angular
        .module('goalSetter')
        .factory('GoalSetterFactory', GoalSetterFactory);

    GoalSetterFactory.$inject = ['$q','$ionicLoading'];

    function GoalSetterFactory($q, $ionicLoading){
        var fakeGoals = [
            { description: 'Run 4 miles', date: moment().format('MMM Do YY'), complete: false },
            { description: 'Learn Angular', date: moment().format('MMM Do YY'), complete: false },
            { description: 'Build a mobile app', date: moment().format('MMM Do YY'), complete: false },
            { description: 'Do 100 push-ups', date: moment().subtract(1, 'days').format('MMM Do YY'), complete: false },
            { description: 'Ace the test', date: moment().subtract(1, 'days').format('MMM Do YY'), complete: false }
        ];

        var service = {
            getGoals: getGoals,
            saveGoal: saveGoal
        };
        return service;

        function getGoals(){
            var deferred = $q.defer();
            if(fakeGoals){
                deferred.resolve(fakeGoals)
            }else {
                setTimeout(function () {
                    deferred.resolve(fakeGoals);
                    $ionicLoading.hide();
                }, 500);
            }
            return deferred.promise;
        }

        function saveGoal(goal){
            var deferred = $q.defer();
            setTimeout(function(){
                goal.complete = false;
                goal.date = moment(goal.date).format('MMM Do YY');
                console.log(goal);
                fakeGoals.push(goal);
                deferred.resolve(goal);
            }, 100);

            return deferred.promise;
        }
    }

})();