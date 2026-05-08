/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3938092973")

  // remove field
  collection.fields.removeById("text2142434421")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select2142434421",
    "maxSelect": 1,
    "name": "categorie_filtre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Personnel",
      "Educatif",
      "Professionnel"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3938092973")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2142434421",
    "max": 0,
    "min": 0,
    "name": "categorie_filtre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("select2142434421")

  return app.save(collection)
})
