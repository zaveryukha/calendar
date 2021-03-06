import React from 'react';
import { css } from 'emotion';
import { useTheme } from 'emotion-theming';

const RteText = React.forwardRef(({ html, className = '' }, ref) => {
    const theme = useTheme();
    const htmlWithStrongSlashes = html
        .replace(/([\s])\/\/([\s])/g, '$1<strong>//</strong>$2')
        .replace(/([\s])\/([\s])/g, '$1<strong>/</strong>$2');
    return (
        <div
            ref={ref}
            dangerouslySetInnerHTML={{ __html: htmlWithStrongSlashes }}
            className={
                css`
                    font-size: 18px;
                    line-height: 1.5;
                    color: ${theme.colours.darkGray};

                    & p {
                        margin-bottom: 12px;
                    }

                    & strong {
                        font-weight: normal !important;
                        color: ${theme.colours.red};
                    }

                    & h5 {
                        font-weight: bold;
                        margin-top: 24px;
                        margin-bottom: 12px;
                    }

                    & a {
                        color: ${theme.colours.primary};
                        cursor: pointer;
                    }

                    & img {
                        margin-right: 8px;
                    }

                    & audio {
                        margin-top: 12px;
                        margin-bottom: 12px;
                        display: block;
                    }
                ` +
                ' ' +
                className
            }
        />
    );
});
export default RteText;
