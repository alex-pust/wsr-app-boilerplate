import React from 'react';
import PropTypes from 'prop-types';
import {Card as CardWSR} from 'wix-style-react';

export interface CardSubheaderProps {
    title?: string;
    suffix?: React.ReactNode;
}

/**
 * A card sub-header component
 */
class CardSubheader extends React.Component<CardSubheaderProps, any> {

    static propTypes: PropTypes.InferProps<CardSubheaderProps> = {
        /**
         *    a placeholder for text title
         */
        title: PropTypes.string,
        /**
         * a render slot for action nodes, for example buttons
         */
        suffix: PropTypes.node,
    };

    static defaultProps: CardSubheaderProps = {
        title: 'Subheader Title',
    };

    render() {
        const {title, suffix} = this.props;
        return (
            <CardWSR.Subheader title={title} suffix={suffix}/>
        );
    }
}

export default CardSubheader;
