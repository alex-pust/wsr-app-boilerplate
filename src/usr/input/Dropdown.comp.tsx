import React from 'react';
import {Dropdown as DropdownWSR, Input} from 'wix-style-react';
import {DropdownTypes} from './Dropdown.props';

/**
 * A Dropdown presents a list of options and allows a user to select one of the options.
 */
const Dropdown = (props: any) => {

    /**
     * Prefix & suffix
     */
    const {inputProps: {prefixText, suffixText}} = props;
    let prefixNode = null;
    let suffixNode = null;
    if (prefixText) {
        prefixNode = <Input.Affix>{prefixText}</Input.Affix>;
    }
    if (suffixText) {
        suffixNode = <Input.Affix>{suffixText}</Input.Affix>;
    }
    /**
     * Input props
     */
    const {
        inputProps: {
            ariaControls,
            ariaDescribedby,
            ariaLabel,
            autoFocus,
            autoSelect,
            autocomplete,
            dataHook,
            defaultValue,
            disabled,
            status,
            statusMessage,
            hideStatusSuffix,
            forceFocus,
            forceHover,
            id,
            maxLength,
            menuArrow,
            clearButton,
            className,
            name,
            noLeftBorderRadius,
            noRightBorderRadius,
            placeholder,
            readOnly,
            disableEditing,
            roundInput,
            rtl,
            size,
            tabIndex,
            textOverflow,
            tooltipPlacement,
            type,
            value,
            withSelection,
            required,
            min,
            max,
            step,
            pattern,
        }
    } = props;
    /**
     * Dropdown props
     */
    const {
        focusOnSelectedOption,
        overflow,
        visible,
        options,
        selectedId,
        fixedHeader,
        fixedFooter,
        maxHeightPixels,
        minWidthPixels,
        closeOnSelect,
        selectedHighlight,
        inContainer,
        infiniteScroll,
        hasMore,
        markedOption,
        dropdownWidth,
        dropdownOffsetLeft,
        showOptionsIfEmptyInput,
        highlight,
        native,
        popoverProps,
        initialSelectedId
    } = props;
    return (
        <DropdownWSR
            prefix={prefixNode}
            suffix={suffixNode}
            ariaControls={ariaControls}
            ariaDescribedby={ariaDescribedby}
            ariaLabel={ariaLabel}
            autoFocus={autoFocus}
            autoSelect={autoSelect}
            dataHook={dataHook}
            defaultValue={defaultValue}
            disabled={disabled}
            status={status}
            statusMessage={statusMessage}
            hideStatusSuffix={hideStatusSuffix}
            forceFocus={forceFocus}
            forceHover={forceHover}
            id={id}
            maxLength={maxLength}
            menuArrow={menuArrow}
            clearButton={clearButton}
            className={className}
            name={name}
            noLeftBorderRadius={noLeftBorderRadius}
            noRightBorderRadius={noRightBorderRadius}
            placeholder={placeholder}
            readOnly={readOnly}
            disableEditing={disableEditing}
            roundInput={roundInput}
            rtl={rtl}
            size={size}
            tabIndex={tabIndex}
            textOverflow={textOverflow}
            tooltipPlacement={tooltipPlacement}
            type={type}
            value={value}
            withSelection={withSelection}
            required={required}
            min={min}
            max={max}
            step={step}
            pattern={pattern}
            focusOnSelectedOption={focusOnSelectedOption}
            overflow={overflow}
            visible={visible}
            options={options}
            selectedId={selectedId}
            fixedHeader={fixedHeader}
            fixedFooter={fixedFooter}
            maxHeightPixels={maxHeightPixels}
            minWidthPixels={minWidthPixels}
            closeOnSelect={closeOnSelect}
            selectedHighlight={selectedHighlight}
            inContainer={inContainer}
            infiniteScroll={infiniteScroll}
            hasMore={hasMore}
            markedOption={markedOption}
            autocomplete={autocomplete}
            dropdownWidth={dropdownWidth}
            dropdownOffsetLeft={dropdownOffsetLeft}
            showOptionsIfEmptyInput={showOptionsIfEmptyInput}
            highlight={highlight}
            native={native}
            popoverProps={popoverProps}
            initialSelectedId={initialSelectedId}
            inputElement={(<Input/>)}
        />
    );
}

Dropdown.propTypes = DropdownTypes;

Dropdown.defaultProps = {
    inputProps: {
        autoSelect: false,
        clearButton: false,
        maxLength: 524288,
        roundInput: false,
        size: 'medium',
        textOverflow: 'clip',
        withSelection: false,
        menuArrow: true,
    },
    closeOnSelect: true,
    dropdownOffsetLeft: '0',
    hasMore: false,
    hideStatusSuffix: false,
    inContainer: false,
    infiniteScroll: false,
    maxHeightPixels: 260,
    native: false,
    overflow: 'auto',
    popoverProps: {appendTo: 'parent', flip: false, fixed: true, placement: 'bottom',},
    selectedHighlight: true,
    showOptionsIfEmptyInput: true,

    options: [
        {id: '1', value: 'Option 1'},
        {id: '2', value: 'Option 2'},
        {id: '3', value: 'Option 3'},
    ],
};

export default Dropdown;
