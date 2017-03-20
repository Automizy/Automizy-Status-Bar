define([
    "js/init/init"
], function () {

    $ASB.scanGroups = function(){

        for(var i in $ASB.groups){
            $ASB.groups[i].d.hasProcess = false;
        }
        for(var i in $ASB.processes){
            if(!!$ASB.processes[i].group()) {
                $ASB.groups[$ASB.processes[i].group().name()].d.hasProcess = true;
            }
        }
        for(var i in $ASB.groups){
            if($ASB.groups[i].d.hasProcess === false){
                $ASB.groups[i].d.$contentEmptyText.show();
            }else{
                $ASB.groups[i].d.$contentEmptyText.hide();
            }
        }
        return $ASB;

    };

});