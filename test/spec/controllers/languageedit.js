'use strict';

describe('Controller: LanguageeditCtrl', function () {

    // load the controller's module
    beforeEach(module('angularjsRestClientApp'));

    var LanguageeditCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        LanguageeditCtrl = $controller('LanguageeditCtrl', {
            $scope: scope
        });
    }));

    /*
     it('should attach a list of awesomeThings to the scope', function () {
     expect(scope.awesomeThings.length).toBe(3);
     });
     */
});
