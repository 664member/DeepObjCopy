
export function CloneDeep(obj, keysArr = Object.keys(obj) ){
    let keys = keysArr ;
    let result = {};
    for(let i = 0; i<keys.length;i++){
        if(typeof obj[keys[i]] == 'object'){
            result[keys[i]] = CloneDeep(obj[keys[i]]);
            continue
        }
        result[keys[i]] = obj[keys[i]]
    }

    return result;
}


