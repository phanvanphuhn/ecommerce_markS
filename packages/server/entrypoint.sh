ls
echo ${DATABASE_URL}
npm run migrate:deploy
npm run start:prod