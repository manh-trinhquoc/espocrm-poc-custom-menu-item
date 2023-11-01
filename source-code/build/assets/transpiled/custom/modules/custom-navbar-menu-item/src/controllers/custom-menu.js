console.log("custom-navbar-menu-item:controllers/custom-menu")
define('custom-navbar-menu-item:controllers/custom-menu', 'controllers/base', function (Dep) {

    return Dep.extend({

        // default action
        actionIndex: function (options) {
            alert("This Custom Menu is working fine !");
        }

    });
});
