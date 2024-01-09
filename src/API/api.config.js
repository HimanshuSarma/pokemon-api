
const baseURLLocal = 'localhost:8080';

const protocolProd = 'https';
const protocolDev = 'http';

const thirdPartyUrls = {
    pokemonUrl: `${protocolProd}/pokeapi.co/api/v2`
}


const hostUrl = `${protocolDev}/${baseURLLocal}`;

export const API = {
    hostUrl,
    thirdPartyUrls
}