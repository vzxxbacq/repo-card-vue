<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <p style="text-align: left">Repo box generate with offline data</p>
    <RepoCard :OfflineData="myRepoData"/>
    <p style="text-align: left">Repo box generate with github online data</p>
    <RepoCard :repo="repo"/>

  </div>
</template>

<script>
import RepoCard from './components/RepoCard.vue'

export default {
  name: 'App',
  data() {
    return {
      repo: "vzxxbacq/speaker-recognition-papers",
      myRepoData: {
        url: "https://github.com/vzxxbacq/speaker-recognition-papers",
        repoName: "speaker-recognition-papers",
        isFork: true,
        forkPath: "https://github.com/vzxxbacq/speaker-recognition-papers",
        forkName: "ssssForkExp",
        description: "Share some recent speaker recognition papers and their implementations",
        lang: "Python",
        stars: 88,
        forks: 24
      }
    }
  },
  components: {
    RepoCard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 35%;
  margin-left: auto;
  margin-right: auto;
}
</style>
