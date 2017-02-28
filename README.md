[![Build Status](https://travis-ci.org/Avalara/developer-dot.svg?branch=master)](https://travis-ci.org/Avalara/developer-dot)

# How To Get Started with Avalaras Developer Blog

To run the Avalara developer site locally requires the following software:

* [Ruby](https://www.ruby-lang.org/en/downloads/)  ( also available from [RubyInstaller](https://rubyinstaller.org/downloads/) )
* [Ruby Development Kit](https://rubyinstaller.org/downloads/)
* [RubyGems](https://rubygems.org/pages/download)
* [Node.js](https://nodejs.org/en/)
* [npm](https://docs.npmjs.com/) (Should come installed with Node.js)

# Setup (Windows)

First, you will have to install the packages above (Ruby / Ruby Development Kit / Ruby Gems / Node.JS / NPM).  Once that is complete, follow these steps:

* Launch a Ruby command line window
* Go to the folder where you installed the ruby development kit - that folder will have a file `dk.rb` in it.
* Run `ruby dk.rb init`
* Run `ruby dk.rb review`
* Run `ruby dk.rb install`
* Go to the folder with the latest copy of the developer-dot github project.
* Run the file `windows-desktop-setup.cmd`.  
* If you receive no errors, you are fine.

# Launch (Windows)

* Launch a Ruby command line window
* Go to the folder with the latest copy of the developer-dot github project.
* Run the file `launch.cmd`.  
* Launch a web browser targeted towards the URL `http://localhost:8976`.

You should now be able to see the Developer-Dot site!
