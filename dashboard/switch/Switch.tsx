import * as React from 'react';
import { ButtonGroup } from 'src/ui/buttonGroup/ButtonGroup';
import { SwitchValues, buttons, text } from './data';

export const Switch: React.FC = () => {
    const [active, setNewValue] = React.useState<SwitchValues>(SwitchValues.errors_yesterday);

    return (
        <ButtonGroup<SwitchValues>
            buttons={buttons}
            text={text}
            active={active}
            onChange={setNewValue}
        />
    );
};
