#!/bin/bash

git fetch --all
git reset --hard origin/async

if [ $NVM_DIR ]
then echo "Your nvm dir is $NVM_DIR";
else
  echo "Can not find nvm on this machine."
  exit 1
fi

nvm install

YARN_VERSION=`yarn -v`
if [ $YARN_VERSION ]
then echo "Current yarn version $YARN_VERSION"
else
  echo "Can not find yarn on this machine."
  exit 1
fi

rm -r dist


yarn install
yarn build

cp -r dist/* ~/prod/vue-todo-list/

# nginx -s reload
echo "Deploy application successfully"

