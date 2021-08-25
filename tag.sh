#!/bin/bash

CSV=${1:-'tags_name.csv'}
ECR_REPO_NAME="webapp"


for i in $(cat ${CSV} | grep -v '#')
do
docker tag ${ECR_REPO_NAME}:${i} ${ECR_URL}/${ECR_REPO_NAME}:${i}
done