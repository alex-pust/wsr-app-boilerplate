import React from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonWSR } from 'wix-style-react';

export interface ButtonProps {
  text: string;
  onClick?: () => void;
}

/**
 * Button is generated by Webcodesk. Replace this comment with a valuable description.
 */
class Button extends React.Component<ButtonProps, any> {

  static propTypes: PropTypes.InferProps<ButtonProps> = {
    /**
     * Label of the button.
     */
    text: PropTypes.string.isRequired,
    /**
     * Triggered when the user clicks on the button
     */
    onClick: PropTypes.func,
  };

  static defaultProps: ButtonProps = {
    text: 'Button',
  };

  // constructor(props: PrimaryButtonProps) {
  //   super(props);
  // }

  handleButtonClick = (e: React.MouseEvent<HTMLElement>): void => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    if (this.props.onClick) {
      this.props.onClick();
    }
  };

  render() {
    const {
      text
    } = this.props;
    return (
        <ButtonWSR onClick={this.handleButtonClick}>
          {text}
        </ButtonWSR>
    );
  }
}

export default Button;
