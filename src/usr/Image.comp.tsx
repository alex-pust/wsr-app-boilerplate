import React from 'react';
import PropTypes from 'prop-types';
import {Image as ImageWSR} from 'wix-style-react';

export interface ImageProps {
    height?: string;
    width?: string;
    src?: string;
    dataHook?: string;
    className?: string;
    fit?: 'contain' | 'cover' | 'tile' | 'none';
    position?: string;
}

/**
 */
class Image extends React.Component<ImageProps, any> {

    static propTypes: PropTypes.InferProps<ImageProps> = {
        /** Applied as data-hook HTML attribute that can be used in the tests */
        dataHook: PropTypes.string,
        /** A css class to be applied to the component's root element */
        className: PropTypes.string,
        /** Image asset source. A default placeholder image is displayed when source is not provided. */
        src: PropTypes.string,
        /** Width of the image element box. */
        width: PropTypes.string,
        /** Height of the image element box. */
        height: PropTypes.string,
        /**
         * Image source content fit mode inside a box. The special `tile` value is used to
         * enable tiled fit mode. Other values directly map to
         * [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
         * CSS property values.
         */
        fit: PropTypes.oneOf(['', 'contain', 'cover', 'tile', 'none']),
        /**
         * Image source content position inside an element box. Any valid
         * [CSS position](https://developer.mozilla.org/en-US/docs/Web/CSS/position_value)
         * value.
         */
        position: PropTypes.string,
    };

    static defaultProps: ImageProps = {
        fit: 'cover',
        position: 'center',
        width: '100%'
    };

    render() {
        const {
            dataHook,
            className,
            src,
            width,
            height,
            fit,
            position
        } = this.props;
        return (
            <ImageWSR
                dataHook={dataHook}
                className={className}
                src={src}
                width={width}
                height={height}
                fit={fit}
                position={position}
            />
        );
    }
}

export default Image;
