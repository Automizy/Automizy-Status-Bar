(function(){
    window.AutomizyGlobalPlugins = window.AutomizyGlobalPlugins || {i:0};
    window.AutomizyGlobalZIndex = window.AutomizyGlobalZIndex || 2000;
    window.AutomizyStatusBar = window.$ASB = new function () {
        var t = this;
        t.version = '0.1.1';
        t.elements = {};
        t.dialogs = {};
        t.inputs = {};
        t.buttons = {};
        t.forms = {};
        t.functions = {};
        t.xhr = {};
        t.config = {
            dir:'.',
            url:'https://app.automizy.com'
        };
        t.m = {};
        t.d = {};

        t.groups = {};
        t.processes = {};

    }();
    return $ASB;
})();

(function(){
    var PluginLoader = function () {
        var t = this;
        t.d = {
            plugins: [],
            loadedPluginsCount: 0,
            allPluginsCount:0,
            globalPluginsCount:0,
            loadedGlobalPluginsCount:0,
            completeFunctionReady:true,
            completeFunctions: []
        };
    };

    var p = PluginLoader.prototype;

    p.addPlugin = function (plugin) {
        return this.addPlugins([plugin]);
    };

    p.plugins = p.addPlugins = function (plugins) {
        var t = this;
        if (typeof plugins !== 'undefined') {

            for (var i = 0; i < plugins.length; i++) {
                var plugin = plugins[i];
                plugin.skipCondition = plugin.skipCondition || false;
                plugin.complete = plugin.complete || function () {};
                plugin.css = plugin.css || [];
                plugin.js = plugin.js || [];
                plugin.name = plugin.name || ('automizy-plugin-' + ++AutomizyGlobalPlugins.i);

                if (typeof plugin.css === 'string') {
                    plugin.css = [plugin.css];
                }
                if (typeof plugin.js === 'string') {
                    plugin.js = [plugin.js];
                }
                t.d.plugins.push(plugin);
            }

            return t;
        }
        return t.d.plugins;
    };

    p.pluginThen = function(plugin) {
        var t = this;

        t.d.loadedPluginsCount++;
        for(var i = 0; i < plugin.completeFunctions.length; i++){
            plugin.completeFunctions[i].apply(plugin, [true]);
            plugin.completed = true;
        }
        console.log(plugin.name + ' loaded in AutomizySkeleton module (' + t.d.loadedPluginsCount + '/' + t.d.allPluginsCount + ')');
        if (t.d.loadedPluginsCount === t.d.allPluginsCount && t.d.globalPluginsCount === t.d.loadedGlobalPluginsCount && t.d.completeFunctionReady) {
            t.d.completeFunctionReady = false;
            t.complete();
        }

        return t;
    };

    p.run = function () {
        var t = this;

        var hasActivePlugin = false;
        var noJsPlugins = [];

        t.d.allPluginsCount = 0;
        t.d.loadedPluginsCount = 0;

        for (var i = 0; i < t.d.plugins.length; i++) {
            var pluginLocal = t.d.plugins[i];
            if (pluginLocal.inited) {
                continue;
            }
            pluginLocal.inited = true;

            if(typeof AutomizyGlobalPlugins[pluginLocal.name] === 'undefined'){
                AutomizyGlobalPlugins[pluginLocal.name] = {
                    name:pluginLocal.name,
                    skipCondition:pluginLocal.skipCondition,
                    css:pluginLocal.css,
                    js:pluginLocal.js,
                    xhr:false,
                    completed:false,
                    completeFunctions:[pluginLocal.complete]
                }
            }else{
                AutomizyGlobalPlugins[pluginLocal.name].completeFunctions.push(pluginLocal.complete);
                if(AutomizyGlobalPlugins[pluginLocal.name].completed){
                    pluginLocal.complete.apply(pluginLocal, [false]);
                }else {
                    hasActivePlugin = true;
                    t.d.globalPluginsCount++;
                    AutomizyGlobalPlugins[pluginLocal.name].xhr.always(function(){
                        t.d.loadedGlobalPluginsCount++;
                        if (t.d.loadedPluginsCount === t.d.allPluginsCount && t.d.globalPluginsCount === t.d.loadedGlobalPluginsCount && t.d.completeFunctionReady) {
                            t.d.completeFunctionReady = false;
                            t.complete();
                        }
                    })
                }
                continue;
            }

            var plugin = AutomizyGlobalPlugins[pluginLocal.name];

            if (plugin.skipCondition) {
                plugin.completed = true;
                plugin.completeFunctions[0].apply(plugin, [false]);
                continue;
            }

            for (var j = 0; j < plugin.css.length; j++) {
                var head = document.getElementsByTagName('head')[0];
                var link = document.createElement('link');
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = plugin.css[j];
                head.appendChild(link);
            }

            hasActivePlugin = true;
            (function (plugin) {
                var deferreds = [];

                t.d.allPluginsCount++;
                if (plugin.js.length <= 0) {
                    noJsPlugins.push(plugin);
                } else {
                    for (var j = 0; j < plugin.js.length; j++) {
                        deferreds.push($.getScript(plugin.js[j]));
                    }
                    plugin.xhr = $.when.apply(null, deferreds).always(function(){
                        t.pluginThen(plugin);
                    });
                }
            })(plugin);

        }

        for(var i = 0; i < noJsPlugins.length; i++){
            t.pluginThen(noJsPlugins[i]);
        }

        if (!hasActivePlugin) {
            t.complete();
        }

        return t;
    };

    p.complete = function (complete) {
        var t = this;

        if (typeof complete === 'function') {
            t.d.completeFunctionReady = true;
            t.d.completeFunctions.push({
                inited: false,
                func: complete
            });
            return t;
        }

        var arrLength = t.d.completeFunctions.length;
        for (var i = 0; i < arrLength; i++) {
            if (t.d.completeFunctions[i].inited) {
                continue;
            }
            t.d.completeFunctions[i].inited = true;
            t.d.completeFunctions[i].func.apply(t, []);
        }

        return t;
    };

    $ASB.pluginLoader = new PluginLoader();

})();

