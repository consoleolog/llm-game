export class CommonUtil {

    static isEmpty = (value : unknown) : boolean => value === "" || value === null || value === undefined

    static createUniqueKey(type: string): string {
        const now = new Date();
        const currentDate = now.toISOString().replace(/[-T:.Z]/g, '').slice(0, 14); // YYYYMMDDHHMMSS format

        const rndm = Math.floor(Math.random() * 100000).toString().padStart(5, '0');

        return type + currentDate + rndm;
    }


}