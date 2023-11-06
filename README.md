# YouTube Search Suggestions

A simple module that allows you to get search suggestions from YouTube.

## Installation

```bash
$ npm i youtube-search-suggestions
```

## Prerequisites

- NodeJS v16+

## Usage

```js
const { SearchClient } = require("youtube-search-suggestion");

const client = new SearchClient();
```

## Example

```js
const { SearchClient } = require("youtube-search-suggestion");

const client = new SearchClient();

client
  .suggestion("supermode tell me why")
  .then((response) => console.log(response));
```

# Links

- [Github]()

# License

ISC
