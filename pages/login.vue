<template>
  <section class="container">
    <div>
    </div>
  </section>
</template>

<script>
export default {
    layout: 'any_default',
    mounted() {
        const login = 'zxvc';
        const password = 'qwer';

        this.$store.dispatch('user/doLogin', { login, password });

        //this.$router.replace('/');
    },
};
</script>

<style>

</style>
