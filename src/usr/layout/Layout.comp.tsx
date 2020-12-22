import React from 'react';
import {Layout as LayoutWSR} from 'wix-style-react';
import type {LayoutProps} from './Layout.props';
import {LayoutTypes} from './Layout.props';

/**
 * Layout
 */
const Layout = ({alignItems, children, cols, gap, justifyItems, rowHeight}: LayoutProps) => {
    return (
        <LayoutWSR
            alignItems={alignItems}
            cols={cols}
            gap={gap}
            justifyItems={justifyItems}
            rowHeight={rowHeight}
        >
            {children}
        </LayoutWSR>
    );
}

Layout.propTypes = LayoutTypes;

Layout.defaultProps = {
    gap: '30px',
    rowHeight: 'auto',
    children: [<span/>]
};

export default Layout;
