define([
    "js/core/core",
    "js/core/runTheFunctions"
], function () {

    $ASB.functions.layoutReadyFunctions = [];
    $ASB.layoutReady = function(f){
        if(typeof f === 'function') {
            $ASB.functions.layoutReadyFunctions.push(f);
            if($ASB.automizyLayoutReady){
                f.apply($ASB, []);
            }
            return $ASB;
        }
        $ASB.runTheFunctions($ASB.functions.layoutReadyFunctions);
        $ASB.automizyLayoutReady = true;
        return $ASB;
    };

});