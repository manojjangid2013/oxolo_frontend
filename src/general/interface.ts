import { Dispatch, SetStateAction } from "react";

export interface ITextElement {
  text: string | undefined;
  setText: Dispatch<SetStateAction<string | undefined>>;
  position?: IPosition;
  setPosition: Dispatch<SetStateAction<IPosition>>;
  pause: () => void;
  play: () => void;
  saveInformation: (position?: IPosition) => void;
}

export interface IPlayer {
  text: string | undefined;
  setText: Dispatch<SetStateAction<string | undefined>>;
  position?: IPosition;
}

export interface IPosition {
  x: number;
  y: number;
}

export interface IServiceResult<T> {
  success: boolean;
  data: T;
  message: string;
}

export interface IVisulInfo {
  text: string;
  timeStamp: string;
  position: IPosition;
}
