import React from 'react';
import PropTypes from 'prop-types';
import {FormField as FormFieldWSR} from 'wix-style-react';
import {FormFieldTooltipTypes} from './FormFieldTooltip.props';

export interface FormFieldProps {
    inputElement: React.ReactNode;
    charCount?: number;
    stretchContent?: boolean;
    label?: string;
    labelSize?: 'small' | 'medium';
    labelAlignment?: 'middle' | 'top';
    labelPlacement?: 'top' | 'right' | 'left';
    required?: boolean;
    infoContent?: React.ReactNode;
    infoTooltipProps?: any;
    suffix?: React.ReactNode;
    id?: string;
}

/**
 * FormField
 */
class FormField extends React.Component<FormFieldProps, any> {

    static propTypes: PropTypes.InferProps<FormFieldProps> = {
        /**
         * any kids to render, should be some form of input. Input, InputArea & RichTextArea work well
         *
         * Note that alternatively you can also use `charCount` prop to display character count
         * instead of using the render function method.
         */
        inputElement: PropTypes.element,

        /** character count displayed on top right of the component */
        charCount: PropTypes.number,

        /** A custom element to appear on the end of the label row (it overrides the charCount in case it's provided) */
        suffix: PropTypes.node,

        /** Defines if the content (children container) grows when there's space available (otherwise, it uses the needed space only) */
        stretchContent: PropTypes.bool,

        /** optional text labeling this form field */
        label: PropTypes.string,

        /** setting label size (small, medium) */
        labelSize: PropTypes.oneOf(['small', 'medium']),

        /** label placement (top, left, right) */
        labelPlacement: PropTypes.oneOf([
            '', 'top', 'right', 'left'
        ]),

        /** label alignment  */
        labelAlignment: PropTypes.oneOf(['', 'middle', 'top']),

        /** whether to display an asterisk (*) or not */
        required: PropTypes.bool,

        /** display info icon with tooltip. Node from this prop is content of tooltip */
        infoContent: PropTypes.node,

        /** info icon tooltip props */
        infoTooltipProps: PropTypes.shape(FormFieldTooltipTypes),

        /** string used to match text label with FormField children. For example:
         *
         * ```js
         * <FormField id="myFormField" label="Hello">
         *   <Input id="myFormField"/>
         * </FormField>
         * ```
         */
        id: PropTypes.string,
    };

    static defaultProps: FormFieldProps = {
        inputElement: <span/>
    };

    render() {
        const {
            charCount,
            suffix,
            stretchContent,
            label,
            labelSize,
            labelPlacement,
            labelAlignment,
            required,
            infoContent,
            infoTooltipProps,
            id,
            inputElement
        } = this.props;
        return (
            <FormFieldWSR
                charCount={charCount}
                suffix={suffix}
                stretchContent={stretchContent}
                label={label}
                labelSize={labelSize}
                labelPlacement={labelPlacement}
                labelAlignment={labelAlignment}
                required={required}
                infoContent={infoContent}
                infoTooltipProps={infoTooltipProps}
                id={id}
            >
                {inputElement}
            </FormFieldWSR>
        );
    }
}

export default FormField;
