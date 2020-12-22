import React from 'react';
import PropTypes from 'prop-types';
import {Page as PageWSR} from 'wix-style-react';

export interface PageProps {
    pageHeader?: {
        minimized?: boolean;
        hasBackgroundImage?: boolean;
        breadcrumbs?: React.ReactNode;
        title?: string;
        subtitle?: string;
        showBackButton?: boolean;
        actionsBar?: React.ReactNode;
    };
    pageContent?: React.ReactNode;
    tailContent?: React.ReactElement;
    fullScreenContent?: boolean;
    // dataHook?: string;
    backgroundImageUrl?: string;
    maxWidth?: number;
    minWidth?: number;
    height?: string;
    sidePadding?: number;
    // className?: string;
    // gradientClassName?: string;
    zIndex?: number;
    horizontalScroll?: boolean;
}

/**
 */
class Page extends React.Component<PageProps, any> {

    static propTypes: PropTypes.InferProps<PageProps> = {
        /**
         *
         */
        pageHeader: PropTypes.shape({
            /** This property is being supplied by the Page component, it's value changes by the state of the scrolled content */
            minimized: PropTypes.bool,
            /** This property is being supplied by the Page component, it's value reflects if the Page has a background image or not */
            hasBackgroundImage: PropTypes.bool,
            /** Wix-Style-React Breadcrumbs component */
            breadcrumbs: PropTypes.node,
            /** The main title text */
            title: PropTypes.string,
            /** The subtitle text */
            subtitle: PropTypes.string,
            /** Should show a back button */
            showBackButton: PropTypes.bool,
            /** A placeholder for a component that can contain actions / anything else.
             * It should be a React component that receives `minimized` and `hasBackgroundImage` props. */
            actionsBar: PropTypes.node,
        }),
        /**
         * A render slot for the page scrollable body.
         * This is where all of the visible and scrollable content can appear.
         */
        pageContent: PropTypes.element,
        /**
         * A render slot inside the Page's content for elements that can be scrolled.
         */
        tailContent: PropTypes.node,
        /**
         * span the content to full width
         */
        fullScreenContent: PropTypes.bool,
        /** Applied as data-hook HTML attribute that can be used in the tests */
        // dataHook: PropTypes.string,
        /** Background image url of the header background */
        backgroundImageUrl: PropTypes.string,
        /** Sets the max width of the content (Both in header and body) NOT including the page padding */
        maxWidth: PropTypes.number,
        /** Sets the min width of the content (Both in header and body) NOT including the page padding */
        minWidth: PropTypes.number,
        /** Allow the page to scroll horizontally for large width content */
        horizontalScroll: PropTypes.bool,
        /** Sets the height of the page (in px/vh/etc.) */
        height: PropTypes.string,
        /** Sets padding of the sides of the page */
        sidePadding: PropTypes.number,
        /** A css class to be applied  to the component's root element */
        // className: PropTypes.string,
        /** Header background color class name, allows to add a gradient to the header */
        // gradientClassName: PropTypes.string,
        /** z-index of the Page */
        zIndex: PropTypes.number,

    };

    static defaultProps: PageProps = {
        pageHeader: {
            title: 'Page title',
            subtitle: 'Page subtitle'
        },
        pageContent: <span/>,
        fullScreenContent: false,
    };

    render() {
        const {
            pageContent,
            fullScreenContent,
            backgroundImageUrl,
            maxWidth,
            minWidth,
            horizontalScroll,
            height,
            sidePadding,
            zIndex,
            pageHeader,
            tailContent,
        } = this.props;
        let headerElement = null;
        if (pageHeader) {
            const {
                breadcrumbs,
                title,
                actionsBar,
                subtitle,
                showBackButton,
                hasBackgroundImage,
                minimized
            } = pageHeader;
            if (breadcrumbs || actionsBar || subtitle || title) {
                headerElement = (
                    <PageWSR.Header
                        breadcrumbs={breadcrumbs}
                        actionsBar={actionsBar}
                        subtitle={subtitle}
                        title={title}
                        showBackButton={showBackButton}
                        hasBackgroundImage={hasBackgroundImage}
                        minimized={minimized}
                    />
                );
            }
        }
        let tailElement = null;
        if (tailContent) {
            tailElement = (
                <PageWSR.Tail>
                    {tailContent}
                </PageWSR.Tail>
            );
        }
        return (
            <PageWSR
                backgroundImageUrl={backgroundImageUrl}
                maxWidth={maxWidth}
                minWidth={minWidth}
                horizontalScroll={horizontalScroll}
                height={height}
                sidePadding={sidePadding}
                zIndex={zIndex}
            >
                {headerElement}
                {tailElement}
                <PageWSR.Content fullScreen={fullScreenContent}>
                    {pageContent}
                </PageWSR.Content>
            </PageWSR>
        );
    }
}

export default Page;
