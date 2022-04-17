export const DBConfig = {
  name: "Fake Trello DB",
  version: 1,
  objectStoresMeta: [
    {
      store: "cards",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "title", keypath: "title", options: { unique: false } },
        { name: "content", keypath: "content", options: { unique: false } },
      ],
    },
    {
      store: "boards",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "name", keypath: "name", options: { unique: false } },
      ],
    },
    {
      store: "columns",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "title", keypath: "title", options: { unique: false } },
        { name: "cards", keypath: "cards", options: { unique: false } },
      ],
    },
  ],
};
