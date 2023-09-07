<template>
    <div class="mt-8">
        <div class="container mx-auto px-8">
            <!--        Start:form-->
            <form class="flex flex-col justify-start space-y-6" @submit.prevent="onSubmitLogin()">
                <div class="row">
                    <label for="emailAddress" class="flex flex-col">
                        <span class="font-semibold">Email Address</span>
                        <input id="emailAddress" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="email" placeholder="Email">
                    </label>
                </div>
                <div class="row">
                    <label for="password" class="flex flex-col">
                        <span class="font-semibold">Password</span>
                        <input id="password" autocomplete="current-password"
                               class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
                               type="password" placeholder="Password">
                    </label>
                </div>
                <div class="row">
                    <button class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg" type="submit">
                        Sign Up
                    </button>
                </div>
            </form>
            <!--        Start:direction-->
            <div class="w-full text-center mt-6">
                <span class="font-semibold">I'm a new user.</span>
                <span class="ml-1">
                <router-link :to="{name: 'Register'}" class="text-primary font-bold">Sign Up</router-link>
            </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        const onSubmitLogin = () => {

        }
        return {
            onSubmitLogin
        }
    }
}
</script>

<style scoped>

</style>
