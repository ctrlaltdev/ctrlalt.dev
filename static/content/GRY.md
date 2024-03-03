A simple short URL service written in Go.
    
The requested URL will be checked against existing files in the data directory. If a file with the same name exists, the server will redirect the client to the file's content with a 302 status code. If the file does not exist, the server will respond with a 404 status code.

## Install

```sh
curl -fSsL ln.0x5f.info/getGRY | sh
```

## Run as a service

```
[Unit]
Description=GO REDIR YOURSELF
ConditionPathExists=/usr/local/bin/GRY
After=network.target

[Service]
Type=simple
User=<user>
Group=<user>
LimitNOFILE=1024

Restart=on-failure
RestartSec=10
startLimitIntervalSec=60

WorkingDirectory=/usr/local/bin
ExecStart=/usr/local/bin/GRY

StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=GRY

[Install]
WantedBy=multi-user.target
```
