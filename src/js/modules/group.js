define([
    "js/init/init"
], function () {
    var Group = function () {
        var t = this;
        t.d = {
            opened:true
        };

        t.d.$widget = $('<div class="automizy-status-bar-group"></div>');
        t.d.$titleBar = $('<div class="automizy-status-bar-group-title-bar"></div>');
        t.d.$title = $('<span class="automizy-status-bar-group-title"></span>');
        t.d.$titleIcon = $('<span class="automizy-status-bar-group-title-icon fa fa-caret-down"></span>');
        t.d.$content = $('<div class="automizy-status-bar-group-content"></div>');
        t.d.$contentEmptyText = $('<div class="automizy-status-bar-group-content-empty-text"></div>');

        t.d.$titleBar.appendTo(t.d.$widget);
        t.d.$title.appendTo(t.d.$titleBar);
        t.d.$titleIcon.appendTo(t.d.$titleBar);
        t.d.$content.appendTo(t.d.$widget);
        t.d.$contentEmptyText.appendTo(t.d.$content).text($A.translate('There are no process!')).hide();

        t.d.$titleBar.click(function(){
            if(t.d.opened) {
                t.close();
            }else{
                t.open();
            }
        });

        t.name($A.getUniqueString());

    };

    var p = Group.prototype;

    p.addProcess = function(row){
        return this.addProcesses([row]);
    };
    p.processes = p.addProcesses = function(processes){
        var t = this;
        var processes = processes || [];
        for(var i = 0; i < processes.length; i++){
            var process;
            if(processes[i] instanceof $ASB.m.Process){
                process = processes[i].drawTo(t.d.$content);
            }else if(typeof processes[i] === 'array' || typeof processes[i] === 'object'){
                process = $ASB.newProcess(processes[i]).drawTo(t.d.$content);
            }
            process.d.group = t;
        }
        $ASB.scanGroups();
        return t;
    };
    p.open = function(){
        var t = this;
        t.d.opened = true;
        t.d.$widget.addClass('automizy-active');
        t.d.$titleIcon.removeClass('fa-caret-up').addClass('fa-caret-down');
        t.d.$content.stop().slideDown();
        return t;
    };
    p.close = function(){
        var t = this;
        t.d.opened = false;
        t.d.$widget.removeClass('automizy-active');
        t.d.$titleIcon.addClass('fa-caret-up').removeClass('fa-caret-down');
        t.d.$content.stop().slideUp();
        return t;
    };
    p.name = function(name){
        var t = this;
        if(typeof name !== 'undefined'){
            if(typeof $ASB.groups[t.d.name] !== 'undefined'){
                delete $ASB.groups[t.d.name];
            }
            t.d.name = name;
            $ASB.groups[t.d.name] = t;
            return t;
        }
        return t.d.name;
    };
    p.title = function(title){
        var t = this;
        if(typeof title !== 'undefined'){
            t.d.title = title;
            t.d.$title.html(t.d.title);
            return t;
        }
        return t.d.title;
    };
    p.emptyText = function(emptyText){
        var t = this;
        if(typeof emptyText !== 'undefined'){
            t.d.emptyText = emptyText;
            t.d.$contentEmptyText.html(t.d.emptyText);
            return t;
        }
        return t.d.emptyText;
    };

    p.widget = function () {
        return this.d.$widget;
    };
    p.draw = p.drawTo = function (target) {
        var t = this;
        var target = target || $ASB.$groups;
        if(typeof target.widget === 'function') {
            t.d.$widget.appendTo(target.widget());
        } else{
            t.d.$widget.appendTo(target);
        }
        return t;
    };

    $ASB.m.Group = Group;
    $ASB.newGroup = function () {
        return new $ASB.m.Group();
    };

    return $ASB.m.Group;
});