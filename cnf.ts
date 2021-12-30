import 'dotenv/config';
import { writeFile } from 'fs';

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const production = argv.env === 'prod';

const fileEnv = `src/environments/${production ? 'environment.prod' : 'environment'}.ts`;

const contentFile = `export const environment = {
    production: ${production},
    dataUrl: '${process.env['DATA_URL']}',
    max_characters_message: ${process.env['MAX_CHARACTERS_MESSAGE']},
    url_service_post: '${process.env['URL_SERVICE_POST']}'
}`;

writeFile(fileEnv, contentFile, (err) => {
    if (err) {
        console.log(err);
    }
});
