import fs from "fs-extra";
import fetch from "node-fetch";

// import.meta.env.PROFILE_URL
const url = process.env.PROFILE_URL || '';

console.log('[prebuild]');
console.log('[prebuild] fetch data from ', process.env.PROFILE_URL);

fetch(url)
    .then(res => res.json())
    .then((res) => {
        console.log('[prebuild] fetch data successfull');
        console.log('[prebuild] write data to src/consts/data.json');
        return fs.writeJSON('./src/consts/data.json', res, {
            encoding: 'utf8',
            spaces: 2,
        });
    }).catch((err) => {
        console.log('[prebuild] fetch data failed');
        console.log('[prebuild] error', err);
        process.exit(1);
    });