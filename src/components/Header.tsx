import React, {FC} from 'react';

interface TopicHeaderModel {
    title: string;
}

const TopicHeader: FC<TopicHeaderModel> = ({title}) => {
    return (
        <h1 className="font-bold text-7xl px-4 py-6 text-skl">{title}</h1>
    )

}


export default TopicHeader;

