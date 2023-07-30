import React, { FC, useEffect } from 'react';
import { useHeaderSizeContext } from '../../hooks/HeaderSizeContext';

interface TopicHeaderModel {
    title: string;
}

const TopicHeader: FC<TopicHeaderModel> = ({ title }) => {
    let bigHeader = useHeaderSizeContext();

    return (
        bigHeader ?
            (<h1 className="font-bold text-7xl px-4 py-6 text-skl">{title}</h1>) :
            (<h2 className="font-bold text-4xl px-4 py-6 text-skl">{title}</h2>)
    )

}


export default TopicHeader;

