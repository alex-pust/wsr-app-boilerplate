import React from 'react';
import type {IconProps} from "./icon.props";
import {Add as AddX} from "wix-ui-icons-common";
import {IconTypes} from "./icon.props";

/**
 * Add icon
 */
const AddIcon = ({size}: IconProps) => {
  return (
      <AddX size={size} />
  );
}

AddIcon.propTypes = IconTypes;

AddIcon.defaultProps = {
  size: '1em',
};

export default AddIcon;
