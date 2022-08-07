import localStorageDataProvider from 'ra-data-local-storage';

const dataProvider = localStorageDataProvider({
    loggingEnabled: true,
    defaultData: {
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
                status: 1,
            },
            {
                id: 2,
                perfil_id: 2,
                nome: 'Usuário',
                email: 'user@localhost',
                login: 'user',
                status: 1,
            },
            {
                id: 3,
                perfil_id: 2,
                nome: 'Teste',
                email: null,
                login: 'teste',
                status: 0,
            },
        ],
    }
});

export default dataProvider;
