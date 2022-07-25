import knex from 'knex';
import * as attachPaginate from 'knex-paginate';

const {DefaultAzureCredential} = require('@azure/identity');


async function getToken() {

    const credential = new DefaultAzureCredential();
    const accessToken = await credential.getToken("https://database.windows.net/.default");

    return accessToken;
}