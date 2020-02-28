<template>
    <nav>
        <h2>Menu</h2>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            
        }
    }
}
</script>
<style scoped>
    nav {
        text-align: center;
    }
    nav ul {
        padding: 0;
    }
    nav li {
        margin: 5px;
        list-style-type: none;
        display: inline-block;
    }
</style>