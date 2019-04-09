import React from 'react';
import './ButtonGroup.css';
import { store } from './store';
import setTechnology from './actions';

const ButtonGroup = ({ technologies }) => {
    //dispatch action 
    function dispatchBtnAction(e) {
        const tech = e.target.dataset.tech;
    }

    return (
        <div>
            {technologies.map((tech, index) => {
                return (
                    <button 
                        data-tech={tech}
                        key={`btn-${index}`}
                        className="hello-btn"
                        onClick={dispatchBtnAction}
                    >
                        {tech}
                    </button>
                )
            })}
        </div>
    );
}

export default ButtonGroup;