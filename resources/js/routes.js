const Home =  ()=> import('./components/Home.vue');
const App =  ()=> import('./components/App.vue');
const Contacto =  ()=> import('./components/Contacto.vue');
// blogs

const Crear = ()=> import('./components/blogs/Crear.vue');
const Editar = ()=> import('./components/blogs/Editar.vue');
const Mostrar = ()=> import('./components/blogs/Mostrar.vue');
const Example = {template : '<div><h1>Hola papus</h1></div>'}

export const routes = [
    {
        name: 'home',
        path: '/',
        component:Home
    },

    {
        name: 'contacto',
        path: '/contacto',
        component:Contacto
    },
    {
        name: 'mostrarBlogs',
        path: '/blog',
        component:Mostrar
    },
    {
        name: 'crearBlogs',
        path: '/crear',
        component:Crear
    },
    {
        name: 'editarBlogs',
        path: '/editar/:id',
        component:Editar
    },
    {
        name: 'example',
        path: '/example',
        component:Example 
    }
];