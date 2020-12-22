import React from 'react';
import PropTypes from 'prop-types';
import {Container as ContainerWSR} from 'wix-style-react';

export interface ContainerProps {
    children: React.ReactNode[];
    fluid: boolean;
}

/**
 * Container is based on Row's with 12 Columns layout.
 */
class Container extends React.Component<ContainerProps, any> {

    static propTypes: PropTypes.InferProps<ContainerProps> = {
        /**
         * Should only be Rows although any node is allowed
         */
        children: PropTypes.arrayOf(PropTypes.element),
        /**
         * disable min/max width, use for smaller grids
         */
        fluid: PropTypes.bool,

    };

    static defaultProps: ContainerProps = {
        children: [<span/>],
        fluid: false,
    };

    render() {
        const {fluid, children} = this.props;
        return (
            <ContainerWSR fluid={fluid}>
                {children}
            </ContainerWSR>
        );
    }
}

export default Container;
