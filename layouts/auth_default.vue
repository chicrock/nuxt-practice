<template>
  <div>
    <nuxt/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    mounted() {
        const access_token = localStorage.getItem('access_token');
        const refresh_token = localStorage.getItem('refresh_token');

        if (access_token && refresh_token) {
            this.$store.commit('user/set_token', { access_token, refresh_token });
        }

        if (!this.$store.getters['user/isLogin']) {
            this.$router.replace('/login');
        }
    },
};
</script>

<style>

</style>
