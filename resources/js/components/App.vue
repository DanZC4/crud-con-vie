<template>
  <div class="flex flex-col justify-center">
    <div class="flex w-screen ">
      <nav class="flex p-4 justify-center">
          <div class="flex justify-between">
            <ul class="flex space-x-4">
              <li class="nav-item">
                <router-link class="nav-link active" to="/">Home</router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/blog">Blogs</router-link>
              </li>

              <li class="nav-item dropdown">
                <router-link class="nav-link" to="/contacto">
                  Contacto
                </router-link>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
      </nav>
    </div>

    <div class="flex justify-center" >
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
</script>
