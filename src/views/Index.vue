<template>
    <div class="mt-8 md:flex">
        <div class="container mx-auto md:px-24 px-16 w-[50%]">
            <form class="flex flex-col justify-start space-y-6" @submit.prevent="onSubmitLogin()">
              <NavigationBrand/>
                <div class="row">
                    <label for="emailAddress" class="flex flex-col">
                        <span class="font-semibold">Email Address</span>
                        <input id="emailAddress" class="px-4 py-3 border border-gray-500 rounded-lg border border-gray-100 mt-1" type="email" placeholder="Email">
                    </label>
                </div>
              <div class="row">
                <label for="emailAddress" class="flex flex-col">
                  <span class="font-semibold">Email Address</span>
                  <input id="emailAddress" class="px-4 py-3 border border-gray-500 rounded-lg border border-gray-100 mt-1" type="email" placeholder="Email">
                </label>
              </div>
                <div class="row">
                    <button class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg" type="submit">
                        Tạo mã QR
                    </button>
                </div>
            </form>
        </div>
        <div class="container mx-auto md:px-24 px-16 w-[50%]">
        <div class="flex flex-col justify-start space-y-6">
          <NavigationBrand/>
        </div>
      </div>
    </div>
</template>

<script>
import NavigationBrand from "@/components/NavigationBrand.vue";

export default {
  components: {NavigationBrand},
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
