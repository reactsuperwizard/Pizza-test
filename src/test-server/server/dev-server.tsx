import listsData from "../data/list-data.json";
const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");

// const mock = new MockAdapter(axios, { delayResponse: 2000 });
const mock = new MockAdapter(axios);

let lists = { ...listsData };

type ObjectKey = keyof typeof lists.material;

mock.onGet("/list/type").reply(async () => {
  return [200, { data: lists.type }];
});

mock.onGet("/detail/material").reply(async (req: any) => {
  const { material } = JSON.parse(req.data);

  return [
    200,
    {
      data: lists.material[material as ObjectKey],
    },
  ];
});
