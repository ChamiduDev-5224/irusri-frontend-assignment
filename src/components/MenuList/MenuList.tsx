import React from "react";
import { Menu, Fade } from "@mui/material";
interface CommonMenuProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
}
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
