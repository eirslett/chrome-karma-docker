# Running karma unit tests in Google Chrome inside Docker

This is a code example project for a Medium story about Docker/Karma/Chrome:

[Running Karma tests with Headless Chrome inside Docker](https://medium.com/@eiriksletteberg/running-karma-tests-with-headless-chrome-inside-docker-ae4aceb06ed3)

The example code runs karma tests, and also has
a "mock" bundle step, which just creates a result.txt file.
In a real project, this build step would probably be the
result of a `gulp`/`webpack` etc. command.

## Running outside Docker

This assumes that you have node.js/npm/yarn installed.

- `yarn` (setup environment, install dependencies)
- `yarn test` (run tests)
- `yarn build` (run the whole build)

## Running inside Docker

This assumes that you have Docker and Docker Compose installed.

- `docker-compose build` (setup environment, install dependencies)
- `docker-compose run --rm dev yarn test` (run tests)
- `docker-compose run --rm dev yarn build` (run the whole build)

## Running on CI

- `docker-compose build` (builds the container)
- `docker-compose run --rm dev yarn build` (run the whole build)

#### License for the sample source code

Modified [Beerware license](https://spdx.org/licenses/Beerware.html): You can do whatever you want with this stuff. If we meet some day, and you think this stuff is worth it, you can buy me a beer in return. No attribution is necessary.

(To make 100 % sure you can use legally use this for whatever you want, it is also licensed as [Unlicensed](https://spdx.org/licenses/Unlicense.html), [MIT](https://spdx.org/licenses/MIT.html) and/or [WTFPL](https://spdx.org/licenses/WTFPL.html).)
