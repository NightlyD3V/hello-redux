import React from 'react';
import './ButtonGroup.css';

const ButtonGroup = ({ technologies }) => {
    return (
        <div>
            {technologies.map((tech, index) => {
                return (
                    <button 
                        data-tech={tech}
                        key={`btn-${index}`}
                        className="hello-btn"
                    >
                        {tech}
                    </button>
                )
            })}
        </div>
    );
}

export default ButtonGroup;