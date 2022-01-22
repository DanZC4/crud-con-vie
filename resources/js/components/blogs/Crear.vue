<template>
    <div>
        <div>
            <div>
                <h2>Create Blog</h2>
            </div>
            <form @submit.prevent="crear"  method="post">
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
    name:'crear-blog',
    data(){
        return{
            blog:{
                title:"",
                contenido:""
            }
        }
    },
    methods: {
          async crear(){
            await this.axios.post('/api/blog',this.blog).then(response=>{
                this.$router.push({name:"mostrarBlogs"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>