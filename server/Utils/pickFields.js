const pickFields = (obj, fields) => {
    return fields.reduce((prev, curr)=>{
        return {
            ...prev,
            [curr]: obj[curr]
        }
    }, {})
}

module.exports = {pickFields}