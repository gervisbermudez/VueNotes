export default class Storage {

    constructor() {}

    setItem(itemName, itemValue) {
        return new Promise((resolve, reject) => {
            try {
                localStorage.setItem(itemName, JSON.stringify(itemValue));
                let isSetedItem = !!localStorage.getItem(itemName);
                if (isSetedItem !== null) {
                    resolve(true);
                } else {
                    throw (new Error('Item could not be saved'))
                }
            } catch (error) {
                reject(error);
            }
        })
    }

    getItem(itemName) {
        return new Promise((resolve, reject) => {
            try {
                let itemValue = localStorage.getItem(itemName);
                if (itemValue !== null) {
                    resolve(JSON.parse(itemValue))
                } else {
                    throw (new Error('Item does not exist'))
                }
            } catch (error) {
                reject(error)
            }
        })
    }

    removeItem(itemName) {
        return new Promise((resolve, reject) => {
            try {
                localStorage.removeItem(itemName);
                let itemValue = localStorage.getItem(itemName);
                if(itemValue !== null){
                    throw (new Error('Item could not be removed'))
                }else{
                    resolve(true)
                }
            } catch (error) {
                reject(error)

            }
        })
    }

    clearStorage() {
        return new Promise((resolve, reject) => {
            try {
                localStorage.clear();
                resolve(true);
            } catch (error) {
                reject(error);
            }
        })
    }
}