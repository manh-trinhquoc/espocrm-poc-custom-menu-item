console.log("custom-navbar-menu-item:controllers/custom-lead-menu-item")
define('custom-navbar-menu-item:controllers/custom-lead-menu-item', 'controllers/base', function (Dep) {

    return Dep.extend({

        // default action
        actionIndex: function (options) {
            $.ajax({
                type: 'GET',
                url: 'Lead/action/list',
                error: function () {
                    console.log('error attempting to retrieve a list of Leads');
                }.bind(this)
            }).done(function (response) {
                // in this example "response" will be an array of Lead entities, and for each entity the fields retrieved would be the same as the fields specified in the "list" layout
                console.log("response: ", response);
            }.bind(this));
        }

    });
});
