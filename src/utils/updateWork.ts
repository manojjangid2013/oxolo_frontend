import { IPosition } from "../general/interface";
import { getLSData, setLSData } from "./lsFunctions";

const updateActiveIndx = (action: string): void => {
    let temp = getLSData("work");
    if(Boolean(temp)) {
        let {data = [], activeIndex: indx = 0} = temp;
        switch(action) {
            case "REDO": 
                setLSData("work", { data, activeIndex: indx + 1 });
                break;
            case "UNDO":
                setLSData("work", { data, activeIndex: indx - 1 });
                break;
            default:
                break;
        }
    }
}

const pushNewWork = (position: IPosition | undefined, text: string | undefined): void => {
    let temp = getLSData("work");
    if(Boolean(temp)) {
        let {data = [], activeIndex: indx = 0} = temp;
        if(Boolean(data) && data.length === 10) {
            data.shift();
            data.push({position, text});
            setLSData("work", { data, activeIndex: 9 });
        } else {
            data.push({position, text});
            setLSData("work", { data, activeIndex: (data.length === 0) ? 0 :  indx + 1 });
        }
    } else {
            const data = [{position, text}];
            setLSData("work", { data, activeIndex: 0 });
    }
}

export { updateActiveIndx, pushNewWork };