<script>
// @ts-nocheck
    import { user } from "$lib/firebase";
    const usersub = $derived($user);
    let { children } = $props();
</script>
{#if usersub}
{@render children()}
{:else}
    <p class="text-error">
        You must be signed in to view this page.
        <a class="btn btn-primary" href="/login">Sign in</a>
    </p>
{/if}