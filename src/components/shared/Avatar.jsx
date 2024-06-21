import React from 'react';

const Avatar = ({ name }) => {
    // Function to extract initials from the name
    function getInitials(name) {
        if (!name) return '?';  // Return a default value if name is undefined
        const nameParts = name.split(' ');
        if (nameParts.length > 1) {
            return `${nameParts[0][0]}${nameParts[1][0]}`;
        } else {
            return `${nameParts[0][0]}`;
        }
    }

    // Function to generate background color based on name hash
    function generateBackground(name) {
        if (!name) return '#ccc';  // Return a default color if name is undefined
        let hash = 0;
        let i;

        for (i = 0; i < name.length; i += 1) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }

        return color;
    }

    // Extract initials and generate background color
    let initials = getInitials(name);
    let color = generateBackground(name);

    // Define custom styles for the avatar
    const customStyle = {
        display: "flex",
        height: "30px",
        width: "30px",
        borderRadius: "100px",
        color: "white",
        background: color,
        margin: "auto"
    };

    return (
        <div style={customStyle}>
            <span style={{ margin: 'auto' }}>{initials}</span>
        </div>
    );
}

export default Avatar;
