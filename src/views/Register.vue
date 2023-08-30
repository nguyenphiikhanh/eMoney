<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <form @submit="onSubmitRegister()">
        <div class="row mt-6 first:mt-0">
          <label for="fullName" class="flex flex-col">
            <span class="font-semibold">Full name</span>
            <input id="fullName" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="text" placeholder="Full name">
          </label>
        </div>
        <div class="row mt-6 first:mt-0">
          <label for="emailAddress" class="flex flex-col">
            <span class="font-semibold">Email Address</span>
            <input id="emailAddress" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="email" placeholder="Email">
          </label>
        </div>
        <div class="row mt-6 first:mt-0">
          <label for="password" class="flex flex-col">
            <span class="font-semibold">Password</span>
            <input id="password" class="px-4 py-3 rounded-lg border border-gray-100 mt-1" type="password" placeholder="Password">
          </label>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const onSubmitRegister = () => {

    }
    return {
      onSubmitRegister
    }
  }
}
</script>

<style scoped>

</style>
