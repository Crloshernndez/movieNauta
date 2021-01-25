import React, { useState, useEffect, useRef } from "react";
import "./BurgerMenu.css";
import { Link } from "react-router-dom";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Popper from "@material-ui/core/Popper";

import FastfoodIcon from "@material-ui/icons/Fastfood";

function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="burgerMenu">
      <div className="burgerMenu__logo">
        <FastfoodIcon
          className="burgerMenu__logo-img"
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        />
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              className="grow"
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <div>
                <ClickAwayListener onClickAway={handleClose}>
                  <div
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <div className="burgerMenu__menu">
                      <Link
                        className="burgerMenu__menu-link"
                        onClick={handleClose}
                        to="/"
                      >
                        Home
                      </Link>
                      <Link
                        className="burgerMenu__menu-link"
                        onClick={handleClose}
                        to="movies"
                      >
                        Movies
                      </Link>
                      <Link
                        className="burgerMenu__menu-link"
                        onClick={handleClose}
                        to="series"
                      >
                        Series
                      </Link>
                      <Link
                        className="burgerMenu__menu-link"
                        onClick={handleClose}
                        to="aboutUs"
                      >
                        AboutUs
                      </Link>
                    </div>
                  </div>
                </ClickAwayListener>
              </div>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

export default BurgerMenu;
