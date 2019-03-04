import React, {useState} from "react";

const styles = {
    clickable: {
        cursor: "pointer",
        width: '100%',
        height: '20%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        userSelect: 'none'
    },
    clickableHover: {
        background: 'rgba(0,0,0,0.2)'
    }
};

const Button = (props) => {
    const [hover, setHover] = useState(false);

    const mouseIn = () => {
        setHover(true);
    };

    const mouseOut = () => {
        setHover(false);
    };

    return (
        <div style={hover? {...styles.clickable, ...styles.clickableHover} : {...styles.clickable}}
                 onMouseEnter={mouseIn}
                 onMouseLeave={mouseOut}
                 {...props}
        >
            {props.icon}
        </div>
    )
};

export default Button
