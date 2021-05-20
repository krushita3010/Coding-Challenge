import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PetIcon from "@material-ui/icons/Pets";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import MicrophoneIcon from "@material-ui/icons/Mic";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});
export default function Navigator() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleRouting = (event, value) => {
    setValue(value);
    if (value === 0) {
      window.location.href = "./speech-to-text";
    } else if (value === 1) {
      window.location.href = "./bongo-cat";
    } else if (value === 2) {
      window.location.href = "./google-maps";
    }
  };
  return (
    <div>
      <BottomNavigation
        onChange={(event, value) => {
          handleRouting(event, value);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction
          label="Speech-to-text"
          icon={<MicrophoneIcon />}
        />
        <BottomNavigationAction label="Bongo Cat Clone" icon={<PetIcon />} />
        <BottomNavigationAction label="Maps Clone" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </div>
  );
}
