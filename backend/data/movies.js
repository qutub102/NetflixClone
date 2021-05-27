const movies = [
  {
    poster_path:
      "https://image.tmdb.org/t/p/original/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg",
    video: false,
    vote_average: 7.6,
    overview:
      "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
    release_date: "2021-04-07",
    id: 460465,
    adult: false,
    genre_ids: ["action", "thriller", "crime"],
    title: "Mortal Kombat",
    original_language: "en",
    original_title: "Mortal Kombat",
    popularity: 2309.097,
    media_type: "movie",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/6ELCZlTA5lGUops70hKdB83WJxH.jpg",
  },
  {
    genre_ids: ["comedy", "romance", "drama", "romance"],
    original_language: "en",
    original_title: "The Woman in the Window",
    poster_path:
      "https://image.tmdb.org/t/p/original/wcrjc1uwQaqoqtqi67Su4VCOYo0.jpg",
    video: false,
    vote_average: 6.3,
    overview:
      "An agoraphobic woman living alone in New York begins spying on her new neighbors only to witness a disturbing act of violence.",
    release_date: "2021-05-14",
    title: "The Woman in the Window",
    id: 520663,
    adult: false,
    popularity: 449.355,
    media_type: "movie",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/gUttUEqsrvaMlK5oL5TSQ54iE96.jpg",
  },
  {
    adult: false,
    id: 578701,
    genre_ids: ["romance", "romance", "action", "drama"],
    original_language: "en",
    original_title: "Those Who Wish Me Dead",
    poster_path:
      "https://image.tmdb.org/t/p/original/xCEg6KowNISWvMh8GvPSxtdf9TO.jpg",
    video: false,
    vote_average: 7.2,
    overview:
      "A young boy finds himself pursued by two assassins in the Montana wilderness with a survival expert determined to protecting him - and a forest fire threatening to consume them all.",
    release_date: "2021-05-05",
    title: "Those Who Wish Me Dead",
    popularity: 738.115,
    media_type: "movie",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/ouOojiypBE6CD1aqcHPVq7cJf2R.jpg",
  },
  {
    adult: false,
    genre_ids: ["sports", "romance", "romance"],
    original_language: "fr",
    original_title: "Oxygène",
    poster_path:
      "https://image.tmdb.org/t/p/original/u74DFoZGTcZ8cuHO8nvQkCqXEVP.jpg",
    id: 471498,
    vote_average: 6.9,
    title: "Oxygen",
    overview:
      "A woman wakes in a cryogenic chamber with no recollection of how she got there, and must find a way out before running out of air.",
    release_date: "2021-05-12",
    popularity: 527.55,
    media_type: "movie",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/jedggylU3FyIN7XRAl9WY8mrT6H.jpg",
  },
  {
    poster_path:
      "https://image.tmdb.org/t/p/original/rEm96ib0sPiZBADNKBHKBv5bve9.jpg",
    vote_average: 7.3,
    overview:
      "An elite Navy SEAL uncovers an international conspiracy while seeking justice for the murder of his pregnant wife.",
    release_date: "2021-04-29",
    adult: false,
    title: "Tom Clancy's Without Remorse",
    genre_ids: ["action", "crime", "romance", "thriller"],
    id: 567189,
    original_language: "en",
    original_title: "Tom Clancy's Without Remorse",
    popularity: 2425.841,
    media_type: "movie",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/fPGeS6jgdLovQAKunNHX8l0avCy.jpg",
  },
  {
    original_name: "Love, Death & Robots",
    genre_ids: ["sci - fi", "fantasy"],
    original_language: "en",
    first_air_date: "2019-03-15",
    vote_average: 8.2,
    name: "Love, Death & Robots",
    poster_path:
      "https://image.tmdb.org/t/p/original/asDqvkE66EegtKJJXIRhBJPxscr.jpg",
    overview:
      "Terrifying creatures, wicked surprises and dark comedy converge in this NSFW anthology of animated stories presented by Tim Miller and David Fincher.",
    id: 86831,
    popularity: 758.649,
    media_type: "tv",
    title: "Love, Death & Robots",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/nBrkOZyI75artyizuBFeya48KbO.jpg",
  },
  {
    poster_path:
      "https://image.tmdb.org/t/p/original/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg",
    vote_average: 8.1,
    overview:
      "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.",
    release_date: "2021-03-24",
    adult: false,
    title: "Godzilla vs. Kong",
    genre_ids: ["sports", "action", "romance"],
    id: 399566,
    original_language: "en",
    original_title: "Godzilla vs. Kong",
    popularity: 1564.627,
    media_type: "movie",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg",
  },
  {
    original_language: "en",
    original_title: "The Mitchells vs. The Machines",
    poster_path:
      "https://image.tmdb.org/t/p/original/mI2Di7HmskQQ34kz0iau6J1vr70.jpg",
    id: 501929,
    vote_average: 8.1,
    overview:
      "A quirky, dysfunctional family's road trip is upended when they find themselves in the middle of the robot apocalypse and suddenly become humanity's unlikeliest last hope.",
    release_date: "2021-04-22",
    adult: false,
    genre_ids: ["sci - fi", "crime", "tv - shows", "documentraties", "sports"],
    title: "The Mitchells vs. The Machines",
    popularity: 154.204,
    media_type: "movie",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/egxe0rPverBETHzV6COXFGL4edC.jpg",
  },
  {
    genre_ids: ["fantasy", "horror", "romance", "drama"],
    name: "Jupiter's Legacy",
    original_name: "Jupiter's Legacy",
    vote_average: 7.4,
    id: 93484,
    overview:
      "When the world's first generation of superheroes received their powers in the 1930s become the revered elder guard in the present, their superpowered children struggle to live up to the legendary feats of their parents.",
    first_air_date: "2021-05-07",
    poster_path:
      "https://image.tmdb.org/t/p/original/9yxep7oJdkj3Pla9TD9gKflRApY.jpg",
    original_language: "en",
    popularity: 794.23,
    media_type: "tv",
    title: "Jupiter's Legacy",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/4YKkS95v9o9c0tBVA46xIn6M1tx.jpg",
  },
  {
    vote_average: 9,
    overview:
      "Follow the elite and experimental Clones of the Bad Batch as they find their way in a rapidly changing galaxy in the aftermath of the Clone Wars.",
    original_name: "The Bad Batch",
    id: 105971,
    genre_ids: ["fantasy", "horror", "sci - fi"],
    original_language: "en",
    first_air_date: "2021-05-04",
    poster_path:
      "https://image.tmdb.org/t/p/original/WjQmEWFrOf98nT5aEfUfVYz9N2.jpg",
    name: "The Bad Batch",
    popularity: 603.928,
    media_type: "tv",
    title: "The Bad Batch",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/sjxtIUCWR74yPPcZFfTsToepfWm.jpg",
  },
  {
    genre_ids: ["sci - fi", "crime", "thriller", "documentraties", "action"],
    original_language: "en",
    original_title: "Raya and the Last Dragon",
    poster_path:
      "https://image.tmdb.org/t/p/original/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg",
    vote_average: 8.2,
    overview:
      "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
    release_date: "2021-03-03",
    title: "Raya and the Last Dragon",
    adult: false,
    id: 527774,
    popularity: 833.132,
    media_type: "movie",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/7prYzufdIOy1KCTZKVWpjBFqqNr.jpg",
  },
  {
    genre_ids: ["action", "crime", "thriller", "sports"],
    original_language: "en",
    original_title: "Zack Snyder's Justice League",
    poster_path:
      "https://image.tmdb.org/t/p/original/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
    vote_average: 8.5,
    id: 791373,
    overview:
      "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
    release_date: "2021-03-18",
    title: "Zack Snyder's Justice League",
    adult: false,
    popularity: 1006.113,
    media_type: "movie",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/pcDc2WJAYGJTTvRSEIpRZwM3Ola.jpg",
  },
  {
    poster_path:
      "https://image.tmdb.org/t/p/original/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
    vote_average: 8.4,
    overview:
      'Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a "nobody." When two thieves break into his home one night, Hutch\'s unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.',
    release_date: "2021-03-26",
    id: 615457,
    adult: false,
    genre_ids: ["action", "romance", "comedy", "tv - shows"],
    title: "Nobody",
    original_language: "en",
    original_title: "Nobody",
    popularity: 1196.803,
    media_type: "movie",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg",
  },
  {
    adult: false,
    id: 823855,
    genre_ids: ["comedy", "romance", "drama", "romance"],
    original_language: "en",
    original_title: "I Am All Girls",
    poster_path:
      "https://image.tmdb.org/t/p/original/m6bUeV4mczG3z2YXXr5XDKPsQzv.jpg",
    vote_average: 7.2,
    overview:
      "A special crimes investigator forms an unlikely bond with a serial killer to bring down a global child sex trafficking syndicate.",
    release_date: "2021-05-14",
    title: "I Am All Girls",
    popularity: 213.881,
    media_type: "movie",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/gPKcJzrbgs1670fOeKN1xQH9mNa.jpg",
  },
  {
    genre_ids: ["fantasy", "horror", "romance", "music"],
    original_language: "en",
    name: "The Falcon and the Winter Soldier",
    poster_path:
      "https://image.tmdb.org/t/p/original/6kbAMLteGO8yyewYau6bJ683sw7.jpg",
    vote_average: 7.9,
    first_air_date: "2021-03-19",
    overview:
      "Following the events of “Avengers: Endgame”, the Falcon, Sam Wilson and the Winter Soldier, Bucky Barnes team up in a global adventure that tests their abilities, and their patience.",
    id: 88396,
    original_name: "The Falcon and the Winter Soldier",
    popularity: 1066.251,
    media_type: "tv",
    title: "The Falcon and the Winter Soldier",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/b0WmHGc8LHTdGCVzxRb3IBMur57.jpg",
  },
  {
    genre_ids: ["sci - fi", "action", "crime", "thriller", "romance"],
    original_language: "ja",
    original_title: "劇場版「鬼滅の刃」無限列車編",
    poster_path:
      "https://image.tmdb.org/t/p/original/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
    video: false,
    vote_average: 8.4,
    id: 635302,
    overview:
      "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
    release_date: "2020-10-16",
    title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
    adult: false,
    popularity: 1010.159,
    media_type: "movie",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg",
  },
  {
    video: false,
    vote_average: 7.3,
    overview:
      "A woman in her sixties embarks on a journey through the western United States after losing everything in the Great Recession, living as a van-dwelling modern-day nomad.",
    release_date: "2021-01-29",
    adult: false,
    genre_ids: ["romance"],
    title: "Nomadland",
    original_language: "en",
    original_title: "Nomadland",
    poster_path:
      "https://image.tmdb.org/t/p/original/66GUmWpTHgAjyp4aBSXy63PZTiC.jpg",
    id: 581734,
    popularity: 90.344,
    media_type: "movie",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/gOvUJzah5i3DMf3mGUjqfcP05tp.jpg",
  },
  {
    poster_path:
      "https://image.tmdb.org/t/p/original/8XZI9QZ7Pm3fVkigWJPbrXCMzjq.jpg",
    video: false,
    id: 587807,
    overview:
      "Tom the cat and Jerry the mouse get kicked out of their home and relocate to a fancy New York hotel, where a scrappy employee named Kayla will lose her job if she can’t evict Jerry before a high-class wedding at the hotel. Her solution? Hiring Tom to get rid of the pesky mouse.",
    release_date: "2021-02-11",
    title: "Tom & Jerry",
    adult: false,
    genre_ids: ["tv - shows", "documentraties", "sci - fi"],
    vote_average: 7.3,
    original_language: "en",
    original_title: "Tom & Jerry",
    popularity: 476.296,
    media_type: "movie",
    backdrop_path:
      "https://image.tmdb.org/t/p/original/9ns9463dwOeo1CK1JU2wirL5Yi1.jpg",
  },
  {
    adult: false,
    backdrop_path: "https://image.tmdb.org/t/p/original/xXHZeb1yhJvnSHPzZDqee0zfMb6.jpg",
    genre_ids: ["romance", "action", "thriller"],
    original_language: "en",
    original_title: "F9",
    poster_path: "https://image.tmdb.org/t/p/original/bOFaAXmWWXC3Rbv4u4uM9ZSzRXP.jpg",
    id: 385128,
    video: false,
    vote_average: 9.6,
    title: "F9",
    overview:
      "Dominic Toretto is leading a quiet life off the grid with Letty and his son, little Brian, but they know that danger always lurks just over their peaceful horizon. This time, that threat will force Dom to confront the sins of his past if he’s going to save those he loves most. His crew joins together to stop a world-shattering plot led by the most skilled assassin and high-performance driver they’ve ever encountered: a man who also happens to be Dom’s forsaken brother, Jakob.",
    release_date: "2021-05-19",
    popularity: 227.524,
    media_type: "movie",
  },
  {
    adult: false,
    backdrop_path: "https://image.tmdb.org/t/p/original/9WlJFhOSCPnaaSmsrv0B4zA8iUb.jpg",
    genre_ids: ["thriller", "crime", "action"],
    id: 503736,
    original_language: "en",
    original_title: "Army of the Dead",
    overview:
      "Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble: venturing into the quarantine zone to pull off the greatest heist ever attempted.",
    poster_path: "https://image.tmdb.org/t/p/original/x3taBaWfRzw1NIKhEPpKPwKBAOC.jpg",
    release_date: "2021-05-13",
    title: "Army of the Dead",
    video: false,
    vote_average: 8.4,
    popularity: 224.14,
    media_type: "movie",
  },
];

module.exports = movies;
