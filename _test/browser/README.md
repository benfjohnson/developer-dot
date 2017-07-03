#Nightwatch Tests

> To run nightwatch tests you will need to run three moving parts (this is what our docker-compose.yml does). The following commands were only tested on Mac OS X, although to run them on Windows they should be fairly similar. You could also try [running it with Docker](#run-with-docker).


What you need to do is run the [Selenium](http://www.seleniumhq.org/) browser, [Jekyll server](https://jekyllrb.com/), and then the [nightwatch](http://nightwatchjs.org/) tests

To run the Selenium driver, you will need to [download Java](https://java.com/en/download/). To run the selenium driver, just invoke it with the Java executable (found in scripts/selenium.sh)

```bash
java \
    -Dwebdriver.chrome.driver=_test/browser/_bin/chromriver \
    -jar _test/browser/_bin/selenium.jar
```

Then run the jekyll server

```bash
# this will rebuild the liquid templates (this is slow)
npm run jekyll

# if you don't need to rebuild the liquid templates, run with the `--skip-initial-build` flag. This is what you should do if you are not making changes to sections of the code you are trying to test and will make you development process much quicker
npm run jekyll -- --skip-initial-build
```

Then run the actual nightwatch tests via the nightwatch executable (node) script.

```
# to run all tests, just pass the config file as a parameter
_test/browser/nightwatch \
    --config _test/browser/nightwatch.json

# to run a specific suite (file) of tests, pass the --test flag
_test/browser/nightwatch \
    --config _test/browser/nightwatch.json \
    --test _test/browser/api-reference/avatax.js

# to run a specific test inside a particular suite, pass the --testcase flag along with the --test flag
_test/browser/nightwatch \
    --config _test/browser/nightwatch.json \
    --test _test/browser/api-reference/avatax.js \
    --testcase 'Get Started: AvaTax (verify tabs)'
```

#Run with Docker

This may be easier (for Windows users) since running it with Docker will be agnostic to your host environment. First, make sure you have [Docker](https://docs.docker.com/engine/installation/) v17.06 or higher installed along with [Docker Compose](https://docs.docker.com/compose/install/) v1.12.0 or higher. Docker Compose should be bundled with Docker, but double check by running `docker-compose -v`.

Then all you need to run the tests is the command `docker-compose up`.

**Please note** that the docker-compose script is optimized for ci, so it skips running `npm run build` and the liquid build assuming you have already done those. So to make sure you are testing the transpiled code from your current branch, you may want to run `npm run build` and `bundle exec jekyll build` first.
