#!/bin/bash

xvfb-run java \
    -Dwebdriver.chrome.driver=/usr/bin/chromedriver \
    -Dselenium.LOGGER.level=SEVERE \
    -jar /opt/selenium/selenium-server-standalone.jar
