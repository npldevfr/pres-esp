<script setup lang="ts">
import Card from '~/components/Cards/Card.vue'
</script>

<template>
  <Header />
  <Container>
    <div class="w-full flex items-center flex-col gap-2 text-center py-20">
      <h1 v-motion-fade-visible-once class="flex justify-center text-4xl font-bold text-center">
        Une&nbsp;<div
          class="inline-flex h-10 overflow-hidden"
        >
          <div class="animate-swap [--bg-size:400%]">
            <div class="bg-gradient-to-r from-green-500 to-green-500 flex text-transparent bg-clip-text">
              application
            </div>
            <div class="bg-gradient-to-r from-green-500 to-green-500 flex text-transparent bg-clip-text">
              plateforme
            </div>
          </div>
        </div>
        &nbsp;d'enseignement
      </h1>
      <p v-motion-fade-visible-once class="w-full text-stone-700 max-w-160">
        Gérez un campus, école, université, ou autre établissement d'enseignement avec une seule application.
      </p>
    </div>

    <br class="my-20">

    <Cards>
      <Card
        title="Safety First"
        description="Sécurisez votre application avec des rôles, des permissions, et plus."
        icon="i-mdi-shield-check"
      />
      <Card
        title="Plugins"
        description="Intégrez des plugins du marketplace pour inclure visioconférence, édition de documents en temps réel et autres dans votre application."
        icon="i-mdi-puzzle"
      />
      <Card
        title="Personnalisable"
        description="Personnalisez votre application avec des thèmes, des couleurs, et plus."
        icon="i-mdi-palette"
      />
      <Card
        title="Multi-langues"
        description="Traduisez votre application dans plusieurs langues."
        icon="i-mdi-translate"
      />
      <Card
        title="Accessibilité et Inclusivité"
        description="Rendez votre application accessible et inclusive pour tout le monde."
        icon="i-mdi-access-point"
      />
      <Card
        title="Auto-hébergement"
        description="Hébergez votre application sur votre propre serveur."
        icon="i-mdi-server"
      />
    </Cards>
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
