# RPC Client

```javascript
let Client = require('rpc-client-js');

let client = await Client("http://rpc.address.personal");

client.setToken("someJWToken");

try {
    let response = await client.User.GetCurrentUser();
    console.log(response);
} catch(e) {
    console.log(e);
}
```