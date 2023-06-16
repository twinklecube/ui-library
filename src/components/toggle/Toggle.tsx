import React, {FC, useState } from 'react';
import { ToggleCheckBox, ToggleLabel } from "./styles";
import {Colors} from '../../utils/colors';
interface Props {
    id: string;
    onClick: () => void;
    enabled: boolean;
    disabledBackgroundColor?: string;
    disabledForegroundColor?: string;
    enabledBackgroundColor?: string;
    enabledForegroundColor?: string;
}
const Toggle: FC<Props> = ({
    id,
    onClick,
    enabled = false,
    disabledBackgroundColor = Colors.DISABLED,
    disabledForegroundColor = Colors.WHITE,
    enabledBackgroundColor = Colors.SECONDARY,
    enabledForegroundColor = Colors.WHITE
}) => {
    const [check, setCheck] = useState<boolean>(enabled);
    const handleClick = () => {
        setCheck((prevState) => !prevState);
        onClick()
    };

    return (
        <>
            <ToggleLabel
                htmlFor={id}
                checked={check}
                disabledBackgroundColor={disabledBackgroundColor}
                disabledForegroundColor={disabledForegroundColor}
                enabledBackgroundColor={enabledBackgroundColor}
                enabledForegroundColor={enabledForegroundColor}
            ></ToggleLabel>
            <ToggleCheckBox id={id} checked={check} onChange={handleClick} />
        </>
    );
};

export default Toggle;