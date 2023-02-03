migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m5wsps1y77yn5ix")

  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m5wsps1y77yn5ix")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
