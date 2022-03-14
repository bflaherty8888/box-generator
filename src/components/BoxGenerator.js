import React, {useState} from 'react';

const BoxGenerator = (props) => {
    const [boxColors, setBoxColors] = useState([]);
    const [color, setColor] = useState("");
    const boxesStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "1em",
        margin: "3em"
    }

    const generateBox = (e) => {
        e.preventDefault();
        const newBoxColors = boxColors.map((x)=>{return x;});
        newBoxColors.push(color);
        setBoxColors(newBoxColors);
        setColor("");
    }

    const renderBoxes = () => {

    }

    return (
        <>
            <form onSubmit={generateBox}>
                <label>Color: </label>
                <input type={"text"} onChange={(e) => setColor(e.target.value)} value={color} />
                <input type={"submit"} value={"Add"} />
            </form>
            <div style={boxesStyle}>
                {boxColors.map((boxColor, index) => {
                    let boxStyle = {
                        height: "100px",
                        width: "100px",
                        backgroundColor: boxColor
                    }
                    return (
                        <div key={index} style={boxStyle} ></div>
                    );
                })}
            </div>
        </>
    );
}

export default BoxGenerator;