define([
    "js/core/core",
    "js/core/runTheFunctions"
], function () {

    $ASB.functions.readyFunctions = [];
    $ASB.ready = function(f){
        if(typeof f === 'function') {
            $ASB.functions.readyFunctions.push(f);
            if($ASB.automizyReady){
                f.apply($ASB, []);
            }
            return $ASB;
        }
        $ASB.runTheFunctions($ASB.functions.readyFunctions);
        $ASB.automizyReady = true;
        return $ASB;
    };

});