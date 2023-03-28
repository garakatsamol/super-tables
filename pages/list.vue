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
    imgFn(rowObj, classes) {
      return `<img class="${classes}" src="${rowObj.robot_avatar}" alt="Robot avatar1" />`;
    }
  },
  data() {
    return {
      columns: [
        {
          label: 'id',
          field: 'id',
          type: 'number',
        },
        {
          label: 'Photo',
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
      rows: [],
    };
  },
  async created() {
    const { data: robotsData } = await useFetch('/api/robotData');
    this.rows = toRaw(robotsData.value.robots);
  },
};
</script>
