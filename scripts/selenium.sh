#!/bin/bash

xvfb-run java \
    -Dwebdriver.chrome.driver=/opt/selenium/chromedriver-2.29 \
    -jar /opt/selenium/selenium-server-standalone.jar
