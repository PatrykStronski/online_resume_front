<template>
  <h2> Welcome </h2>
  <div class="about-container">
    <div class="about">

      <h3> Introduction </h3>
      My name is Patryk Stronski and I am a developer, working with NodeJS. I was born in 1998 and have started coding when I was 12 years old. 
      Originally from small polish city called Kielce, lived in several places in the world, leading a life of digital nomad.

      <h3> My story </h3>
      <p>
        I was born in 1998 in Kielce as an only child. I was a good student at school, taking part in many competitions, especially from Information Technology and Physics.
        After graduating from school, I moved permanently to Wroclaw to study Computer Science in English. The studies I finished with GPA 4.5. My bachelor's work was an application
        solving word sense disambiguation task for Polish and English languages. I wrote my bachelor's thesis in Python. I used plWordNet and Princeton Wordnet. For storing the wordnets, I used Neo4J.
        In Poland I started my career as developer, working for Nokia and Softserve as Javascript programmer.
      </p>

      <p>
        In 2021 I left Wroclaw to study and work in Saint Petersburg, Russian Federation. There I have stayed till March 2022. Afterwards, I found a job in Espoo, Finland. There I have work for around 2 years for CujoAI.
        During my life abroad I have learned a lot about different cultures and work approaches of different people. Thanks to my language skils I managed to get to know
        a lot of different people. Now I havemoved to Tashkent, Uzbekistan, embarking on new endeavors.
      </p>

      <h3> My peronality </h3>
      <p> 
        I am a hard-working and target-aimed type of person. All of my achievements were the outcome of hard work that I put in order to gain what I have already gained,
        and what I will gain in the future. This, and my life experiences made me strong in spirit. On top of that, I am positive and I like speaking to people.
        I am very sociable and open. I am also very tolerant, as I find that building fences is the worst thing ever. In brief, I love people ad life. I am also vegetarian,
        as I love animals and nature.
      </p>

      <h3> Hobbies </h3>
      <p>
          I am a type of "nerd" who likes science and devouring knowledge, as science is one of the most imporant things in my life. Getting new knowledge is quenching my thirst
          for understanding. On top of that I love music, and I listen to a wide spectrum of different generes, from hip-hop to heavy metal, however my favourite is rock in different forms.
          I also play guitar a little bit, study music theory in my free time too. From sports, I love cycling. 
      </p>

    </div>
    <div class="about">
    <img src="../assets/MeTallin.jpg" als="<photo>" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about-container {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.about-container img {
  width: 250px;
  height: 200px;
  border-radius: 5px;
}

.about {
  display: inline-flex;
  flex-direction: column;
  margin: 10px;
}
</style>