(function(){

    $ASB.runTheFunctions = function(functions, thisParameter, parameters){
        var functions = functions || [];
        var thisParameter = thisParameter || $ASB;
        var parameters = parameters || [];
        for(var i = 0; i < functions.length; i++) {
            functions[i].apply(thisParameter, parameters);
        }
    };

})();

(function(){

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

})();

(function(){
    $ASB.loadPlugins = function () {
        (function () {
            if (typeof window.jQuery === 'undefined') {
                var script = document.createElement("SCRIPT");
                script.src = $ASB.config.dir + "/vendor/jquery/jquery.min.js";
                script.type = 'text/javascript';
                document.getElementsByTagName("head")[0].appendChild(script);
            }
            var checkReady = function (callback) {
                if (typeof window.jQuery === 'function') {
                    callback(jQuery);
                } else {
                    window.setTimeout(function () {
                        checkReady(callback);
                    }, 100);
                }
            };

            checkReady(function ($) {
                $ASB.pluginLoader.plugins([
                    {
                        name:'fontAwesome',
                        skipCondition:(function () {
                            var span = document.createElement('span');
                            span.className = 'fa';
                            span.style.display = 'none';
                            document.body.insertBefore(span, document.body.firstChild);
                            if (window.getComputedStyle(span, null).getPropertyValue('font-family') === 'FontAwesome') {
                                document.body.removeChild(span);
                                return true;
                            }
                            document.body.removeChild(span);
                            return false;
                        })(),
                        css:$ASB.config.dir + "/vendor/fontawesome/css/font-awesome.min.css"
                    },
                    {
                        name:'automizyJs',
                        skipCondition:typeof AutomizyJs !== 'undefined',
                        css:$ASB.config.dir + "/vendor/automizy-js/automizy.css",
                        js:[
                            $ASB.config.dir + '/vendor/automizy-js/languages/en_US.js',
                            $ASB.config.dir + "/vendor/automizy-js/automizy.js"
                        ],
                        complete:function(){
                            $A.setTranslate(window.I18N || {});
                        }
                    }
                ]).complete(function(){
                    $ASB.pluginsLoaded();
                }).run();

            });

        })();
    };
})();

