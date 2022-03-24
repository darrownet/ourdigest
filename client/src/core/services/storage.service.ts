export interface IStorageService {
    localStorage: {
        delete:Function,
        read:Function,
        save:Function
    }
}

export const storageService = ():IStorageService => {
    return {
        localStorage: {
            delete: (key:string)=> {
                try {
                    localStorage.removeItem(key);
                } catch(err) {
                    console.log(err);
                }
            },
            read: (key:string) => {
                try {
                    const serialized:string = localStorage.getItem(key) || '';
                    return JSON.parse(serialized)
                } catch(err) {
                    console.log(err);
                }
            },
            save: (key:string, value:any) => {
                try {
                    const serialized = JSON.stringify(value);
                    localStorage.setItem(key, serialized)
                } catch(err) {
                    console.log(err);
                }
            }
        }
    }
}
