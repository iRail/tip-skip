tip&skip
=========
Project vision
--------------
First of all this is a proof of concept base approach to an SMS ticketing platform and or application.
The proof of concept must show to which extent this project can be realised and if so the possibilities
should be unveiled.

The main goal is to provide an platform where mobile payment services are offered. The platform should 
ease the process of acquiring such SMS tickets. Examples of such tickets are those provided by 
[De Lijn](http://www.delijn.be/en/verkooppunten/sms_ticketing_copy.htm), 
[NMBS](http://www.b-rail.be/nat/N/practical/pointsofsale/mobile/index.php) or 
[4411 parking tickets](http://www.4411.be/en/).

In general there are two thought processes; buying via one's mobile phone or buying for a phone from a 
computer at distance.

### Buying from one's mobile phone (BfP)
When people buy SMS tickets they do this mostly because they lacked the time to buy a 'real' ticket in advance
or just don't have the time anymore to buy one. Maybe the 'ticketeer' is short in cash but he decides to use the 
money on his phone instead, again probably just in time before he needs the ticket.

Therefore the main priority is speed and usability. Mostly no extra data is necessary to acquire such a ticket.
A one-click does-it-all-approach should be envisioned.

### Buying for a phone from a computer (BfC)
The purpose is somewhat different when buying an SMS-ticket from your computer which is to be sent to your phone.
This will mostly be used when planning your trip beforehand. The 'ticketeer' would be able to avoid the hassle of 
buying a 'real' ticket.

Field of study
--------------
Decent research is needed in search of possible solutions to our two approaches. First off let's start exploring the
different SMS tickets to be considered (at this moment).

### De Lijn
These SMS tickets are valid on all buses and trams of [De Lijn](http://www.delijn.be/en/verkooppunten/sms_ticketing_copy.htm), 
except on De Lijn's night route in Antwerp.

Advantages of De Lijn SMS tickets:
* An SMS ticket is cheaper than a ticket that you purchase from the driver.
* You don't have payment problems (exact change no longer required).
* Boarding goes smoother.
* In the end buses and trams are more punctual.

To purchase a De Lijn SMS ticket you SMS an order code before boarding the vehicle to the phone number 4884. 
For an SMS ticket of 60 minutes that is ‘DL’ (€ 1.45); for an SMS ticket of 120 minutes ‘DL120’ (€ 2.25). After a 
few seconds you will receive a confirmation SMS and this counts as a ticket.

### 4411 parking tickets
[4411](http://www.4411.be/en/) offers services in fifteen cities and communities with over 90,000 available parking spaces.

Advantages of 4411 SMS tickets:
* No messing about which P&D machines you'll use.
* You no longer have to estimate up-front how long you will be parking for.
* With SMS-parking, you only pay for the time you actually parked.
* No more hurrying and running when your parking time runs out.

4411 makes it possible to pay via phone for on street parking spots and for parking garages. On street SMS-parking is very easy. 
All you need to do is send a short text message to 4411 to start and stop the parking session. For a parking garage 
you just enter the parking and take a parking ticket, as usual. When leaving, you no longer have to queue up to pay. 
Simply send a text message with the parking code, a space and your ticket number to 4411.

After the first use, all further parking sessions will be invoiced via your mobile operator or via a separate parking 
invoice you will receive on a monthly basis. For the moment only Proximus customers can pay their parking fees via their mobile 
invoice or prepaid card. We expect Mobistar and Base to follow shortly. Until then Mobistar and Base customers can 
register on this web site. They will then receive a monthly invoice from Mobile-for.

Unfortunately in Ghent 4411 isn't active at the moment. Their used to be an SMS service '3453' but there doesn't seem to be any
trace of it anymore. Further investigation here would be nice and necessary, not only for Ghent but also for other cities who
offer their own SMS parking ticket service.

### NMBS
[NMBS](http://www.b-rail.be/nat/N/practical/pointsofsale/mobile/index.php) claims their SMS tickets should have following 
advantages:
* Ease the process of acquiring a SMS ticket.
* Be able to buy a ticket always and everywhere.
* This by offering a simple follow-up.

After completing the process for the NMBS SMS tickets some of these supposed advantages aren't that apparent. The 
process requires too much user information that in the end shouldn't be necessary. Furthermore the tickets aren't 
really SMS tickets because customers have to pay for their ticket (which is then send to their phone) with either 
VISA or Mastercard.

When looking at this from the BfP-point of view these tickets are barely usable. It's too big of a hassle to buy 
these and u need card reader at hand to pay with ur VISA or Mastercard.

Although probably not usable for BfP, these could be used for BfC. The risk of loosing or forgetting the ticket is 
lowered as u have your ticket on your phone. Route planning software (e.g. [Scotty](http://www.scotty.be)) could 
integrate these kind of tickets to offer even more added value.

Wireframe BfP
-------------
Too have a visual goal through this project it's recommended to create a 
[(website) wireframe](http://en.wikipedia.org/wiki/Website_wireframe).

You can check my initial wireframe [here](http://tipskip.irail.be). I want to stress again that this is just a
prototypish wireframe of the BfC point of view. Technologies used are HTML5 with special focus on [responsive design]
(http://responsinator.com/?url=tip-skip.irail.be). [Twitter Bootstrap](http://twitter.github.com/bootstrap/) was used 
to enable this responsive design.

I used this wireframe to get a visual image of what could be. Especially the flow of the application. Furthermore
it allows me to test some features like [leaflet](http://leaflet.cloudmade.com/) for maps.

Prototype
---------
###BfP
I then started consolidating the wireframe. As native features would be needed (SMS-composing, -sending, -receiving)
and I still wanted to use HTML5 due to it's ease it was clear that [Cordova](http://phonegap.com/2012/03/19/phonegap-cordova-and-what%E2%80%99s-in-a-name/)
was the way to go (formely known as Phonegap).

To create a harmonised application I needed to switch from Twitter Bootstrap to [jQuery Mobile](http://jquerymobile.com/) 
(for CSS and page navigation) which works alot better with Cordova.

###BfC
Next up buying from you're computer for your phone. The SMS should always be sent from you're phone. Reasons for this:
this prevents the need of an SMS gateway of your own, the SMS is always charged to the customer's bill and you use the
existing infrastructure off the SMS tickets.

The BfC approach therefore should push a 'ticket' to the phone. The tip-skip application (which is running at that moment
on the phone) would then receive this push 'ticket'. The SMS function would be triggered (after confirmation by the user).
and the customer would have his ticket at hand!

I found a very good and wide spread technology to provide this push functionality: [PubNub](www.pubnub.com). Ideally
to use in this proof of concept. Whether you are pushing to a mobile device, web app, desktop, or server, PubNub is 
a one stop shop. They provide easy to use API's for JavaScript, iOS, Android, Python, Java, Ruby, Flash, Silverlight, etc.
Furthermore it is cloud-hosted for a redundant architecture providing high-availability and reliability.

PubNub is based on the standard HTTP 1.1 protocol. PubNub uses a BOSH model with JSON rather than XML. BOSH is a long polling 
alternative to TCP, used when TCP is difficult or impossible (e.g. in a web browser).

### BfP + BfC
Putting it all together I made a working application for the De Lijn SMS tickets where it is possible to push a ticket from your
computer to your phone or buy it directly via your phone.

Because I do want people to see what my prototype looks like (but I can't obviously do this on the phone) I ported the application
back to a website-ish application. The application which ran on the Windows Phone is called the receiver and is ported to a 
[website](http://tip-skip.irail.be/receiver.html). Whereas on the other end you have the [sender](http://tip-skip.irail.be/sender.html) 
(which is actually a normal website).

Problems
--------
Even with this prototype I encountered some problems mainly because I was developing on Windows Phone. First off it isn't
possible to access the SMS inbox at the moment. So it is impossible to use the real SMS verification of your ticket in the
application.

Next to this I faced some trouble saving your current tickets. Normally I use localStorage but for some obscure reason this
didn't work on my phone.

Future work
-----------
* Authentication and security; but using PubNub it would be fairly easy as they provide authenticated and secured 1v1 connections.

Conclusions
-----------
Let's jump into conclusions, keeping possibilities for Go-Mobile in mind.

##General
n application for you're phone on top of SMS tickets significantly increases the value added. During the research and work
this was stressed several times. There are already sprouting several applications whom try to do this. Some succeed very well
like [SMS Park](http://www.mobile-canguru.be/index.php), which combines parking and De Lijn SMS tickets. There are several 
advantages:
* You don't forget numbers or what needs to be inside the message.
* It provides an easy way to populate the ticket with the necessary data.
* A history is available of you're payed tickets (highly valuable for tracking you're travelling expenses).

##NMBS
This is a very interesting opportunity for Go-Mobile. At the moment the NMBS SMS tickets (which are to be paid for by Mastercard
or Visa) aren't useful at all. But suppose they would change to real SMS tickets (just sending an SMS and paying with your phone
bill).

Suppose you add this functionality in a widget on a site concerning mobility (suppose [Scotty](www.scotty.be) or [iRail](www.irail.be)).
form. You can directly offer a ticket service for the relevant service. The user's wouldn't have to print their ticket but would
receive on their phone where the application is running and they verify their purchase.

But there is more. Services could be offered. With this application you know which route the customer is going to follow. Therefore
relevant information can be offered, adding even more value. You could add information about on which platform the customer should
board, what delays he will have and more specific information, which the customer shouldn't search for himself anymore. The information
is brought to the customer and this is what they want.

I think a serious business model can't be worked out here.

##De Lijn
What I've learned here is that SMS tickets can be really simple and solid. These tickets don't need unnecessary information, are fast
and can be relied on. Due to this fact an application on top of this just simplifies the process even more although not much
value can be added as they are already that simple.

##Parking
Very interesting (Although maybe less important for Go-Mobile?) especially because [SMS Park](http://www.mobile-canguru.be/index.php) has made a full blown iOS application
for this. I used this application and as thought, it provides some very nice features.
* Your location could be used to make it even more enjoyable (like checking which parking meter you are at automatically).
* Usage of timers.
* A car tracking system.
* License plate management.





