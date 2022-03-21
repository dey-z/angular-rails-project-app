#!/bin/bash

cmd="docker-compose -f docker-compose.yml"

for s in "${@:1}"
do
  if [ $s = "-d" ]; then
    d=" -d"
  else
    cmd="${cmd} -f ${s}.yml"
  fi
done

cmd="${cmd} up${d}"

echo "command: ${cmd}"

$cmd
