import {
    BooleanInput,
    Datagrid,
    EmailField,
    List,
    ReferenceField,
    ReferenceInput,
    SelectInput,
    TextField,
    TextInput,
} from 'react-admin';
import Grid from '@mui/material/Grid';

import EditContainer from './components/EditContainer';
import StatusField from './components/StatusField';

export const UsuarioList = () => (
    <List sort={{ field: 'id', order: 'DESC' }}>
        <Datagrid rowClick='edit'>
            <TextField source='id' />
            <ReferenceField source='perfil_id' reference='perfis' link={false}>
                <TextField source='nome' />
            </ReferenceField>
            <TextField source='nome' />
            <EmailField source='email' />
            <TextField source='login' />
            <StatusField source='status' />
        </Datagrid>
    </List>
);

export const UsuarioCreate = () => (
    <EditContainer create={true}>
        <UsuarioForm />
    </EditContainer>
);

export const UsuarioEdit = () => (
    <EditContainer>
        <UsuarioForm />
    </EditContainer>
);

const UsuarioForm = () => <>
    <Grid item xs={12} sm={6}>
        <TextInput source='login' fullWidth />
    </Grid>
    <Grid item xs={12} sm={6}>
        <ReferenceInput source='perfil_id' reference='perfis' >
            <SelectInput optionText='nome' fullWidth />
        </ReferenceInput>
    </Grid>
    <Grid item xs={12} sm={6}>
        <TextInput source='nome' fullWidth />
    </Grid>
    <Grid item xs={12} sm={6}>
        <TextInput source='email' fullWidth />
    </Grid>
    <Grid item xs={12} sm={6}>
        <BooleanInput source='status' />
    </Grid>
</>;
