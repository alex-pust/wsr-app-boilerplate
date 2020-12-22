import React from 'react';
import PropTypes from 'prop-types';
import {Row as RowWSR} from 'wix-style-react';

export interface RowProps {
    children: React.ReactNode[];
    stretchViewsVertically: boolean;
}

/**
 * Use as wrapper for columns. Only Cols should be its children. One Row should not have more than 12 Cols.
 */
class Row extends React.Component<RowProps, any> {

    static propTypes: PropTypes.InferProps<RowProps> = {
        /**
         * Only Cols should be its children.
         */
        children: PropTypes.arrayOf(PropTypes.element),
        /**
         * Make all the views in that row the same height
         */
        stretchViewsVertically: PropTypes.bool,

    };

    static defaultProps: RowProps = {
        children: [<span/>],
        stretchViewsVertically: false,
    };

    render() {
        const {stretchViewsVertically, children} = this.props;
        return (
            <RowWSR stretchViewsVertically={stretchViewsVertically}>
                {children}
            </RowWSR>
        );
    }
}

export default Row;
