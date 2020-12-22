import React from 'react';
import {Cell as CellWSR} from 'wix-style-react';
import type {CellProps} from './Cell.props';
import {CellTypes} from './Cell.props';

/**
 * Layout
 */
const Cell = ({span, children, vertical, rows}: CellProps) => {
    return (
        <CellWSR
            span={span}
            vertical={vertical}
            rows={rows}
        >
            {children}
        </CellWSR>
    );
}

Cell.propTypes = CellTypes;

Cell.defaultProps = {
    span: 12,
    children: [<span/>]
};

export default Cell;
