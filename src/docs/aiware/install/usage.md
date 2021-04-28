# Usage Reporting for disconnected

To report usage for truly isolated and disconnected aiWARE, please run the following:

```bash
# Run as root on DB server

curl -sfl get.aiware.com/usage.sh > /opt/aiware/usage.sh
chmod a+x /opt/aiware/usage.sh
(crontab -l 2>/dev/null; echo "14 */4 * * * /opt/aiware/usage.sh") | crontab -
```

## Sending the Reports

```bash
cd /opt/aiware/reports
tar -czf reports-`date %Y%M%d%H`.tgz /opt/aiware/reports

# Optionally removing the old reports
rm /opt/aiware/reports/*.out
```

Then copy the `/opt/aiware/reports/reports-*.tgz` file to a computer and email the file to your account manager.

## Script

For reference, the script is here as well:
```bash
#!/usr/bin/env sh

#
# Veritone Copyright (c) 2020. All Rights Reserved.
#
# NOTICE:  All information contained herein is, and remains
#  the property of Veritone Incorporated and its suppliers,
# if any.  The intellectual and technical concepts contained
# herein are proprietary to Veritone Incorporated
# and its suppliers and may be covered by U.S. and Foreign Patents,
# patents in process, and are protected by trade secret or copyright law.
# Dissemination of this information or reproduction of this material
# is strictly forbidden unless prior written permission is obtained
# from Veritone Incorporated.
#
# If their is a LICENSE.txt in the root of this repository, then the source code may
# be licensed under that license.
#

# --- helper functions for logs ---
info() {
  echo '[INFO] ' "$@"
}

fatal() {
  echo '[ERROR] ' "$@" >&2
  exit 1
}

# --- helper functions for logs ---
check_system() {
  DOCKER=$(which docker)

  if [ $(which docker) = "" ]; then
    fatal 'No docker installed'
  fi

}

get_usage() {
    mkdir -p /opt/aiware/reports || true
    DATE=`date +%Y%M%d%H%M%S`
    FILE=${DATE}-usage.out
    docker container exec -i aiware-postgres psql -U postgres -c "SELECT internal_job_id, internal_task_id, engine_id, build_id, task_status, created_date_time, modified_date_time, queued_date_time, scheduled_date_time, start_date_time, started_date_time, due_date_time, completed_date_time, aborted_date_time, failure_reason, failure_type, processed_seconds, processed_bytes, processed_chunks, processed_cpu_msecs, task_payload, task_output FROM edge.task WHERE created_date_time > date_part('epoch'::text, NOW()) - 21600 AND task_status IN ('aborted', 'failed', 'complete') ORDER BY created_date_time;" > /opt/aiware/reports/$FILE

}

{
  check_system
  get_usage
}
```
