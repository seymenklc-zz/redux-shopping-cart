import React from 'react';

import { IconButton, useColorMode } from '@chakra-ui/react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ColorMode = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <IconButton
            size='lg'
            mr='2'
            aria-label='light'
            icon={colorMode === 'light' ? <FiSun /> : <FiMoon />}
            onClick={toggleColorMode}
        />
    );
};

export default ColorMode;
