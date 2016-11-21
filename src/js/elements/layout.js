define([
    "js/core/core",
    "js/events/pluginsLoaded",
    "js/events/layoutReady"
], function () {
    $ASB.pluginsLoaded(function () {

        $ASB.$tmp = $('<div id="automizy-status-bar-tmp"></div>');

        $ASB.$widget = $('<div id="automizy-status-bar"></div>');
        $ASB.$header = $('<div id="automizy-status-bar-header"></div>').appendTo($ASB.$widget);
        $ASB.$closeIcon = $('<span id="automizy-status-bar-header-close-icon" class="fa fa-close"></span>').appendTo($ASB.$widget);
        $ASB.$container = $('<div id="automizy-status-bar-container"></div>').appendTo($ASB.$widget);

        $ASB.$groups = $('<div id="automizy-status-bar-groups"></div>').appendTo($ASB.$container);

        $ASB.layoutReady();
        $ASB.ready();
    });
});