import { writeFile } from 'fs'; //if you are using a typescript file

// const fs = require('fs');

const environmentFile = `export const environment = {
  RAPID_API_KEY = ${process.env.RAPID_API_KEY};
};
`;

// Generate environment.ts file
fs.writeFile('./src/environments/environment.ts', environmentFile, function (err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(`Angular environment.ts file generated`);
  }
});


/*
Run npm node set-env.js (or npm ts-node set-env.ts) to generate your file  
*/