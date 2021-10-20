import React from 'react';

const DetailPage = ({serviceInfo}) => {
    const{name,Detail,img}=serviceInfo
    return (
        <div>
            <h1>{name}</h1>
            <h1>hhuu</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default DetailPage;