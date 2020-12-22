import React from 'react';
import PropTypes from 'prop-types';
import {Input as InputWSR, InputProps} from 'wix-style-react';
import pickWithValues from '../utils/pickWithValues';

/**
 * FormField
 */
class Input extends React.Component<InputProps, any> {

    static propTypes: PropTypes.InferProps<InputProps> = {
        ariaControls: PropTypes.string,
        ariaDescribedby: PropTypes.string,

        /** Used to define a string that labels the current element in case where a text label is not visible on the screen. */
        ariaLabel: PropTypes.string,

        /** Standard React Input autoFocus (focus the element on mount) */
        autoFocus: PropTypes.bool,

        /** Standard React Input autoSelect (select the entire text of the element on focus) */
        autoSelect: PropTypes.bool,

        /** Sets value of autocomplete attribute (consult the [HTML spec](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#attr-fe-autocomplete) for possible values  */
        autocomplete: PropTypes.string,

        /** Specifies a data-hook for tests */
        dataHook: PropTypes.string,

        /** Default value for those who wants to use this component un-controlled */
        defaultValue: PropTypes.string,

        /** when set to true this component is disabled */
        disabled: PropTypes.bool,

        /** Sets UI to indicate a status */
        status: PropTypes.oneOf(['', 'error', 'warning', 'loading']),

        /** The status message to display when hovering the status icon, if not given or empty there will be no tooltip */
        statusMessage: PropTypes.node,

        /** When set to true, this input won't display status suffix */
        hideStatusSuffix: PropTypes.bool,

        forceFocus: PropTypes.bool,
        forceHover: PropTypes.bool,

        id: PropTypes.string,

        /** Input max length */
        maxLength: PropTypes.number,

        /** Should the component include a menu arrow */
        menuArrow: PropTypes.bool,

        /** Displays clear button (X) on a non-empty input */
        clearButton: PropTypes.bool,

        /** A single CSS class name to be appended to the Input's wrapper element. */
        className: PropTypes.string,

        /** Used to reference element data when a form is submitted. */
        name: PropTypes.string,

        /** When set to true, this input will have no rounded corners on its left */
        noLeftBorderRadius: PropTypes.bool,

        /** When set to true, this input will have no rounded corners on its right */
        noRightBorderRadius: PropTypes.bool,

        /** Standard input onBlur callback */
        onBlur: PropTypes.func,

        /** Standard input onChange callback */
        onChange: PropTypes.func,

        /** Displays clear button (X) on a non-empty input and calls callback with no arguments */
        onClear: PropTypes.func,
        onCompositionChange: PropTypes.func,

        /** Called when user presses -enter- */
        onEnterPressed: PropTypes.func,

        /** Called when user presses -escape- */
        onEscapePressed: PropTypes.func,

        /** Standard input onFocus callback */
        onFocus: PropTypes.func,

        /** Standard input onClick callback */
        onInputClicked: PropTypes.func,

        /** Standard input onKeyDown callback */
        onKeyDown: PropTypes.func,
        onKeyUp: PropTypes.func,

        /** called when user pastes text from clipboard (using mouse or keyboard shortcut) */
        onPaste: PropTypes.func,

        /** Placeholder to display */
        placeholder: PropTypes.string,

        /** Component you want to show as the prefix of the input */
        prefix: PropTypes.node,

        /** Sets the input to readOnly */
        readOnly: PropTypes.bool,

        /** When set to true, this input will not be editable */
        disableEditing: PropTypes.bool,

        /** When set to true, this input will be rounded */
        roundInput: PropTypes.bool,

        /** Flip the magnify glass image so it be more suitable to rtl */
        rtl: PropTypes.bool,

        /** Specifies the size of the input */
        size: PropTypes.oneOf(['', 'small', 'medium', 'large']),

        /** Component you want to show as the suffix of the input */
        suffix: PropTypes.node,

        /** Standard component tabIndex */
        tabIndex: PropTypes.number,

        /** Text overflow behaviour */
        textOverflow: PropTypes.string,

        /** Placement of status tooltips */
        tooltipPlacement: PropTypes.string,

        /** Specifies the type of `<input/>` element to display.default is text. */
        type: PropTypes.string,

        /** Input's value */
        value: PropTypes.string,
        withSelection: PropTypes.bool,
        required: PropTypes.bool,

        /** Minimum value input can have - similar to html5 min attribute */
        min: PropTypes.number,

        /** Maximum value input can have - similar to html5 max attribute */
        max: PropTypes.number,

        /** Step steps to increment/decrement - similar to html5 step attribute */
        step: PropTypes.number,

        /** Pattern the value must match to be valid (regex) */
        pattern: PropTypes.string,
    };

    static defaultProps: InputProps = {
        autoSelect: true,
        size: 'medium',
        roundInput: false,
        textOverflow: 'clip',
        maxLength: 524288,
        withSelection: false,
        clearButton: false,
        hideStatusSuffix: false,
    };

    render() {
        const propsWithValues: InputProps = pickWithValues(this.props);
        return (
            <InputWSR {...propsWithValues} />
        );
    }
}

export default Input;
