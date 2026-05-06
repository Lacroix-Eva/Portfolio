/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3938092973")

  // update field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "file4285323105",
    "maxSelect": 99,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "resultatImage",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3938092973")

  // update field
  collection.fields.addAt(13, new Field({
    "hidden": false,
    "id": "file4285323105",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "resultatImage",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
})
