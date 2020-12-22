import React from 'react';
import PropTypes from 'prop-types';
import {TestimonialList as TestimonialListWSR, TestimonialListProps} from 'wix-style-react';

/**
 */
class TestimonialList extends React.Component<TestimonialListProps, any> {

    static propTypes: PropTypes.InferProps<TestimonialListProps> = {
        /** Applied as data-hook HTML attribute that can be used in the tests */
        dataHook: PropTypes.string,
        /** A css class to be applied to the component's root element */
        className: PropTypes.string,
        /** Define the number of columns. It is used for the grid in order to define how many testimonials will be displayed in a row. The default value is 3. */
        cols: PropTypes.number,
        /**
         * Array of testimonials
         *  * `avatar` - the testimonial avatar image.
         *  * `text` - the testimonial content.
         *  * `authorName` - the testimonial author name.
         */
        testimonials: PropTypes.arrayOf(
            PropTypes.shape({
                avatar: PropTypes.node,
                text: PropTypes.string,
                authorName: PropTypes.string,
            }),
        ),
    };

    static defaultProps: TestimonialListProps = {
        cols: 3,
        testimonials: [
            {avatar: null, text: 'Testimonial 1 text', authorName: 'Author #1'},
            {avatar: null, text: 'Testimonial 2 text', authorName: 'Author #2'},
            {avatar: null, text: 'Testimonial 3 text', authorName: 'Author #3'},
        ],
    };

    render() {
        const {
            dataHook,
            className,
            cols,
            testimonials,
        } = this.props;
        return (
            <TestimonialListWSR
                dataHook={dataHook}
                className={className}
                cols={cols}
                testimonials={testimonials}
            />
        );
    }
}

export default TestimonialList;
