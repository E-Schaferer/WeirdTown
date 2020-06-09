DROP DATABASE IF EXISTS legends;
CREATE DATABASE legends;
USE legends;
CREATE TABLE stories(
  id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
  latitude DECIMAL(50, 30) NOT NULL,
  longitude DECIMAL(50, 30) NOT NULL,
  storyname VARCHAR(50) NOT NULL,
  storylocation VARCHAR(100) NOT NULL,
  thingsseen VARCHAR(200) NOT NULL,
  thingsheard VARCHAR(200) NOT NULL,
  story VARCHAR(10000) NOT NULL
);

INSERT INTO stories (latitude, longitude, storyName, storyLocation, thingsSeen, thingsHeard, story) VALUES ( 47.573456828354466, -122.2159481048584, 'lorem spectrum', 'Mercer Island High School', 'A ghastly white spectre', 'The chains of death rattling in the night', 'It was actually just a grocery bag');
INSERT INTO stories (latitude, longitude, storyName, storyLocation, thingsSeen, thingsHeard, story) VALUES ( 47.572327664883744, -122.21534729003908, 'lorem ghostum', 'The haunted Wendys', 'A ghost!', 'A ghosts wail!', 'BOO!');
INSERT INTO stories (latitude, longitude, storyName, storyLocation, thingsSeen, thingsHeard, story) VALUES ( 47.56833196787364, -122.20792293548584, 'lorem vampirum', 'The docks', 'A vampire!', '1 cookie, 2 cookie, AH AH AHHHHH', 'A thrilling narrative goes here');
INSERT INTO stories (latitude, longitude, storyName, storyLocation, thingsSeen, thingsHeard, story) VALUES ( 47.56798450155298, -122.22088336944581, 'lorem wolfmanum', 'Freshys', 'A werewolf of London', 'A great song by Warren Zevon', 'The melody from All Summer Long was stolen from this song.');
INSERT INTO stories (latitude, longitude, storyName, storyLocation, thingsSeen, thingsHeard, story) VALUES ( 47.56728956199636, -122.23298549652101, 'lorem fishmanum', 'At the grocery store', 'I think he was flounder, but he could have been a dab too', 'lots of gurgling', 'The only thing scarier than fish monsters is mercury poisoning');
INSERT INTO stories (latitude, longitude, storyName, storyLocation, thingsSeen, thingsHeard, story) VALUES ( 47.55127444247759, -122.22435951232912, 'lorem demonum', 'At town hall', 'it was wearing a suit and promising anything it thought we wanted', 'A lot of questions and not a lot of answers', 'The real demon is whoever wrote this friggin code base');
INSERT INTO stories (latitude, longitude, storyName, storyLocation, thingsSeen, thingsHeard, story) VALUES ( 47.52485183309594, -122.22719192504884, 'lorem monstrum', 'On TV', 'I dunno, but it had like 6 heads so there you go', 'it just kinda kept screaming in horror. after this year I dont blame it', 'Maybe the real monsters are the friends we made along the way');
INSERT INTO stories (latitude, longitude, storyName, storyLocation, thingsSeen, thingsHeard, story) VALUES ( 47.55521351530769, -122.21517562866212, 'lorem alienum', 'In the one place I would be without a decent camera. Typical.', 'A small gray man with big black eyes', 'A bunch of science-y noises like PEW PEW WHOOOSH WUM WUM WUM NEEEEEOWN', 'Technically Earth is in space so were all aliens');
INSERT INTO stories (latitude, longitude, storyName, storyLocation, thingsSeen, thingsHeard, story) VALUES ( 47.53679001170843, -122.22873687744142, 'lorem mummum', 'On a movie set', 'A famous movie star', 'Something about a weird cult I think', 'for a mummified corpse thats thousands of years old, hes still in excellent shape!');
INSERT INTO stories (latitude, longitude, storyName, storyLocation, thingsSeen, thingsHeard, story) VALUES ( 47.55069514208837, -122.23354339599611, 'lorem poltergeistum', 'At the liquor store', 'A huge bottle', 'Crashing and angry yelling', 'I knew they sold spirits here, but this is ridiculous!');
INSERT INTO stories (latitude, longitude, storyName, storyLocation, thingsSeen, thingsHeard, story) VALUES ( 47.56482824357802, -122.21294403076173, 'lorem grudgum', 'In my own soul', 'All of my errands and projects that Ive been putting off working on', 'my subconcious nagging me to stop being so lazy', 
"Some things in life are bad
They can really make you mad
Other things just make you swear and curse
When you're chewing on life's gristle
Don't grumble, give a whistle
And this'll help things turn out for the best
And
Always look on the bright side of life
Always look on the light side of life
If life seems jolly rotten
There's something you've forgotten
And that's to laugh and smile and dance and sing
When you're feeling in the dumps
Don't be silly chumps
Just purse your lips and whistle, that's the thing
And
Always look on the bright side of life
(Come on)
Always look on the right side of life
For life is quite absurd
And death's the final word
You must always face the curtain with a bow
Forget about your sin
Give the audience a grin
Enjoy it, it's your last chance anyhow
So always look on the bright side of death
A just before you draw your terminal breath
Life's a piece of shit
When you look at it
Lifes a laugh and death's a joke, its true
Youll see its all a show
Keep em laughin as you go
Just remember that the last laugh is on you
And
Always look on the bright side of life
Always look on the right side of life
(Cmon Brian, cheer up)
Always look on the bright side of life
Always look on the bright side of life
Always look on the bright side of life
I mean, what have you got to lose?
You know, you come from nothing
Youre going back to nothing
What have you lost? Nothing
Always look on the right side of life
Nothing will come from nothing, ya know what they say
Cheer up ya old bugga cmon give us a grin (Always look on the right side of life)
There ya are, see
Its the end of the film
Incidentally this records available in the foyer (Always look on the right side of life)
Some of us got to live as well, you know
(Always look on the right side of life)
Who do you think pays for all this rubbish
(Always look on the right side of life)
Theyre not gonna make their money back, you know
I told them, I said to him, Bernie, I said theyll never make their money back
(Always look on the right side of life)
");