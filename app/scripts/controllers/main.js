'use strict';

angular.module('calcApp')
    .controller('MainCtrl', function ($scope) {
        $scope.gler1 = 4;
        $scope.gler2 = 4;
        $scope.radiomodel = 'tvofalt';
        $scope.hideform = false;
        $scope.hideresult = true;

        $scope.calc = function () {
            $scope.hideform = true;
            //  $scope.result = (($scope.gler1+$scope.gler2)*2.5 )*(($scope.breitt*$scope.haed)/10000);
           // $scope.squareresult = Math.abs( +$scope.breitt * +$scope.haed * 0.0001);
            var squareSm = Math.floor(+$scope.breitt)* Math.floor(+$scope.haed)
            $scope.squareresult = Math.floor(squareSm/10000);
 console.log('scope math floor=',Math.floor(+$scope.breitt));
           // var squareresult = Math.abs( +$scope.breitt * +$scope.haed * 0.0001);
            var totalthikness = +$scope.gler1 + +$scope.gler2;
            console.log('thikness = ',totalthikness);
            //var weightsquaremeter = totalthikness * 25/100000;
            console.log('ploshad '+ $scope.squareresult+'ves ');
            $scope.weightresult=(squareSm * totalthikness *25)/100000;

            $scope.hideresult = false;
        };
        $scope.calcagain = function () {
            $scope.hideresult = true;
            $scope.hideform = false;
            $scope.breitt = '';
            $scope.haed = '';
            $scope.calculator.$setPristine();
        }

    });
