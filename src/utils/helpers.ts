export const idMaker = (title: string): string => {
    return title.toLowerCase().replace(/ /g, "-");
};

export const textCutter = (title: string): string => {
    return title.length >= 20 ? title.slice(0, 49) + "...." : title;
};
