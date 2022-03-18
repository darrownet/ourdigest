import React from 'react';

export type FooterProps = {
    activated?: boolean;
}

const Footer: React.FC<FooterProps> = ({activated = true}: FooterProps) => {
    return (
        <>
            {activated &&
            <footer>
              <p>footer content...</p>
            </footer>
            }
        </>
    );
};

export default Footer;
