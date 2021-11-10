function filterBy (arr, type) {
    switch (true) {
        case type === 'string': {
            return deleteType(arr, '1');
        }
        case type === 'boolean': {
            return deleteType(arr, true);
        }
        case type === 'number': {
            return deleteType(arr, 1);
        }
        case type === 'bigint': {
            return deleteType(arr, 10n);
        }
        case type === 'undefined': {
            return deleteType(arr, undefined);
        }
        case type === 'symbol': {
            return deleteType(arr, Symbol(1));
        }
        case type === 'object': {
            return deleteType(arr, {});
        }
        case type === "null": {
            return deleteType(arr, null);
        }
    }
    
}


function deleteType(arr, type) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        
        if(null === arr[i] && type === null || typeof arr[i] === typeof type  && arr[i] !== null){
            continue;
        }
        newArr.push(arr[i]);
    }
    return newArr;
}