//Functions adding artist Biography

function sarahBio() {
    document.getElementById("sarah").innerHTML = "Sarah Geronimo is a Filipino pop-artist and is the biggest music act of her generation. A multi-hyphenate, Sarah is a singer, music recording-artist, ace performer, box-office star actress, TV host and a celebrity endorser.<br> Dubbed as the “Popstar Royalty,” Sarah Geronimo has numerous multi-platinum albums her credit. Her string of successful album releases started from her debut album immediately after winning the 2002 competition “Star For A Night” in 2002 up to her most recent album titled “This 15 Me” (2018).<br> As a pop music artist, Sarah Geronimo (a.k.a. Sarah G.) has numerous recognitions to her credit that includes a dozen Awit Awards (the Philippine equivalent of the Grammys) including Best Album for her 2016 record “The Great Unknown.” 26 MYX Music Award wins (the equivalent of the MTV Music Awards), 8 Aliw Awards for entertainment, an MTV Europe’s World Music Awards for Best Southeast Asian act (2014) and a 2016 Classic Rock and Roll Honour recognition for Best Asian Performer.<br> Sarah Geronimo has since become one of the most influential Filipino music artists and her style has covered a wide range of genres from pop, electro, dance, R&B and pop rock as well as becoming a style icon, total performer and a constant sold-out live concert draw.";
}

function moiraBio() {
    document.getElementById("moira").innerHTML = "Moira Dela Torre is a Filipina singer-songwriter. She rose to fame for her covers of Imago&lsquo;s “Sundo”, Moonstar88&lsquo;s “Torete”, and the Himig Handog-winning single “Titibo-tibo”. Dela Torre&lsquo;s career started as a voice artist working on corporate jingles and theme songs. She joined the first season of The Voice of the Philippines and subsequently released her first single titled “Love Me Instead” through her debut EP album “Moira”. In October 2017, she performed in the finals of the songwriting and music video competition Himig Handog. Dela Torre&lsquo;s interpretation of the Libertine Amistoso song “Titibo-tibo” made her the grand winner. Since 2019, she is one of the judges in Idol Philippines."
}

function regineBio() {
    document.getElementById("regine").innerHTML = "Regine Velasquez is a best-selling Filipino pop singer, recording artist, record producer, and accomplished actress. In her home country, she is known as “Asia&lsquo;s Songbird” and “The Queen of Pop.” She is celebrated for her vocal range, musical diversity, and her trademark use of the belting technique. She has sold millions of records and is the best-selling artist of all time in the Philippines, with seven-million certified albums and 1.5 million certified albums throughout Asia. She has been awarded an Asian Television Award, 2 MTV Asia Awards, 18 Box Office Entertainment Awards, 16 Awit Awards, and 12 Aliw Awards.";
}

function leaBio() {
    document.getElementById("lea").innerHTML = "With a voice that&lsquo;s both warm and powerful, Lea Salonga is a Tony Award-winning singer and actress known for a lengthy stage résumé that includes originating the role of Kim in Miss Saigon. She&lsquo;s also known as the singing voice of not one but two Disney princesses (Jasmine and Mulan), and as an international recording artist with album sales in the tens of millions. A native of the Philippines, she was the first Asian woman to win a Tony Award (1991), the first Filipino to sign with an international record label (1993), and is one of the best-selling Filipino artists of all time. Still going strong well after being cast in 1998&lsquo;s Mulan, she co-starred in the Broadway revival of Once on This Island in 2017 and landed in the Top 20 of the Billboard Classical Albums chart with 2019&lsquo;s The Story of My Life: Live from Manila.";
}

function benBio() {
    document.getElementById("ben").innerHTML = "Ben&Ben is an award-winning nine-piece Folk-Pop band from Manila, Philippines. Currently regarded as the biggest band in the Philippines, the band has endeared itself to many with their heartfelt lyrics, unique musicality, and their electric vibe onstage. In the prime of their youth, the band is keen on dedicating themselves to bringing richness to the music they create through songs of hope, love, and positivity. The band is composed of twin brothers Paolo Benjamin and Miguel Benjamin (acoustic guitars and vocals), Agnes Reoma (bass), Poch Barretto (electric guitar), Keifer Cabugao (violin), Pat Lasaten (keyboards), Toni Muñoz and Andrew de Pano on percussions, and Jam Villanueva (drums). Together, they have amassed more than a billion streams on Spotify alone, charting on Spotify Philippines Top 50 with 10 songs simultaneously ranking & also currently holding the record for most OPM #1s on the platform.";
}

//Functions adding artist Top Songs

function sarahSongs() {
    document.getElementById("sarah").innerHTML = "<a href='https://www.youtube.com/watch?v=hvqNU4P_0R4'>1. Maybe This Time</a><br> <a href='https://www.youtube.com/watch?v=XcITAWSWZF0'>2. Isa Pang Araw</a><br> <a href='https://www.youtube.com/watch?v=6vF-_7iBo1c'>3. Duyan</a><br> <a href='https://www.youtube.com/watch?v=ahpmuikko3U'>4. Tala</a><br> <a href='https://www.youtube.com/watch?v=TKIZPNWiMvc'>5. Very Special Love</a>"
}

function moiraSongs() {
    document.getElementById("moira").innerHTML = "<a href='https://www.youtube.com/watch?v=uPklMSpmvGs'>1. Babalik Sa&lsquo;yo</a><br> <a href='https://www.youtube.com/watch?v=c1tdyT0drGg'>2. Kumpas</a><br> <a href='https://www.youtube.com/watch?v=zsNpW1x_S1w'>3. Before It Sinks In</a><br> <a href='https://www.youtube.com/watch?v=ljUaQ-UDbuE'>4. Dito Ka Lang</a><br> <a href='https://www.youtube.com/watch?v=u7kY3yaeybI'>5. Beautiful Scars</a>"
}

function regineSongs() {
    document.getElementById("regine").innerHTML = "1. In Love With You, 2. You Are My Song, 3. On The Wings Of Love, 4. Hanggang Ngayon, 5. Dadalhin";
}

function leaSongs() {
    document.getElementById("lea").innerHTML = "1. A Whole New World, 2. A Girl Worth Fighting For, 3. Reflection, 4. Honor To Us All, 5. Bayaning Tunay";
}

function benSongs() {
    document.getElementById("ben").innerHTML = "1. The Ones We Once Loved, 2. Paninindigan Kita, 3. Sa Susunod Na Habang Buhay, 4. Leaves, 5. Kathang Isip";
}

//Close artist info
function closeArtist(id) {
    id.innerHTML = ""
}