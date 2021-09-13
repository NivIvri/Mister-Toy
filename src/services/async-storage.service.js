
//export const storageService = {
//    query,
//    get,
//    post,
//    put,
//    remove,
//}


//function query(entityType, filterBy) {
//    var entities = JSON.parse(localStorage.getItem(entityType)) || [{
//        _id: "t101",
//        name: "balking Doll",
//        price: 183,
//        labels: ["Doll", "Battery Powered", "Baby"],
//        createdAt: new Date(163103801011).getTimezoneOffset(),
//        inStock: true
//    },
//    {
//        _id: "t102",
//        name: "aalking Doll",
//        price: 143,
//        labels: ["Doll", "Battery Powered", "Baby"],
//        createdAt: 163103801011,
//        inStock: false
//    },
//    {
//        _id: "t103",
//        name: "calking Doll",
//        price: 30,
//        labels: ["Doll", "Battery Powered", "Baby"],
//        createdAt: 163101011,
//        inStock: true
//    },
//    {
//        _id: "t104",
//        name: "Talking Doll",
//        price: 123,
//        labels: ["Doll", "Battery Powered", "Baby"],
//        createdAt: 1631031801011,
//        inStock: false
//    },
//    {
//        _id: "t105",
//        name: "Talking Doll",
//        price: 123,
//        labels: ["Doll", "Battery Powered", "Baby"],
//        createdAt: 1631031801011,
//        inStock: false
//    },
//    {
//        _id: "t106",
//        name: "Talking Doll",
//        price: 123,
//        labels: ["Doll", "Battery Powered", "Baby"],
//        createdAt: 1631031801011,
//        inStock: true
//    }
//    ]

//    return new Promise((resolve, reject) => {
//        let filterEntities = entities
//        if (!filterBy) return resolve(filterEntities)
//        if (filterBy.name) {
//            const regex = new RegExp(filterBy.name, 'i');
//            filterEntities = filterEntities.filter((entity) => regex.test(entity.name));
//        }
//        if (filterBy.inStock) {
//            filterEntities = filterEntities.filter((entity) => entity.inStock)
//        }

//        if (filterBy.lable !== 'all') {
//            filterEntities = filterEntities.filter((entity) => entity.labels.includes(filterBy.lable))
//        }
//        if (filterBy.sort) {
//            if (filterBy.sort === 'name')
//                filterEntities.sort((a, b) => a.name.localeCompare(b.name))

//            else {
//                if (filterBy.sort === 'price')
//                    filterEntities.sort((a, b) => b.price - a.price)

//                else if (filterBy.sort === 'date') {
//                    filterEntities.sort((a, b) => b.createdAt - a.createdAt);
//                }
//            }

//        }
//        resolve(filterEntities)
//    })


//    // return Promise.resolve(entities)
//}


//function get(entityType, entityId) {
//    return query(entityType)
//        .then(entities => entities.find(entity => entity._id === entityId)).then(res => {
//            res.reviews = [{ _id: 'e101', txt: 'Social, simple, fun' },
//            { _id: 'e102', txt: 'his game could be played by a young person in a simple way or enjoyed by adults at a more sophisticated level. ' }
//            ]
//            return res
//        })
//}


//function post(entityType, newEntity) {
//    newEntity._id = _makeId()
//    newEntity.activities = []
//    newEntity.prefs = { color: '3333', bgColor: '5555' }

//    return query(entityType)
//        .then(entities => {
//            entities.push(newEntity)
//            _save(entityType, entities)
//            return newEntity
//        })
//}

//function put(entityType, updatedEntity) {
//    return query(entityType)
//        .then(entities => {
//            debugger
//            const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
//            entities.splice(idx, 1, updatedEntity)
//            _save(entityType, entities)
//            return updatedEntity
//        })
//}

//function remove(entityType, entityId) {
//    return query(entityType)
//        .then(entities => {
//            debugger
//            const idx = entities.findIndex(entity => entity._id === entityId)
//            entities.splice(idx, 1)
//            _save(entityType, entities)
//        })
//}


//function _save(entityType, entities) {
//    console.log('entityType FROM SAVE!', entityType)
//    localStorage.setItem(entityType, JSON.stringify(entities))
//}

//function _makeId(length = 5) {
//    var text = ''
//    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//    for (var i = 0; i < length; i++) {
//        text += possible.charAt(Math.floor(Math.random() * possible.length))
//    }
//    return text
//}