#!/bin/bash
source ./install.sh
echo "Vui lòng chọn môi trường:"
echo

options=("Testing" "Production")

select_option "${options[@]}"
choice=$?

echo "${options[choice]}"


echo "RUN: clear ANDROID ${options[choice]}"
appcenter codepush deployment clear -a gnurt250394/APP-ORDER-SEOULLIFE-ANDROID "${options[choice]}"

echo "RUN: clear IOS ${options[choice]}"
appcenter codepush deployment clear -a gnurt250394/APP-ORDER-SEOULLIFE-IOS "${options[choice]}"
