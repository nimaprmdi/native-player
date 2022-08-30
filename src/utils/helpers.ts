export const idMaker = (title: string): string => {
    return title.toLowerCase().replace(/ /g, "-");
};

export const textCutter = (title: string, cutAmount: number = 49): string => {
    return title.length >= 20 ? title.slice(0, cutAmount) + "...." : title;
};

const sortDataAtoZ = <T>(datas: T) => {
    return Array.isArray(datas) && datas.sort((data, b) => data.name.localeCompare(b.name));
};

const sortDataZtoA = <T>(datas: T) => {
    return Array.isArray(datas) && datas.sort((data, b) => data.name.localeCompare(b.name)).reverse();
};

const shuffleData = <T>(datas: T) => {
    return Array.isArray(datas) && datas.sort((a, b) => 0.5 - Math.random());
};

export const handleSorting = <T>(sorting: string, data: T) => {
    switch (sorting) {
        case "a-to-z":
            return sortDataAtoZ(data);
            break;
        case "z-to-a":
            return sortDataZtoA(data);
            break;
        case "featured":
            return sortDataZtoA(data);
            break;
        case "random":
            return shuffleData(data);
            break;
        default:
            return data;
    }
};

export const padTo2Digits = (num: number) => {
    return num.toString().padStart(2, "0");
};

export const millisecondsToMinutes = (milliseconds: number) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.round((milliseconds % 60000) / 1000);
    return `${minutes}:${seconds}`;
};
