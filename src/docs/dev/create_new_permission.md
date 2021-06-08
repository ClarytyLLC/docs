<style>
     p, ul, ol, li { font-size: 18px !important; }
</style>

# Permission overview

Currently, aiWARE includes a list of permission. It will help to grant permission to a token/user

Permission types: [page, activity, api]
* page: For UI page only
* activity: For action on UI page only
* api: For route - API

We can manage permissions on the Admin app [https://controllerURL/user-management/permissions/](https://controllerURL/user-management/permissions/):

## How to create a new permission
1. Permission for UI page, action on pages
We are defining permissionID is string of number for UI page: e.g 0102, 010203

For example:

| PermissionID      |  Permission Name | ParentID | Type |
| :------------------ | :------------------------------ | :------------------ | :------------------ |
| 01 | Home |  | page |
| 02 | Processing |  | page |
| 0201 | Jobs | 02 | page |
| 020101 | Job Detail | 0201 | page |
| 02010101 | Download log in Job detail page | 020101 | activity |
| 020102 | Download log in Job list | 0201 | activity |
| 020103 | Export data in Job list | 0201 | activity |
| 0202 | Tasks | 02 | page |
| 020201 | Task Detail | 0202 | page |
| 02020101 | Work request Detail | 020201 | page |
| 02020102 | Download log in Task Detail | 020201 | activity |
| 020202 | Download log in Task List | 0202 | activity |
| 020203 | Export data in task list | 0202 | activity |
| 020204 | Backlog in Task List | 0202 | activity |
| 020205 | Allocation in Task List | 0202 | activity |
| 020206 | Abort tasks | 0202 | activity |
| 0203 | Scheduled Jobs | 02 | page |
| 020301 | Scheduled Job Detail | 0203 | page |
| 0204 | Engine Instances | 02 | page |
| 020401 | Engine Instance Detail | 0204 | page |
| 02040101 | Download log in Engine Instance Detail | 020401 | activity |
| 020402 | Download log in Engine Instance list | 0204 | activity |
| 0205 | Organizations | 02 | page |
| 020501 | Organization Detail | 0205 | page |
| 03 | Host |  | page |
| 0301 | Summary Page | 03 | page |
| 0302 | Host List Page | 03 | page |
| 030201 | Host Detail Page | 0302 | page |
| 03020101 | Drain in Host Detail | 030201 | activity |
| 03020102 | Terminate in Host Detail | 030201 | activity |
| 030202 | Drain | 0302 | activity |
| 0303 | Server Type Page | 03 | page |
| 030301 | Server type Detail Page | 0303 | page |
| 04 | Engines |  | page |
| 0401 | Engines | 04 | page |
| 040101 | Engine Detail | 0401 | page |
| 04010101 | Edit engine | 040101 | activity |
| 04010102 | Delete engine | 040101 | activity |
| 040102 | Edit in Engine List | 0401 | activity |

Create a new permission for a page/action on a page:
Note: Permission for action on the page.
* We need to know parentID that is a permissionID for the parent page
* We need to put API path to path field exactly
```sql
-- Processing --> tasks
INSERT INTO edge.auth_permission
(permission_id, permission_name, parent_id, "type", active, "path", "method", created_by_user_id, modified_by_user_id, created_date_time, modified_date_time)
SELECT '0202', 'Tasks', '02', 'page', true, '/processing/tasks/', '', NULL, NULL, 1592894476, 1592894476
WHERE NOT EXISTS (
        SELECT permission_id FROM edge.auth_permission WHERE permission_id='0202'
    )
;
-- Abort tasks (action on task list)
INSERT INTO edge.auth_permission
(permission_id, permission_name, parent_id, "type", active, "path", "method", created_by_user_id, modified_by_user_id, created_date_time, modified_date_time)
SELECT '020206', 'Abort tasks', '0202', 'activity', true, 'proc/tasks/update_status', '', NULL, NULL, 1592894476, 1592894476
WHERE NOT EXISTS (
        SELECT permission_id FROM edge.auth_permission WHERE permission_id='020206'
    )
;
```

2. Permission for a route - API
We are defining permissionID is an uuid
When a new route is added to Controller, new permission will be automatically created when controller startup.
The data like:
```sql
INSERT INTO edge.auth_permission
(permission_id, permission_name, parent_id, "type", active, "path", "method", created_by_user_id, modified_by_user_id, created_date_time, modified_date_time)
VALUES('722a99c2-0130-4000-8962-1525828d47a7', 'ProcessCreateJob', '', 'api', true, 'proc/job/create', 'POST', NULL, NULL, 1597739977, 1597739977);

INSERT INTO edge.auth_permission
(permission_id, permission_name, parent_id, "type", active, "path", "method", created_by_user_id, modified_by_user_id, created_date_time, modified_date_time)
VALUES('6ac4450b-9c8a-4583-b5e6-db0161c03ed8', 'ProcessDeleteJob', '', 'api', true, 'proc/job/{JobID}/delete', 'POST', NULL, NULL, 1597739977, 1597739977);
```

Note: Currently, We cannot create a new permission on admin UI.
