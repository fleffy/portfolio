migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m5wsps1y77yn5ix")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y31hvvxy",
    "name": "img",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/jpeg",
        "image/png",
        "image/svg+xml",
        "image/gif",
        "image/webp"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("m5wsps1y77yn5ix")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "y31hvvxy",
    "name": "img",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
})
