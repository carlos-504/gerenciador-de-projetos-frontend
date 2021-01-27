const TOKEN_KEY = "&app-token";
const ID_USER = "&id-user";
const NAME_USER = "&nome-usuario";

const login = (token) => localStorage.setItem(TOKEN_KEY, token);
const logout = () => localStorage.clear();

const setIdUser = (id) => localStorage.setItem(ID_USER, id);
const getIdUser = () => localStorage.getItem(ID_USER);

const setNameUser = (name) => localStorage.setItem(NAME_USER, name);
const getNameUser = () => localStorage.getItem(NAME_USER);

export {
    TOKEN_KEY,
    ID_USER,
    NAME_USER,
    login,
    logout,
    setIdUser,
    getIdUser,
    setNameUser,
    getNameUser,
};
