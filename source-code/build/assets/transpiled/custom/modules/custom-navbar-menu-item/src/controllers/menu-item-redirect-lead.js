console.log("custom-navbar-menu-item:controllers/menu-item-redirect-lead")
define('custom-navbar-menu-item:controllers/menu-item-redirect-lead', 'controllers/base', function (Dep) {

    return Dep.extend({

        // default action
        actionIndex: function (options) {
            var url = '#Lead/list/';
            // invoke the controller to render the record selected
            this.getRouter().dispatch('Lead', 'list');
            // navigate to the list view and add url to the browsing history
            this.getRouter().navigate(url);
        }

    });
});
