<script setup lang="ts">
</script>

<template>
  <Head>
    <Title> LearnForge &mdash; Une plateforme d'enseignement </Title>
  </Head>
  <Header>
    <NavigationItem to="/">
      Accueil
    </NavigationItem>
    <NavigationItem to="#presentation">
      Présentation
    </NavigationItem>
    <NavigationItem to="#vs-moodle">
      VS Moodle
    </NavigationItem>
    <NavigationItem to="#plugins">
      Plugins officiels
    </NavigationItem>
    <NavigationItem to="#pbs">
      PBS
    </NavigationItem>
  </Header>
  <Container>
    <div class="w-full flex items-center flex-col gap-2 text-center py-20">
      <Cta v-motion-fade-visible-once>
        <div class="i-material-symbols-how-to-vote" />
        Votez pour nous et rejoignez notre équipe !
      </Cta>
      <h1 v-motion-fade-visible-once class="w-full justify-center text-4xl font-bold text-center">
        Une&nbsp;<span
          class="inline-flex h-10 overflow-hidden"
        >
          <span class="animate-swap [--bg-size:400%]">
            <span class="bg-gradient-to-r from-primary to-primary flex text-transparent bg-clip-text">
              application
            </span>
            <span class="bg-gradient-to-r from-primary to-primary flex text-transparent bg-clip-text">
              plateforme
            </span>
          </span>
        </span>
        d'enseignement
      </h1>
      <p v-motion-fade-visible-once class="w-full text-stone-700 max-w-160">
        Une plateforme d'enseignement pour créer des exercices et examens pour vos étudiants.
      </p>
    </div>

    <br class="my-20">

    <Cards>
      <CardsCard
        title="Sécurité"
        description="Sécurisez vos exercices et examens avec des outils anti-triche."
        icon="i-mdi-lock"
      />
      <CardsCard
        title="Plugins"
        description="Intégrez des plugins du marketplace pour enrichir vos exercices et examens."
        icon="i-mdi-puzzle"
      />
      <CardsCard
        title="Personnalisable"
        description="Personnalisez des templates de cours pour créer des cours uniques."
        icon="i-mdi-palette"
      />
      <CardsCard
        title="Multi-langues"
        description="Traduisez votre application dans plusieurs langues."
        icon="i-mdi-translate"
      />
      <CardsCard
        title="Accessibilité et Inclusivité"
        description="Rendez votre application accessible et inclusive pour tout le monde."
        icon="i-mdi-access-point"
      />
      <CardsCard
        title="Contenu"
        description="Accédez à un marketplace de cours et de contenu pour améliorer vos exercices et examens."
        icon="i-mdi-book"
      />
    </Cards>
  </Container>

  <Container class="bg-stone-50/60 pb-20 border-b border-t">
    <Category
      id="presentation"
      align="right"
      icon="i-mdi-information"
      title="Introduction"
    >
      Nous sommes une application cross-plateforme innovante qui facilite l'accès aux outils éducatifs. Nous simplifions l'apprentissage et la collaboration, rendons les examens en ligne possibles et promouvons l'éducation inclusive partout.
    </Category>

    <Category
      title="Pour qui ?"
      icon="i-mdi-account-group"
      align="left"
    >
      L'application vise principalement les universités et les écoles, mais elle est ouverte à toute personne souhaitant l'utiliser pour divers usages. Grâce à son marketplace, elle offre la possibilité de trouver des ressources dans de nombreux domaines, qu'ils soient spécifiques ou généraux.
    </Category>
    <Category
      title="Pourquoi nous ?"
      icon="i-mdi-rocket"
      align="right"
    >
      En vous engageant dans notre projet, vous bénéficierez de l'opportunité d'enrichir le contenu, de soumettre des idées, de modifier des concepts, ou simplement de développer à votre rythme. Notre initiative est ouverte à tous, qu'il s'agisse d'<b>intelligence artificielle</b>, <b>devops</b> et bien plus encore. L'avantage de notre projet réside dans son potentiel infini, sans aucune limite à la créativité. Grâce à notre système de plugins, vous pourrez continuellement intégrer du nouveau contenu.
    </Category>
  </Container>
  <Container id="vs-moodle" class="py-20">
    <h2 class="text-4xl font-bold text-center mb-20">
      VS Moodle
    </h2>
    <Table :headers="['LearnForge', 'Moodle']">
      <template #header-learnforge>
        <Logo class="w-25" />
      </template>
      <template #header-moodle>
        <div class="i-devicon-moodle text-xl" />
        <small>(Moodle)</small>
      </template>

      <TableItem name="Sécurité" :rows="['yes', 'yes']" description="Sécurité des examens et cours." />
      <TableItem name="Multi-langues" :rows="['yes', 'yes']" description="Traduisez votre application dans plusieurs langues." />
      <TableItem name="Plugins" :rows="['yes', 'yes']" description="Intégration de plugins communautaires pour créer de nouvelles façons d'apprendre." />
      <TableItem name="Accessibilité et Inclusivité" :rows="['yes', 'yes']" description="Rendez votre application accessible et inclusive pour tout le monde." />
      <TableItem name="Anti-triche" :rows="['yes', 'Seulement en plugin']" description="Sécurisez vos examens avec des outils anti-triche." />
      <TableItem name="Cours par défaut" :rows="['yes', 'no']" description="Profitez de cours par défaut pour commencer à utiliser l'application sans avoir à créer de cours." />
      <TableItem name="UI Friendly" :rows="['yes', 'no']" description="Interface utilisateur simple et intuitive." />
      <TableItem name="Marketplace de cours & contenu" :rows="['yes', 'no']" description="Accédez à un marketplace de cours et de contenu pour enrichir votre application." />
    </Table>
  </Container>
  <Container id="plugins">
    <h2 class="text-4xl font-bold text-center mb-20">
      Idées de Plugins
    </h2>

    <PluginList>
      <Plugin
        title="Code"
        description="Intégrez des plugins de code pour créer des exercices de programmation."
        icon="i-mdi-code-braces"
      />
      <Plugin
        title="Mathématiques"
        description="Intégrez des plugins de mathématiques pour créer des exercices de mathématiques."
        icon="i-mdi-calculator"
      />
      <Plugin
        title="Quiz"
        description="Intégrez des plugins de quiz pour créer des exercices de quiz."
        icon="i-mdi-help-circle"
      />
      <Plugin
        title="Kahoot!"
        description="Créez des exercices type Kahoot! pour rendre vos cours plus interactifs."
        icon="i-mdi-gamepad-variant"
      />
    </PluginList>
  </Container>
  <Container id="pbs" class="pb-100">
    <h2 class="text-4xl font-bold text-center mb-20">
      PBS (Product Breakdown Structure)
    </h2>
    <img src="../public/pbs.png" alt="Product Breakdown Structure" class="w-full">
  </Container>
</template>

<style>
.animate-swap {
  animation: swap 5s ease-in-out infinite;
}

@keyframes swap {
  0% {
    transform: translateY(0);
  }
  5% {
    transform: translateY(-100%);
  }
  50% {
    transform: translateY(-100%);
  }
  55% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
