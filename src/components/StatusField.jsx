import { BooleanField } from 'react-admin';

const StatusField = (props) => (
    <BooleanField
        source={props.source}
        looseValue={true}
        valueLabelTrue='Ativo'
        valueLabelFalse='Inativo'
    />
);

export default StatusField;