(function(){
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
})();

(function(){
    $ASB.baseDir = function(value){
        if (typeof value !== 'undefined') {
            $ASB.config.dir = value;
            return $ASB;
        }
        return $ASB.config.dir;
    };
})();

(function(){

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

})();

(function(){

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

})();

(function(){

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

})();

(function(){
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
})();

(function(){
    var Process = function () {
        var t = this;
        t.d = {
            group: false,
            hoverTitle: false,
            icon: false,
            time: false,
            percent: 0,

            status: '',
            onStatusChangeFunction: function () {
            },

            stop: false,
            stopFunction: function () {
            },
            start: false,
            startFunction: function () {
            },
            pause: false,
            pauseFunction: function () {
            },
            edit: false,
            editFunction: function () {
            },
            info: false,
            infoFunction: function () {
            },
            download: false,
            downloadFunction: function () {
            },
            close: false,
            closeFunction: function () {
            }
        };

        t.d.$widget = $('<div class="automizy-status-bar-process"></div>');

        t.d.$dataTable = $('<table cellpadding="0" cellspacing="0" border="0" class="automizy-status-bar-process-data-table"></table>').appendTo(t.d.$widget);
        t.d.$dataRow = $('<tr></tr>').appendTo(t.d.$dataTable);
        t.d.$timeBox = $('<div class="automizy-status-bar-process-time-box"></div>').appendTo(t.d.$widget);
        t.d.$statusBox = $('<div class="automizy-status-bar-process-status-box"></div>').appendTo(t.d.$widget);

        t.d.$iconCell = $('<td class="automizy-status-bar-process-icon-cell"></td>').appendTo(t.d.$dataRow);
        t.d.$icon = $('<span class="automizy-status-bar-process-icon"></span>').appendTo(t.d.$iconCell);

        t.d.$titleCell = $('<td class="automizy-status-bar-process-title-cell"></td>').appendTo(t.d.$dataRow);
        t.d.$title = $('<span class="automizy-status-bar-process-title"></span>').appendTo(t.d.$titleCell);

        t.d.$actionsCell = $('<td class="automizy-status-bar-process-actions-cell"></td>').appendTo(t.d.$dataRow);
        t.d.$actions = $('<span class="automizy-status-bar-process-actions"></span>').appendTo(t.d.$actionsCell);

        t.d.$timeIcon = $('<span class="automizy-status-bar-process-time-icon fa fa-clock-o"></span>').appendTo(t.d.$timeBox);
        t.d.$timeText = $('<span class="automizy-status-bar-process-time-text"></span>').appendTo(t.d.$timeBox);
        t.d.$timeDate = $('<span class="automizy-status-bar-process-time-date"></span>').appendTo(t.d.$timeBox);

        t.d.statusBar = $A.newProgressBar().percentPosition('bottom').drawTo(t.d.$statusBox);

        t.d.$downloadAction = $('<span class="automizy-status-bar-process-actions-action fa fa-download" title="' + $A.translate('Download') + '"></span>').appendTo(t.d.$actions).click(function () {
            t.download();
        }).hide();
        t.d.$startAction = $('<span class="automizy-status-bar-process-actions-action fa fa-play" title="' + $A.translate('Start') + '"></span>').appendTo(t.d.$actions).click(function () {
            t.start();
        }).hide();
        t.d.$pauseAction = $('<span class="automizy-status-bar-process-actions-action fa fa-pause" title="' + $A.translate('Pause') + '"></span>').appendTo(t.d.$actions).click(function () {
            t.pause();
        }).hide();
        t.d.$editAction = $('<span class="automizy-status-bar-process-actions-action fa fa-pencil" title="' + $A.translate('Edit') + '"></span>').appendTo(t.d.$actions).click(function () {
            t.edit();
        }).hide();
        t.d.$stopAction = $('<span class="automizy-status-bar-process-actions-action fa fa-stop" title="' + $A.translate('Stop') + '"></span>').appendTo(t.d.$actions).click(function () {
            t.stop();
        }).hide();
        t.d.$infoAction = $('<span class="automizy-status-bar-process-actions-action fa fa-info" title="' + $A.translate('Info') + '"></span>').appendTo(t.d.$actions).click(function () {
            t.info();
        }).hide();
        t.d.$closeAction = $('<span class="automizy-status-bar-process-actions-action fa fa-times" title="' + $A.translate('Close') + '"></span>').appendTo(t.d.$actions).click(function () {
            t.close();
        }).hide();

        t.name($A.getUniqueString());

        if (typeof $().tooltipster === 'function') {
            t.d.$iconCell.tooltipster({delay: 1});
            t.d.$downloadAction.tooltipster({delay: 1});
            t.d.$startAction.tooltipster({delay: 1});
            t.d.$pauseAction.tooltipster({delay: 1});
            t.d.$editAction.tooltipster({delay: 1});
            t.d.$stopAction.tooltipster({delay: 1});
            t.d.$infoAction.tooltipster({delay: 1});
            t.d.$closeAction.tooltipster({delay: 1});
        }

    };

    var p = Process.prototype;

    p.name = function (name) {
        var t = this;
        if (typeof name !== 'undefined') {
            if (typeof $ASB.processes[t.d.name] !== 'undefined') {
                delete $ASB.processes[t.d.name];
            }
            t.d.name = name;
            $ASB.processes[t.d.name] = t;
            return t;
        }
        return t.d.name;
    };
    p.title = function (title) {
        var t = this;
        if (typeof title !== 'undefined') {
            t.d.title = title;
            t.d.$title.html(t.d.title);
            return t;
        }
        return t.d.title;
    };
    p.hoverTitle = function (hoverTitle) {
        var t = this;
        if (typeof hoverTitle !== 'undefined') {
            if (t.d.hoverTitle !== false && t.hoverTitle() == hoverTitle) {
                return t;
            }
            t.d.hoverTitle = hoverTitle;
            if (typeof $().tooltipster === 'function') {
                t.d.$iconCell.tooltipster('destroy');
            }
            t.d.$iconCell.attr('title', t.d.hoverTitle);
            if (typeof $().tooltipster === 'function') {
                t.d.$iconCell.tooltipster({delay: 1});
            }
            return t;
        }
        return t.d.hoverTitle;
    };
    p.icon = function (icon, iconType) {
        var t = this;
        if (typeof icon !== 'undefined') {
            if (t.d.icon !== false && t.icon() == icon) {
                return t;
            }
            t.d.icon = icon;
            if (t.d.icon === false) {
                t.widget().removeClass('automizy-has-icon');
            } else if (t.d.icon === true) {
                t.widget().addClass('automizy-has-icon');
            } else {
                t.widget().addClass('automizy-has-icon');
                var iconType = iconType || 'fa';
                if (iconType === 'fa') {
                    t.d.$icon.removeClass(function (index, css) {
                        return (css.match(/(^|\s)fa-\S+/g) || []).join(' ');
                    }).addClass('fa').addClass(icon);
                }
            }
            return t;
        }
        return t.d.icon || false;
    };
    p.group = function (group) {
        var t = this;
        if (typeof group !== 'undefined') {
            if (t.d.group !== false && t.d.group.name() == group) {
                return t;
            }
            t.d.group = $ASB.groups[group] || false;
            if (t.d.group !== false) {
                t.d.group.addProcess(t);
            }
            return t;
        }
        return t.d.group;
    };
    p.timeLabel = function (timeLabel) {
        var t = this;
        if (typeof timeLabel !== 'undefined') {
            t.d.timeLabel = timeLabel;
            t.d.$timeText.html(t.d.timeLabel);
            return t;
        }
        return t.d.timeLabel;
    };
    p.time = function (time) {
        var t = this;
        if (typeof time !== 'undefined') {
            if (t.d.time !== false && t.time() == time) {
                return t;
            }
            t.d.time = time;
            t.d.$timeDate.html(t.d.time);
            return t;
        }
        return t.d.time;
    };
    p.percent = function (percent) {
        var t = this;
        if (typeof percent !== 'undefined') {
            if (t.d.percent !== false && t.percent() == percent) {
                return t;
            }
            t.d.percent = percent;
            t.d.statusBar.percent(t.d.percent);
            return t;
        }
        return t.d.percent;
    };
    p.fadeTo = function (opacity, millisec) {
        var t = this;
        if (typeof opacity !== 'undefined') {
            if (typeof millisec !== 'undefined') {
                var millisec = millisec;
            } else {
                millisec = 500;
            }
            t.widget().stop().fadeTo(millisec, opacity);
        }
        return t;
    };

    p.showStatusBox = function (percent) {
        var t = this;
        t.d.$statusBox.show();
        return t;
    };
    p.hideStatusBox = function (percent) {
        var t = this;
        t.d.$statusBox.hide();
        return t;
    };
    p.showTimeBox = function (percent) {
        var t = this;
        t.d.$timeBox.show();
        return t;
    };
    p.hideTimeBox = function (percent) {
        var t = this;
        t.d.$timeBox.hide();
        return t;
    };
    p.remove = function () {
        var t = this;
        delete $ASB.processes[t.name()];
        t.d.$widget.remove();
        $ASB.scanGroups();
        return t;
    };

    p.status = function (status) {
        var t = this;
        if (typeof status !== 'undefined') {
            status = status.trim();
            if (t.d.status != status) {
                t.d.status = status;
                t.onStatusChange();
            }
            return t;
        }
        else {
            return t.d.status;
        }
    };

    p.onStatusChange = function (onStatusChangeFunction) {
        var t = this;
        if (typeof onStatusChangeFunction === 'function') {
            t.d.onStatusChangeFunction = onStatusChangeFunction;
            return t;
        }
        else {
            t.d.onStatusChangeFunction.apply(t, [t]);
        }
        return t;
    };

    p.stop = function (stop) {
        var t = this;
        if (typeof stop !== 'undefined') {
            if (typeof stop === 'function') {
                t.d.stop = true;
                t.d.stopFunction = stop;
            } else {
                t.d.stop = $A.parseBoolean(stop);
            }
            if (t.d.stop) {
                t.d.$stopAction.show();
            } else {
                t.d.$stopAction.hide();
            }
            return t;
        }
        if (t.d.stop) {
            t.d.stopFunction.apply(t, [t]);
        }
        return t;
    };

    p.start = function (start) {
        var t = this;
        if (typeof start !== 'undefined') {
            if (typeof start === 'function') {
                t.d.start = true;
                t.d.startFunction = start;
            } else {
                t.d.start = $A.parseBoolean(start);
            }
            if (t.d.start) {
                t.d.$startAction.show();
            } else {
                t.d.$startAction.hide();
            }
            return t;
        }
        if (t.d.start) {
            t.d.startFunction.apply(t, [t]);
        }
        return t;
    };

    p.pause = function (pause) {
        var t = this;
        if (typeof pause !== 'undefined') {
            if (typeof pause === 'function') {
                t.d.pause = true;
                t.d.pauseFunction = pause;
            } else {
                t.d.pause = $A.parseBoolean(pause);
            }
            if (t.d.pause) {
                t.d.$pauseAction.show();
            } else {
                t.d.$pauseAction.hide();
            }
            return t;
        }
        if (t.d.pause) {
            t.d.pauseFunction.apply(t, [t]);
        }
        return t;
    };

    p.edit = function (edit) {
        var t = this;
        if (typeof edit !== 'undefined') {
            if (typeof edit === 'function') {
                t.d.edit = true;
                t.d.editFunction = edit;
            } else {
                t.d.edit = $A.parseBoolean(edit);
            }
            if (t.d.edit) {
                t.d.$editAction.show();
            } else {
                t.d.$editAction.hide();
            }
            return t;
        }
        if (t.d.edit) {
            t.d.editFunction.apply(t, [t]);
        }
        return t;
    };

    p.info = function (info) {
        var t = this;
        if (typeof info !== 'undefined') {
            if (typeof info === 'function') {
                t.d.info = true;
                t.d.infoFunction = info;
            } else {
                t.d.info = $A.parseBoolean(info);
            }
            if (t.d.info) {
                t.d.$infoAction.show();
            } else {
                t.d.$infoAction.hide();
            }
            return t;
        }
        if (t.d.info) {
            t.d.infoFunction.apply(t, [t]);
        }
        return t;
    };

    p.download = function (download) {
        var t = this;
        if (typeof download !== 'undefined') {
            if (typeof download === 'function') {
                t.d.download = true;
                t.d.downloadFunction = download;
            } else {
                t.d.download = $A.parseBoolean(download);
            }
            if (t.d.download) {
                t.d.$downloadAction.show();
            } else {
                t.d.$downloadAction.hide();
            }
            return t;
        }
        if (t.d.download) {
            t.d.downloadFunction.apply(t, [t]);
        }
        return t;
    };

    p.close = function (close) {
        var t = this;
        if (typeof close !== 'undefined') {
            if (typeof close === 'function') {
                t.d.close = true;
                t.d.closeFunction = close;
            } else {
                t.d.close = $A.parseBoolean(close);
            }
            if (t.d.close) {
                t.d.$closeAction.show();
            } else {
                t.d.$closeAction.hide();
            }
            return t;
        }
        if (t.d.close) {
            t.d.closeFunction.apply(t, [t]);
        }
        return t;
    };

    p.widget = function () {
        return this.d.$widget;
    };
    p.draw = p.drawTo = function (target) {
        var t = this;
        var target = target || $('body').eq(0);
        if (typeof target.widget === 'function') {
            t.d.$widget.appendTo(target.widget());
        } else {
            t.d.$widget.appendTo(target);
        }
        return t;
    };
    p.data = function (data, value) {
        var t = this;
        if (typeof t.d.data === 'undefined') {
            t.d.data = {};
        }
        if (typeof data === 'undefined') {
            return t.d.data;
        }
        if (typeof data === 'array' || typeof data === 'object') {
            for (var i in data) {
                t.d.data[i] = data[i];
            }
            return t;
        }
        if (typeof value === 'undefined') {
            return t.d.data[data];
        }

        t.d.data[data] = value;
        return t;
    };

    $ASB.m.Process = Process;
    $ASB.newProcess = function () {
        return new $ASB.m.Process();
    };

    return $ASB.m.Process;
})();

(function(){
    $ASB.pluginsLoaded(function () {

        $ASB.$tmp = $('<div id="automizy-status-bar-tmp"></div>');

        $ASB.$widget = $('<div id="automizy-status-bar"></div>');
        $ASB.$header = $('<div id="automizy-status-bar-header"></div>').appendTo($ASB.$widget);
        $ASB.$container = $('<div id="automizy-status-bar-container"></div>').appendTo($ASB.$widget);

        $ASB.$groups = $('<div id="automizy-status-bar-groups"></div>').appendTo($ASB.$container);

        $ASB.layoutReady();
        $ASB.ready();
    });
})();

(function(){
    console.log('%c AutomizyStatusBar loaded! ', 'background: #000000; color: #bada55; font-size:14px');
})();

(function(){})();