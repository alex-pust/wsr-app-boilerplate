import React from 'react';
import PropTypes from 'prop-types';
import {Card as CardWSR} from 'wix-style-react';

export interface CardProps {
    children?: React.ReactNode;
    controls?: React.ReactNode;
    hideOverflow?: boolean;
    showShadow?: boolean;
    stretchVertically?: boolean;
}

/**
 * Card is a compound component for any content to be displayed in a styled block.
 * This is one of the basic building blocks and combined well with Grid component
 */
class Card extends React.Component<CardProps, any> {

    static propTypes: PropTypes.InferProps<CardProps> = {
        /**
         * any node to render inside card
         */
        children: PropTypes.arrayOf(PropTypes.element),
        /**
         * any node that controls card e.g. a close button
         */
        controls: PropTypes.node,
        /**
         * makes the card's overflow content to be hidden
         */
        hideOverflow: PropTypes.bool,
        /**
         * makes the card have a box-shadow style
         */
        showShadow: PropTypes.bool,
        /**
         * makes the card stretch to max height in a container
         */
        stretchVertically: PropTypes.bool,
    };

    static defaultProps: CardProps = {
        children: [<span/>],
        showShadow: false,
        stretchVertically: false,
    };

    render() {
        const {children, controls, hideOverflow, showShadow, stretchVertically} = this.props;
        return (
            <CardWSR
                controls={controls}
                hideOverflow={hideOverflow}
                showShadow={showShadow}
                stretchVertically={stretchVertically}
            >
                {children}
            </CardWSR>
        );
    }
}

export default Card;
