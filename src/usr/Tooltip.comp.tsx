import React from 'react';
import PropTypes from 'prop-types';
import {Tooltip as TooltipWSR, TooltipProps as TooltipPropsWSR} from 'wix-style-react';

export type TooltipProps = TooltipPropsWSR & {
    child?: React.ReactNode;
    contentText?: string;
    contentElement?: React.ReactNode;
}

/**
 */
class Tooltip extends React.Component<TooltipProps, any> {

    static propTypes: PropTypes.InferProps<TooltipProps> = {
        /** tooltip trigger element. Can be a renderable node */
        child: PropTypes.element,
        /** tooltip content text */
        contentText: PropTypes.string,
        /** tooltip content renderable node */
        contentElement: PropTypes.node,
        /** align tooltip content */
        textAlign: PropTypes.oneOf(['start', 'center']),
        /** time in milliseconds to wait before showing the tooltip */
        enterDelay: PropTypes.number,
        /**  time in milliseconds to wait before hiding the tooltip. Defaults to 0. */
        exitDelay: PropTypes.number,
        /** moves tooltip content relative to the parent by x or y */
        moveBy: PropTypes.shape({x: PropTypes.number, y: PropTypes.number}),
        /** Moves arrow by amount */
        moveArrowTo: PropTypes.number,
        /** tooltips content calculation relation to a dom element. Can be either:
         *  `'window', 'scrollParent', 'viewport', 'parent'`, `element` or
         * `function` based predicate i.e. (elm) =>
         *  elm.getAttribute('data-hook') === 'value'
         */
        appendTo: PropTypes.oneOf(['window', 'scrollParent', 'viewport', 'parent']),
        /** whether to enable the flip behaviour. This behaviour is used to flip the Tooltips placement when it starts to overlap the target element. */
        flip: PropTypes.bool,
        /** whether to enable the fixed behaviour. This behaviour is used to keep the Tooltip at it's original placement even when it's being positioned outside the boundary. */
        fixed: PropTypes.bool,
        /** tooltip content container width in pixels */
        maxWidth: PropTypes.string,
        /** callback on tooltips content show event */
        onShow: PropTypes.func,
        /** callback on tooltips content hide event */
        onHide: PropTypes.func,
        /** tooltip content placement in relation to target element */
        placement: PropTypes.string,
        /** disables tooltip element trigger behaviour. If not specified, `disabled` prop of the `children` element will be used. */
        disabled: PropTypes.bool,
        /** sets size of the tooltip */
        size: PropTypes.oneOf(['small', 'medium']),
        /** tooltips content zindex */
        zIndex: PropTypes.number,
    };

    static defaultProps: TooltipProps = {
        contentText: 'Tooltip text',
        appendTo: 'window',
        enterDelay: 0,
        exitDelay: 0,
        fixed: false,
        flip: true,
        maxWidth: '240px',
        placement: 'top',
        textAlign: 'start',
        zIndex: 6000
    };

    render() {
        const {
            child,
            contentText,
            contentElement,
            textAlign,
            enterDelay,
            exitDelay,
            moveBy,
            moveArrowTo,
            appendTo,
            flip,
            fixed,
            maxWidth,
            placement,
            disabled,
            size,
            zIndex
        } = this.props;
        return (
            <TooltipWSR
                content={contentElement ? contentElement : contentText}
                textAlign={textAlign}
                enterDelay={enterDelay}
                exitDelay={exitDelay}
                moveBy={moveBy}
                moveArrowTo={moveArrowTo}
                appendTo={appendTo}
                flip={flip}
                fixed={fixed}
                maxWidth={maxWidth}
                placement={placement}
                disabled={disabled}
                size={size}
                zIndex={zIndex}
            >
                {child}
            </TooltipWSR>
        );
    }
}

export default Tooltip;
