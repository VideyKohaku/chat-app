const removeSocket = (object, socketId) => {
    const newObj = {}
    for (const key in object) {
        if (object[key].socketId !== socketId) {
            newObj[key] = object[key]
        }
    }
    return newObj
}

module.exports = {
    removeSocket,
}