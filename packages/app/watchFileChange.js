const {exec} = require('child_process');
const fs = require('fs');
let timeout;
fs.watch(__dirname + '/src/assets/images', {}, (eventType, filename) => {
  console.log('=>(watchFileChange.js:49) filename', filename);
  if (eventType === 'rename') {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      var yourscript = exec('yarn genimg', (error, stdout, stderr) => {
        console.log(stdout);
        console.log(stderr);
        if (error !== null) {
          console.log(`exec error: ${error}`);
        }
      });
    }, 500);
  }
});
