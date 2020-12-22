import PropTypes from 'prop-types';

export const FormFieldTooltipTypes = {
    /** tooltip trigger element. Can be either string or renderable node */
    children: PropTypes.node.isRequired,
    /** tooltip content */
    content: PropTypes.string,
    /** align tooltip content */
    textAlign: PropTypes.oneOf(['', 'start', 'center']),
    /** time in milliseconds to wait before showing the tooltip */
    enterDelay: PropTypes.number,
    /**  time in milliseconds to wait before hiding the tooltip. Defaults to 0. */
    exitDelay: PropTypes.number,
    /** moves tooltip content relative to the parent by x or y */
    moveBy: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
    /** Moves arrow by amount */
    moveArrowTo: PropTypes.number,
    /**
     * tooltips content calculation relation to a dom element.
     * Can be either: `'window', 'scrollParent', 'viewport', 'parent'`
     */
    appendTo: PropTypes.oneOf(['', 'window', 'scrollParent', 'viewport', 'parent']),
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
    size: PropTypes.oneOf(['', 'small', 'medium']),
    /** establishes a relationship between tooltip element and tooltip content for a11y purposes */
    'aria-describedby': PropTypes.string,
    /** tooltips content z-index */
    zIndex: PropTypes.number,
}