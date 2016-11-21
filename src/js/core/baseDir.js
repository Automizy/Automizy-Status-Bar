define([
    "js/core/core"
], function () {
    $ASB.baseDir = function(value){
        if (typeof value !== 'undefined') {
            $ASB.config.dir = value;
            return $ASB;
        }
        return $ASB.config.dir;
    };
});