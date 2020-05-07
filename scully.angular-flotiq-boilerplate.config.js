exports.config = {
  projectRoot: "./src",
  projectName: "angular-flotiq-boilerplate",
  outDir: './dist/static',
  routes: {
    '/entries/:id': {
      type: 'json',
      id: {
        url: 'https://api.flotiq.com/api/v1/content/todolist',
        property: "id",
        headers: {
          'X-AUTH-TOKEN': 'api_key'
        },
        resultsHandler: rawData => rawData.data
      }
    }
  }
};
