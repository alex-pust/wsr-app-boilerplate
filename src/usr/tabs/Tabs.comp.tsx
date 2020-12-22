import React from 'react';
import PropTypes from 'prop-types';
import {Tabs as TabsWSR, TabsProps} from 'wix-style-react';

/**
 * Tabs component enables navigation between content at the same page.
 */
class Tabs extends React.Component<TabsProps, any> {

    static propTypes: PropTypes.InferProps<TabsProps> = {
        /** A selected tab id */
        activeId: PropTypes.string,

        /** Places a divider on bottom */
        hasDivider: PropTypes.bool,

        /** An array of tabs
         | propName | propType | isRequired | description |
         |----------|----------|------------|-------------|
         | id | string | + | Item id |
         | title | node | + | Tab title |
         */
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string,
                title: PropTypes.string,
            }),
        ).isRequired,

        /** A minimum width of the container */
        minWidth: PropTypes.string,

        /** One of: '', compact, compactSide, uniformSide, uniformFull */
        type: PropTypes.oneOf([
            '',
            'compact',
            'compactSide',
            'uniformSide',
            'uniformFull',
        ]),

        /** One of: medium, small*/
        size: PropTypes.oneOf(['medium', 'small']),

        /** A renderable node */
        sideContent: PropTypes.node,

        /** A specific width of a tab (only for uniformSide type) */
        width: PropTypes.string,

        /** Click event handler  */
        onClick: PropTypes.func,

    };

    static defaultProps: TabsProps = {
        items: [
            {id: '1', title: 'Tab 1'},
            {id: '2', title: 'Tab 2'},
            {id: '3', title: 'Tab 3'},
        ],
        hasDivider: true,
        size: 'medium',
        activeId: '1'
    };

    render() {
        const {items, activeId, hasDivider, minWidth, type, size, sideContent, width} = this.props;
        return (
            <TabsWSR
                items={items}
                activeId={activeId}
                hasDivider={hasDivider}
                minWidth={minWidth}
                type={type}
                size={size}
                sideContent={sideContent}
                width={width}
            />
        );
    }
}

export default Tabs;
