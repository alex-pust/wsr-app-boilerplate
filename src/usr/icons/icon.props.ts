import PropTypes from 'prop-types';

export interface IconProps {
    size: string;
}

export const IconTypes: PropTypes.InferProps<IconProps> = {
    size: PropTypes.string,
}