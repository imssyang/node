#!/bin/bash

APP=node
HOME=/opt/$APP

init() {
  if [[ ! -s /usr/local/bin/node ]]; then
    ln -s /opt/node/bin/node /usr/local/bin/node
  fi

  if [[ ! -s $HOME/bin/express ]]; then
    npm install express-generator -g
  fi

  if [[ ! -s $HOME/bin/nodemon ]]; then
    npm install nodemon -g
  fi

  if [[ ! -s $HOME/bin/hexo-cli ]]; then
    npm install hexo-cli -g
  fi

  if [[ ! -s $HOME/bin/yarn ]]; then
    npm install yarn -g
	yarn config set prefix "/opt/node/yarn"
	yarn config set cache-folder "/opt/node/yarn/cache"
  fi

  if [[ ! -s $HOME/bin/wrangler ]]; then
    npm install @cloudflare/wrangler -g --unsafe-perm=true --allow-root
  fi
}

deinit() {
  echo
}

start() {
  echo
}

stop() {
  echo
}

show() {
  echo
}

case "$1" in
  init) init ;;
  deinit) deinit ;;
  start) start ;;
  stop) stop ;;
  show) show ;;
  *) SCRIPTNAME="${0##*/}"
     echo "Usage: $SCRIPTNAME {init|deinit|start|stop|show}"
     exit 3
     ;;
esac

exit 0

# vim: syntax=sh ts=4 sw=4 sts=4 sr noet
