<script>

	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import PageTransition from '$lib/components/transition.svelte'
	import "../app.css"
import { user, userData } from "$lib/firebase";
import NotificationsComponent from "$lib/components/notifications.svelte";
let { children, data } = $props();
$user;
$userData;

</script>
<div>

	<Navbar />
	<NotificationsComponent  />
	<PageTransition key={data.url} duration={400}>
		<div class="min-h-[70vh] flex flex-col">
			{@render children()}
		</div>
	</PageTransition>
	<Footer /> 
</div>