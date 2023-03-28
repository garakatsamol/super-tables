<template>
  <div class="mx-10">
    <vue-good-table 
      :columns="columns" 
      :rows="rows" 
      :enable-row-expand="true" 
      :pagination-options="paginationOptions" 
      
      v-on:row-mouseenter="onRowMouseover"
      theme="nocturnal" 
      expanded-row-classes=""
      expanded-row-detail-classes="expanded-row">
      <template #row-details="props">
        <div class="flex items-center">
          <div class="w-1/4 text-center">
            <div v-html="imgFn(props.row, 'avatar-full mx-auto ')"></div>
            <NuxtLink :to="`/robots/${props.row.id}`"
              class="block rounded-md my-4 mx-4 bg-primary px-3.5 py-2.5 text-md font-semibold text-white shadow-sm  hover:bg-gray-100 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              GET ROBOT</NuxtLink>
          </div>
          <div class="w-3/4 pl-4">
            <h4>{{ props.row.name }}</h4>
            <p>{{ props.row.description }}</p>
          </div>
        </div>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { VueGoodTable } from 'vue-good-table-next';

export default {
  name: 'GoodTable',
  components: {
    VueGoodTable,
  },
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    rows: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
  imgFn(rowObj, classes) {
    
    return `<img class="${classes}" src="${rowObj.robot_avatar}" alt="Robot avatar1" />`;
  },
  onRowMouseover(params) {
    
    const rowEl = params.row
    console.log(rowEl)

    // params.row - row object 
    // params.pageIndex - index of this row on the current page.
  }
},
  data() {
    return {
      paginationOptions: {
        enabled: true,
        mode: 'records',
        perPage: 10,
        position: 'bottom',
        perPageDropdown: [10, 20, 30],
        dropdownAllowAll: false,
        setCurrentPage: 1,
        nextLabel: 'next',
        prevLabel: 'prev',
        rowsPerPageLabel: 'Rows per page',
        ofLabel: 'of',
        pageLabel: 'page', // for 'pages' mode
        allLabel: 'All',
      },
    };
  },
};
</script>

<style>
.vgt-wrap.nocturnal .vgt-table tbody tr:not(.expanded-row):hover,
.vgt-wrap.nocturnal .vgt-table tbody tr:hover td{
  background-color: #fff;
  color: #000!important;
  cursor: pointer;
}

.vgt-wrap.nocturnal .vgt-table tbody tr{
  background-color: #000;
  cursor: pointer;
  
}
.vgt-table.nocturnal thead th{
  background-color: #000;
 background-image: none;
}

.vgt-table.nocturnal{
  background-color: #000;
 border-color:#fff;
}
.vgt-table.nocturnal.bordered td, .vgt-table.nocturnal.bordered, .vgt-table.nocturnal.bordered th {
  border-color:#fff;
}

.expanded-row div{transition: all 1s ease-out;}
</style>