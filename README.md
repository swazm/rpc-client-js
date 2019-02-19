# RPC Client

```javascript
let Client = require('rpc-client-js');

let client = await Client("http://rpc.address.personal");

client.setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozMCwic2NvcGUiOjIsImFjY2Vzc19zaWduYXR1cmUiOnsic2lnbmF0dXJlIjoiMTJiZDU4M2RkMjViODY4ZTY0MjNkOGYwNGNjMTlmZDE3MTg1ZjdhYjU2Y2I3OTc1MGUxZjU4ZDQ1NDE2MzJlMiIsImV4cGlyZXMiOiIyMDE5LTAyLTE4VDE1OjE1OjQ3LjM3NDY3MiswMjowMCJ9LCJleHAiOjE1NTgyNzE2ODcsImlzcyI6InJwYyJ9.fin7ofr3ohRc6wxHOPnJbQJb48B_l40lL-UiezA-uB0");

try {
    let response = await client.User.GetCurrentUser();
    console.log(response);
} catch(e) {
    console.log(e);
}
```