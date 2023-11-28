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

  <Container class="bg-stone-50/60 pb-20 border-b border-t">
    <Category
      id="presentation"
      align="right"
      icon="i-mdi-information"
      title="Introduction"
    >
      Nous sommes une application cross-plateform facilitant l'accès aux outils éducatifs. Simplifiant la collaboration et les cours en ligne pour écoles et instituts, notre solution promeut l'éducation inclusive, offrant ressources variées et visio-conférences fluides pour un enseignement de qualité.
    </Category>

    <Category
      title="Pour qui ?"
      icon="i-mdi-account-group"
      align="left"
    >
      Notre plateforme est destinée aux écoles, universités, instituts, et autres établissements d'enseignement. Nous offrons une solution complète pour la gestion de votre établissement, incluant la gestion des étudiants, des professeurs, des cours, des devoirs, des examens, et plus.
    </Category>
    <Category
      title="Pourquoi nous ?"
      icon="i-mdi-rocket"
      align="right"
    >
      En vous engageant dans notre projet, vous bénéficierez de l'opportunité d'enrichir le contenu, de soumettre des idées, de modifier des concepts, ou simplement de développer à votre rythme. Notre initiative est ouverte à tous, qu'il s'agisse d'intelligence artificielle, de développement opérationnel, et bien plus encore. L'avantage de notre projet réside dans son potentiel infini, sans aucune limite à la créativité. Grâce à notre système de plugins, vous pourrez continuellement intégrer du nouveau contenu.
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
      <TableItem name="Sécurité" :rows="['yes', 'yes']" description="Gestion des rôles, permissions, et plus." />
      <TableItem name="Plugins" :rows="['yes', 'yes']" description="Intégration de plugins officiels ou communautaires." />
      <TableItem name="Auto-hébergement" :rows="['yes', 'yes']" description="Hébergez votre application sur votre propre serveur." />
      <TableItem name="Personnalisable" :rows="['yes', 'partial']" description="Personnalisez votre application avec des thèmes, des couleurs, et plus." />
      <TableItem name="Multi-langues" :rows="['yes', 'partial']" description="Traduisez votre application dans plusieurs langues." />
      <TableItem name="UI friendly" :rows="['yes', 'no']" description="Interface utilisateur moderne et intuitive." />
      <TableItem name="Accessibilité et Inclusivité" :rows="['yes', 'no']" description="Normes ARIA, A11Y." />
      <TableItem name="SDK & Librairie UI intégrés" :rows="['yes', 'no']" description="Bibliothèque UI et SDK pour développer des plugins facilement." />
      <TableItem name="Performances" :rows="['yes', 'no']" description="Application rapide et performante même avec des plugins." />
      <TableItem name="Creation de plugins simplifiée" :rows="['yes', 'no']" description="Créez des plugins facilement avec notre SDK." />
    </Table>
  </Container>
  <Container id="pbs" class="pb-100">
    <h2 class="text-4xl font-bold text-center mb-20">
      PBS (Product Breakdown Structure)
    </h2>
    <PbsZone>
      <PbsItem
        name="Outils de Collaboration"
        :children="[
          {
            name: 'Espaces de Travail Collaboratifs',
          },
          {
            name: 'Partage de Contenu Simplifié',
          },
          {
            name: 'Intégration de Plugins Communautaires',
          },
        ]"
      />
      <PbsItem
        name="Cours en Ligne et Formation"
        :children="[
          {
            name: 'Cours Interactifs',
          },
          {
            name: 'Formation pour les Enseignants',
          },
          {
            name: 'Accès à des Outils Pédagogiques Externes',
          },
        ]"
      />
      <PbsItem
        name="Visioconférences Éducatives"
        :children="[
          {
            name: 'Salles de Classe Virtuelles',
          },
          {
            name: 'Conférences Invités et Experts',
          },
          {
            name: 'Extensions pour des Fonctionnalités Personnalisées',
          },
        ]
        "
      />
      <PbsItem
        name="Accessibilité et Inclusivité"
        :children="[
          {
            name: 'Ressources Diversifiées',
          },
          {
            name: 'Adaptabilité aux Besoins Spécifiques',
          },
          {
            name: 'Contributions de la Communauté pour la Diversité des Ressources',
          },
        ]"
      />
      <PbsItem
        name="Support Technique et Formation Continue"
        :children="[
          {
            name: 'Assistance Technique ',
          },
          {
            name: 'Ressources de Formation Continue',
          },
        ]"
      />
    </PbsZone>
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
