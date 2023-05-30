import { AlertColor, IconButton, TextField } from "@mui/material";
import { PlayerRef, Player } from "@remotion/player";
import { useRef, useState } from "react";
import DraggableText from "./DraggableText/DraggableText.component";
import { IPosition, IVisulInfo } from "../general/interface";
import UsertAlert from "./UserAlert.component";
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import { getLSData, setLSData } from "../utils/lsFunctions";
import { pushNewWork, updateActiveIndx } from "../utils/updateWork";

export const PlayerContent = ({ serviceResult }: IPlayerContent) => {
  const [open, setOpen] = useState<boolean>(false);
  const [alertText, setAlertText] = useState<string>("");
  const [alertSeverity, setAlertSeverity] = useState<AlertColor>("success");
  // text are handled in two ways: movable input box and fixed one
  let lastPosition = getLSData('lastPosition');
  const { text: updatedText = "new text", currentPostition = { x: 0, y: 0 } } = lastPosition;
  const [text, setText] = useState<string | undefined>(updatedText);
  const [position, setPosition] = useState<IPosition>(currentPostition);

  // manage player statuse when content is changing
  const playerRef = useRef<PlayerRef>(null);
  const pause = () => playerRef?.current?.pause();
  const play = () => playerRef?.current?.play();

  // pause the player for edditing the text
  const textChanged = (e: any) => {
    setText(e.target.value);
  };

  const handleEnter = (e: any) => {
    if (e.key === "Enter") {
      saveInformation();
      pushNewWork(position, text);
    }
  };

  const onUndoClick = () => {
    let { data = [], activeIndex: indx = 0 } = getLSData("work");
    if (indx !== 0) {
      let { position: lastPos, text: txt } = data[indx - 1];
      setPosition(lastPos);
      setText(txt);
      updateActiveIndx("UNDO");
    }
  }

  const onRedoClick = () => {
    let { data = [], activeIndex: indx = 0 } = getLSData("work");
    if (indx !== 9 && indx < data.length - 1 && indx >= 0) {
      let { position: lastPos, text: txt } = data[indx + 1];
      setPosition(lastPos);
      setText(txt);
      updateActiveIndx("REDO");
    }
  }

  const saveInformation = () => {
    // console.log({position});
    setLSData('lastPosition', { currentPostition: position, text });
    if (!text || text === "") {
      setOpen(true);
      setAlertText("Please enter the text. It can not be empty.");
      setAlertSeverity("error");
      return;
    }
    setAlertText("information saved successfully! ");
    setAlertSeverity("success");
  };

  return (
    <>
      <TextField
        value={text}
        fullWidth
        label="Your Text"
        id="fullWidth"
        placeholder="Please type your text in here"
        onChange={textChanged}
        onKeyDown={handleEnter}
        helperText="Press enter to save changes"
      />
      <Player
        ref={playerRef}
        inputProps={{
          pause,
          play,
          text,
          setText,
          position,
          setPosition,
          saveInformation,
        }}
        component={DraggableText}
        compositionWidth={1000}
        compositionHeight={400}
        durationInFrames={1000}
        fps={60}
        controls
        loop
        clickToPlay={false}
      />
      <div>
        <IconButton aria-label="delete" onClick={() => onUndoClick()} color="primary">
          <UndoIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => onRedoClick()} disabled={false} color="primary">
          <RedoIcon />
        </IconButton>
      </div>
      <UsertAlert
        open={open}
        setOpen={setOpen}
        text={alertText}
        severity={alertSeverity}
      />
    </>
  );
};

interface IPlayerContent {
  serviceResult: IVisulInfo;
}
