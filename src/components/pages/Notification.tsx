import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IStateNotis } from "../../redux/models/IStateNotis";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const NotisContainer = styled.div``;

const NotisText = styled.div``;

const NotisIcon = styled.i``;

const Exclamation = styled.i``;

const AlertExclamation = styled(Exclamation)`
  color: red;
`;

export function Notification() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let alert = true;
  const notisList = useSelector((state: IStateNotis) => state.notis.value);

  let NotisHtml = notisList.map((notis) => {
    return (
      <NotisContainer key={notis.id}>
        <NotisText>{notis.name} har inte ätit på 4 timmar</NotisText>
      </NotisContainer>
    );
  });

  return (
    <>
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Dashboard
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>

      <NotisIcon className="fa-solid fa-bell" onClick={() => {}}></NotisIcon>
      {alert ? (
        <AlertExclamation className="fa-solid fa-exclamation"></AlertExclamation>
      ) : (
        <Exclamation className="fa-solid fa-exclamation"></Exclamation>
      )}
      {NotisHtml}
    </>
  );
}
