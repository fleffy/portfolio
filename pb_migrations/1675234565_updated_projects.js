migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m5wsps1y77yn5ix")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zyg0ianl",
    "name": "tags",
    "type": "editor",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m5wsps1y77yn5ix")

  // remove
  collection.schema.removeField("zyg0ianl")

  return dao.saveCollection(collection)
})
