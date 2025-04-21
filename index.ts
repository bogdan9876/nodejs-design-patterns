import csv from 'csv-parser';
import { createReadStream } from 'fs';

createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => {
    console.log(JSON.stringify(data));
})
  .on('end', () => {
    console.log('End of iteration');
  });