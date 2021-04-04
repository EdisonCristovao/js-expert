const File = require("./src/file");
const { error } = require("./src/constants");
const { rejects, deepStrictEqual } = require("assert");

(async () => {
  {
    const filePath = "./mocks/emptyFile-invalid.csv";
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    await rejects(result, rejection);
  }

  {
    const filePath = "./mocks/fourItems-invalid.csv";
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJson(filePath);
    console.log(result);
    await rejects(result, rejection);
  }

  {
    const filePath = "./mocks/threeItems-valid.csv";
    const result = await File.csvToJson(filePath);
    const expected = [
      {
        id: 123,
        name: "Edison Junior",
        profession: "Javascript Dev",
        birthDay: 1994,
      },
      {
        id: 321,
        name: "Xuxa da silva",
        profession: "Js Specialist",
        birthDay: 1941,
      },
      {
        id: 231,
        name: "Joao",
        profession: "Java Developer",
        birthDay: 1991,
      },
    ];

    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected));
  }
})();
