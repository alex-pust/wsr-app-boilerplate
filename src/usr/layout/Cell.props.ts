import PropTypes from "prop-types";

export interface CellProps {
    span?: number;
    vertical?: boolean;
    rows?: number;
    children?: React.ReactNode;
}

export const CellTypes: PropTypes.InferProps<CellProps> = {
    /**
     * any node to be rendered inside
     */
    children: PropTypes.arrayOf(PropTypes.element),
    /**
     * how many columns should this cell occupy. Can be any number from 1 to 12 inclusive
     */
    span: PropTypes.number,
    /**
     * whether to align children vertically to the middle
     */
    vertical: PropTypes.bool,
    /**
     * how many rows should this cell occupy.
     */
    rows: PropTypes.number,
};