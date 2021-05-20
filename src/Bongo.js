import React, { useEffect, useState } from "react";
import { Chip, Avatar } from "@material-ui/core";
import BongoCat from "./images/bongoCat.png";
import Bongo from "./images/bongo.png";
import Piano from "./images/keyboard.png";
import bongo0 from "./sounds/sounds_bongo0.mp3";
import bongo1 from "./sounds/sounds_bongo1.mp3";
import key0 from "./sounds/sounds_keyboard0.mp3";
import key1 from "./sounds/sounds_keyboard1.mp3";
import key2 from "./sounds/sounds_keyboard2.mp3";
import key3 from "./sounds/sounds_keyboard3.mp3";
import meow from "./sounds/sounds_meow.mp3";
import KeyboardEventHandler from "react-keyboard-event-handler";

export default function Dictaphone() {
  const [display, setDisplay] = useState(false);
  const [instrument, setInstrument] = useState({});
  const bongo_sound0 = new Audio(bongo0);
  const bongo_sound1 = new Audio(bongo1);
  const key_sound0 = new Audio(key0);
  const key_sound1 = new Audio(key1);
  const key_sound2 = new Audio(key2);
  const key_sound3 = new Audio(key3);
  const meow_sound = new Audio(meow);

  useEffect(() => {
    setDisplay(true);
  });
  const options = [
    { value: "Bongo", label: "Bongo" },
    { value: "Piano", label: "Piano" },
  ];

  const handlePlaySound = (key, e) => {
    switch (key) {
      case "a":
        setInstrument({ value: "Bongo", label: "Bongo" });
        bongo_sound0.play();
        break;
      case "b":
        setInstrument({ value: "Bongo", label: "Bongo" });
        bongo_sound1.play();
        break;
      case "1":
        setInstrument({ value: "Piano", label: "Piano" });
        key_sound0.play();
        break;
      case "2":
        setInstrument({ value: "Piano", label: "Piano" });
        key_sound1.play();
        break;
      case "3":
        setInstrument({ value: "Piano", label: "Piano" });
        key_sound2.play();
        break;
      case "4":
        setInstrument({ value: "Piano", label: "Piano" });
        key_sound3.play();
        break;
      case "space":
        meow_sound.play();
        break;
      default:
        break;
    }
  };
  return (
    <>
      {display && (
        <div style={{ position: "relative" }}>
          <div style={{ float: "right", display: "inline-block" }}>
            <Chip
              style={{ fontSize: "20px", marginBottom: "5px" }}
              label="Keyboard Controls"
              variant="outlined"
            />
            <div>
              <Chip
                style={{ fontSize: "15px", marginBottom: "5px" }}
                label="Piano"
                variant="outlined"
              />
              <div style={{ display: "flex", marginBottom: "5px" }}>
                <Avatar>1</Avatar>
                <Avatar>2</Avatar>
                <Avatar>3</Avatar>
                <Avatar>4</Avatar>
              </div>
              <Chip
                style={{ fontSize: "15px", marginBottom: "5px" }}
                label="Bongo"
                variant="outlined"
              />
              <div style={{ display: "flex", padding: "2px" }}>
                <Avatar>A</Avatar>
                <Avatar>B</Avatar>
              </div>
              <Chip
                style={{ fontSize: "15px", marginBottom: "5px" }}
                label="Meow"
                variant="outlined"
              />
              <div style={{ display: "flex", padding: "2px" }}>
                <Avatar variant="square" style={{ fontSize: "12px" }}>
                  Space
                </Avatar>
              </div>
            </div>
          </div>
          <div>
            <img
              style={{ position: "absolute", marginLeft: "300px" }}
              src={BongoCat}
              alt="Bongo Cat"
            />
            <KeyboardEventHandler
              handleKeys={["1", "2", "3", "4", "a", "b", "space"]}
              onKeyEvent={(key, e) => handlePlaySound(key, e)}
            />
          </div>
          {instrument.value === "Bongo" ? (
            <div>
              <img
                style={{ position: "relative", marginTop: "50px" }}
                src={Bongo}
                alt="Bongo"
              />
            </div>
          ) : (
            <div>
              <img
                style={{ position: "relative", marginTop: "50px" }}
                src={Piano}
                alt="Piano"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
