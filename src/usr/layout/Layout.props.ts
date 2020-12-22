import PropTypes from 'prop-types';

export interface LayoutProps {
    alignItems?: string;
    children?: React.ReactNode;
    gap?: string;
    cols?: number;
    justifyItems?: string;
    rowHeight?: string;
}

export const LayoutTypes: PropTypes.InferProps<LayoutProps> = {
    /** is used to aligns the grid items along the column axis */
    alignItems: PropTypes.oneOf([
        '',
        'inherit',
        'initial',
        'revert',
        'unset',
        'center',
        'end',
        'flex-end',
        'flex-start',
        'self-end',
        'self-start',
        'start',
        'baseline',
        'normal',
        'stretch'
    ]),
    /** one or more Cell components. Other nodes are accepted although not recommended */
    children: PropTypes.arrayOf(PropTypes.element),

    /** distance between cells both vertically and horizontally */
    gap: PropTypes.string,

    /** set custom amount of columns to be rendered. Default is 12 which means at `<Cell span={12}/>` occupies all columns, in other words, full width */
    cols: PropTypes.number,

    /** is used to justify the grid items along the row axis */
    justifyItems: PropTypes.oneOf([
        '',
        'inherit',
        'initial',
        'revert',
        'unset',
        'center',
        'end',
        'flex-end',
        'flex-start',
        'self-end',
        'self-start',
        'start',
        'baseline',
        'left',
        'legacy',
        'normal',
        'right',
        'stretch'
    ]),

    /** Sets all rows to a given height. */
    rowHeight: PropTypes.string,
};
