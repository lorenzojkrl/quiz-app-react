import React from 'react';

const NavBar = () => {
    const navBarStyle = {
        color: 'blue',
        fontStyle: 'italic',
        fontSize: 16,
        backgroundColor: "#F8F8F8",
        height: "30px",
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }


    return (
        <>
            <div style={navBarStyle}>
                Space reserved for NavBar
            </div>
        </>
    )
}

export default NavBar;