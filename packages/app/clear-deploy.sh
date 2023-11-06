#!/bin/bash
source ./install.sh
echo "Vui lòng chọn môi trường:"
echo

options=("Testing" "Production")

select_option "${options[@]}"
choice=$?

echo "${options[choice]}"


echo "RUN: clear ANDROID ${options[choice]}"
appcenter codepush deployment clear -a Marks-Jarvis/Jarvis-android "${options[choice]}"

echo "RUN: clear IOS ${options[choice]}"
appcenter codepush deployment clear -a Marks-Jarvis/Jarvis-ios "${options[choice]}"
