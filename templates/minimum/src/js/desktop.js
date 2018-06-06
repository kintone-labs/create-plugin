jQuery.noConflict();

(function($, PLUGIN_ID) {
    'use strict';

    function getSettingsUrl() {
        return '/k/admin/app/' + kintone.app.getId() + '/plugin/config?pluginId=' + PLUGIN_ID;
    }

    kintone.events.on('app.record.index.show', function() {
        var config = kintone.plugin.app.getConfig(PLUGIN_ID);

        var spaceElement = kintone.app.getHeaderSpaceElement();
        var fragment = document.createDocumentFragment();
        var headingEl = document.createElement('h3');
        var messageEl;
        if (config.message) {
            messageEl = document.createElement('p');
            messageEl.classList.add('plugin-space-message');
            messageEl.textContent = config.message;
        } else {
            messageEl = document.createElement('a');
            messageEl.classList.add('plugin-space-message');
            messageEl.setAttribute('href', getSettingsUrl());
            messageEl.textContent = 'Please input a message at the plugin settings!';
        }

        headingEl.classList.add('plugin-space-heading');
        headingEl.textContent = 'Hello kintone plugin!';

        fragment.appendChild(headingEl);
        fragment.appendChild(messageEl);
        spaceElement.appendChild(fragment);
    });

})(jQuery, kintone.$PLUGIN_ID);
