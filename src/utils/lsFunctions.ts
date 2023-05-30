const getLSData = (storeKey: string): any => {
    let lsData = localStorage.getItem(storeKey);
    if(Boolean(lsData)) {
        let lastPosition;
        if(lsData) {
          lastPosition  = JSON.parse(lsData);
        }
        return lastPosition;
    } else {
        return {};
    }
}

const setLSData = (storeKey: string, data: any): void => {
    localStorage.setItem(storeKey, JSON.stringify(data));
}

export { getLSData, setLSData };