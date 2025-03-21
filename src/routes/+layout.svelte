<script>
    import "../app.css";
    import Footer from "./Footer.svelte";
    import Header from "./Header.svelte";
</script>

<div class="p-4 test-container h-screen flex flex-col gap-4">
    <Header />
    <div class="flex-1 overflow-auto">
        <slot />
    </div>
    <Footer />
</div>
