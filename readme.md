#[VictorLourng.com](victorlourng.com)  [![Build Status](https://secure.travis-ci.org/LabLayers/lablayers.github.io.png)](http://travis-ci.org/LabLayers/lablayers.github.io) [![Gittip](http://img.shields.io/gittip/lablayers.png)](https://www.gittip.com/lablayers/) ![Status](http://img.shields.io/production/work%20in%20progress.png?color=yellow)

A website for my digital self for the digital era. It really reflects who I am and my colorful personality! :)

This is the third time I have redesigned my website in nearly a year. Known issues can be found in this repo's [GitHub Issues](https://github.com/LabLayers/lablayers.github.io/issues).

## What's New?
* Just about everything!
* A sidebar following design trends everywhere.
* It's not just flat, it's dynamic flat.
* Pop culture [everywhere](#easter-eggs-). (Spoiler alert!)
* An even lower bandwidth hoofprint, placing the site under 500KB* with the heavy use of CSS3 and lack of images.
   * In fact, the only image used on my site is a vector avatar. I used icon fonts for everything else.
* Hosted on GitHub Pages and protected with Cloudflare instead of hosting off a Raspberry Pi.
   * This results in up to 95% faster load times for ponies as far as Europe.
* Jade and Sass replacing PHP and LESS.
* A CSS3 Framework built from the ground up by myself instead of Bootstrap. [Seriously, though!](https://github.com/LabLayers/lablayers.github.io/tree/master/design)
* Removed the backend and switched to Google Forms because there really isn't a point for one.

## Standards ![Status](http://img.shields.io/production/ready.png?color=green)
This should pretty much explain everything:

[![HTML5 Powered with Connectivity / Realtime, CSS3 / Styling, Graphics, 3D &amp; Effects, Multimedia, Performance & Integration, and Semantics](http://www.w3.org/html/logo/badge/html5-badge-h-connectivity-css3-graphics-multimedia-performance-semantics.png)](http://www.w3.org/html/logo/)

If you're using a slightly outdated version Internet Explorer, a derped speedster will prompt you to upgrade for face the consequences of a derped site on a derped browser that won't be getting security updates anytime soon. ;)  

## Dynamic Flat Design ![Status](http://img.shields.io/production/ready.png?color=green)
It's "bold with a sense of sweetness." It's not boring, it's splashy and dynamic and playful more importantly, [trendy!](https://www.apple.com/ios/)!

On an unrelated note, you should check out [flatvsrealism.com](http://flatvsrealism.com/).

## Animations ![Status](http://img.shields.io/production/ready.png?color=green)
It's pretty awesome. Nothing more to say here.

## Javascript Performance ![Status](http://img.shields.io/production/ready.png?color=green)
As I quickly discovered, jQuery's `$(window).scroll` method took up more than half of the rendering time (seen in yellow.) It's very inefficient and causes severe lagging whenever a user tries to scroll.

![With scroll](http://i.imgur.com/c9SpPW2.png)

I was better off setting up [scroll timeout](http://stackoverflow.com/questions/15591002/jquery-setinterval-or-scroll) that only calls `$(window).scroll` only immediately after the user has finished scrolling. The site will not feel as responsive for those who tend to keep their finger on the mousepad, but it's a tradeoff I had to make. As a result, my site renders on average about 60-85 frames per second.

I have also made iframes not load until it is visible in the viewport, saving the user lots of unnecessary bandwidth.

![Without scroll](http://i.imgur.com/WB6HtPr.png)

## Backend ![Status](http://img.shields.io/production/coming%20soon.png?color=red)
~~One of the limitations with hosting on GitHub is that it doesn't support PHP and because of that there really isn't a backend (but I have found creative ways to working around that!) The backend will be remotely run with OpenShift... eventually.~~

*Oh wait, GitHub pages supports [Jekyll](http://jekyllrb.com/) and [Octopress](http://octopress.org/)!* I will definitely be implementing this in the near future!

[https://equinox-ttfm.rhcloud.com/](https://equinox-ttfm.rhcloud.com/) - Node.js for modified HackerChat demo and possibly some other side projects.

[https://solstice-ttfm.rhcloud.com/](https://solstice-ttfm.rhcloud.com/) - PHP sever for handling the guestbook and contact forms.

[https://journal.victorlourng.com/](https://journal.victorlourng.com/) - PHP sever for running a self-built content management system.

## Easter Eggs ![Status](http://img.shields.io/production/work%20in%20progress.png?color=yellow)
Try the Konami code and [get my Chrome Extension here](https://chrome.google.com/webstore/detail/harlem-shake-the-web/ldejkceiibdbkgjfiagpjhjdadgkelib?hl=en). It even works on mobile - just tap twice instead of "AB".

Click the Back to Top button in the bottom-right corner and see what happens.

Click the "Add to Cart" button in the browser and click "Checkout" to donate some Bitcoin via Coinbase!
 
Try finding allusions to One Direction, The Hitchhiker's Guide, My Little Pony, AKB48, Chicago: The Musical, 256^2, among other.

## Other
The _content of the site_ is under a [http://creativecommons.org/licenses/by/2.0/](Attribution 2.0 Generic License). This includes jade, html, svg, and this readme.md file.

The _code itself_, however, is license under the [MIT License](http://opensource.org/licenses/MIT). This includes the sass, scss, css, coffeescript, and javascript.

(Or maybe I should switch everything over to the MIT license. Open an issue and let me know what you think!)

Feel free to copy and paste whatever you need the as long as you attribute me and not rehost my site as-it-is.

Kudos to the open source developers who have put hard work into the various libraries and code snippets used on my site.

Also, that starry night background image belongs to GitHub and some of these icons belong to Salesforce. I asked both of these companies for permission regarding personal use, however they prefer not to have them floating around the internet. Company logos, of course, belong to their respective company. Be sure to read the [credits](http://victorlourng.com/#credits) for more sources.

## Previous Versions
I launched VictorLourng.com in February 2012 with a highly skeumorphic design and a huge 3D slideshow written in jQuery. Only five months later would my design be outdated with the introduction of iOS7 and when the movement towards flat design really picked up.

It wasn't until I installed Google Analytics in August 2013 that I discovered that my site took over 71 seconds to load for average user because of lots of @2x graphics and my plethora of unnecessary webfonts.

In September 2013, I redesigned my site with something simple, but it never really got finished. 

The current design was created early January 2014 and unveiled right before  [MHacks](http://www.mhacks.org/) with lots of positive feedback.

Kudos to my friends at [Precise Servers](http://preciseservers.com) for the domain name! Maybe I should redesign their site...

* Before iframes and external resources, of course.

## Testimonials

> Wow... nice website. If anypony deserves to be at MHACKS it's definitely you. I'm really glad that you made it!
> - [Jeffrey Caldwell](https://www.facebook.com/photo.php?fbid=257994744360963&set=a.124621211031651.25621.124349814392124&type=1&comment_id=481149&offset=0&total_comments=6)
 

-
> forget the 15 year old thang, Victor you are so legit! his work is unf*cking real
> - [Nancy Xiao](https://www.facebook.com/photo.php?fbid=257994744360963&set=a.124621211031651.25621.124349814392124&type=1&comment_id=481133&offset=0&total_comments=6)


-
> I saw his website. It's absolutely phenomenal...definitely beats anything I've made and I'm almost twice his age!
> - [Eric Yu](https://www.facebook.com/photo.php?fbid=257994744360963&set=a.124621211031651.25621.124349814392124&type=1&comment_id=481187&offset=0&total_comments=6)
 

-
> Your website is sickk! :D
> - [Karl Coelho](https://twitter.com/therealcoelho/status/427165201712959489)


-
> Just wanted to say that your site is gorgeous. Awesome job
> - [Shashank Bhargava](https://www.facebook.com/groups/PennAppsHS/permalink/207525019449816/?comment_id=207525312783120&offset=0&total_comments=8)


-
> dude victor this site is coming along so nicely. so dope. (omfg it literally harlem shakes.)
> - [Avi Romanoff](https://www.facebook.com/events/1417893651779691/permalink/1429310360638020/?comment_id=1429311747304548&offset=0&total_comments=16)


-

## Sign My Guestbook!
Now that you've read all this, go sign my semi-secret guestbook: click my name at the top of the page, type in your name, and hit the enter key. :smile:
