export function getID(array: any): number {

    let id: number = 0;

    for (let elem of array) {
        if (elem.id > id)
            id = elem.id
    }

    return id;
}