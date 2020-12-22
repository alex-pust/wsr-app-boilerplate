import React from 'react';
import PropTypes from 'prop-types';
import {Card as CardWSR} from 'wix-style-react';

export interface CardHeaderProps {
    title?: string;
    subtitle?: string;
    suffix?: React.ReactNode;
}

/**
 * A card header component
 */
class CardHeader extends React.Component<CardHeaderProps, any> {

    static propTypes: PropTypes.InferProps<CardHeaderProps> = {
        title: PropTypes.string,
        subtitle: PropTypes.string,
        suffix: PropTypes.node,
    };

    static defaultProps: CardHeaderProps = {
        title: 'Title',
        subtitle: 'Subtitle'
    };

    render() {
        const {title, subtitle, suffix} = this.props;
        return (
            <CardWSR.Header title={title} subtitle={subtitle} suffix={suffix}/>
        );
    }
}

export default CardHeader;
