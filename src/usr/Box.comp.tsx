import React from 'react';
import PropTypes from 'prop-types';
import {Box as BoxWSR, BoxProps as BoxPropsWSR} from 'wix-style-react';
import tryGetNumber from './utils/tryGetNumber';

class Box extends React.Component<BoxPropsWSR, any> {

    static propTypes = {
        /** Any elements to be rendered inside */
        children: PropTypes.arrayOf(PropTypes.element),
        /** Define styles through a classname */
        className: PropTypes.string,
        /** Defines if the box behaves as an inline element */
        inline: PropTypes.bool,
        /** Defines how the children are ordered (horizontally or vertically) */
        direction: PropTypes.oneOf([
            '',
            'horizontal',
            'vertical'
        ]),
        /** Defines how the children are aligned according to the X axis */
        align: PropTypes.oneOf([
            '',
            'left',
            'center',
            'right',
            'space-between',
        ]),
        /** Defines how the children are aligned according to the Y axis */
        verticalAlign: PropTypes.oneOf([
            '',
            'top',
            'middle',
            'bottom',
            'space-between',
        ]),
        /** Sets padding on all sides.
         * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
         * a spacing token (SP1, SP2, etc.) or a string of space-separated values ("3px 3px") */
        padding: PropTypes.string,
        /** Sets padding on the top.
         * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
         * a spacing token (SP1, SP2, etc.) or a string of space-separated values ("3px 3px") */
        paddingTop: PropTypes.string,
        /** Sets padding on the right.
         * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
         * a spacing token (SP1, SP2, etc.) or a string of space-separated values ("3px 3px") */
        paddingRight: PropTypes.string,
        /** Sets padding on the bottom.
         * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
         * a spacing token (SP1, SP2, etc.) or a string of space-separated values ("3px 3px") */
        paddingBottom: PropTypes.string,
        /** Sets padding on the left.
         * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
         * a spacing token (SP1, SP2, etc.) or a string of space-separated values ("3px 3px") */
        paddingLeft: PropTypes.string,
        /** Sets margin on all sides.
         * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
         * a spacing token (SP1, SP2, etc.) or a string of space-separated values ("3px 3px") */
        margin: PropTypes.string,
        /** Sets margin on the top.
         * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
         * a spacing token (SP1, SP2, etc.) or a string of space-separated values ("3px 3px") */
        marginTop: PropTypes.string,
        /** Sets margin on the right.
         * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
         * a spacing token (SP1, SP2, etc.) or a string of space-separated values ("3px 3px") */
        marginRight: PropTypes.string,
        /** Sets margin on the bottom.
         * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
         * a spacing token (SP1, SP2, etc.) or a string of space-separated values ("3px 3px") */
        marginBottom: PropTypes.string,
        /** Sets margin on the left.
         * Accepts a numeric value (multiplied by spacing unit), predefined spacing value (tiny, small, etc.)
         * a spacing token (SP1, SP2, etc.) or a string of space-separated values ("3px 3px") */
        marginLeft: PropTypes.string,
        /** Sets the minimum width of the box (pixels) */
        minWidth: PropTypes.string,
        /** Sets the maximum width of the box (pixels) */
        maxWidth: PropTypes.string,
        /** Sets the width of the box (pixels) */
        width: PropTypes.string,
        /** Sets the minimum height of the box (pixels) */
        minHeight: PropTypes.string,
        /** Sets the maximum height of the box (pixels) */
        maxHeight: PropTypes.string,
        /** Sets the height of the box (pixels) */
        height: PropTypes.string,
        /** Applied as data-hook HTML attribute that can be used in the tests */
        dataHook: PropTypes.string,
    };

    static defaultProps = {
        direction: 'horizontal',
        inline: false,
        children: [<span/>]
    };

    render() {
        const {
            className,
            inline, direction, align, verticalAlign, padding, paddingTop,
            paddingRight, paddingBottom, paddingLeft, margin,
            marginTop, marginRight, marginBottom, marginLeft,
            minWidth, maxWidth, width, minHeight, maxHeight, height, children
        } = this.props;
        return (
            <BoxWSR
                className={className}
                inline={inline}
                direction={direction}
                align={align}
                verticalAlign={verticalAlign}
                padding={tryGetNumber(padding)}
                paddingTop={tryGetNumber(paddingTop)}
                paddingRight={tryGetNumber(paddingRight)}
                paddingBottom={tryGetNumber(paddingBottom)}
                paddingLeft={tryGetNumber(paddingLeft)}
                margin={tryGetNumber(margin)}
                marginTop={tryGetNumber(marginTop)}
                marginRight={tryGetNumber(marginRight)}
                marginBottom={tryGetNumber(marginBottom)}
                marginLeft={tryGetNumber(marginLeft)}
                minWidth={tryGetNumber(minWidth)}
                maxWidth={tryGetNumber(maxWidth)}
                width={tryGetNumber(width)}
                minHeight={tryGetNumber(minHeight)}
                maxHeight={tryGetNumber(maxHeight)}
                height={tryGetNumber(height)}
            >
                {children}
            </BoxWSR>
        );
    }
}

export default Box;
