var questions = [
    [true, "Oval", "In the London Borough of Lambeth. It is on the Northern line between Kennington and Stockwell stations and is in Travelcard Zone 2. It opened on 18 December 1890.", "Northern Line", "!1m18!1m12!1m3!1d4969.307545971313!2d-0.12181967054676811!3d51.48286919990038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876048dc396eff5%3A0xeb5f6550ab496527!2sOval!5e0!3m2!1sen!2suk!4v1669935009661!5m2!1sen!2suk"],
    [true, "Balham", "Balham is an interchange station formed of a range of underground entrances for the London Underground and a shared entrance with its National Rail station component. The station is in central Balham in the London Borough of Wandsworth, south London, England. Opened on the 16th of June, 1987.", "Northern Line", "!1m18!1m12!1m3!1d8126.335489895555!2d-0.1563687396269975!3d51.444065054318095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605c56294617d%3A0x3edfe09cac694f89!2sBalham!5e0!3m2!1sen!2suk!4v1669937346471!5m2!1sen!2suk"],
    [true, "Colindale", "Colindale is a London Underground station in Colindale, a suburb of north-west London. The station is on the Edgware branch of the Northern line, between Burnt Oak and Hendon Central stations, and in Travelcard Zone 4. The station opened on the 18th of August 1924.", "Northern Line", "!1m18!1m12!1m3!1d2478.51166992658!2d-0.251810483912506!3d51.59551271207732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487611324edc8aad%3A0x740d4552923bd8fe!2sColindale!5e0!3m2!1sen!2suk!4v1669937387731!5m2!1sen!2suk"],
    [true, "Tooting Bec", "Tooting Bec, originally Trinity Road (Tooting Bec), is a London Underground station in Tooting, South London. The station is on the Northern line, between Balham and Tooting Broadway stations. The station opend on the 16th of June, 1987.", "Northern Line", "!1m18!1m12!1m3!1d2487.213845516025!2d-0.16340908391632628!3d51.435866523751294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605de9895b3bd%3A0x833e4fc2213fe48e!2sTooting%20Bec!5e0!3m2!1sen!2suk!4v1669937416301!5m2!1sen!2suk"],
    [true, "Monument", "Bank and Monument are interlinked London Underground and Docklands Light Railway (DLR) stations that form a public transport complex spanning the length of King William Street in the City of London. It was opened on the 4th of January, 1950.", "Circle/District Line", "!1m18!1m12!1m3!1d2483.120479819381!2d-0.08884778391454613!3d51.51100561826005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760353c5dfa2c3%3A0xaceb05fcd888fae2!2sMonument!5e0!3m2!1sen!2suk!4v1669937428230!5m2!1sen!2suk"],
    [true, "Temple", "Temple is a London Underground station located at Victoria Embankment in the City of Westminster, close to its boundary with the City of London. It is on the Circle and District lines between Embankment and Blackfriars, and is in fare zone 1. The station was opened on the 30th of May, 1870 with the name 'The Temple'.", "Circle/District Line", "!1m18!1m12!1m3!1d903.6397818283605!2d-0.11486135570155184!3d51.511046290172914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b4358a0a83%3A0x338fcb94ed202b09!2sTemple%20Station!5e0!3m2!1sen!2suk!4v1669937442604!5m2!1sen!2suk"],
    [true, "Victoria", "Victoria station, also known as London Victoria, is a central London railway terminus and connected London Underground station in Victoria, in the City of Westminster, managed by Network Rail. The Brighton station opened in 1860.", "Circle/District/Victoria Line", "!1m18!1m12!1m3!1d2483.9811380133297!2d-0.14608658391492685!3d51.495213619414756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760521aaebdc4d%3A0x5d364f36086cfd15!2sVictoria%20Station!5e0!3m2!1sen!2suk!4v1669937455288!5m2!1sen!2suk"],
    [true, "Harold Wood", "Harold Wood railway station is on the Great Eastern Main Line in east London, serving the Harold Wood area of Romford in the London Borough of Havering. Harold Wood station was opened on the 1st of December 1868.", "Elizabeth Line", "!1m18!1m12!1m3!1d9914.41743288052!2d0.22168689809454964!3d51.59381415462354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8bb78d96aa989%3A0x49d1c6ed3bcfeeb3!2sHarold%20Wood!5e0!3m2!1sen!2suk!4v1669937504490!5m2!1sen!2suk"],
    [true, "Seven Sisters", "Seven Sisters is a National Rail, London Overground and London Underground Victoria line station in the Seven Sisters area of the London Borough of Haringey, north London. The station opened on the 22nd of July, 1872.", "Victoria Line", "!1m18!1m12!1m3!1d5407.25687434184!2d-0.0787877920429806!3d51.58219841797281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c15d89be221%3A0x7ce2d9c183761e9e!2sSeven%20Sisters!5e0!3m2!1sen!2suk!4v1669937563406!5m2!1sen!2suk"],
    [true, "Homerton", "Homerton is a station on the North London line in the district of Homerton, East London and the station and all trains serving it are operated by London Overground. It is in Travelcard Zone 2. The original station was opened on the 1st of October, 1868.", "London Overground", "!1m18!1m12!1m3!1d5407.25687434184!2d-0.0787877920429806!3d51.58219841797281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c15d89be221%3A0x7ce2d9c183761e9e!2sSeven%20Sisters!5e0!3m2!1sen!2suk!4v1669937596692!5m2!1sen!2suk"],
    [true, "Angel", "Angel is a London Underground station in the Angel area of the London Borough of Islington. It is on the Bank branch of the Northern line, between King's Cross St. Pancras and Old Street stations, in Travelcard Zone 1. The station opened on the 17th of November, 1901.", "Northern Line", "!1m18!1m12!1m3!1d2481.9330702122047!2d-0.10805928391400814!3d51.53278741666715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4332ecac5b%3A0xd4028cc7ead6e5ce!2sAngel!5e0!3m2!1sen!2suk!4v1669937614616!5m2!1sen!2suk"],
    [true, "Poplar", "Poplar is a Docklands Light Railway (DLR) station in Poplar in London, England. Poplar is a cross-platform interchange station for three of the six lines on the DLR (Stratford-Canary Wharf, Bank-Woolwich Arsenal and Tower Gateway-Beckton) making it one of the busiest stations on the network in terms of services. It is also nearby the Canary Wharf Station on Crossrail's Elizabeth Line. Poplar DLR station was opened on the 21st of August, 1987.", "DLR", "!1m18!1m12!1m3!1d2483.295346260767!2d-0.019801284074959454!3d51.50779731849486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487602b12d8fe68b%3A0xbbfac6196c86543c!2sPoplar!5e0!3m2!1sen!2suk!4v1669937724726!5m2!1sen!2suk"],
    [true, "King George V", "King George V is a Docklands Light Railway (DLR) station in North Woolwich, East London, which opened on 2 December 2005. The station replaced North Woolwich railway station on the North London line and is named after King George V Dock nearby in the London Borough of Newham.", "DLR", "!1m18!1m12!1m3!1d2483.610759838582!2d0.06019041592487035!3d51.50201001891812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a890e22df34b%3A0xefa09b67c94879ee!2sKing%20George%20V!5e0!3m2!1sen!2suk!4v1669937703656!5m2!1sen!2suk"],
    [true, "Barking", "Barking is an interchange station serving the town of Barking, east London. It is served by London Underground, London Overground and National Rail main line services. It is located on Station Parade, in the town centre. The original station opened on the 13th of April, 1854.", "District/Hammersmith & City", "!1m18!1m12!1m3!1d2481.564123815566!2d0.07875661592590197!3d51.539554016172396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a66d964f8117%3A0xacb1d014a266ff13!2sBarking!5e0!3m2!1sen!2suk!4v1669937648860!5m2!1sen!2suk"],
    [true, "Chigwell", "Chigwell is a London Underground station in the town of Chigwell in the Epping Forest district of Essex. It is located on the Hainault Loop of the Central line, between Grange Hill and Roding Valley stations. Since 2 January 2007, the station is the only station outside Greater London in Travelcard Zone 4.", "Central Line", "!1m18!1m12!1m3!1d39627.193973843525!2d0.0535735928609424!3d51.62871132205216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a0b7f1096861%3A0xdbd5c80d9d3585cd!2sChigwell!5e0!3m2!1sen!2suk!4v1669937631475!5m2!1sen!2suk"],
    [true, "Redbridge", "Redbridge is a London Underground station on Eastern Avenue in the Redbridge district of Ilford in North East London, on the Hainault Loop of the Central line, in Zone 4. The station was opened on the 14 of December, 1947.", "Central Line", "!1m18!1m12!1m3!1d2479.559564575539!2d0.043264515926937926!3d51.57630721348336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a71fb8e6ddbf%3A0xf9006ee1c5b7512e!2sRedbridge!5e0!3m2!1sen!2suk!4v1669937619255!5m2!1sen!2suk"],
    [true, "Ladbroke Grove", "Ladbroke Grove is a London Underground station on the Circle and Hammersmith & City lines, between Latimer Road and Westbourne Park stations, and in Travelcard Zone 2 set in The Royal Borough of Kensington and Chelsea. The station opened on the 13th June 1864.", "Circle/Hammersmith & City", "!1m18!1m12!1m3!1d2482.7755705267177!2d-0.21029689999999998!3d51.517333300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876101f758782ed%3A0x530df3f5cd4b7e26!2sLadbroke%20Grove!5e0!3m2!1sen!2suk!4v1669937739527!5m2!1sen!2suk"],
    [true, "Shepherd's Bush", "Shepherd's Bush station is a railway station located in the district of Shepherd's Bush in Greater London, England, UK. It opened on 29 September 2008 on the West London line and is served by London Overground and Southern rail services. It lies within Travelcard Zone 2.", "Central Line", "!1m18!1m12!1m3!1d2483.459948880983!2d-0.2186414!3d51.5047772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760fdb4aeac721%3A0x4144b17902219e7d!2sShepherds%20Bush!5e0!3m2!1sen!2suk!4v1669937754097!5m2!1sen!2suk"],
    [true, "Swiss Cottage", "Swiss Cottage is a London Underground station at Swiss Cottage, north London. It is on the Jubilee line, between Finchley Road and St John's Wood stations. It lies in Travelcard Zone 2 and is located at the junction of Finchley Road, Avenue Road and College Crescent.", "Jubilee Line", "!1m18!1m12!1m3!1d2481.339591650607!2d-0.1745194!3d51.543671700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761a90f5172439%3A0xaaf00b7875302858!2sSwiss%20Cottage!5e0!3m2!1sen!2suk!4v1669937762100!5m2!1sen!2suk"],
    [false, "Graham South", "Graham went to see some penguins"],
    [false, "Crumb Bridge", "There is a greggs on either side of this bridge."],
    [false, "Moreish", "I have a craving for this station."],
    [false, "Carriage Hill", "Wouldn't they just roll down?"],
    [false, "Nine Bar", "...Is the amount you need to visit to get this one wrong."],
    [false, "Thatchers Avenue", "<a href=\"https://www.isthatcherdeadyet.co.uk\" target=\"_blank\">www.isthatcherdeadyet.co.uk</a>"],
    [false, "Killingham", "Many butchers at this station."],
    [false, "Henningdale", "Get that female chicken out of Dale!"],
    [false, "Bumlick", "huhuh"],
    [false, "Plowfast", "Farm quickly!"],
    [false, "Gardens", "Would have been turned into blocks of flats by now."],
    [false, "Parliament Common", "Pfft, I got a parliament legendary!"],
    [false, "Grinning Ducksley", "Smiling duck"],
    [false, "Peeping Horror", "A very funny yet dangerous station."],
    [false, "Tewe Beastation", "Tewe Beastation > Tube Station"],
    [false, "Carlgreen", "Carl fell in a vat of green paint."],
    [false, "Westminster South", "Westminster station is real, but there is not a Westminster south/north."],
    [false, "Centurion & Mystic", "Remember to target Centurion first!"],
    [false, "North-Hill South", "To get to and from this station you need to walk uphill both ways!"],
    [false, "Sparrington", "The people at this station enjoy fighting for fun."],
    [false, "Resting Hound", "Sleepy doggie!"],
].sort((a,b)=>a[1].localeCompare(b[1]));

var answers = {};
if (localStorage.hasOwnProperty('stationQuizAnswers'))
    answers = JSON.parse(localStorage.stationQuizAnswers); //load save
else
    localStorage.stationQuizAnswers = '{}'; //if no save, create a new one