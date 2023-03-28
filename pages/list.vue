<template>
  <div>
    <MacTerminal terminalClass=""/>
    <GoodTable :columns="columns" :rows="rows" />
  </div>
</template>

<script>
import GoodTable from '~/components/GoodTable.vue';

export default {
  components: {
    GoodTable,
  },
  methods: {
    // function to return image as a string with provided class
    imgFn(rowObj, classes) {
      return `<img class="${classes}" src="${rowObj.robot_avatar}" alt="Robot avatar1" />`;
    }
  },
  data() {
    return {
      // array of objects for table columns and rows
      columns: [
        {
          label: 'id',
          field: 'id',
          type: 'number',
        },
        {
          label: 'Photo',
          // field that returns the HTML for the image column
          field: row => this.imgFn(row, 'avatar-round w-12 h-12'),
          html: true,
        },
        {
          label: 'Name',
          field: 'name',
        },
        {
          label: 'Superpower',
          field: 'superpower',
        },
        {
          label: 'Assignment',
          field: 'assignment',
        },
        {
          label: 'Catchphrase',
          field: 'catchphrase',
        },
        {
          label: 'Favorite Human',
          field: 'favorite_human',
        },
      ],
      // array of objects for table rows
      rows: [],
    };
  },
  async created() {
    // fetch robot data from API
    const { data: robotsData } = await useFetch('/api/robotData');
    // set table rows to fetched data
    this.rows = toRaw(robotsData.value.robots);
  },
};
</script>

