import React from 'react'; 

function LogoItem(props) {
    return (
        <div className="client-box"> 
            <img src={('../../assets/images/' + props.logoSrc)} alt="logo"/>
        </div>
    );
}

export default LogoItem;