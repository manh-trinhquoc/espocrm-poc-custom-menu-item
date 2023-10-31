## Custom navbar menu item

- Thử triển khai custom menu item trên espocrm
- Demo:
1. Tạo 1 item trở đến màn detail của user admin trên menu

## Triển khai

1. Create a scope definition file.

custom/Espo/Custom/Resources/metadata/scopes/CustomMenu.json
```json
{
    "entity": false,
    "tab": true,
    "acl": "true",
    "aclPortal": true,
    "aclPortalLevelList": [
        "all",
        "account",
        "contact",
        "own",
        "no"
    ],
    "disabled": false,
    "module": "Custom",
    "isCustom": true
}

```

- Notice that the setting "entity" is set to false so Espo will not create a table or expect to find an entityDefs json script or create a database table "custom-menu", also notice that the setting "tab" is set to true, so the menu item will be available to add from Administration > User Interface panel.

2. Create a clientDefs metadata file

- To tell Expo which front end controller will contain the instructions to execute when a User clicks on the custom menu item.

custom/Espo/Custom/Resources/metadata/clientDefs/CustomMenu.json
```json
{
    "controller": "custom:controllers/custom-menu",
    "color": "#00ff66",
    "iconClass": "fas fa-file-contract"
}

```

3. Create the front-end controller that will execute actions when a User clicks on the custom menu item

client/custom/src/controllers/custom-menu.js
```js
define('custom:controllers/custom-menu', 'controllers/base', function (Dep) {

    return Dep.extend({

        // default action
        actionIndex: function (options) {
            alert("This Custom Menu is working fine !");
        }

    });
});

```

4. Create a language json script to make the custom scope label "human friendly" in your preferred language

custom/Espo/Custom/Resources/i18n/en_US/Global.json
```json
{
    "scopeNames": {
        "CustomMenu": "Custom Menu"
    },
    "scopeNamesPlural": {
        "CustomMenu": "Custom Menu"
    }
}

```
## Tham khảo
- tuto: https://forum.espocrm.com/forum/developer-help/67695-coding-tutorial-how-to-create-a-custom-navbar-menu-item
    
    
    