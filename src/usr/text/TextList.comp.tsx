import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'wix-style-react';

export interface TextListProps {
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
    listStyle?: 'checkmark' | 'circle';
    listItems?: string[];
}

/**
 */
class TextList extends React.Component<TextListProps, any> {

    static propTypes: PropTypes.InferProps<TextListProps> = {
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
        /** set list items style */
        listStyle: PropTypes.oneOf(['', 'checkmark', 'circle']),
        /** list items */
        listItems: PropTypes.arrayOf(PropTypes.string),
    };

    static defaultProps: TextListProps = {
        listItems: [
            'Item 1', 'Item 2', 'Item 3'
        ]
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
            listStyle,
            listItems
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
                listStyle={listStyle}
            >
                <ul>
                    {listItems?.map((listItem, idx) => {
                        return (
                            <li key={`listItem${idx}`}>{listItem}</li>
                        );
                    })}
                </ul>
            </Text>
        );
    }
}

export default TextList;
