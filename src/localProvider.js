import localStorageDataProvider from 'ra-data-local-storage';

const data = {
    perfis: [
        {
            id: 1,
            nome: 'Administrador',
            descricao: 'Acesso completo ao sistema',
            status: 1,
        },
        {
            id: 2,
            nome: 'Usuário',
            descricao: 'Acesso limitado ao sistema',
            status: 1,
        },
    ],
    usuarios: [
        {
            id: 1,
            perfil_id: 1,
            nome: 'Administrator',
            email: 'admin@localhost',
            login: 'admin',
            senha: 'admin',
            status: 1,
        },
        {
            id: 2,
            perfil_id: 2,
            nome: 'Usuário',
            email: 'user@localhost',
            login: 'user',
            senha: 'user',
            status: 1,
        },
        {
            id: 3,
            perfil_id: 2,
            nome: 'Teste',
            email: null,
            login: 'teste',
            senha: 'teste',
            status: 0,
        },
    ],
};

export const dataProvider = localStorageDataProvider({
    loggingEnabled: true,
    defaultData: data,
});

export const authProvider = {
    login: ({ username, password }) => {
        const usuario = data.usuarios.find((usuario) =>
            usuario.login === username && usuario.status === 1
        );
        if (usuario && usuario.senha === password) {
            localStorage.setItem('usuario', usuario);
            return Promise.resolve();
        }
        return Promise.reject();
    },
    logout: () => {
        localStorage.removeItem('usuario');
        return Promise.resolve();
    },
    checkError: () => {
        return localStorage.getItem('usuario') ? Promise.resolve() : Promise.reject();
    },
    checkAuth: () => {
        return localStorage.getItem('usuario') ? Promise.resolve() : Promise.reject();
    },
    getPermissions: () => {
        return Promise.resolve();
    },
    getIdentity: () => {
        const { id, nome } = localStorage.getItem('usuario');
        return Promise.resolve({ id, fullName: nome });
    },
}
