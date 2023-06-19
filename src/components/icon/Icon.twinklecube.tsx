import React from 'react';
import Icon from "./Icon";
import {Colors, Icons} from "../../utils";

const IconTwinklecube = () => {
    return (
        <>
            <Icon icon={Icons.SETTINGS} />
            <Icon icon={Icons.ADMIN_PANEL} size={48} color={Colors.SECONDARY} hoverColor={Colors.DISABLED} />
        </>
    );
};

export default IconTwinklecube;