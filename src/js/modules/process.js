define([
    "js/init/init"
], function () {
    var Process = function () {
        var t = this;
        t.d = {
            group:false,
            hoverTitle:false,
            icon:false,
            time:false,
            percent:0,

            stop:false,
            stopFunction:function(){},
            start:false,
            startFunction:function(){},
            pause:false,
            pauseFunction:function(){},
            edit:false,
            editFunction:function(){},
            info:false,
            infoFunction:function(){},
            download:false,
            downloadFunction:function(){},
            close:false,
            closeFunction:function(){}
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

        t.d.$downloadAction = $('<span class="automizy-status-bar-process-actions-action fa fa-download" title="'+$A.translate('Download')+'"></span>').appendTo(t.d.$actions).click(function(){
            t.download();
        }).hide();
        t.d.$startAction = $('<span class="automizy-status-bar-process-actions-action fa fa-play" title="'+$A.translate('Start')+'"></span>').appendTo(t.d.$actions).click(function(){
            t.start();
        }).hide();
        t.d.$pauseAction = $('<span class="automizy-status-bar-process-actions-action fa fa-pause" title="'+$A.translate('Pause')+'"></span>').appendTo(t.d.$actions).click(function(){
            t.pause();
        }).hide();
        t.d.$editAction = $('<span class="automizy-status-bar-process-actions-action fa fa-pencil" title="'+$A.translate('Edit')+'"></span>').appendTo(t.d.$actions).click(function(){
            t.edit();
        }).hide();
        t.d.$stopAction = $('<span class="automizy-status-bar-process-actions-action fa fa-stop" title="'+$A.translate('Stop')+'"></span>').appendTo(t.d.$actions).click(function(){
            t.stop();
        }).hide();
        t.d.$infoAction = $('<span class="automizy-status-bar-process-actions-action fa fa-info" title="'+$A.translate('Info')+'"></span>').appendTo(t.d.$actions).click(function(){
            t.info();
        }).hide();
        t.d.$closeAction = $('<span class="automizy-status-bar-process-actions-action fa fa-times" title="'+$A.translate('Close')+'"></span>').appendTo(t.d.$actions).click(function(){
            t.close();
        }).hide();

        t.name($A.getUniqueString());

        if (typeof $().tooltipster === 'function') {
            t.d.$iconCell.tooltipster({delay:1});
            t.d.$downloadAction.tooltipster({delay:1});
            t.d.$startAction.tooltipster({delay:1});
            t.d.$pauseAction.tooltipster({delay:1});
            t.d.$editAction.tooltipster({delay:1});
            t.d.$stopAction.tooltipster({delay:1});
            t.d.$infoAction.tooltipster({delay:1});
            t.d.$closeAction.tooltipster({delay:1});
        }

    };

    var p = Process.prototype;

    p.name = function(name){
        var t = this;
        if(typeof name !== 'undefined'){
            if(typeof $ASB.processes[t.d.name] !== 'undefined'){
                delete $ASB.processes[t.d.name];
            }
            t.d.name = name;
            $ASB.processes[t.d.name] = t;
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
    p.hoverTitle = function(hoverTitle){
        var t = this;
        if(typeof hoverTitle !== 'undefined'){
            if(t.d.hoverTitle !== false && t.hoverTitle() == hoverTitle) {
                return t;
            }
            t.d.hoverTitle = hoverTitle;
            if (typeof $().tooltipster === 'function') {
                t.d.$iconCell.tooltipster('destroy');
            }
            t.d.$iconCell.attr('title', t.d.hoverTitle);
            if (typeof $().tooltipster === 'function') {
                t.d.$iconCell.tooltipster({delay:1});
            }
            return t;
        }
        return t.d.hoverTitle;
    };
    p.icon = function (icon, iconType) {
        var t = this;
        if (typeof icon !== 'undefined') {
            if(t.d.icon !== false && t.icon() == icon) {
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
    p.group = function(group){
        var t = this;
        if(typeof group !== 'undefined'){
            if(t.d.group !== false && t.d.group.name() == group) {
                return t;
            }
            t.d.group = $ASB.groups[group] || false;
            if(t.d.group !== false){
                t.d.group.addProcess(t);
            }
            return t;
        }
        return t.d.group;
    };
    p.timeLabel = function(timeLabel){
        var t = this;
        if(typeof timeLabel !== 'undefined'){
            t.d.timeLabel = timeLabel;
            t.d.$timeText.html(t.d.timeLabel);
            return t;
        }
        return t.d.timeLabel;
    };
    p.time = function(time){
        var t = this;
        if(typeof time !== 'undefined'){
            if(t.d.time !== false && t.time() == time) {
                return t;
            }
            t.d.time = time;
            t.d.$timeDate.html(t.d.time);
            return t;
        }
        return t.d.time;
    };
    p.percent = function(percent){
        var t = this;
        if(typeof percent !== 'undefined'){
            if(t.d.percent !== false && t.percent() == percent) {
                return t;
            }
            t.d.percent = percent;
            t.d.statusBar.percent(t.d.percent);
            return t;
        }
        return t.d.percent;
    };
    p.fadeTo = function(opacity, millisec){
        var t = this;
        if(typeof opacity !== 'undefined'){
            if(typeof millisec !== 'undefined'){
                var millisec = millisec;
            }else{
                millisec = 500;
            }
            t.widget().stop().fadeTo(millisec, opacity);
        }
        return t;
    };

    p.showStatusBox = function(percent){
        var t = this;
        t.d.$statusBox.show();
        return t;
    };
    p.hideStatusBox = function(percent){
        var t = this;
        t.d.$statusBox.hide();
        return t;
    };
    p.showTimeBox = function(percent){
        var t = this;
        t.d.$timeBox.show();
        return t;
    };
    p.hideTimeBox = function(percent){
        var t = this;
        t.d.$timeBox.hide();
        return t;
    };
    p.remove = function(){
        var t = this;
        delete $ASB.processes[t.name()];
        t.d.$widget.remove();
        $ASB.scanGroups();
        return t;
    };

    p.stop = function(stop){
        var t = this;
        if(typeof stop !== 'undefined') {
            if (typeof stop === 'function') {
                t.d.stop = true;
                t.d.stopFunction = stop;
            }else{
                t.d.stop = $A.parseBoolean(stop);
            }
            if(t.d.stop) {
                t.d.$stopAction.show();
            }else{
                t.d.$stopAction.hide();
            }
            return t;
        }
        if(t.d.stop) {
            t.d.stopFunction.apply(t, [t]);
        }
        return t;
    };

    p.start = function(start){
        var t = this;
        if(typeof start !== 'undefined') {
            if (typeof start === 'function') {
                t.d.start = true;
                t.d.startFunction = start;
            }else{
                t.d.start = $A.parseBoolean(start);
            }
            if(t.d.start) {
                t.d.$startAction.show();
            }else{
                t.d.$startAction.hide();
            }
            return t;
        }
        if(t.d.start) {
            t.d.startFunction.apply(t, [t]);
        }
        return t;
    };

    p.pause = function(pause){
        var t = this;
        if(typeof pause !== 'undefined') {
            if (typeof pause === 'function') {
                t.d.pause = true;
                t.d.pauseFunction = pause;
            }else{
                t.d.pause = $A.parseBoolean(pause);
            }
            if(t.d.pause) {
                t.d.$pauseAction.show();
            }else{
                t.d.$pauseAction.hide();
            }
            return t;
        }
        if(t.d.pause) {
            t.d.pauseFunction.apply(t, [t]);
        }
        return t;
    };

    p.edit = function(edit){
        var t = this;
        if(typeof edit !== 'undefined') {
            if (typeof edit === 'function') {
                t.d.edit = true;
                t.d.editFunction = edit;
            }else{
                t.d.edit = $A.parseBoolean(edit);
            }
            if(t.d.edit) {
                t.d.$editAction.show();
            }else{
                t.d.$editAction.hide();
            }
            return t;
        }
        if(t.d.edit) {
            t.d.editFunction.apply(t, [t]);
        }
        return t;
    };

    p.info = function(info){
        var t = this;
        if(typeof info !== 'undefined') {
            if (typeof info === 'function') {
                t.d.info = true;
                t.d.infoFunction = info;
            }else{
                t.d.info = $A.parseBoolean(info);
            }
            if(t.d.info) {
                t.d.$infoAction.show();
            }else{
                t.d.$infoAction.hide();
            }
            return t;
        }
        if(t.d.info) {
            t.d.infoFunction.apply(t, [t]);
        }
        return t;
    };

    p.download = function(download){
        var t = this;
        if(typeof download !== 'undefined') {
            if (typeof download === 'function') {
                t.d.download = true;
                t.d.downloadFunction = download;
            }else{
                t.d.download = $A.parseBoolean(download);
            }
            if(t.d.download) {
                t.d.$downloadAction.show();
            }else{
                t.d.$downloadAction.hide();
            }
            return t;
        }
        if(t.d.download) {
            t.d.downloadFunction.apply(t, [t]);
        }
        return t;
    };

    p.close = function(close){
        var t = this;
        if(typeof close !== 'undefined') {
            if (typeof close === 'function') {
                t.d.close = true;
                t.d.closeFunction = close;
            }else{
                t.d.close = $A.parseBoolean(close);
            }
            if(t.d.close) {
                t.d.$closeAction.show();
            }else{
                t.d.$closeAction.hide();
            }
            return t;
        }
        if(t.d.close) {
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
        if(typeof target.widget === 'function') {
            t.d.$widget.appendTo(target.widget());
        } else{
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
});