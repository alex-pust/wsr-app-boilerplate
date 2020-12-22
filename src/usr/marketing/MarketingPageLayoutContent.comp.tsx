import React from 'react';
import PropTypes from 'prop-types';
import {
    MarketingPageLayoutContent as MarketingPageLayoutContentWSR,
    MarketingPageLayoutContentProps
} from 'wix-style-react';

/**
 */
class MarketingPageLayoutContent extends React.Component<MarketingPageLayoutContentProps, any> {

    static propTypes: PropTypes.InferProps<MarketingPageLayoutContentProps> = {
        /** Applied as data-hook HTML attribute that can be used in the tests */
        dataHook: PropTypes.string,

        /** A css class to be applied to the component's root element */
        className: PropTypes.string,

        /** Specifies the size of the marketing page layout content.  The default value is 'large'. */
        size: PropTypes.oneOf(['', 'medium', 'large']),

        /** The overline content. */
        overline: PropTypes.node,

        /** The page's title. */
        title: PropTypes.node,

        /** The page's subtitle. */
        subtitle: PropTypes.node,

        /** The page's content. */
        content: PropTypes.element,

        /** The page's actions - area of buttons. */
        actions: PropTypes.node,
    };

    static defaultProps: MarketingPageLayoutContentProps = {
        size: 'large',
    };

    render() {
        const {
            dataHook,
            className,
            size,
            overline,
            title,
            subtitle,
            content,
            actions
        } = this.props;
        return (
            <MarketingPageLayoutContentWSR
                dataHook={dataHook}
                className={className}
                size={size}
                overline={overline}
                title={title}
                subtitle={subtitle}
                content={content}
                actions={actions}
            />
        );
    }
}

export default MarketingPageLayoutContent;
