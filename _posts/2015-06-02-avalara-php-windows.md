---
layout: post
title: Getting our PHP Samples Running on Windows
date: 2015-06-02 09:00
author: greg.bulmash
comments: true
categories: [older]
product: avaTax
doctype: blog
imgsrc: /public/images/blog/zce_logo-150x150.jpg
---
<img src="/public/images/blog/zce_logo-150x150.jpg" alt="Zend Certified Engineer Logo" width="150" height="150" /> As I said in my <a href="/blog/2015/05/05/subject-so-much-new-we-cant-even-was-because-awesome">introduction</a>, I'm a <a href="http://www.zend.com/en/services/certification/php-5-certification">Zend Certified PHP Engineer</a>. I may not have mentioned that, like many developers, I tend to trust my abilities probably more than I should, jump into projects head first, and only start to <i>read the fine manual</i> when something doesn't work as expected.

Setting up my Avalara laptop, one of the first things I did was install a basic WAMP stack (like <a href="http://en.wikipedia.org/wiki/LAMP_(software_bundle)">LAMP</a> but with Windows). That may be sacrilege to some, but it works.

When I had to write my first bit of code with the PHP sample libraries, I thought "I got this," pulled the <a href="https://github.com/avadev/AvaTax-Calc-REST-PHP/">PHP REST for AvaTax samples</a> down from GitHub, and ran the <a href="https://github.com/avadev/AvaTax-Calc-REST-PHP/blob/master/Samples/PingTest.php">PingTest</a> sample in the browser.

It failed.
{% highlight php %}Warning: require(vendor/autoload.php): failed to open stream: No such file or directory...{% endhighlight %}

Yup, there's no <code style="font-family: Courier, Courier New; font-size: 12px; font-weight: bold; background-color: #f0f0f0; border: 1px solid #bbb;">vendor</code> folder in there. Where did that come from? What had I missed?
<h3>Step 1: You have to <i>install</i> our PHP samples</h3>
I'd missed that this set of samples uses <a href="https://getcomposer.org/">Composer</a> for dependency management. If you haven't already, go to the <a href="https://getcomposer.org/download/">Composer download page</a>, download the Windows installer, then run it.

It will set up Composer and make sure it's in your Windows path. If you had any command windows open, they <strong>will not know</strong> about the changes to the Windows path. You'll need to open a new one in the directory you downloaded our samples to. I recommend this handy shortcut:

<img src="/public/images/blog/rightshiftclick-300x141.jpg" alt="shift + right click on a directory" width="300" height="141" /> In the File manager, hold down SHIFT while right-clicking the directory where your copy of the Avalara code is. You'll see an option to "Open a command window here." Choose it.

You can then run "<code style="font-family: Courier, Courier New; font-size: 12px; font-weight: bold; background-color: #f0f0f0; border: 1px solid #bbb;">composer install</code>" in the command window.

After that, you should be able to run the sample code... as long as you've set up your PHP installation with the proper root certificates so you can negotiate secure connections with HTTPS hosts. We provide a recommendation on <a href="/avatax/ssl-certificates">where to get and how to install the proper SSL root certificate to communicate with our servers</a>.

But <em>I am a certified PHP developer</em> and I know what I'm doing, right? So I installed the <a href="http://curl.haxx.se/ca/cacert.pem">Mozilla root certificate bundle</a>, saved it as <code style="font-family: Courier, Courier New; font-size: 12px; font-weight: bold; background-color: #f0f0f0; border: 1px solid #bbb;">cacert.pem</code> in my PHP installation directory, and linked it up in my PHP installation by adding the following to the end of my <code style="font-family: Courier, Courier New; font-size: 12px; font-weight: bold; background-color: #f0f0f0; border: 1px solid #bbb;">php.ini</code> file.
{% highlight php %}
[cURL]
curl.cainfo="C:\[path to php dir]\cacert.pem"
{% endhighlight %}
I downloaded a copy of Google's homepage via a cURL call in PHP to test it. Boom. Ready to go.

I ran the <a href="https://github.com/avadev/AvaTax-Calc-REST-PHP/blob/master/Samples/PingTest.php">PingTest</a> sample again and it failed with multiple warnings like this:
{% highlight php %}Warning: First parameter must either be an object or the name of an existing class in \Samples\src\AvaTax\EstimateTaxResult.php on line 41{% endhighlight %}
<h3>Step 2: Make sure you install our <i>recommended</i> root certificate</h3>
A little debugging showed that despite having the root certificate bundle, I didn't have the root certificate Avalara recommends. D'oh! I was getting that error because the HTTPS negotiation failed and there was no JSON response being returned.

So I went back to <a href="/avatax/ssl-certificates">our instructions</a>, added the recommended certificate to the bundle (cut and pasted the text into the end of the <code style="font-family: Courier, Courier New; font-size: 12px; font-weight: bold; background-color: #f0f0f0; border: 1px solid #bbb;">cacert.pem</code> file), and tried again.
{% highlight curl %}PingTest Result: Error The user or account could not be authenticated.{% endhighlight %}
Oh.
<h3>Step 3: Put <i>your</i> data in configuration.php</h3>
The <a style="font-family: Courier, Courier New; font-size: 12px; font-weight: bold; background-color: #f0f0f0; border: 1px solid #bbb;" href="https://github.com/avadev/AvaTax-Calc-REST-PHP/blob/master/Samples/configuration.php">configuration.php</a> file is in the Samples directory like the <a href="https://github.com/avadev/AvaTax-Calc-REST-PHP/blob/master/Samples/PingTest.php">PingTest</a> sample. You should have received an email with your account number and license key. If you didn't or lost it, you can get a new key from the <a href="https://admin-development.avalara.net/AvaTax/Options/OptionsHome.aspx">settings tab of your Developer Console</a>.

Once you've put that information into <a style="font-family: Courier, Courier New; font-size: 12px; font-weight: bold; background-color: #f0f0f0; border: 1px solid #bbb;" href="https://github.com/avadev/AvaTax-Calc-REST-PHP/blob/master/Samples/configuration.php">configuration.php</a> and run the <a href="https://github.com/avadev/AvaTax-Calc-REST-PHP/blob/master/Samples/PingTest.php">PingTest</a>, you should get the following message:
{% highlight curl %}PingTest Result: Success{% endhighlight %}
And you're on your way.
