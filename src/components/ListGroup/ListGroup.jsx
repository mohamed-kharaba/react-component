import { useState } from "react";
// import styled from "styled-components";

// const List = styled.ul`
//     list-style: circle;
//     padding: 10px;
// `;

// const ListItem = styled.li`
//     padding: 5px 0;
//     background: ${(props) => (props.active ? "blue" : "transparent")};
// `;

import { MdBroadcastOnHome } from "react-icons/md";
import { PiUserSwitchFill } from "react-icons/pi";

const ListGroup = ({ cities, heading, onSelectItem, colors, xd }) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h3>{heading}</h3>
            <h2> {xd} frontend </h2>
            {cities.length === 0 && <p>No items found</p>}
            <MdBroadcastOnHome color="red" size={40} className="icon-home" style={{ color: "yellow" }} />
            <PiUserSwitchFill />

            <ul className="" style={{ backgroundColor: "blue" }}>
                {cities.map((item, index) => (
                    <li
                        // active={index === selectedIndex}
                        // className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                        key={index}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        this is {item} city
                    </li>
                ))}
            </ul>
            <ul>
                {colors.map((c) => (
                    <li key={c}> {c} </li>
                ))}
            </ul>
        </>
    );
};

export default ListGroup;
