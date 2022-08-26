export const idMaker = (title: string): string => {
    return title.toLowerCase().replace(/ /g, "-");
};
