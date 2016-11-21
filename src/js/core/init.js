define([
    "js/core/core",
    "js/core/loadPlugins"
], function () {
    $ASB.init = function () {
        if(typeof $ASB.automizyInited === 'undefined'){
            $ASB.automizyInited = false;
        }

        if(!$ASB.automizyInited){
            $ASB.automizyInited = true;
            $ASB.loadPlugins();
        }

        return $ASB;
    };
});