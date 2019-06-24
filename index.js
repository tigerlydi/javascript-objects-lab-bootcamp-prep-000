var recipes = {}
//made an empty object
function updateObjectWithKeyAndValue(object, key, value) {
    return Object.assign({}, object, {[key]: value})
}
//{} creates a new object, put in an existing object, new key and values?

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
    object[key] = value
    return object
}

function deleteFromObjectByKey(object, key) {
    const copyObject = Object.assign({}, object)
    delete copyObject[key]
    return copyObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
    delete object[key]
    return object
}
