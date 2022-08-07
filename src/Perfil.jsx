import {
    BooleanInput,
    Datagrid,
    List,
    TextField,
    TextInput,
} from 'react-admin';
import Grid from '@mui/material/Grid';

import EditContainer from './components/EditContainer';
import StatusField from './components/StatusField';

export const PerfilList = () => (
    <List sort={{ field: 'id', order: 'DESC' }}>
        <Datagrid rowClick='edit'>
            <TextField source='id' />
            <TextField source='nome' />
            <TextField source='descricao' label='Descrição' />
            <StatusField source='status' />
        </Datagrid>
    </List>
);

export const PerfilCreate = () => (
    <EditContainer create={true}>
        <PerfilForm />
    </EditContainer>
);

export const PerfilEdit = () => (
    <EditContainer>
        <PerfilForm />
    </EditContainer>
);

const PerfilForm = () => <>
    <Grid item xs={12} sm={6}>
        <TextInput source='nome' fullWidth />
    </Grid>
    <Grid item xs={12} sm={6}>
        <TextInput source='descricao' fullWidth />
    </Grid>
    <Grid item xs={12} sm={6}>
        <BooleanInput source='status' />
    </Grid>
</>;
