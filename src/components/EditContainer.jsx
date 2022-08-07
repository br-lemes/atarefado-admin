import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Create, Edit, SimpleForm } from 'react-admin';

const EditContainer = (props) => {
    const Component = props.create ? Create : Edit;
    const redirect = props.redirect ? props.redirect : 'list';
    return (
        <Container maxWidth='md' sx={{ mb: 6 }}>
            <Component redirect={redirect}>
                <SimpleForm>
                    <Grid container spacing={2} alignItems='center'>
                        {props.children}
                    </Grid>
                </SimpleForm>
            </Component>
        </Container>
    );
}

export default EditContainer;
