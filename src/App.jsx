import { Admin, Resource } from 'react-admin';
import ptBrMessages from 'ra-language-pt-br';
import polyglotI18nProvider from 'ra-i18n-polyglot';

import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';

import dataProvider from './localProvider';
import { PerfilList, PerfilEdit, PerfilCreate } from './Perfil';
import { UsuarioList, UsuarioCreate, UsuarioEdit } from './Usuario';

const messages = { 'pt-br': ptBrMessages };
const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'pt-br');

const App = () => (
    <Admin dataProvider={dataProvider} i18nProvider={i18nProvider}>
        <Resource
            name='perfis'
            icon={GroupIcon}
            list={PerfilList}
            edit={PerfilEdit}
            create={PerfilCreate}
        />
        <Resource
            name='usuarios'
            icon={PersonIcon}
            list={UsuarioList}
            edit={UsuarioEdit}
            create={UsuarioCreate}
        />
    </Admin>
);

export default App;
