import React from "react";
import { Menu, Fade } from "@mui/material";

export const MenuList: React.FC<CommonMenuProps> = ({
  anchorEl,
  open,
  handleClose,
  children,
}) => {
  return (
    <Menu
      id="fade-menu"
      MenuListProps={{
        "aria-labelledby": "fade-button",
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
    >
      {children}
    </Menu>
  );
};
