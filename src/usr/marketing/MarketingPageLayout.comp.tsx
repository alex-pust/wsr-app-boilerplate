import React from 'react';
import PropTypes from 'prop-types';
import {MarketingPageLayout as MarketingPageLayoutWSR, MarketingPageLayoutProps} from 'wix-style-react';

/**
 */
class MarketingPageLayout extends React.Component<MarketingPageLayoutProps, any> {

    static propTypes: PropTypes.InferProps<MarketingPageLayoutProps> = {
        /** Applied as data-hook HTML attribute that can be used in the tests */
        dataHook: PropTypes.string,

        /** A css class to be applied to the component's root element */
        className: PropTypes.string,

        /** Specifies the horizontal padding size. The default value is 'large'. */
        horizontalSize: PropTypes.oneOf(['', 'medium', 'large']),

        /** Specifies the vertical padding size. The default value is 'large'. */
        verticalSize: PropTypes.oneOf(['', 'medium', 'large']),

        /** Determine if to remove the image side padding. The padding is added only on the right side. */
        removeImageHorizontalPadding: PropTypes.bool,

        /** Determine if to remove the image vertical padding. */
        removeImageVerticalPadding: PropTypes.bool,

        /** The page's content. Use: <MarketingPageLayoutContent/> */
        content: PropTypes.element,

        /** The page's image */
        image: PropTypes.element,

        /** The page's footer. Use <TestimonialList/> or <FeatureList/> */
        footer: PropTypes.element,
    };

    static defaultProps: MarketingPageLayoutProps = {
        horizontalSize: 'large',
        verticalSize: 'large',
    };

    render() {
        const {
            dataHook,
            className,
            horizontalSize,
            verticalSize,
            removeImageHorizontalPadding,
            removeImageVerticalPadding,
            content,
            image,
            footer
        } = this.props;
        return (
            <MarketingPageLayoutWSR
                dataHook={dataHook}
                className={className}
                horizontalSize={horizontalSize}
                verticalSize={verticalSize}
                removeImageHorizontalPadding={removeImageHorizontalPadding}
                removeImageVerticalPadding={removeImageVerticalPadding}
                content={content}
                image={image}
                footer={footer}
            />
        );
    }
}

export default MarketingPageLayout;
