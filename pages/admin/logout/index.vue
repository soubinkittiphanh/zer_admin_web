<template>
    <div>
        <span>Login out...</span>
    </div>
</template>

<script>
export default {
    middleware: 'auths',
    mounted(){
        this.logout();
    },
    methods:{
        async logout(){
            await this.$auth.logout();
            this.$router.push("/backend");
            // this.$store.dispatch('logout');
        }
    }
}
</script>