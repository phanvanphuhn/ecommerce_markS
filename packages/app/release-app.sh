# run: appcenter codepush release-react -a isofhvn/ISOFHCARE-ANDROID-USER-TEST -d Production -m
# nếu bản update là bắt buộc phải cập nhật đến người dùng ngay khi mở app.
#
echo "RUN: appcenter codepush release-react:ANDROID env: $1 version: $2"
appcenter codepush release-react -a Marks-Jarvis/Jarvis-android -m -d $1 -t $2

# run: appcenter codepush release-react -a isofhvn/ISOFHCARE-IOS-USER-TEST -d Production -m
echo "RUN: appcenter codepush release-react:IOS env: $1 version:$2"
appcenter codepush release-react -a Marks-Jarvis/Jarvis-ios -m  -d $1 -t $2
