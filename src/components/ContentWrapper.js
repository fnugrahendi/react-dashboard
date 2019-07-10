import React from 'react'
import { ViewModeEnum } from '../AppContext';
import { Resources, Main } from '../pages';

const ContentWrapper = ({viewMode}) => {
    switch(viewMode) {
        default:
        case ViewModeEnum.MAIN:
            return <Main />
        case ViewModeEnum.LIST:
            return <Resources/>
    }
}

export default ContentWrapper