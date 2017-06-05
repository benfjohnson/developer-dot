[![Build Status](https://travis-ci.org/Avalara/developer-dot.svg?branch=master)](https://travis-ci.org/Avalara/developer-dot)

# TL;DR

* To develop on MacOS or Linux, `git clone https://github.com/<YOUR_FORK>/developer-dot.git`. Next make sure you have Ruby, RubyGems and Node >= v6.0 installed (see below for details). `npm install && bundle install` will build all dependencies. Then open a couple of command prompts and `cd path/to/developer-dot` in each. Run `npm run dev` in one (this rebuilds our JavaScript bundles whenever those files change), and `npm run jekyll` (regenerates our static Jekyll site whenever static content changes) in the other. You should now have the app running on `localhost:4000`, and any changes to site templates or javascript will auto-rebuild the affected pages.

* To get the site running on Windows, or if you just want to preview a few changes quickly, [download Docker](https://www.docker.com/community-edition#/download).
* Once you have Docker installed, `git clone https://github.com/<YOUR_FORK>/developer-dot.git` to clone the repo, then open a command line in the root of the developer-dot directory. Run `npm run docker-build` to build the docker container, and
then `npm run docker-run` to run the application on port 4000 and listen for any file changes.

# How To Get Started with Avalaras Developer Blog

To run the Avalara developer site locally requires the following software:

* [Ruby](https://www.ruby-lang.org/en/downloads/)  ( also available from [RubyInstaller](https://rubyinstaller.org/downloads/) )
* [RubyGems](https://rubygems.org/pages/download)
* [Node.js](https://nodejs.org/en/)
* [npm](https://docs.npmjs.com/) (Should come installed with Node.js)

### A guide to Jekyll's Posting and Editing Capabilities; Turning Local Github Repositories into a Locally Generated Website

In this *How To* guide I'm hoping to give you the necessary tools and knowledge to make pain free contributions to the [Avalara Developer Blog](http://developer.avalara.com/blog/).
Understandably in software development, the continuous flow of developments, cool features, and small improvements can get lost in the fray of a relatively new and expanding industry.
Well, things don't have to be that way, not if you decide to get involved that is. Have experience you can share about a specific Avalara product or cool new tool that assists you in development you'd like to share? Now's your chance to do just that.

The following is a quick overview of what is covered in this page:

* [Set up a local environment of a forked developer-dot repository](#set-the-envioronment)
* [Preview those additions locally with the awesome features of Jekyll](#site-preview)
* [Use git requests to get your local changes out to the publishing repository](#lets-get-those-changes-committed)

Depending on what OS you are using there are a few ways to set up and utilize the features of Jekyll.

Here are the prerequisites you'll need running on your system to get started:
* [Ruby](https://www.ruby-lang.org/en/downloads/)  
* [RubyGems](https://rubygems.org/pages/download)
* [Node.js](https://nodejs.org/en/)
* [npm](https://docs.npmjs.com/) (Should come installed with Node.js)


If you are using **Windows**, I'd recommend creating a workspace with [Cloud9](https://c9.io/) to get started, as Windows is not officially supported, Cloud9 provides an easy workaround. Also, if you refer to [Jekyll on Windows](https://jekyllrb.com/docs/windows/#installation) there are some alternative instructions on getting started with Windows.

If you're using **macOS** and are having difficulties installing the dependencies for jekyll you might need to install [Xcode](https://developer.apple.com/xcode/) and its command line tools.

If you're using **Linux** or **Unix** you should be fine installing Jekyll's dependencies in the command prompt.

For any more information on what you'll need according to your Operating System you can view more [installation information here](https://jekyllrb.com/docs/installation/).

### No! Not Jackal!
There will be no canines involved during the generation of these static Web Pages, but yes we will have to get familiar with some terms first.
Jekyll is known as "a simple, blog aware, static site generator", or at least that is the generic response you will find if you are to google "What is Jekyll?". For now, lets go with that,
and hopefully a more descriptive definition will become clear as we see it in action, or [click here more about Jekyll now](https://jekyllrb.com/).

### Set The Environment

##### Access a Github Account
The first thing you'll need to really begin setting up an environment is a Github account. An account with Github will allow you to access the Avalara/developer-dot repository for you to make contributions to.

##### Fork over that Repo
Once you have an account you will need to fork the [Avalara/developer-dot](https://github.com/Avalara/developer-dot) repository by clicking `Fork` in the top right corner of its Github page. That should create a new repository inside your own Github account where you'll have full permissions to make changes. Next, go to that newly created repository, which most likely has been named according the standard: yourGitUserName/developer-dot and click on the Clone or download button to access the SSH key or the HTTPS location. Before returning to the terminal, make sure you've created a folder on your local computer where you wish to store the local repository files. Change directories to your intended location inside the command terminal and enter the following command to clone the forked repository:

`$ git clone git@github.com:yourGitUserName/developer-dot.git`

The SSH key in the example above should be the one you got from your account earlier. You can make sure this worked the way you intended by opening a file explorer and seeing if the files from the repository have been added.

##### Gathering the Tools
To complete the setup of your local environment you need jekyll, which means you'll need the tools required to run jekyll. If your running on Windows make sure you've either followed the steps in [Jekyll on Windows](#jekyll-on-windows) or open up the workspace inside your Cloud9 account that contains the cloned repository, otherwise continue working through the terminal as before and install the aforementioned prerequisites.

If you're not sure whether or not these have been installed and/or are up to date you can run a command to find out the versions running on your system. Node should come with npm installed automatically, but to be sure let's see what version of npm we're running as well.

Here's what I'm currently running:
```
$ ruby -v
ruby 2.3.0p0 (2015-12-25 revision 53290) [x86_64-linux]
$ gem -v
2.5.1
$ node -v
v6.0.0
$ npm -v
2.15.9
```

Ensure you are running at least Node 6.0.0 (nvm install v6.0.0)

These versions or higher should suffice for now, if not, you can visit the sites linked above to find documentation on how to install their latest releases.

Now that these are all in place, the following command will download Jekyll using the RubyGems package manager:

```
$ gem install jekyll bundler
```
This should install all of Jekyll's gem dependencies. At the time I ran this command it fetched and installed 18 gems, as well installing the sought after `jekyll-3.3.0`.

```
$ gem install jekyll bundler
Fetching: liquid-3.0.6.gem (100%)
Successfully installed liquid-3.0.6
Fetching: kramdown-1.12.0.gem (100%)
Successfully installed kramdown-1.12.0
Fetching: mercenary-0.3.6.gem (100%)
Successfully installed mercenary-0.3.6
Fetching: safe_yaml-1.0.4.gem (100%)
Successfully installed safe_yaml-1.0.4
Fetching: colorator-1.1.0.gem (100%)
Successfully installed colorator-1.1.0
Fetching: rouge-1.11.1.gem (100%)
Successfully installed rouge-1.11.1
Fetching: sass-3.4.22.gem (100%)
Successfully installed sass-3.4.22
Fetching: jekyll-sass-converter-1.4.0.gem (100%)
Successfully installed jekyll-sass-converter-1.4.0
Fetching: rb-fsevent-0.9.7.gem (100%)
Successfully installed rb-fsevent-0.9.7
Fetching: ffi-1.9.14.gem (100%)
Building native extensions.  This could take a while...
Successfully installed ffi-1.9.14
Fetching: rb-inotify-0.9.7.gem (100%)
Successfully installed rb-inotify-0.9.7
Fetching: listen-3.0.8.gem (100%)
Successfully installed listen-3.0.8
Fetching: jekyll-watch-1.5.0.gem (100%)
Successfully installed jekyll-watch-1.5.0
Fetching: forwardable-extended-2.6.0.gem (100%)
Successfully installed forwardable-extended-2.6.0
Fetching: pathutil-0.14.0.gem (100%)
Successfully installed pathutil-0.14.0
Fetching: addressable-2.4.0.gem (100%)
Successfully installed addressable-2.4.0
Fetching: jekyll-3.3.0.gem (100%)
Successfully installed jekyll-3.3.0
Fetching: bundler-1.13.5.gem (100%)
Successfully installed bundler-1.13.5
18 gems installed
```
Finally, to download all of the developer dependencies specific to the developer-dot site, you will need to generate a `node_modules` folder inside your local repository by using an `npm install` command. Be sure to run the `npm install` inside the same directory that the `packages.json` file is located.

```
$ cd yourWorkingRepoDirectory/
$ npm install
```

It might take some time to install all the dependencies inside the folder but they're critical to running the site locally using the same formatting that shows up currently on the developer site. Once completed there should be a node_modules folder added to your directory.

### Site Preview

You're almost ready to add a post and preview the site. Although, there are just a few quick formatting basics to know about any future posts to ensure they're suitable for jekyll to parse and run through its converters.  

##### Abiding by Jekyll

Let's say you have a blog post you want to get published, or just as likely, you want to make an edit to a post that you've already made to the site. I've split them up into three simple formatting rules to follow:

* The first rule to creating a post that's jekyll ready is to make sure you've written your post in a format that jekyll supports. I've found that writing in [Markdown](https://en.support.wordpress.com/markdown-quick-reference/) is an easily adaptable format to write in but jekyll has a list of [convertible formats here](https://jekyllrb.com/docs/plugins/#converters-1).

* The second rule is providing a header which should come in the form of a YAML front matter block. Here's a basic example:

      ```
      ---
      layout: post
      title: New Blog Post
      ---
      ```

* The third rule is formatting the name given to your saved file. It should follow this standard:

      ```
      YYYY-MM-DD-your-title-here.md
      ```
      The following is an example:

      ```
      2016-09-30-getting-started-with-avalara-apis.md
      ```


Once your post or edit-to-a-post abides by these rules you can add the file to the directory that stored your locally cloned repository inside the subfolder `_posts`. From there it's a simple matter of some git commands so that jekyll can serve the site locally for previewing.

```
$ git add .
$ git commit -m "message describing the post and/or edit being made"
$ git remote add origin yourGitUserName/developer-dot
$ git push -u origin master
```

Once your personal remote repository is up to date with the local changes your ready to run any one of these commands to preview your site:

`$ jekyll serve --host $IP --port $PORT --baseurl ''`

or

`$ npm run dev`

Though, depending on your changes and the method you've used to change them, you might need to build or rebuild the site before running the above commands:

`$ npm run build`

or 

`$ npm rebuild`

This should serve up a url link to the locally hosted site. the port will most likely be `:4000` or `:8080`. For me, since I'm using Cloud9 to run my local instance, the jekyll port has been `:8080`. Though I've been using a Cloud9 workspace which actually hosts the site at https://WorkspaceName-UserName.c9users.io:8080 rather than http://localhost:4000. If you've just made an edit to a post rather than added a new post altogether and want to compare the changes, go ahead and pull up the [Developer Blog Page](http://developer.avalara.com/blog/) along with your running application to actually compare the current site to what it might look like with your contributions.


### Lets get those changes Committed
If you're satisfied with what you've seen in the site-preview here's a quick run-through on how you submit those changes that you've made to the Avalara/developer-dot repository. This can be done with a git pull request. It will send your commits from the forked personal repository to the original repository Avalara/developer-dot.
Before making the pull request it's always a good practice to update your forked repository to get any possible changes made while you were working. Here is a list of the commands that will get you there:

```
$ git remote add upstream https://github.com/Avalara/developer-dot.git
$ git fetch upstream
$ git merge upstream/master master
$ git push origin master
```
This will add the Avalara/developer-dot repository as `upstream`, `fetch` any changes made there, `merge` those changes to your computers master branch, and finally push the changes to your personal remote repository. With an updated remote fork of the repository that includes any changes made from others, as well as the changes you made, the repository is ready to submit for publishing.

For this you can log back into your Github account and locate your forked repository, click the `Pull Request` button and make sure the Avalara/developer-dot:master is on the left hand side, receiving any changes from your repository on the right hand side, yourGitUserName/developer-dot:master. Please leave a comment, and submit the request.

### Let's Review

This was intended to be a brief overview of the steps taken to set up a local environment in which anyone can add or change posts to the Avalara/developer-dot blog, preview those additions and/or changes, and to finally submit them for review and/or publishing on the developer-dot site:

This was intended to be a brief overview of the steps taken to set up a local environment in which anyone can add or change posts to the Avalara/developer-dot blog, preview those additions and/or changes, and to finally submit them for review and/or publishing on the developer-dot site.

# Setup (Windows)

* To get the site running on Windows, [download Docker](https://www.docker.com/community-edition#/download).
* Once you have Docker installed, `git clone https://github.com/<YOUR_FORK>/developer-dot` to clone the repo, then open a command line in the root of the developer-dot directory. Run `npm run docker` to build and run dev-dot in a local docker container.
