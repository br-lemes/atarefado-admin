import { Admin, Resource } from 'react-admin';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';

import dataProvider from './localProvider';
import { PerfilList, PerfilEdit, PerfilCreate } from './Perfil';
import { UsuarioList, UsuarioCreate, UsuarioEdit } from './Usuario';

const App = () => (
    <Admin dataProvider={dataProvider}>
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
