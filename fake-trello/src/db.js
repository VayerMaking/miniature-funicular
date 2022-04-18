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
        { name: "labels", keypath: "labels", options: { unique: false } },
        { name: "timestamp", keypath: "timestamp", options: { unique: false } },
        { name: "column", keypath: "column", options: { unique: false } },
      ],
    },
    {
      store: "labels",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "label", keypath: "label", options: { unique: false } },
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
        { name: "title", keypath: "title", options: { unique: true } },
        { name: "cards", keypath: "cards", options: { unique: false } },
      ],
    },
  ],
};
