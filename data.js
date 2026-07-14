

const portfolioData = {

  /* ═══════════════════════════════════════════════════════════════════════
     EDIT HERE: Student personal information
  ═══════════════════════════════════════════════════════════════════════ */
  personal: {
    name: "Chua Tien Long Dylan (Random) ",
    tagline: "Musician • Creator • Programmer",
    profileImage: "Pictures/Joey.jpeg",
    about: [
      "Hi. My name is Dylan, obviously enough from the start of this portfolio. Online friends know me as Random. I am a drummer and self taught composer who makes songs for his friends.",
      "Music is something I turn to for basically anything ever since I was a kid. Even playing video games, I look out more for the music than the actual gameplay, which I why I am a big fan of rhythm games, which have a very big connection to music. ",
      "If it wasn't obvious enough, I love music and I hope for nothing more than to be a professional performer and composer. So here's every reason why I am a decent musician."
    ]
  },

  /* ═══════════════════════════════════════════════════════════════════════
     EDIT HERE: Add skills
  ═══════════════════════════════════════════════════════════════════════ */
  skills: [
    {
      icon: "🥁",
      name: "Drums",
      description: "I am currently Grade 6 in Drums and have gone to two contests, unfortunately only managing to get two participation awards, losing to a guy playing the drums with an IKEA bag on his head. Embarrassing."
    },
    {
      icon: "🎸",
      name: "Guitar",
      description: "I play an acoustic guitar, which I am Grade 5 in. Other than that, not really any notable achievements for this instrument. "
    },
    {
      icon: "🎤",
      name: "Vocals",
      description: "I am too shy to sing in front of friends, however I have sung quite a few songs in karaoke sessions, ironically, with friends."
    },
    {
      icon: "🎧",
      name: "Music Production",
      description: "I am a self taught producer with almost no knowledge in how it's actually done. Though I have gained some experience creating soundtracks for friends. "
    },
    {
      icon: "🏐",
      name: "Volleyball",
      description: "I was benchwarmer and spot filler for my volleyball team before I inevitably got kicked out for a better choice in Secondary 3. Needless to say, not a fan of volleyball."
    }
  ],

  /* ═══════════════════════════════════════════════════════════════════════
     EDIT HERE: Add achievements
     Add achievement photos to images/achievements/
     Add certificate file paths to images/certificates/
  ═══════════════════════════════════════════════════════════════════════ */
  achievements: [
    {
      icon: "🥁",
      title: "Drum Competition Finals",
      category: "Music",
      date: "[Date Here]",
      organisation: "[Organisation Name Here]",
      description: "[Achievement Description Here]",
      reflection: "[Insert Reflection Here]",
      learningOutcome: "[What you learned from this experience]",
      imagePath: "images/achievements/achievement-1.png", // EDIT HERE: Add achievement photo path
      certificatePath: "images/certificates/certificate-1.pdf" // EDIT HERE: Add certificate file path
    },
    {
      icon: "🏐",
      title: "Volleyball C-Division Participation",
      category: "Sports",
      date: "2024",
      organisation: "Pasir Ris Crest Secondary School",
      description: "Managed to skip three exams and multiple hours worth of lessons by going to the competitions. However, we got steamrolled and lost all our matches. ",
      reflection: "I didn't reallly do much during the season. However, I do wish I encouraged my teammates more. Instead, I sat back and chose to do nothing.",
      learningOutcome: "I learnt three things. One, support is always a crucial factor in anything, especially so with a team. Two, my school isn't good at volleyball. Three, you win some, you lose some. Or in this case, you win none, you lose all.",
      imagePath: "Nil.", // EDIT HERE: Add achievement photo path
      certificatePath: "Nil. We lost all our matches. What did you expect." // EDIT HERE: Add certificate file path
    }
    // Add more achievements as needed following the same structure
  ],

  /* ═══════════════════════════════════════════════════════════════════════
     EDIT HERE: Add projects
     Add project cover images to images/projects/
  ═══════════════════════════════════════════════════════════════════════ */
  projects: [
    {
      title: "Breakneck Shopping Spree V2",
      category: "Oxymoron OST",
      problem: "Made this for a friend who is developing a roblox game, Oxymoron. This would be the main shop theme.",
      solution: "My friend wanted it to ideally be in the Breakcore genre. However, coming up with a melody at 200 BPM was hard. So, I slowed it down and made a melody before speeding it back up again, which turned out pretty well. ",
      myRole: "Composer, Arranger, Producer",
      technologiesUsed: "Bandlab",
      journey: "It took quite a bit of revision before I landed on something that both my friend and I liked. I'm happy to say it turned out pretty well. ",
      outcome: "A short but loopable song, fitting of a shop theme. ",
      lessonsLearned: "This song, or rather it's predecessor, V1, helped me learn that if you can't come up with something, slow down and don't jump the gun. The original was so janky and overall poorly produced, because I forced a melody into it. ",
      imagePath: "Pictures/Screenshot 2026-06-14 172414.png", // EDIT HERE: Add project image path
      videoLink: "Music/Breakneck_Shopping_Spree_V2_Oxymoron_OST.mp3" // Optional: Add a link to a video or audio file
    },
    {
      title: "Family Time",
      category: "My Beloved Messenger OST",
      problem: "Another soundtrack, this time for a different friend, working on a short animated film (Spoilers ahead).",
      solution: "She wanted something warm and cozy because this song was for a cotttage scene where the cast is getting a break from everything. A vast contrast to the song before, but unlike BSS, this song was smooth sailing.",
      myRole: "Main Composer, Arranger, Producer",
      technologiesUsed: "Bandlab",
      journey: "Not much to say, the production of this song was actually quite smooth sailing, mainly minor tweaks here and there, but generally no song breaking issues. ",
      outcome: "A friendly, calm cottage theme.",
      lessonsLearned: "Mainly accepting feedback can elevate a song to even greater heights.",
      imagePath: "Pictures/Screenshot 2026-06-14 172414.png",
      videoLink: "Music/Family_Time.mp3"
    },
    {
      title: "Falling Stars",
      category: "Oxymoron OST",
      problem: "Another song for my the Oxymoron soundtrack, with the same friend as the first song.",
      solution: "This song is for the same shop, but for a different scene. If it is raining when you enter the shop at night, this theme will override BSS. This time, my friend wanted a chill vibe, along the lines of Lo-fi music. This was the final revision of my very first song commission, and I am glad that I managed to do it justice. ",
      myRole: "Composer, Arranger, Producer",
      technologiesUsed: "Bandlab",
      journey: "This was my very first song commission, as well as the first song I would do outside of exams. I am glad that I managed to revise it to something I can be proud of. ",
      outcome: "A relaxing, tranquil shop theme that only plays when it rains at night. ",
      lessonsLearned: "Practice makes perfect. I came back to revising this song after I had done more projects, so my experience definitely helped with this song. ",
      imagePath: "Pictures/Screenshot 2026-06-14 172414.png",
      videoLink: "Music/Falling_Stars_Oxymoron_OST.mp3"
    },
    {
      title: "Venturing Out",
      category: "My Beloved Messenger OST",
      problem: "Back to my friend with the animated film, this time she had much more of a vision for me when we worked on this song together.",
      solution: "This song would be for another scene in her animated film, this time our cast is exploring a forest before stumbling upon a portal, activating it and taking them to the next part of the film. Another song, different vibe. ",
      myRole: "Main composer, arranger, producer",
      technologiesUsed: "Bandlab",
      journey: "A big challenge of this song was actually staying away from the normal electronic instruments. Due to the forest setting for the song, my friend told me not to use any electronic instruments. Not having any modern instruments gave me an interesting challenge, but I pulled through in the end. ",
      outcome: "A calm, but grand theme for a mystical ancient forest.",
      lessonsLearned: "Each instrument has its own nuances. Electronic instruments need good placement, and in this case traditional instruments need good balancing and delicate writing to sound good. Work with the quirks of instruments, not against them. ",
      imagePath: "Pictures/Screenshot 2026-06-14 172414.png",
      videoLink: "Music/Venturing_Out.mp3"
    },
    {
      title: "Breaking News",
      category: "Music Composition",
      problem: "The only one of my projects that wasn't for a game or for an animation. This was a track made after a friend asked me to help her with the BGM of her homework.",
      solution: "She specifically asked for a full length, 4 minute song as she was going to edit it into a recorded video for her school project. In the end, I think it turned out great. ",
      myRole: "Main composer, arranger, producer",
      technologiesUsed: "Bandlab",
      journey: "However, after I had finished the first draft of the song without her saying a word, she spoke up as I was about to send the file that she didn't like it. Needless to say, I got pretty mad after she had me waste 4 HOURS on a song that she didn't even like. I had even asked her multiple times while letting her listen to the draft if she liked it, and she always answered with a fine or okay. After taking a break from music for about 2 weeks, I returned and created this version of the song, a totally different song from the original. This time, I had made sure to confirm that she liked my current progress before moving on.",
      outcome: "A cheerful, but not attention grabbing song. Perfect for the ambience of a teenage news broadcast. ",
      lessonsLearned: "I learnt about the significance of the effort real life musicians put into their songs. I had already burnt myself out after composing a minute and 30 seconds of the song. So, this is a testament to the dedication and effort real musicians put in to their craft",
      imagePath: "Pictures/Screenshot 2026-06-14 172414.png",
      videoLink: "Music/Breaking_News.mp3"
    }
  ],


  /* ═══════════════════════════════════════════════════════════════════════
     EDIT HERE: Add certifications
     Add certificate PDFs to images/certificates/
  ═══════════════════════════════════════════════════════════════════════ */
  certifications: [
    {
      title: "[Certificate Title Here]",
      issuer: "[Issuing Organisation Here]",
      date: "[Date Here]",
      filePath: "images/certificates/certificate-1.pdf" // EDIT HERE: Add certificate file path
    },
    {
      title: "[Certificate Title Here]",
      issuer: "[Issuing Organisation Here]",
      date: "[Date Here]",
      filePath: "images/certificates/certificate-2.pdf"
    }
  ]


};
