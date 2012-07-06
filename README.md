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

### main