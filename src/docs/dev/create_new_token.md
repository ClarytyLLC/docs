<style>
     p, ul, ol, li { font-size: 18px !important; }
</style>

# Token overview

Edge tokens will be used to call Edge controller APIs

Token types: [user, api, host, engine_instance]
* user: For user's token. This should have an expiration
* api: Tokens of this type might provide to developer/customer who needs to call our APIs
* host: This should be only used inside Edge
* engine_instance: This should be only used inside Edge

Default roles for token types: Here are roleIDs to be used the default value for the token types
* user: `dc0802df-b5a0-4a6d-8aee-6d42aff58378`
* api: `58da536d-2ff1-4097-ae01-b124f4ff9460`
* host: `deeff46e-6b1f-4e2c-b6b4-2c48854394ec`
* engine_instance: `1616c017-bf9c-4dc2-a5c2-5680f0b2576e`

We can manage tokens on the Edge UI [https://controllerURL/user-management/tokens/](https://controllerURL/user-management/tokens/):

## How to create a new token
1. On Edge UI

    1.1. We need to use a role for the new token
    - Create a new role for the token if necessary: [https://controllerURL/user-management/roles/](https://controllerURL/user-management/roles/)
    - Use a existing role with a few types above

    1.2. Create a token:
    - Go to [https://controllerURL/user-management/tokens/](https://controllerURL/user-management/tokens/).  
    click to `Add new` button. 
    - Input the required/option fields: Type, Expiration, Access all organization, Organizations, Roles, ...
    - Then click to `Save`
2. Create a token with a script

    Here are a few samples that we can use to create a new token 
```sql
1. Engine instance token:

INSERT INTO edge."token"
(token_id, "type", engine_instance_id, kvp, role_ids)
VALUES('f870837b-2de4-4c31-bb0c-e9beeccc08c7', 'engine_instance', 'ade7b605-1d62-43f5-9702-d6d8932933a0', '{"accessAllOrganization": true}', '{"1616c017-bf9c-4dc2-a5c2-5680f0b2576e"}');


2. Host token:

INSERT INTO edge."token"
(token_id, "type", host_id, kvp, role_ids)
VALUES('cf3bd78a-2111-42a8-b4e7-884584862dc6', 'host', 'fa865a49-ed7a-4cac-8910-69eb752c0426', '{"accessAllOrganization": true}', '{"deeff46e-6b1f-4e2c-b6b4-2c48854394ec"}');

3. API token:

INSERT INTO edge."token"
(token_id, "type", kvp, role_ids)
VALUES('f2c5d63f-9bc2-4722-91ce-1f6964a9a3fa', 'api', '{"accessAllOrganization": true}', '{"58da536d-2ff1-4097-ae01-b124f4ff9460"}');

4. User token:

INSERT INTO edge."token"
(token_id, "type", user_id, kvp, role_ids)
VALUES('6674aaa3-4dd9-4a52-90fe-b99608589de2', 'user', '0ecd80c8-ef1a-425c-bad9-1d7e9b4227de', '{"accessAllOrganization": true}', '{"dc0802df-b5a0-4a6d-8aee-6d42aff58378"}');

```

Note: Currently, we are not allowed to delete the default roles in our system (UI).
