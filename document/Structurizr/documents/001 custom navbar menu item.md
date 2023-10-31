## Custom navbar menu item

- Thử triển khai custom menu item trên espocrm
- Với custom controller, espo trả về 1 màn trắng, có thể render content tùy ý

## Triển khai chunng
- Mỗi custom menu tương ứng với 1 entity ảo
1. Create a scope definition file.

- custom/Espo/Custom/Resources/metadata/scopes/CustomMenu.json
- Notice that the setting "entity" is set to false so Espo will not create a table or expect to find an entityDefs json script or create a database table "custom-menu", also notice that the setting "tab" is set to true, so the menu item will be available to add from Administration > User Interface panel.
- Phải set "acl": "boolean" thì item mới xuất hiện trong Administration->User Interface.
- với regular user nếu có role có quyền access entity ảo thì sẽ trông thấy item trên menu
- nếu đã bookmark link thì luôn có thể truy cập. việc check acl nằm ở controller

2. Create a clientDefs metadata file

- To tell Expo which front end controller will contain the instructions to execute when a User clicks on the custom menu item.

- custom/Espo/Custom/Resources/metadata/clientDefs/CustomMenu.json

3. Create the front-end controller that will execute actions when a User clicks on the custom menu item

- client/custom/src/controllers/custom-menu.js

4. Create a language json script to make the custom scope label "human friendly" in your preferred language

- custom/Espo/Custom/Resources/i18n/en_US/Global.json

## Tham khảo
- tuto: https://forum.espocrm.com/forum/developer-help/67695-coding-tutorial-how-to-create-a-custom-navbar-menu-item
    
## Demo:
### Tạo 1 item đến màn lấy thông tin list của Lead
- đặt tên là CustomLeadMenuItem  
- bật f12 để xem log thông tin đã lấy  
### Tạo 1 item redirect về trang list của Lead
- đặt tên là MenuItemRedicrectLead 
### Tạo 1 item trở đến màn detail của user admin trên menu    
    