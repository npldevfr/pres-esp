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
    <NavigationItem to="#features">
      Fonctionnalités
    </NavigationItem>
  </Header>
  <Container>
    <div class="w-full flex items-center flex-col gap-2 text-center py-20">
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
        &nbsp;d'enseignement
      </h1>
      <p v-motion-fade-visible-once class="w-full text-stone-700 max-w-160">
        Gérez un campus, école, université, ou autre établissement d'enseignement avec une seule application.
      </p>
    </div>

    <br class="my-20">

    <Cards>
      <CardsCard
        title="Safety first"
        description="Sécurisez votre application avec des rôles, des permissions, et plus."
        icon="i-mdi-lock"
      />
      <CardsCard
        title="Plugins"
        description="Intégrez des plugins du marketplace pour inclure visioconférence, édition de documents en temps réel et autres dans votre application."
        icon="i-mdi-puzzle"
      />
      <CardsCard
        title="Personnalisable"
        description="Personnalisez votre application avec des thèmes, des couleurs, et plus."
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
        title="Auto-hébergement"
        description="Hébergez votre application sur votre propre serveur."
        icon="i-mdi-server"
      />
    </Cards>
  </Container>

  <Container class="bg-stone-50/90 ">
    <Category
      id="presentation"
      align="left"
      icon="i-mdi-information"
      title="Introduction"
    >
      &mdash; Nous sommes une plateforme cross-plateform facilitant l'accès aux outils éducatifs. Simplifiant la collaboration et les cours en ligne pour écoles et instituts, notre solution promeut l'éducation inclusive, offrant ressources variées et visio-conférences fluides pour un enseignement de qualité.
    </Category>

    <Category
      id="for-whom"
      title="Pour qui ?"
      icon="i-mdi-account-group"
      align="right"
    >
      &mdash; Notre plateforme est destinée aux écoles, universités, instituts, et autres établissements d'enseignement. Nous offrons une solution complète pour la gestion de votre établissement, incluant la gestion des étudiants, des professeurs, des cours, des devoirs, des examens, et plus.
    </Category>

    <Category />
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
