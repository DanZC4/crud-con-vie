<template>
     <div>
        <div>
            <div>
                <h2>Create Blog</h2>
            </div>
            <form @submit.prevent="actualizar"  method="post">
                <div>
                    <div>
                        <label for="">titulo</label>
                        <input type="text" v-model="blog.title">
                    </div>
                    <div>
                        <label for="">contenido</label>
                        <textarea name="" id="" cols="30" rows="10" v-model="blog.contenido"></textarea>
                    </div>
                </div>
                <div>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script >
export default {
    name: 'edit-blog',
    data(){
        return{
            blog:{
                title:"",
                contenido: ""
            }
        }
    },
    mounted(){
        this.mostrarBlog()
    },
    methods: {
        async mostrarBlog(){
            this.axios.get(`/api/blog/${this.$route.params.id}`).
            then(
                response => {
                    const {title, contenido}  = response.data
                    this.blog.title = title
                    this.contenido = contenido
                }
            ).catch(console.error())
        },
        async actualizar(){
            this.axios.put(`/api/blog/${this.$route.params.id}`, this.blog).
            then(response => {
                this.$router.push({
                    name:"mostrarBlogs"
                }).catch(console.error())
            })
        }
    }
};
</script>