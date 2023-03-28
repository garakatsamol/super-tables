<template>
<div class="mx-10">
    <div  class="shadow-2xl subpixel-antialiased rounded bg-black border-black " 
    :class="[terminalClass]">
      <div class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black"
        id="headerTerminal">
        <div class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
          id="closebtn">
        </div>
        <div class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
        </div>
        <div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
        </div>
        <div class="mx-auto pr-16" id="terminaltitle">
          <p class="text-center text-sm">Terminal</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // A prop that is used to determine the class of the terminal window.
  props: ['terminalClass'],
};
</script>