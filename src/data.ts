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
        image: "/movies/the-dark-knight.jpeg",
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
          { id: "joker", title: "Joker", image: "/movies/joker.jpeg" },
          { id: "batman-begins", title: "Batman Begins", image: "/movies/batman-begins.jpeg" }
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
        image: "/movies/toy-story-4.jpeg",
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
          { id: "toy-story-3", title: "Toy Story 3", image: "/movies/toy-story-3.jpg" },
          { id: "finding-nemo", title: "Finding Nemo", image: "/movies/finding-nemo.jpg" }
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
        image: "/movies/saving-private-ryan.jpg",
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
          { id: "hacksaw-ridge", title: "Hacksaw Ridge", image: "/movies/hacksaw-ridge.jpg" }
        ]
      },
      {
        id: "la-la-land",
        title: "La La Land",
        description: "A jazz musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
        image: "/movies/la-la-land.jpg",
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
          { id: "the-greatest-showman", title: "The Greatest Showman", image: "/movies/greatest-showman.jpg" }
        ]
      },
      {
        id: "grand-budapest-hotel",
        title: "The Grand Budapest Hotel",
        description: "A writer encounters the owner of an aging high-class hotel and learns the story of the hotel's glory days.",
        image: "/movies/grand-budapest-hotel.jpg",
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
          { id: "moonrise-kingdom", title: "Moonrise Kingdom", image: "/movies/moonrise-kingdom.jpg" },
          { id: "the-french-dispatch", title: "The French Dispatch", image: "/movies/french-dispatch.jpg" }
        ]
      },
      {
        id: "planet-earth-2",
        title: "Planet Earth II",
        description: "David Attenborough returns to narrate this stunning nature documentary that explores the world's most iconic landscapes and wildlife.",
        image: "/movies/planet-earth-2.jpg",
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
          { id: "blue-planet-2", title: "Blue Planet II", image: "/movies/blue-planet-2.jpg" },
          { id: "our-planet", title: "Our Planet", image: "/movies/our-planet.jpg" }
        ]
      },
      {
        id: "lord-of-the-rings",
        title: "The Lord of the Rings: The Fellowship of the Ring",
        description: "A young hobbit, Frodo, sets out on a perilous quest to destroy the One Ring and save Middle-earth from the Dark Lord Sauron.",
        image: "/movies/lord-of-the-rings.jpg",
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
          { id: "lord-of-the-rings-2", title: "The Lord of the Rings: The Fellowship of the Ring", image: "/movies/lord-of-the-rings-2.jpeg" },
          { id: "lord-of-the-rings-3", title: "The Lord of the Rings: The Return of the King", image: "/movies/lord-of-the-rings-3.jpg" }
        ]
      },
      {
        id: "joker",
        title: "Joker",
        description: "A mentally troubled comedian embarks on a downward spiral that leads to the creation of an iconic villain.",
        image: "/movies/joker.jpeg",
        trailerUrl: "https://www.youtube.com/watch?v=zAGVQLHvwOY",
        rating: 8.4,
        year: 2019,
        duration: "2h 2min",
        director: "Todd Phillips",
        cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
        categories: ["Crime", "Drama", "Thriller"],
        maturityRating: "R",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "the-dark-knight", title: "The Dark Knight", image: "/movies/the-dark-knight.jpeg" },
          { id: "batman-begins", title: "Taxi Driver", image: "/movies/batman-begins.jpeg" }
        ]
      },
      {
        id: "tenet",
        title: "Tenet",
        description: "Armed with only one word, a CIA agent must fight for the survival of the world as he journeys through a twilight world of international espionage on a mission that unfolds beyond real time.",
        image: "/movies/tenet.jpeg",
        trailerUrl: "https://www.youtube.com/watch?v=LdOM0x0XDMo",
        rating: 7.3,
        year: 2020,
        duration: "2h 30min",
        director: "Christopher Nolan",
        cast: ["John David Washington", "Robert Pattinson", "Elizabeth Debicki"],
        categories: ["Action", "Sci-Fi", "Thriller"],
        maturityRating: "PG-13",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "inception", title: "Inception", image: "/movies/inception.jpg" },
          { id: "interstellar", title: "Interstellar", image: "/movies/interstellar.jpg" }
        ]
      },
      {
        id: "batman-begins",
        title: "Batman Begins",
        description: "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
        image: "/movies/batman-begins.jpeg",
        trailerUrl: "https://www.youtube.com/watch?v=neY2xVmOfUM",
        rating: 8.2,
        year: 2005,
        duration: "2h 20min",
        director: "Christopher Nolan",
        cast: ["Christian Bale", "Michael Caine", "Liam Neeson"],
        categories: ["Action", "Crime", "Drama"],
        maturityRating: "PG-13",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "the-dark-knight", title: "The Dark Knight", image: "/movies/the-dark-knight.jpg" },
          { id: "the-dark-knight-rises", title: "The Dark Knight Rises", image: "/movies/the-dark-knight-rises.jpg" }
        ]
      },
      {
        id: "gravity",
        title: "Gravity",
        description: "Two astronauts work together to survive after an accident leaves them stranded in space.",
        image: "/movies/gravity.jpeg",
        trailerUrl: "https://www.youtube.com/watch?v=OiTiKOy59o4",
        rating: 7.7,
        year: 2013,
        duration: "1h 31min",
        director: "Alfonso Cuarón",
        cast: ["Sandra Bullock", "George Clooney", "Ed Harris"],
        categories: ["Drama", "Sci-Fi", "Thriller"],
        maturityRating: "PG-13",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "interstellar", title: "Interstellar", image: "/movies/interstellar.jpg" },
          { id: "the-martian", title: "The Martian", image: "/movies/the-martian.jpg" }
        ]
      },
      {
        id: "arrival",
        title: "Arrival",
        description: "A linguist works with the military to communicate with alien lifeforms after they arrive on Earth.",
        image: "/movies/arrival.jpeg",
        trailerUrl: "https://www.youtube.com/watch?v=tFMo3UJ4B4g",
        rating: 7.9,
        year: 2016,
        duration: "1h 56min",
        director: "Denis Villeneuve",
        cast: ["Amy Adams", "Jeremy Renner", "Forest Whitaker"],
        categories: ["Drama", "Sci-Fi", "Mystery"],
        maturityRating: "PG-13",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "interstellar", title: "Interstellar", image: "/movies/interstellar.jpg" },
          { id: "contact", title: "Contact", image: "/movies/contact.jpg" }
        ]
      },
      {
        id: "toy-story-3",
        title: "Toy Story 3",
        description: "Woody, Buzz, and the rest of their toy friends face an uncertain future as their owner prepares to leave for college.",
        image: "/movies/toy-story-3.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=JcpWXaA2qeg",
        rating: 8.3,
        year: 2010,
        duration: "1h 43min",
        director: "Lee Unkrich",
        cast: ["Tom Hanks", "Tim Allen", "Joan Cusack"],
        categories: ["Animation", "Adventure", "Comedy"],
        maturityRating: "G",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "toy-story-4", title: "Toy Story 4", image: "/movies/toy-story-4.jpg" },
          { id: "up", title: "Up", image: "/movies/up.jpg" }
        ]
      },
      {
        id: "finding-nemo",
        title: "Finding Nemo",
        description: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
        image: "/movies/finding-nemo.jpeg",
        trailerUrl: "https://www.youtube.com/watch?v=2zLkasScy7A",
        rating: 8.2,
        year: 2003,
        duration: "1h 40min",
        director: "Andrew Stanton",
        cast: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
        categories: ["Animation", "Adventure", "Comedy"],
        maturityRating: "G",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "finding-dory", title: "Finding Dory", image: "/movies/finding-dory.jpg" },
          { id: "the-lion-king", title: "The Lion King", image: "/movies/the-lion-king.jpg" }
        ]
      },
      {
        id: "insidious",
        title: "Insidious",
        description: "A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further.",
        image: "/movies/insidious.jpeg",
        trailerUrl: "https://www.youtube.com/watch?v=zuZnRUcoWos",
        rating: 6.8,
        year: 2010,
        duration: "1h 43min",
        director: "James Wan",
        cast: ["Patrick Wilson", "Rose Byrne", "Ty Simpkins"],
        categories: ["Horror", "Mystery", "Thriller"],
        maturityRating: "PG-13",
        quality: ["4K"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "the-conjuring", title: "The Conjuring", image: "/movies/the-conjuring.jpg" },
          { id: "sinister", title: "Sinister", image: "/movies/sinister.jpg" }
        ]
      },
      {
        id: "ring",
        title: "The Ring",
        description: "A journalist must investigate a mysterious videotape which seems to cause the death of anyone one week after viewing it.",
        image: "/movies/ring.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=TuH5FaUpFm4",
        rating: 7.1,
        year: 2002,
        duration: "1h 55min",
        director: "Gore Verbinski",
        cast: ["Naomi Watts", "Martin Henderson", "David Dorfman"],
        categories: ["Horror", "Mystery"],
        maturityRating: "PG-13",
        quality: ["HD"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "the-grudge", title: "The Grudge", image: "/movies/the-grudge.jpg" },
          { id: "dark-water", title: "Dark Water", image: "/movies/dark-water.jpg" }
        ]
      },
      {
        id: "dunkirk",
        title: "Dunkirk",
        description: "Allied soldiers from Belgium, the British Empire, and France try to evacuate from the beaches of Dunkirk during a brutal World War II battle.",
        image: "/movies/dunkirk.jpeg",
        trailerUrl: "https://www.youtube.com/watch?v=F-eMt3SrfFU",
        rating: 7.8,
        year: 2017,
        duration: "1h 46min",
        director: "Christopher Nolan",
        cast: ["Fionn Whitehead", "Barry Keoghan", "Mark Rylance"],
        categories: ["Action", "Drama", "History"],
        maturityRating: "PG-13",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "1917", title: "1917", image: "/movies/1917.jpg" },
          { id: "saving-private-ryan", title: "Saving Private Ryan", image: "/movies/saving-private-ryan.jpg" }
        ]
      },
      {
        id: "our-planet",
        title: "Our Planet",
        description: "Documentary series focusing on the breadth of the diversity of habitats around the world, from the remote Arctic wilderness to the mysterious deep oceans.",
        image: "/movies/our-planet.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=aETNYyrqNYE",
        rating: 9.3,
        year: 2019,
        duration: "8 episodes",
        director: "David Attenborough (Narrator)",
        cast: ["David Attenborough"],
        categories: ["Documentary", "Nature"],
        maturityRating: "PG",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "planet-earth-2", title: "Planet Earth II", image: "/movies/planet-earth-2.jpg" },
          { id: "blue-planet-2", title: "Blue Planet II", image: "/movies/blue-planet-2.jpg" }
        ]
      },
      {
        id: "hacksaw-ridge",
        title: "Hacksaw Ridge",
        description: "The true story of Desmond Doss, a medic who served during World War II and refused to carry a weapon but saved many lives.",
        image: "/movies/hacksaw-ridge.jpeg",
        trailerUrl: "https://www.youtube.com/watch?v=s2-1hz1juBI",
        rating: 8.1,
        year: 2016,
        duration: "2h 19min",
        director: "Mel Gibson",
        cast: ["Andrew Garfield", "Sam Worthington", "Luke Bracey"],
        categories: ["Biography", "Drama", "History"],
        maturityRating: "R",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "saving-private-ryan", title: "Saving Private Ryan", image: "/movies/saving-private-ryan.jpg" },
          { id: "dunkirk", title: "Dunkirk", image: "/movies/dunkirk.jpg" }
        ]
      },
      {
        id: "whiplash",
        title: "Whiplash",
        description: "A young drummer enrolls at a prestigious music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize his student's potential.",
        image: "/movies/whiplash.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=7d_jQycdQGo",
        rating: 8.5,
        year: 2014,
        duration: "1h 47min",
        director: "Damien Chazelle",
        cast: ["Miles Teller", "J.K. Simmons", "Paul Reiser"],
        categories: ["Drama", "Music"],
        maturityRating: "R",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "black-swan", title: "Black Swan", image: "/movies/black-swan.jpg" },
          { id: "la-la-land", title: "La La Land", image: "/movies/la-la-land.jpg" }
        ]
      },
      {
        id: "the-greatest-showman",
        title: "The Greatest Showman",
        description: "Celebrates the birth of show business and tells the story of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.",
        image: "/movies/the-greatest-showman.jpeg",
        trailerUrl: "https://www.youtube.com/watch?v=AXCTMGYUg9A",
        rating: 7.5,
        year: 2017,
        duration: "1h 45min",
        director: "Michael Gracey",
        cast: ["Hugh Jackman", "Zac Efron", "Michelle Williams"],
        categories: ["Biography", "Drama", "Musical"],
        maturityRating: "PG",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "la-la-land", title: "La La Land", image: "/movies/la-la-land.jpg" },
          { id: "les-miserables", title: "Les Misérables", image: "/movies/les-miserables.jpg" }
        ]
      },
      {
        id: "moonrise-kingdom",
        title: "Moonrise Kingdom",
        description: "A pair of young lovers flee their New England town, causing a local search party to fan out and find them.",
        image: "/movies/moonrise-kingdom.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=7N8wkVA4_8s",
        rating: 7.8,
        year: 2012,
        duration: "1h 34min",
        director: "Wes Anderson",
        cast: ["Jared Gilman", "Kara Hayward", "Bruce Willis"],
        categories: ["Comedy", "Drama", "Romance"],
        maturityRating: "PG-13",
        quality: ["HD"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "the-grand-budapest-hotel", title: "The Grand Budapest Hotel", image: "/movies/the-grand-budapest-hotel.jpg" },
          { id: "the-french-dispatch", title: "The French Dispatch", image: "/movies/the-french-dispatch.jpg" }
        ]
      },
      {
        id: "the-french-dispatch",
        title: "The French Dispatch",
        description: "A love letter to journalists set in an outpost of an American newspaper in a fictional 20th-century French city.",
        image: "/movies/the-french-dispatch.jpeg",
        trailerUrl: "https://www.youtube.com/watch?v=TcPk2p0Zaw4",
        rating: 7.1,
        year: 2021,
        duration: "1h 48min",
        director: "Wes Anderson",
        cast: ["Benicio del Toro", "Adrien Brody", "Tilda Swinton"],
        categories: ["Comedy", "Drama", "Romance"],
        maturityRating: "R",
        quality: ["4K"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "moonrise-kingdom", title: "Moonrise Kingdom", image: "/movies/moonrise-kingdom.jpg" },
          { id: "the-grand-budapest-hotel", title: "The Grand Budapest Hotel", image: "/movies/the-grand-budapest-hotel.jpg" }
        ]
      },
      {
        id: "lord-of-the-rings-2",
        title: "The Lord of the Rings: The Two Towers",
        description: "While Frodo and Sam edge closer to Mordor with the help of Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his legions of Isengard.",
        image: "/movies/lord-of-the-rings-2.jpeg",
        trailerUrl: "https://www.youtube.com/watch?v=nuTU5XcZTLA",
        rating: 8.8,
        year: 2002,
        duration: "2h 59min",
        director: "Peter Jackson",
        cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
        categories: ["Adventure", "Drama", "Fantasy"],
        maturityRating: "PG-13",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "lord-of-the-rings", title: "The Lord of the Rings: The Fellowship of the Ring", image: "/movies/lord-of-the-rings.jpg" },
          { id: "lord-of-the-rings-3", title: "The Return of the King", image: "/movies/lord-of-the-rings-3.jpg" }
        ]
      },
      {
        id: "lord-of-the-rings-3",
        title: "The Lord of the Rings: The Return of the King",
        description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        image: "/movies/lord-of-the-rings-3.jpg",
        trailerUrl: "https://www.youtube.com/watch?v=r5X-hFf6Bwo",
        rating: 9.0,
        year: 2003,
        duration: "3h 21min",
        director: "Peter Jackson",
        cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
        categories: ["Adventure", "Drama", "Fantasy"],
        maturityRating: "PG-13",
        quality: ["4K", "HDR"],
        language: "English",
        subtitles: ["English", "Spanish", "French"],
        relatedContent: [
          { id: "lord-of-the-rings", title: "The Lord of the Rings: The Fellowship of the Ring", image: "/movies/lord-of-the-rings.jpg" },
          { id: "lord-of-the-rings-2", title: "The Lord of the Rings: The Two Towers", image: "/movies/lord-of-the-rings-2.jpg" }
        ]
      }
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
        image: "/tv_shows/breaking-bad.jpg",
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
        image: "/tv_shows/stranger-things.jpg",
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
        image: "/tv_shows/the-crown.jpg",
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
        image: "/tv_shows/rick-and-morty.jpg",
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
        id: "blue-planet-2",
        title: "Blue Planet II",
        description: "David Attenborough narrates this stunning documentary exploring the natural world beneath the oceans.",
        image: "/tv_shows/blue-planet-2.jpg",
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
        image: "/tv_shows/modern-family.jpeg",
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
        image: "/tv_shows/true-detective.jpg",
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