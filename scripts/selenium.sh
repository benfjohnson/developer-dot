#!/bin/bash

xvfb-run java \
    -Dwebdriver.chrome.driver=/opt/selenium/chromedriver-2.29 \
    -Dselenium.LOGGER.level=SEVERE \
    -jar /opt/selenium/selenium-server-standalone.jar
