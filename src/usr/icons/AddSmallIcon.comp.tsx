import React from 'react';
import type {IconProps} from "./icon.props";
import {AddSmall as AddSmallX} from "wix-ui-icons-common";
import {IconTypes} from "./icon.props";

/**
 * Add icon
 */
const AddSmallIcon = ({size}: IconProps) => {
  return (
      <AddSmallX size={size} />
  );
}

AddSmallIcon.propTypes = IconTypes;

AddSmallIcon.defaultProps = {
  size: '1em',
};

export default AddSmallIcon;
