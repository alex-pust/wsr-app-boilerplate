import React from 'react';
import PropTypes from 'prop-types';
import {Col as ColWSR} from 'wix-style-react';

export interface ColProps {
    child: React.ReactNode;
    span: number;
    rtl: boolean;
}

/**
 * Use for any content.
 */
class Col extends React.Component<ColProps, any> {

    static propTypes: PropTypes.InferProps<ColProps> = {
        /**
         * Only Cols should be its children.
         */
        child: PropTypes.element,
        /**
         * The columns span of this column
         */
        span: PropTypes.number,
        /**
         * Reverses the columns ordering
         */
        rtl: PropTypes.bool,

    };

    static defaultProps: ColProps = {
        child: <span/>,
        span: 1,
        rtl: false,
    };

    render() {
        const {span, rtl, child} = this.props;
        return (
            <ColWSR span={span} rtl={rtl}>
                {child}
            </ColWSR>
        );
    }
}

export default Col;
