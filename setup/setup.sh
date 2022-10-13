#!/bin/bash

APP=node
HOME=/opt/$APP
VERSION=v12.18.3
SYSD=/etc/systemd/system

_create_symlink() {
  src=$1
  dst=$2
  if [[ ! -d $dst ]] && [[ ! -s $dst ]]; then
    ln -s $src $dst
    echo "($APP) create symlink: $src -> $dst"
  fi
}

_delete_symlink() {
  dst=$1
  if [[ -d $dst ]] || [[ -s $dst ]]; then
    rm -rf $dst
    echo "($APP) delete symlink: $dst"
  fi
}

_install_package() {
  program_name=$1
  package_name=$2
  if [[ ! -s $HOME/bin/$program_name ]]; then
    npm install $package_name -g
    echo "($APP) install package: $package_name"
  fi
}

_uninstall_package() {
  program_name=$1
  package_name=$2
  if [[ -s $HOME/bin/$program_name ]]; then
    npm uninstall $package_name -g
    echo "($APP) uninstall package: $package_name"
  fi
}

_enable_service() {
  name=$1
  _create_symlink $HOME/setup/$name $SYSD/$name
  systemctl enable $name
  systemctl daemon-reload
}

_disable_service() {
  name=$1
  systemctl disable $name
  systemctl daemon-reload
  _delete_symlink $SYSD/$name
}

init() {
  #https_proxy=http://127.0.0.1:8118
  #npm config set registry https://registry.npm.taobao.org
  #npm config set registry https://registry.npmjs.org

  _create_symlink $HOME/nvm/versions/node/$VERSION/bin     $HOME/bin
  _create_symlink $HOME/nvm/versions/node/$VERSION/include $HOME/include
  _create_symlink $HOME/nvm/versions/node/$VERSION/lib     $HOME/lib
  _create_symlink $HOME/nvm/versions/node/$VERSION/share   $HOME/share

  _install_package docsify   docsify-cli
  #_install_package express   express-generator
  _install_package gulp      gulp-cli
  #_install_package husky     husky
  #_install_package jsdoc     jsdoc
  #_install_package nodemon   nodemon
  _install_package tsc       typescript
  _install_package yarn      yarn
  _install_package wrangler  "@cloudflare/wrangler --unsafe-perm=true --allow-root"

  #yarn config set prefix "/opt/node/yarn"
  #yarn config set cache-folder "/opt/node/yarn/cache"
  #yarn config set registry https://registry.npm.taobao.org
  #yarn config set registry https://registry.yarnpkg.com

  chown -R root:root $HOME
  chmod 755 $HOME

  _enable_service hexo.service
  _enable_service trilium.service
}

deinit() {
  #_uninstall_package express   express-generator
  #_uninstall_package jsdoc     jsdoc
  #_uninstall_package nodemon   nodemon
  #_uninstall_package docsify   docsify-cli
  #_uninstall_package gulp      gulp-cli
  #_uninstall_package tsc       typescript
  #_uninstall_package yarn      yarn
  #_uninstall_package wrangler  "@cloudflare/wrangler --unsafe-perm=true --allow-root"

  _delete_symlink $HOME/bin
  _delete_symlink $HOME/include
  _delete_symlink $HOME/lib
  _delete_symlink $HOME/share

  _disable_service hexo.service
  _disable_service trilium.service
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
