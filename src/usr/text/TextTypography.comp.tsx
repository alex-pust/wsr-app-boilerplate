import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'wix-style-react';

export interface TextTypographyProps {
    ellipsis?: boolean;
    light?: boolean;
    secondary?: boolean;
    size?: 'tiny' | 'small' | 'medium';
    skin?: 'standard'
        | 'error'
        | 'success'
        | 'premium'
        | 'disabled'
        | 'primary';
    tagName?: string;
    weight?: 'thin' | 'normal' | 'bold';
    text?: string;
}

/**
 */
class TextTypography extends React.Component<TextTypographyProps, any> {

    static propTypes: PropTypes.InferProps<TextTypographyProps> = {
        /** When true, text that is longer than it's container will be truncated to a single line followed by ellipsis. Otherwise the text will break into several lines. */
        ellipsis: PropTypes.bool,
        /** make the text color lighter */
        light: PropTypes.bool,
        /** is the text type is secondary. Affects the font color */
        secondary: PropTypes.bool,
        /** font size of the text */
        size: PropTypes.oneOf(['', 'tiny', 'small', 'medium']),
        /** skin color of the text */
        skin: PropTypes.oneOf([
            '',
            'standard',
            'success',
            'error',
            'premium',
            'disabled',
            'primary',
        ]),
        /** tag name that will be rendered */
        tagName: PropTypes.string,
        /** font weight of the text */
        weight: PropTypes.oneOf(['', 'thin', 'normal', 'bold']),
        /**
         * Text
         */
        text: PropTypes.string,
    };

    static defaultProps: TextTypographyProps = {
        text: 'Some text',
    };

    render() {
        const {
            ellipsis,
            light,
            secondary,
            size,
            skin,
            tagName,
            weight,
            text
        } = this.props;
        return (
            <Text
                ellipsis={ellipsis}
                light={light}
                secondary={secondary}
                size={size}
                skin={skin}
                tagName={tagName as any} // should be a list of all HTML tags
                weight={weight}
            >
                {text}
            </Text>
        );
    }
}

export default TextTypography;
