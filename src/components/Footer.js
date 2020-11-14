import React from 'react';

const Footer = () => {
    const footerStyle = {
        color: 'blue',
        fontStyle: 'italic',
        fontSize: 16,
        backgroundColor: "#F8F8F8",
        borderTop: "1px solid #E7E7E7",
        padding: "5px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "30px",
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div style={footerStyle}>
            <br />
            <em>Developed by Lorenzo Z</em>
        </div>
    )
}

export default Footer;