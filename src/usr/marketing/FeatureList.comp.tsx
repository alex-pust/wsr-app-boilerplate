import React from 'react';
import PropTypes from 'prop-types';
import {FeatureList as FeatureListWSR, FeatureListProps} from 'wix-style-react';

/**
 */
class FeatureList extends React.Component<FeatureListProps, any> {

    static propTypes: PropTypes.InferProps<FeatureListProps> = {
        /** Applied as data-hook HTML attribute that can be used in the tests */
        dataHook: PropTypes.string,
        /** A css class to be applied to the component's root element */
        className: PropTypes.string,
        /** Define the number of columns. It is used for the grid in order to define how many features will be displayed in a row. The default value is 3. */
        cols: PropTypes.number,
        /**
         * Array of features
         *  * `image` - the feature image.
         *  * `title` - the feature title.
         *  * `text` - the feature content.
         */
        features: PropTypes.arrayOf(
            PropTypes.shape({
                image: PropTypes.node,
                title: PropTypes.string,
                text: PropTypes.string,
            }),
        ),
    };

    static defaultProps: FeatureListProps = {
        cols: 3,
        features: [
            {image: null, title: 'Feature 1', text: 'Feature 1 description'},
            {image: null, title: 'Feature 2', text: 'Feature 2 description'},
            {image: null, title: 'Feature 3', text: 'Feature 3 description'},
        ],
    };

    render() {
        const {
            dataHook,
            className,
            cols,
            features
        } = this.props;
        return (
            <FeatureListWSR
                dataHook={dataHook}
                className={className}
                cols={cols}
                features={features}
            />
        );
    }
}

export default FeatureList;
