<template>
 <div>
  <MacTerminal/>
  <div class="mx-10 px-10 bg-black text-white">
        <h1 class="text-center text-3xl font-bold pt-10">{{ robot.name }}</h1>
        <div class="flex justify-center items-center mt-6">
          <img :src="robot.robot_avatar" alt="robot avatar" class="w-48 h-48 object-cover rounded-full">
        </div>
        <div class="mt-8 py-10">
          <p class="text-center text-lg font-semibold">Superpower: {{ robot.superpower }}</p>
          <p class="text-center text-lg font-semibold">Assignment: {{ robot.assignment }}</p>
          <p class="text-center text-lg font-semibold">Catchphrase: "{{ robot.catchphrase }}"</p>
          <p class="text-center text-lg font-semibold">Favorite Human: {{ robot.favorite_human }}</p>
          <p class="px-10 mt-8 text-lg font-semibold">Description:</p>
          <p class="px-10 text-lg mb-10">{{ robot.description }}</p>
        </div>
      </div>
 </div>
</template>

<script setup>


const route = useRoute();
const { data: robotsData } = await useFetch('/api/robotData');

const robot = robotsData.value.robots.find(r => r.id === parseInt(route.params.id));

</script>
