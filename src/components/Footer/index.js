import React from 'react';
import Style from './style';

export default () => (
    <Style.Footer>
        Made with
        {' '}
        <Style.HeartIcon />
        {' '}
        by
        {' '}
        <a href="https://github.com/alanaugustodias" target="blank">@alanaugustodias</a>
    </Style.Footer>
);
