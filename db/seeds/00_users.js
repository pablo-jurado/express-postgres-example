exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return knex.raw(query);
    });
};

let query = `
  INSERT INTO users (first_name, last_name, email, "password", created) 
    VALUES 
      ('Hattie', 'Scading', 'hscading0@archive.org', 'aUFEKOxv', '2016-04-18'),
      ('Dulsea', 'Rammell', 'drammell1@howstuffworks.com', 'ZKkKpypakx', '2004-02-15'),
      ('Bethena', 'Nealon', 'bnealon2@washingtonpost.com', '9RfGAgAYT', '2003-02-10'),
      ('Mortie', 'Raysdale', 'mraysdale3@blinklist.com', 'fz7XMCy', '2016-12-31'),
      ('Aili', 'Hatto', 'ahatto4@etsy.com', '1ry1BtXV', '2013-05-26'),
      ('Nial', 'Lassetter', 'nlassetter5@so-net.ne.jp', 'uw3oC6f3af', '2006-09-29'),
      ('Olga', 'Koppelmann', 'okoppelmann6@dyndns.org', 'eWkaJoE', '2005-01-16'),
      ('Roderic', 'Danzelman', 'rdanzelman7@constantcontact.com', 'M7Ar2go5X', '2019-08-30'),
      ('Eyde', 'Bennett', 'ebennett8@tuttocitta.it', 'EpNA321H', '2007-02-25'),
      ('Franni', 'Edwin', 'fedwin9@lulu.com', 'ksnY9kz5', '2009-02-06'),
      ('Lucio', 'Ullrich', 'lullricha@google.cn', 'bNjPrWt', '2010-05-09'),
      ('Virgilio', 'Holdren', 'vholdrenb@yahoo.com', 'S2apWf4Pq', '2019-03-19'),
      ('Fransisco', 'McFarland', 'fmcfarlandc@shutterfly.com', 'uryGWil7z', '2005-04-03'),
      ('Orion', 'Arendt', 'oarendtd@reddit.com', 't56fQfaOv', '2009-08-04'),
      ('Elliott', 'Ramlot', 'eramlote@rediff.com', 'rze9Y7', '2019-02-13'),
      ('Germaine', 'Gooddy', 'ggooddyf@dmoz.org', 'WOQsIWM7Gn', '2014-01-21'),
      ('Idalia', 'Robker', 'irobkerg@bizjournals.com', 'QdcM810sJjA', '2005-08-11'),
      ('Ermengarde', 'Forge', 'eforgeh@pbs.org', 'OaJAqvn9mgV', '2007-07-24'),
      ('Demetri', 'Cramond', 'dcramondi@ucsd.edu', 'G6ZbLty', '2012-01-25'),
      ('Virgil', 'Giurio', 'vgiurioj@livejournal.com', 'VxKJiw', '2016-02-15'),
      ('Zerk', 'Noad', 'znoadk@pen.io', 'Czfg7nr', '2005-10-21'),
      ('Estell', 'Treasaden', 'etreasadenl@seattletimes.com', '1yNQgX', '2013-10-25'),
      ('Thaddus', 'Addekin', 'taddekinm@geocities.com', 'MUR8yeRUU', '2011-02-15'),
      ('Siusan', 'Van Vuuren', 'svanvuurenn@businesswire.com', 'zExM0fHT', '2016-02-16'),
      ('Linet', 'Drakeley', 'ldrakeleyo@arizona.edu', 'Wtqb13du4x', '2017-11-09'),
      ('Farlee', 'Moresby', 'fmoresbyp@lulu.com', 'JyciqU5', '2008-09-02'),
      ('Nan', 'Tingle', 'ntingleq@chicagotribune.com', '8xpihp6kdx', '2005-12-07'),
      ('Janice', 'Wix', 'jwixr@mysql.com', 'jo42ebmms', '2018-01-31'),
      ('Meaghan', 'Toppas', 'mtoppass@unesco.org', 'GJLZW1sA8Di', '2017-09-06'),
      ('Joella', 'Ferminger', 'jfermingert@answers.com', '1acM4qhauvfp', '2015-07-06'),
      ('Audy', 'Wein', 'aweinu@ibm.com', 'rIVmNgBUGnq', '2009-04-08'),
      ('Ddene', 'O''Lynn', 'dolynnv@w3.org', 'IDlSVR0O8', '2008-02-26'),
      ('Iosep', 'Bertelmot', 'ibertelmotw@ox.ac.uk', 'U7Sk2m514ij7', '2014-12-20'),
      ('Mable', 'Beecheno', 'mbeechenox@opensource.org', 'G0N8Gs', '2014-12-18'),
      ('Simmonds', 'Stranger', 'sstrangery@marriott.com', 'YZ9Tkd', '2009-05-26'),
      ('Ofilia', 'Syers', 'osyersz@mozilla.org', 'DNbxPBdeZC', '2001-06-30'),
      ('Evangeline', 'Bang', 'ebang10@independent.co.uk', 'RtJm0j5', '2019-02-22'),
      ('Georgie', 'Woodbridge', 'gwoodbridge11@jimdo.com', '9IOM4v', '2010-04-17'),
      ('Eric', 'Chooter', 'echooter12@wsj.com', 'sRJcuC', '2015-10-01'),
      ('Yale', 'Gludor', 'ygludor13@businessweek.com', 'Ez3POs', '2011-10-20'),
      ('Marjie', 'Cotterel', 'mcotterel14@fema.gov', 'BPot2IrwM', '2012-06-05'),
      ('Ninetta', 'Lievesley', 'nlievesley15@intel.com', '7PMahmA', '2011-08-31'),
      ('Lola', 'McGreary', 'lmcgreary16@cbc.ca', 'ztVVw48yEwB3', '2018-10-07'),
      ('Niki', 'Bales', 'nbales17@java.com', 'MBCDEtuOYiu', '2015-10-15'),
      ('Katharine', 'Bark', 'kbark18@fema.gov', 'toKZ8B', '2009-02-18'),
      ('Rogers', 'Ellwood', 'rellwood19@amazon.de', '2ynywSjq9', '2011-05-15'),
      ('Herschel', 'Rome', 'hrome1a@ox.ac.uk', 'p3cok4', '2002-04-02'),
      ('Felicity', 'Ellin', 'fellin1b@about.me', 'v3rIMn8b0LMU', '2008-09-03'),
      ('Violet', 'Boucher', 'vboucher1c@indiatimes.com', 'mQZhwD4mq5w', '2019-06-16'),
      ('Georges', 'Hallifax', 'ghallifax1d@weebly.com', 'hjbHD6zcV1B', '2009-06-01')
  `;