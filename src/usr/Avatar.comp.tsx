import React from 'react';
import PropTypes from 'prop-types';
import {Avatar as AvatarWSR} from 'wix-style-react';

export interface AvatarProps {
    name?: string;
    text?: string;
    placeholder?: React.ReactNode;
    imgSrc?: string;
    ariaLabel?: string;
    title?: string;
    shape?: 'circle' | 'square';
    size?:
        | 'size90'
        | 'size72'
        | 'size60'
        | 'size48'
        | 'size36'
        | 'size30'
        | 'size24'
        | 'size18';
    color?: 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6';
    className?: string;
    dataHook?: string;
    presence?: 'online' | 'offline' | 'busy';
    indication?: React.ReactNode;
    customIndication?: React.ReactNode;
    showIndicationOnHover?: boolean;

    onIndicationClick?(): void;

    onClick?(): void;

    loading?: boolean
}

/**
 * Avatar is a type of element that visually represents a user, either as an image, placeholder or text (name initials).
 * If more than one of these props is supplied (with name prop giving default value to the text` prop), then the resolved content type for display goes according to this priority:
 * image -> icon -> text.
 */
class Avatar extends React.Component<AvatarProps, any> {

    static propTypes: PropTypes.InferProps<AvatarProps> = {
        /**
         * The name of the avatar user. Text initials will be generated from the name.
         * The name value will be used as default value for html `title` and `aria-label`
         * attributes. And also as default value for the image's `alt` attribute if
         * `imgProps` is provided.
         */
        name: PropTypes.string,
        /** Text to render as content. */
        text: PropTypes.string,
        /**
         * A node with a placeholder to be rendered as content. Will be displayed if no
         * `text`, `name` or `imgProps` are provided. Defaults to an generic Avatar user
         * icon.
         */
        placeholder: PropTypes.node,
        /** Src attribute for an `<img>` tag to be rendered as content. */
        imgSrc: PropTypes.string,
        /** Used to define a string that labels the current element in case where a text label is not visible on the screen. */
        ariaLabel: PropTypes.string,
        /** HTML title attribute value. To be applied on the root element. */
        title: PropTypes.string,
        /**
         * Click event handler (when this property is provided the component will be clickable
         * on hover and will have a pointer cursor).
         */
        onClick: PropTypes.func,
        /** Avatar size. Options like 'size90' mean that the width and height are 90px. */
        size: PropTypes.oneOf([
            'size90',
            'size72',
            'size60',
            'size48',
            'size36',
            'size30',
            'size24',
            'size18',
        ]),
        /**
         * Background color of the avatar. When no color is provided the color is determined
         * by the provided text or name so that each name will receive a different color.
         */
        color: PropTypes.oneOf(['', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6']),
        /** Shape of the image, can be square or circle. */
        shape: PropTypes.oneOf(['', 'circle', 'square']),
        /** Classes to be applied to the root element. */
        className: PropTypes.string,
        /** Applied as data-hook HTML attribute that can be used to create driver in testing. */
        dataHook: PropTypes.string,
        /** Avatar presence. Options like 'online' mean that the contact is online. */
        presence: PropTypes.oneOf(['', 'online', 'offline', 'busy']),
        /** A node to be rendered as Indication. */
        indication: PropTypes.node,
        /** A node to be rendered as a custom indication, that is not wrapped by an IconButton. This node could be rendered in other shapes (such as square). */
        customIndication: PropTypes.node,
        /** Function which triggers on indication click. */
        onIndicationClick: PropTypes.func,
        /** Show indication on hover. */
        showIndicationOnHover: PropTypes.bool,
        /** Explicitly show a loader on top of the Avatar, commonly used when uploading an image and indicating a loading state */
        loading: PropTypes.bool,
    };

    static defaultProps: AvatarProps = {
        shape: 'circle',
        showIndicationOnHover: false,
        size: 'size48',
    };

    render() {
        const {
            name,
            text,
            placeholder,
            imgSrc,
            ariaLabel,
            title,
            size,
            color,
            shape,
            className,
            dataHook,
            presence,
            indication,
            customIndication,
            showIndicationOnHover,
            loading
        } = this.props;
        let imgProps: React.ImgHTMLAttributes<HTMLImageElement> = {};
        if (imgSrc) {
            imgProps.src = imgSrc;
        }
        return (
            <AvatarWSR
                size={size}
                title={title}
                dataHook={dataHook}
                className={className}
                name={name}
                text={text}
                placeholder={placeholder}
                imgProps={imgProps}
                ariaLabel={ariaLabel}
                color={color}
                shape={shape}
                presence={presence}
                indication={indication}
                customIndication={customIndication}
                showIndicationOnHover={showIndicationOnHover}
                loading={loading}
            />
        );
    }
}

export default Avatar;
