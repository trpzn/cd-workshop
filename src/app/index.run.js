(function() {
  'use strict';

  angular
    .module('cdWorkshop')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
