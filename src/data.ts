import { IMovieCardProps } from "./components/types";

const CONTENT_DATA: Record<string, IMovieCardProps[]> = {
  movies: [
    {
        id: "inception",
        title: "Inception",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        image: "/movies/inception.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
        rating: 8.8,
        year: 2010,
        duration: "2h 28min",
        director: "Christopher Nolan",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
        categories: ["Action", "Sci-Fi", "Thriller"],
        maturityRating: "PG-13",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "interstellar", title: "Interstellar", image: "/movies/interstellar.jpg" },
          { id: "tenet", title: "Tenet", image: "/movies/tenet.jpg" }
        ]
      },
      {
        id: "dark-knight",
        title: "The Dark Knight",
        description: "When the menace known as the Joker emerges, he creates chaos in Gotham, forcing Batman to confront his greatest challenge.",
        image: "/movies/the_dark_knight.jpeg",
        trailerUrl: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
        rating: 9.0,
        year: 2008,
        duration: "2h 32min",
        director: "Christopher Nolan",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        categories: ["Action", "Crime", "Drama"],
        maturityRating: "PG-13",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "joker", title: "Joker", image: "/movies/joker.jpg" },
          { id: "batman-begins", title: "Batman Begins", image: "/movies/batman_begins.jpg" }
        ]
      },
      {
        id: "interstellar",
        title: "Interstellar",
        description: "A team of explorers travel through a wormhole in space to ensure humanity's survival.",
        image: "/movies/interstellar.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
        rating: 8.7,
        year: 2014,
        duration: "2h 49min",
        director: "Christopher Nolan",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
        categories: ["Sci-Fi", "Adventure", "Drama"],
        maturityRating: "PG-13",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "gravity", title: "Gravity", image: "/movies/gravity.jpg" },
          { id: "arrival", title: "Arrival", image: "/movies/arrival.jpg" }
        ]
      },
      {
        id: "toy-story-4",
        title: "Toy Story 4",
        description: "When a new toy, Forky, joins Woody and the gang, a road trip reveals the world beyond their imagination.",
        image: "/movies/toy_story_4.jpeg",
        trailerUrl: "https://www.youtube.com/watch?v=wmiIUN-7qhE",
        rating: 7.8,
        year: 2019,
        duration: "1h 40min",
        director: "Josh Cooley",
        cast: ["Tom Hanks", "Tim Allen", "Annie Potts"],
        categories: ["Animation", "Family", "Adventure"],
        maturityRating: "G",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "toy-story-3", title: "Toy Story 3", image: "/movies/toy_story_3.jpg" },
          { id: "finding-nemo", title: "Finding Nemo", image: "/movies/finding_nemo.jpg" }
        ]
      },
      {
        id: "the-conjuring",
        title: "The Conjuring",
        description: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
        image: "/movies/conjuring.jpeg",
        trailerUrl: "https://www.youtube.com/watch?v=k10ETZ41q5o",
        rating: 7.5,
        year: 2013,
        duration: "1h 52min",
        director: "James Wan",
        cast: ["Vera Farmiga", "Patrick Wilson", "Ron Livingston"],
        categories: ["Horror", "Mystery", "Thriller"],
        maturityRating: "R",
        quality: ["HD"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "annabelle", title: "Annabelle", image: "/movies/annabelle.jpg" },
          { id: "insidious", title: "Insidious", image: "/movies/insidious.jpg" }
        ]
      },
      {
        id: "saving-private-ryan",
        title: "Saving Private Ryan",
        description: "During World War II, Captain Miller and his squad embark on a mission to find and bring home Private James Ryan.",
        image: "/movies/saving_private_ryan.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=zwhP5b4tD6g",
        rating: 8.6,
        year: 1998,
        duration: "2h 49min",
        director: "Steven Spielberg",
        cast: ["Tom Hanks", "Matt Damon", "Tom Sizemore"],
        categories: ["War", "Drama", "Action"],
        maturityRating: "R",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "dunkirk", title: "Dunkirk", image: "/movies/dunkirk.jpg" },
          { id: "hacksaw-ridge", title: "Hacksaw Ridge", image: "/movies/hacksaw_ridge.jpg" }
        ]
      },
      {
        id: "la-la-land",
        title: "La La Land",
        description: "A jazz musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
        image: "/movies/la_la_land.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=0pdqf4P9MB8",
        rating: 8.0,
        year: 2016,
        duration: "2h 8min",
        director: "Damien Chazelle",
        cast: ["Ryan Gosling", "Emma Stone", "John Legend"],
        categories: ["Romance", "Drama", "Comedy"],
        maturityRating: "PG-13",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "whiplash", title: "Whiplash", image: "/movies/whiplash.jpg" },
          { id: "the-greatest-showman", title: "The Greatest Showman", image: "/movies/greatest_showman.jpg" }
        ]
      },
      {
        id: "grand-budapest-hotel",
        title: "The Grand Budapest Hotel",
        description: "A writer encounters the owner of an aging high-class hotel and learns the story of the hotel's glory days.",
        image: "/movies/grand_budapest_hotel.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=1Fg5iWmQjwk",
        rating: 8.1,
        year: 2014,
        duration: "1h 39min",
        director: "Wes Anderson",
        cast: ["Ralph Fiennes", "Tony Revolori", "Adrien Brody"],
        categories: ["Comedy", "Adventure", "Crime"],
        maturityRating: "R",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "moonrise-kingdom", title: "Moonrise Kingdom", image: "/movies/moonrise_kingdom.jpg" },
          { id: "the-french-dispatch", title: "The French Dispatch", image: "/movies/french_dispatch.jpg" }
        ]
      },
      {
        id: "planet-earth-ii",
        title: "Planet Earth II",
        description: "David Attenborough returns to narrate this stunning nature documentary that explores the world's most iconic landscapes and wildlife.",
        image: "/movies/planet_earth_2.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=c8aFcHFu8QM",
        rating: 9.5,
        year: 2016,
        duration: "5h 50min",
        director: "David Attenborough",
        cast: ["David Attenborough (Narrator)"],
        categories: ["Documentary", "Family"],
        maturityRating: "G",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "blue-planet-ii", title: "Blue Planet II", image: "/movies/blue_planet_2.jpg" },
          { id: "our-planet", title: "Our Planet", image: "/movies/our_planet.jpg" }
        ]
      },
      {
        id: "lord-of-the-rings",
        title: "The Lord of the Rings: The Fellowship of the Ring",
        description: "A young hobbit, Frodo, sets out on a perilous quest to destroy the One Ring and save Middle-earth from the Dark Lord Sauron.",
        image: "/movies/lord_of_the_rings.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=V75dMMIW2B4",
        rating: 8.8,
        year: 2001,
        duration: "2h 58min",
        director: "Peter Jackson",
        cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
        categories: ["Fantasy", "Adventure", "Action"],
        maturityRating: "PG-13",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "lord-of-the-rings-2", title: "The Two Towers", image: "/movies/lotr_two_towers.jpg" },
          { id: "lord-of-the-rings-3", title: "The Return of the King", image: "/movies/lotr_return_of_the_king.jpg" }
        ]
      },
    // {
    //   title: "Inception",
    //   image: "/movies/inception.jpg",
    //   type: "movie",
    //   categories: ["Sci-Fi", "Action", "Thriller"],
    //   year: 2010,
    //   rating: 8.8
    // },
    // {
    //   title: "The Dark Knight",
    //   image: "/movies/the_dark_knight.jpeg",
    //   type: "movie",
    //   categories: ["Action", "Crime", "Drama"],
    //   year: 2008,
    //   rating: 9.0
    // },
    // {
    //   title: "Interstellar",
    //   image: "/movies/interstellar.jpg",
    //   type: "movie",
    //   categories: ["Sci-Fi", "Adventure", "Drama"],
    //   year: 2014,
    //   rating: 8.7
    // },
    // {
    //   title: "Toy Story 4",
    //   image: "/movies/toy_story_4.jpeg",
    //   type: "movie",
    //   categories: ["Animation", "Family", "Adventure"],
    //   year: 2019,
    //   rating: 7.8
    // },
    // {
    //   title: "The Conjuring",
    //   image: "/movies/conjuring.jpeg",
    //   type: "movie",
    //   categories: ["Horror", "Mystery", "Thriller"],
    //   year: 2013,
    //   rating: 7.5
    // },
    // {
    //   title: "Saving Private Ryan",
    //   image: "/movies/saving_private_ryan.jpg",
    //   type: "movie",
    //   categories: ["War", "Drama", "Action"],
    //   year: 1998,
    //   rating: 8.6
    // },
    // {
    //   title: "La La Land",
    //   image: "/movies/la_la_land.jpg",
    //   type: "movie",
    //   categories: ["Romance", "Drama", "Comedy"],
    //   year: 2016,
    //   rating: 8.0
    // },
    // {
    //   title: "The Grand Budapest Hotel",
    //   image: "/movies/grand_budapest_hotel.jpg",
    //   type: "movie",
    //   categories: ["Comedy", "Adventure", "Crime"],
    //   year: 2014,
    //   rating: 8.1
    // },
    // {
    //   title: "Planet Earth II",
    //   image: "/movies/planet_earth_2.jpg",
    //   type: "movie",
    //   categories: ["Documentary", "Family"],
    //   year: 2016,
    //   rating: 9.5
    // },
    // {
    //   title: "The Lord of the Rings",
    //   image: "/movies/lord_of_the_rings.jpg",
    //   type: "movie",
    //   categories: ["Fantasy", "Adventure", "Action"],
    //   year: 2001,
    //   rating: 8.8
    // }
  ],
  tvShows: [
    {
        id: "breaking-bad",
        title: "Breaking Bad",
        description: "A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his family's future.",
        image: "/tv_shows/breaking_bad.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=HhesaQXLuRY",
        rating: 9.5,
        year: 2008,
        seasons: 5,
        duration: "47min per episode",
        director: "Vince Gilligan",
        cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn"],
        categories: ["Crime", "Drama", "Thriller"],
        maturityRating: "TV-MA",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { episode: "S01E01", title: "Pilot" },
          { episode: "S02E12", title: "Phoenix" },
          { episode: "S05E14", title: "Ozymandias" }
        ]
      },
      {
        id: "stranger-things",
        title: "Stranger Things",
        description: "When a young boy disappears, his friends and family uncover a series of supernatural mysteries in their small town.",
        image: "/tv_shows/stranger_things.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=b9EkMc79ZSU",
        rating: 8.7,
        year: 2016,
        seasons: 4,
        duration: "50min per episode",
        director: "The Duffer Brothers",
        cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder"],
        categories: ["Drama", "Fantasy", "Horror"],
        maturityRating: "TV-14",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { episode: "S01E01", title: "The Vanishing of Will Byers" },
          { episode: "S03E08", title: "The Battle of Starcourt" },
          { episode: "S04E09", title: "The Piggyback" }
        ]
      },
      {
        id: "the-crown",
        title: "The Crown",
        description: "A chronicle of the reign of Queen Elizabeth II from the 1940s to modern times.",
        image: "/tv_shows/the_crown.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=JWtnJjn6ng0",
        rating: 8.7,
        year: 2016,
        seasons: 6,
        duration: "58min per episode",
        director: "Peter Morgan",
        cast: ["Olivia Colman", "Claire Foy", "Matt Smith"],
        categories: ["Drama", "History"],
        maturityRating: "TV-MA",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { episode: "S01E01", title: "Wolferton Splash" },
          { episode: "S02E10", title: "Mystery Man" },
          { episode: "S04E10", title: "War" }
        ]
      },
      {
        id: "rick-and-morty",
        title: "Rick and Morty",
        description: "A genius scientist and his grandson embark on dangerous and hilarious interdimensional adventures.",
        image: "/tv_shows/rick_and_morty.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=E8cI4Zz2q0A",
        rating: 9.2,
        year: 2013,
        seasons: 6,
        duration: "22min per episode",
        director: "Dan Harmon and Justin Roiland",
        cast: ["Justin Roiland", "Chris Parnell", "Spencer Grammer"],
        categories: ["Animation", "Comedy", "Adventure"],
        maturityRating: "TV-MA",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { episode: "S01E05", title: "Meeseeks and Destroy" },
          { episode: "S03E07", title: "The Ricklantis Mixup" },
          { episode: "S05E08", title: "Rickternal Friendshine of the Spotless Mort" }
        ]
      },
      {
        id: "blue-planet-ii",
        title: "Blue Planet II",
        description: "David Attenborough narrates this stunning documentary exploring the natural world beneath the oceans.",
        image: "/tv_shows/blue_planet_2.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=kAphgHhlteM",
        rating: 9.3,
        year: 2017,
        seasons: 1,
        duration: "50min per episode",
        director: "David Attenborough",
        cast: ["David Attenborough"],
        categories: ["Documentary", "Family"],
        maturityRating: "G",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { episode: "S01E01", title: "One Ocean" },
          { episode: "S01E03", title: "Coral Reefs" },
          { episode: "S01E07", title: "Our Blue Planet" }
        ]
      },
      {
        id: "the-witcher",
        title: "The Witcher",
        description: "A monster hunter struggles to find his place in a world where people are often more wicked than beasts.",
        image: "/tv_shows/witcher.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=tjujvMkqWe4",
        rating: 8.2,
        year: 2019,
        seasons: 3,
        duration: "60min per episode",
        director: "Lauren Schmidt Hissrich",
        cast: ["Henry Cavill", "Anya Chalotra", "Freya Allan"],
        categories: ["Fantasy", "Action", "Adventure"],
        maturityRating: "TV-MA",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { episode: "S01E04", title: "Of Banquets, Bastards and Burials" },
          { episode: "S02E06", title: "Dear Friend" },
          { episode: "S03E08", title: "The Cost of Chaos" }
        ]
      },
      {
        id: "modern-family",
        title: "Modern Family",
        description: "A hilarious mockumentary-style sitcom following the lives of an extended family in Los Angeles.",
        image: "/tv_shows/modern_family.jpeg",
        trailerUrl: "https://www.youtube.com/watch?v=RF4pErmIpYY",
        rating: 8.4,
        year: 2009,
        seasons: 11,
        duration: "22min per episode",
        director: "Christopher Lloyd and Steven Levitan",
        cast: ["Ed O'Neill", "Sofía Vergara", "Ty Burrell"],
        categories: ["Comedy", "Family"],
        maturityRating: "TV-PG",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { episode: "S01E23", title: "Hawaii" },
          { episode: "S03E01", title: "Dude Ranch" },
          { episode: "S05E24", title: "The Wedding" }
        ]
      },
      {
        id: "true-detective",
        title: "True Detective",
        description: "Anthology crime series with each season focusing on a new investigation and characters.",
        image: "/tv_shows/true_detective.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=fVQUcaO4AvE",
        rating: 8.9,
        year: 2014,
        seasons: 4,
        duration: "55min per episode",
        director: "Nic Pizzolatto",
        cast: ["Matthew McConaughey", "Woody Harrelson", "Mahershala Ali"],
        categories: ["Crime", "Mystery", "Thriller"],
        maturityRating: "TV-MA",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { episode: "S01E04", title: "Who Goes There" },
          { episode: "S03E06", title: "Hunters in the Dark" },
          { episode: "S04E08", title: "Night Country" }
        ]
      }
    // {
    //   title: "Breaking Bad",
    //   image: "/tv_shows/breaking_bad.jpg",
    //   type: "tv",
    //   categories: ["Crime", "Drama", "Thriller"],
    //   year: 2008,
    //   rating: 9.5
    // },
    // {
    //   title: "Stranger Things",
    //   image: "/tv_shows/stranger_things.jpg",
    //   type: "tv",
    //   categories: ["Drama", "Fantasy", "Horror"],
    //   year: 2016,
    //   rating: 8.7
    // },
    // {
    //   title: "The Crown",
    //   image: "/tv_shows/the_crown.jpg",
    //   type: "tv",
    //   categories: ["Drama", "History"],
    //   year: 2016,
    //   rating: 8.7
    // },
    // {
    //   title: "Rick and Morty",
    //   image: "/tv_shows/rick_and_morty.jpg",
    //   type: "tv",
    //   categories: ["Animation", "Comedy", "Adventure"],
    //   year: 2013,
    //   rating: 9.2
    // },
    // {
    //   title: "Blue Planet II",
    //   image: "/tv_shows/blue_planet_2.jpg",
    //   type: "tv",
    //   categories: ["Documentary", "Family"],
    //   year: 2017,
    //   rating: 9.3
    // },
    // {
    //   title: "The Witcher",
    //   image: "/tv_shows/witcher.jpg",
    //   type: "tv",
    //   categories: ["Fantasy", "Action", "Adventure"],
    //   year: 2019,
    //   rating: 8.2
    // },
    // {
    //   title: "Modern Family",
    //   image: "/tv_shows/modern_family.jpeg",
    //   type: "tv",
    //   categories: ["Comedy", "Family"],
    //   year: 2009,
    //   rating: 8.4
    // },
    // {
    //   title: "True Detective",
    //   image: "/tv_shows/true_detective.jpg",
    //   type: "tv",
    //   categories: ["Crime", "Mystery", "Thriller"],
    //   year: 2014,
    //   rating: 8.9
    // }
  ]
};

export default CONTENT_DATA;