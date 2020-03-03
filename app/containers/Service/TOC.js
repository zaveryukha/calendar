import React from 'react';
import { css } from 'emotion';
import zlatoustTOC from './Texts/zlatoustTOC';

const TOC = ({ serviceId, showTOC, setShowTOC }) => {
    const data = serviceId === 'zlatoust' ? zlatoustTOC : {};
    return (
        showTOC && (
            <>
                <div
                    className={css`
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        z-index: 1;
                    `}
                    onClick={e => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowTOC(false);
                    }}
                ></div>
                <div
                    className={css`
                        position: absolute;
                        top: -6px;
                        left: 50px;
                        right: 0;
                        bottom: 0;
                        z-index: 2;
                    `}
                >
                    <div
                        className={css`
                            position: fixed;
                            overflow-y: auto;
                            background-color: white;
                            padding: 24px;
                            border-left: 1px solid #d9dde5;
                            box-shadow: -1px 0px 3px #d9dde5;
                            width: 100%;
                        `}
                    >
                        {Object.keys(data).map(anchorID => (
                            <div
                                key={anchorID}
                                className={css`
                                    margin-bottom: 12px;
                                    cursor: pointer;
                                `}
                                role="button"
                                onClick={() => {
                                    const domNode = document.getElementById(anchorID);
                                    setShowTOC(false);
                                    if (domNode) {
                                        domNode.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    }
                                }}
                            >
                                {data[anchorID]}
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    );
};
export default TOC;