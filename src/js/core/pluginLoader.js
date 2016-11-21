define([
    "js/core/core"
], function () {
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

});