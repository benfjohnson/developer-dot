@ECHO OFF
ECHO ***
ECHO *** windows-desktop-setup.cmd
ECHO *** 

ECHO Checking Ruby...
ruby -v
IF ERRORLEVEL 1 GOTO :MISSING
ECHO Checking Gem...
call gem -v
IF ERRORLEVEL 1 GOTO :MISSING
ECHO Checking Node...
node -v
IF ERRORLEVEL 1 GOTO :MISSING
ECHO Checking NPM...
call npm -v
IF ERRORLEVEL 1 GOTO :MISSING

:LAUNCH
call npm run build:dev
call npm rebuild
bundle exec jekyll serve --host 127.0.0.1 --port 8976 --baseurl ''

:CLOSE
GOTO :DONE

:MISSING
ECHO
ECHO Dependencies are missing.
ECHO This program requires:
ECHO  - Ruby
ECHO  - Gem
ECHO  - Node.JS
ECHO  - NPM

:DONE
ECHO Done.
