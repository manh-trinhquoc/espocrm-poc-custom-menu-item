console.log("custom-navbar-menu-item:controllers/custom-lead-menu-item")
define('custom-navbar-menu-item:controllers/custom-lead-menu-item', 'controllers/base', function (Dep) {

    return Dep.extend({

        // default action
        actionIndex: function (options) {

            var url = 'User/' + this.getUser().id + '/roles';
            var roleFilter = "Important Sales Manager";
            $.ajax({
                type: 'GET',
                url: url,
                error: function () {
                    console.log('error attempting to retrieve a list of Roles for the current User id = ', this.getUser().id);
                }.bind(this)
            }).done(function (response) {
                // console.log("User roles = ",response); // un-comment this line if you want to see the response object in your browser's console
                // proceed only if the User has the role specified in "roleFilter"
                console.log("role response: ", response);

                if (response.list.find(x => x.name === roleFilter)) {
                    console.log("User has the role trùng với filter x= ", x);
                }
            }.bind(this));

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
