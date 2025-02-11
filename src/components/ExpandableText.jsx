import { useState } from "react";

const ExpandableText = ({ children, maxChars = 100 }) => {
    const [isExpanded, setExpanded] = useState(false);

    if (children.length <= maxChars) return <p>{children}</p>;

    const text = isExpanded ? children : children.substring(0, maxChars);

    const handleShow = () => {
        setExpanded(!isExpanded);
    };

    return (
        <p>
            {text}...
            <button onClick={handleShow}>{isExpanded ? "Less" : "More"}</button>
        </p>
    );
};

export default ExpandableText;
