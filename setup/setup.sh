#!/bin/bash

APP=node
HOME=/opt/$APP

init() {
  #https_proxy=http://127.0.0.1:8118
  #npm config set registry https://registry.npm.taobao.org
  #npm config set registry https://registry.npmjs.org

  if [[ ! -s /usr/local/bin/node ]]; then
    echo "($APP) create symlink: /usr/local/bin/node --> /opt/node/bin/node"
    ln -s /opt/node/bin/node /usr/local/bin/node
  fi

  if [[ ! -s $HOME/bin/express ]]; then
    echo "($APP) install express-generator"
    npm install express-generator -g
  fi

  if [[ ! -s $HOME/bin/nodemon ]]; then
    echo "($APP) install nodemon"
    npm install nodemon -g
  fi

  if [[ ! -s $HOME/bin/hexo ]]; then
    echo "($APP) install hexo-cli"
    npm install hexo-cli -g
  fi

  if [[ ! -s $HOME/bin/yarn ]]; then
    echo "($APP) install yarn"
    npm install yarn -g
	yarn config set prefix "/opt/node/yarn"
	yarn config set cache-folder "/opt/node/yarn/cache"
	#yarn config set registry https://registry.npm.taobao.org
	#yarn config set registry https://registry.yarnpkg.com
  fi

  if [[ ! -s $HOME/bin/wrangler ]]; then
    echo "($APP) install wrangler"
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
