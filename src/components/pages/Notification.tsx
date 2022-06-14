import styled from "styled-components";
import { useSelector } from "react-redux";
import { IStateNotis } from "../../redux/models/IStateNotis";
import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { AlertContext } from "../../contexts/AlertContext";

const AlertExclamation = styled.i`
  position: absolute;
  color: red;
  bottom: 11px;
  font-size: 1.1rem;
`;

const Alert = styled.i`
  color: black;
`;

const StyledButton = styled(Button)`
  color: black;
`;

const StyledMenuItem = styled(MenuItem)`
  width: 380px;
`;

const LinkStyle = {
  color: "black",
  textDecoration: "none",
  display: "flex",
  padding: "20px",
};

export function Notification() {
  let alerts = React.useContext(AlertContext);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const notisList = useSelector((state: IStateNotis) => state.notis.value);

  let NotisHtml = notisList
    .slice(0)
    .reverse()
    .map((notis) => {
      return (
        <Link to={"/zoo/animal/" + notis.id} key={notis.id} style={LinkStyle}>
          <StyledMenuItem onClick={handleClose}>
            {notis.name} har inte ätit sen klockan {notis.timestamp}
          </StyledMenuItem>
        </Link>
      );
    });

  return (
    <>
      <div onClick={alerts.noNewNotis}>
        <StyledButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Alert className="fa-solid fa-bell"></Alert>
          {alerts.alert ? (
            <p>
              <AlertExclamation className="fa-solid fa-exclamation"></AlertExclamation>
            </p>
          ) : (
            <p></p>
          )}
        </StyledButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {NotisHtml}
        </Menu>
      </div>
    </>
  );
}
