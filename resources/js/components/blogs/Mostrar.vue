<template>
  <div>
    <div>
      <router-link
        :to='{ name:"crearBlogs"}'
        class="
          flex
          w-12
          h-12
          items-center
          bg-green-600
          text-gray-100 text-3xl
          justify-center
          font-bold
          rounded-full
        "
        >+</router-link
      >
    </div>

    <div>
      <table>
        <thead>
          <th>ID</th>
          <th>title</th>
          <th>contenido</th>
          <th>acciones</th>
        </thead>
        <tbody>
          <tr v-for="blog in blogs" :key="blog.id">
            <td>{{ blog.id }}</td>
            <td>{{ blog.title }}</td>
            <td>{{ blog.contenido }}</td>
            <td>
              <router-link
                :to="{ name: 'editarBlogs', params: { id: blog.id } }"
                ><i class="fas fa-edit"></i
              ></router-link>
            </td>
            <button type="button" @click="deleteMethod(blog.id)">
              <i class="fas fa-trash-alt"></i>
            </button>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogs",
  data() {
    return {
      blogs: [],
    };
  },
  mounted() {
    this.mostrarBlogs();
  },
  methods: {
    async mostrarBlogs() {
      await this.axios
        .get("/api/blog")
        .then((response) => {
          this.blogs = response.data;
        })
        .catch(console.error());
    },
    deleteMethod(id){
       if( confirm('Delete the register?')){
           this.axios.delete(`api/blog/${id}`).then((response) => {
          this.blogs = response.data;
        })
        .catch(console.error());
       }
    }
  },
};
</script>