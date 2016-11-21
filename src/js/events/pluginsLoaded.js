define([
    "js/core/core",
    "js/core/runTheFunctions"
], function () {

    $ASB.functions.pluginsLoadedFunctions = [];
    $ASB.pluginsLoaded = function(f){
        if(typeof f === 'function'){
            $ASB.functions.pluginsLoadedFunctions.push(f);
            if($ASB.automizyPluginsLoaded){
                f.apply($ASB, []);
            }
            return $ASB;
        }
        $ASB.runTheFunctions($ASB.functions.pluginsLoadedFunctions, $ASB, []);
        $ASB.automizyPluginsLoaded = true;
        return $ASB;
    };

});