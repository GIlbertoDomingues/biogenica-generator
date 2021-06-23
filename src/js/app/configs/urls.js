const BASE_URL = '/admin';
const BASE_API = `/api/admin`;

const urls = {
    BASE: `${BASE_URL}`,
    HOME: `${BASE_URL}`,
    LOGIN: {
        FORGOT: `${BASE_URL}/esqueci-senha`,
    },
    //api
    API: {
        BASE: `${BASE_API}`,
        LOGIN: `${BASE_API}/login`,
        FORGOT: `${BASE_API}/forgot`,
        AUTH_STATUS: `${BASE_API}/status`,
        MAIN: `${BASE_API}/main`,
    },
    ME: {
        INFO: `${BASE_URL}/me/dados`,
        PASSWORD: `${BASE_URL}/me/alterar-senha`,
        CONFIG: `${BASE_URL}/me/configuracoes`
    }
}

export default urls;