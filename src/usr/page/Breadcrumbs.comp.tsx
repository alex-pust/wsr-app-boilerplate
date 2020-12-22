import React from 'react';
import PropTypes from 'prop-types';
import {Breadcrumbs as BreadcrumbsWSR, BreadcrumbsProps} from 'wix-style-react';

/**
 * Breadcrumbs is a type of navigation scheme which reveals the user’s location in a website or Web application.
 */
class Breadcrumbs extends React.Component<BreadcrumbsProps, any> {

    static propTypes: PropTypes.InferProps<BreadcrumbsProps> = {
        items: PropTypes.arrayOf(
            PropTypes.shape({
                /**
                 * Specifies the item id
                 */
                id: PropTypes.string.isRequired,
                /**
                 * Value to be shown on breadcrumb
                 */
                value: PropTypes.string.isRequired,
                /**
                 * Optional link to be called on click
                 */
                link: PropTypes.string,
                /**
                 * A custom item which will be rendered
                 */
                customElement: PropTypes.node,
                /**
                 * if this value is disabled
                 */
                disabled: PropTypes.bool,
            }),
        ).isRequired,
        onClick: PropTypes.func,
        activeId: PropTypes.string,
        size: PropTypes.oneOf(['medium', 'large']),
        /** The maximum width of Breadcrumb item */
        itemMaxWidth: PropTypes.string,
        theme: PropTypes.oneOf([
            'onWhiteBackground',
            'onGrayBackground',
            'onDarkBackground',
        ]),
    };

    static defaultProps: BreadcrumbsProps = {
        items: [
            {id: '1', value: 'Step 1'},
            {id: '2', value: 'Step 2'},
            {id: '3', value: 'Step 3'},
        ],
        size: 'medium',
        theme: 'onGrayBackground',
        itemMaxWidth: '240px',
    };

    render() {
        const {
            items, activeId, size, itemMaxWidth, theme
        } = this.props;
        return (
            <BreadcrumbsWSR
                items={items}
                activeId={activeId}
                size={size}
                itemMaxWidth={itemMaxWidth}
                theme={theme}
            />
        );
    }
}

export default Breadcrumbs;
