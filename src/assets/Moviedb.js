// moviedb.js

const movieDB = [
  {
    name: "Stranger Things",
    year: 2016,
    rating: 8.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjg2NmM0MTEtYWY2Yy00NmFlLTllNTMtMjVkZjEwMGVlNzdjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "A group of kids in a small town uncover a series of supernatural mysteries tied to a secret government lab.In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",
  },
  {
    name: "Breaking Bad",
    year: 2008,
    rating: 9.5,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_.jpg",
    description:
      "A chemistry teacher turned methamphetamine producer partners with a former student to build an empire.",
  },
  {
    name: "Game of Thrones",
    year: 2011,
    rating: 9.3,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_.jpg",
    description:
      "Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men.",
  },
  {
    name: "The Office",
    year: 2005,
    rating: 9.0,
    poster:
      "https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "A mockumentary on a group of typical office workers, where the workday consists of ego clashes and inappropriate behavior.",
  },
  {
    name: "Friends",
    year: 1994,
    rating: 8.9,
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTU2YmM5ZjctOGVlMC00YTczLTljM2MtYjhlNGI5YWMyZjFkXkEyXkFqcGc@._V1_.jpg",
    description:
      "Follows the lives of six twenty-something friends living in Manhattan.",
  },
  {
    name: "Mirzapur",
    year: 2018,
    rating: 8.5,
    description:
      "A crime thriller set in the lawless city of Mirzapur ruled by a mafia don and his son.",
    poster:
      "https://m.media-amazon.com/images/M/MV5BZTFjMzMxZTUtYTMyNy00OWNhLTk4ODQtNGI1NjI1NjJhMzc3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    name: "Money Heist",
    year: 2017,
    rating: 8.2,
    poster:
      "https://m.media-amazon.com/images/M/MV5BZTFjMzMxZTUtYTMyNy00OWNhLTk4ODQtNGI1NjI1NjJhMzc3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "A criminal mastermind recruits a team to pull off the biggest heist in recorded history.",
  },
  {
    name: "Dark",
    year: 2017,
    rating: 8.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BOWJjMGViY2UtNTAzNS00ZGFjLWFkNTMtMDBiMDMyZTM1NTY3XkEyXkFqcGc@._V1_.jpg",
    description:
      "A sci-fi thriller that follows four interconnected families as they uncover a time travel conspiracy.",
  },
  {
    name: "Peaky Blinders",
    year: 2013,
    rating: 8.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BM2ZiNThlNzItNmY3Ny00NjA2LWJlMjItNTk1NDI3MDMyMTk4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description: "A gangster family epic set in 1900s Birmingham, England.",
  },
  {
    name: "The Witcher",
    year: 2019,
    rating: 8.2,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ5MDU5MTktMDZkMy00NDU1LWIxM2UtODg5OGFiNmRhNDBjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "Geralt of Rivia, a monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
  },
  {
    name: "The Mandalorian",
    year: 2019,
    rating: 8.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNjgxZGM0OWUtZGY1MS00MWRmLTk2N2ItYjQyZTI1OThlZDliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "A lone bounty hunter navigates the outer reaches of the galaxy far from the authority of the New Republic.",
  },
  {
    name: "Better Call Saul",
    year: 2015,
    rating: 9.0,
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimEHbz4Blzqgcu0-qbS9jHLEKoeuxb7VwXg&s",
    description:
      "The trials and tribulations of criminal lawyer Jimmy McGill before he became Saul Goodman.",
  },
  {
    name: "Sherlock",
    year: 2010,
    rating: 9.1,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTQzNGZjNDEtOTMwYi00MzFjLWE2ZTYtYzYxYzMwMjZkZDc5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "A modern update finds the famous sleuth and his doctor partner solving crime in 21st-century London.",
  },
  {
    name: "The Boys",
    year: 2019,
    rating: 8.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMWJlN2U5MzItNjU4My00NTM2LWFjOWUtOWFiNjg3ZTMxZDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "A group of vigilantes sets out to take down corrupt superheroes who abuse their superpowers.",
  },
  {
    name: "The Crown",
    year: 2016,
    rating: 8.6,
    poster:
      "https://resizing.flixster.com/aX9Yz5sNV2WpBA5CoENzIl9RbTM=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjI2NTU1OS53ZWJw",
    description:
      "Follows the political rivalries and romance of Queen Elizabeth II's reign.",
  },
  {
    name: "The Queen's Gambit",
    year: 2020,
    rating: 8.6,
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlIz69cTZs4XWP56J3GJ5Z5u1uCVvhxMHrQA&s",
    description:
      "Orphaned at the age of nine, Beth Harmon discovers and masters the game of chess.",
  },
  {
    name: "Lucifer",
    year: 2016,
    rating: 8.1,
    poster:
      "https://m.media-amazon.com/images/M/MV5BYzMwNzI3MWItZTIzYi00YjkxLThhOWQtYmUwYjg4NWM0ZWI1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "Lucifer Morningstar abandons Hell for Los Angeles where he runs a nightclub and becomes a consultant to the LAPD.",
  },
  {
    name: "Narcos",
    year: 2015,
    rating: 8.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzQwOTcwMzIwN15BMl5BanBnXkFtZTgwMjYxMTA0NjE@._V1_FMjpg_UX1000_.jpg",
    description:
      "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar.",
  },
  {
    name: "The Flash",
    year: 2014,
    rating: 7.6,
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxVfTawo-L7DvXsNAUYm9z9R-qHVCwgYVYyg&s",
    description:
      "Barry Allen becomes the fastest man alive after a lightning strike grants him super speed.",
  },
  {
    name: "Squid Game",
    year: 2021,
    rating: 8.0,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDMxNTYzYTAtYTJkMy00YTA4LTk5NzYtNzFhOTIxZTRmOTkyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "Hundreds of cash-strapped players accept a strange invitation to compete in children's games for a tempting prize.",
  },

  {
    name: "Aquaman",
    year: 2018,
    rating: 6.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_.jpg",
    description:
      "Arthur Curry, the human-born heir to the underwater kingdom of Atlantis, goes on a quest to prevent a war.",
  },
  {
    name: "Avengers: Endgame",
    year: 2019,
    rating: 8.4,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_FMjpg_UX1000_.jpg",
    description:
      "The Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
  },
  {
    name: "The Big Bang Theory",
    year: 2007,
    rating: 8.1,
    poster:
      "https://m.media-amazon.com/images/M/MV5BZjgzY2QyNzItNDhhYi00ZWIwLWFjN2UtZDJkN2MxYWNjMmJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description:
      "A woman moves into an apartment across the hall from two brilliant physicists and shows them how little they know about life.",
  },
];

export default movieDB;
