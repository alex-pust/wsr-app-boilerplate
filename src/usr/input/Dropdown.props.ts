import PropTypes from 'prop-types';

export interface DropdownProps {
    // todo: add all props to dropdown interface
}

export const DropdownTypes = {
    inputProps: PropTypes.shape({
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
        status: PropTypes.oneOf(['error', 'warning', 'loading']),

        /** The status message to display when hovering the status icon, if not given or empty there will be no tooltip */
        statusMessage: PropTypes.string,

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
        // prefix: PropTypes.node,

        /** Text you want to show as the prefix of the input */
        prefixText: PropTypes.string,

        /** Sets the input to readOnly */
        readOnly: PropTypes.bool,

        /** When set to true, this input will not be editable */
        disableEditing: PropTypes.bool,

        /** When set to true, this input will be rounded */
        roundInput: PropTypes.bool,

        /** Flip the magnify glass image so it be more suitable to rtl */
        rtl: PropTypes.bool,

        /** Specifies the size of the input */
        size: PropTypes.oneOf(['small', 'medium', 'large']),

        /** Component you want to show as the suffix of the input */
        // suffix: PropTypes.node,
        /** Text you want to show as the suffix of the input */
        suffixText: PropTypes.string,

        /** Standard component tabIndex */
        tabIndex: PropTypes.number,

        /** Text overflow behaviour */
        textOverflow: PropTypes.string,

        /** Placement of status tooltips */
        tooltipPlacement: PropTypes.string,

        /** Specifies the type of `<input/>` element to display.default is text. */
        type: PropTypes.string,

        /** Inputs value */
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
    }),
    /** Scroll to the selected option on opening the dropdown */
    focusOnSelectedOption: PropTypes.bool,
    /** Callback function called whenever the user press the `Escape` keyboard.*/
    onClose: PropTypes.func,
    /** Callback function called whenever the user selects a different option in the list */
    onSelect: PropTypes.func,
    /** Callback function called whenever an option becomes focused (hovered/active). Receives the relevant option object from the original props.options array. */
    onOptionMarked: PropTypes.func,
    /** Set overflow of container */
    overflow: PropTypes.string,
    /** Should show or hide the component */
    visible: PropTypes.bool,
    /** Array of objects:
     * - id `<string / number>` *required*: the id of the option, should be unique.
     * - value `<function / string / node>` *required*: can be a string, react element or a builder function.
     * - disabled `<bool>` *default value- false*: whether this option is disabled or not
     * - linkTo `<string>`: when provided the option will be an anchor to the given value
     * - title `<bool>`  *default value- false*  **deprecated**: please use `listItemSectionBuilder` for rendering a title.
     * - overrideStyle `<bool>` *default value- false*  **deprecated**: please use `overrideOptionStyle` for override option styles.
     * - overrideOptionStyle `<bool>` *default value- false* - when set to `true`, the option will be responsible to its own styles. No styles will be applied from the DropdownLayout itself.
     * - label `<string>`: the string displayed within an input when the option is selected. This is used when using `<DropdownLayout/>` with an `<Input/>`.
     */
    options: PropTypes.arrayOf(PropTypes.shape({
        /**
         * the id of the option, should be unique.
         */
        id: PropTypes.string.isRequired,
        /**
         * The value for the item
         */
        value: PropTypes.string.isRequired,
        /**
         * whether this option is disabled or not
         */
        disabled: PropTypes.bool,
        /**
         * the string displayed within an input when the option is selected.
         */
        label: PropTypes.string,
    })),
    /** The id of the selected option in the list  */
    selectedId: PropTypes.string,
    /** A fixed header to the list */
    fixedHeader: PropTypes.node,
    /** A fixed footer to the list */
    fixedFooter: PropTypes.node,
    /** Set the max height of the dropdownLayout in pixels */
    maxHeightPixels: PropTypes.number,
    /** Set the min width of the dropdownLayout in pixels   */
    minWidthPixels: PropTypes.number,
    /** Closes DropdownLayout on option selection */
    closeOnSelect: PropTypes.bool,
    /** Callback function called whenever the user entered with the mouse to the dropdown layout.*/
    onMouseEnter: PropTypes.func,
    /** Callback function called whenever the user exited with the mouse from the dropdown layout.*/
    onMouseLeave: PropTypes.func,
    /** Whether the selected option will be highlighted when dropdown reopened. */
    selectedHighlight: PropTypes.bool,
    /** Whether the `<DropdownLayout/>` is in a container component. If `true`, some styles such as shadows, positioning and padding will be added the the component contentContainer. */
    inContainer: PropTypes.bool,
    /** Set this prop for lacy loading of the dropdown layout items.*/
    infiniteScroll: PropTypes.bool,
    /** A callback called when more items are requested to be rendered. */
    loadMore: PropTypes.func,
    /** Whether there are more items to be loaded. */
    hasMore: PropTypes.bool,
    /**
     * Sets the default hover behavior when any number/string represents the id of option to hover
     */
    markedOption: PropTypes.string,
    onManuallyInput: PropTypes.func,
    onOptionsShow: PropTypes.func,
    onOptionsHide: PropTypes.func,
    /** Function that receives an option, and should return the value to be displayed. */
    valueParser: PropTypes.func,
    dropdownWidth: PropTypes.string,
    dropdownOffsetLeft: PropTypes.string,
    /** Controls whether to show options if input is empty */
    showOptionsIfEmptyInput: PropTypes.bool,
    /** Mark in bold word parts based on search pattern */
    highlight: PropTypes.bool,
    /** Indicates whether to render using the native select element */
    native: PropTypes.bool,
    /** common popover props */
    popoverProps: PropTypes.shape({
        appendTo: PropTypes.oneOf(['window', 'scrollParent', 'parent', 'viewport']),
        maxWidth: PropTypes.string,
        minWidth: PropTypes.string,
        flip: PropTypes.bool,
        fixed: PropTypes.bool,
        placement: PropTypes.oneOf([
            'auto-start',
            'auto',
            'auto-end',
            'top-start',
            'top',
            'top-end',
            'right-start',
            'right',
            'right-end',
            'bottom-end',
            'bottom',
            'bottom-start',
            'left-end',
            'left',
            'left-start',
        ]),
        dynamicWidth: PropTypes.bool,
    }),
    /** An initial selected option id. (Implies Uncontrolled mode) */
    initialSelectedId: PropTypes.string,
}