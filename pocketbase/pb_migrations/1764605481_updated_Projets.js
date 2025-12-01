/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3938092973")

  // add field
  collection.fields.addAt(17, new Field({
    "hidden": false,
    "id": "bool222288241",
    "name": "Best",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3938092973")

  // remove field
  collection.fields.removeById("bool222288241")

  return app.save(collection)
})
