<script>
// @ts-nocheck

import { userData } from "$lib/firebase";
</script>
<header class="bg-primary flex w-full justify-center items-center py-4 gap-2">
	<div class="mr-auto ml-2">
		<a href="/"><img width="60px" height="60px" src="/favicon.png" alt="icon" /></a>
	</div>
	<a class="btn btn-sm h-14" href="/" rel="noreferrer">
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
			><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7H4Z" /></svg
		>
	</a>
	<a class="btn btn-sm h-14" href="/store" rel="noreferrer"> Kauppa </a>
	<a class="btn btn-sm h-14" href="/matka">Muutoksen <br> matka</a>
	<a class="btn btn-sm h-14   hidden sm:flex justify-center items-center" href="/galleria"> Galleria </a>
	<div class="relative">
		<button class="btn btn-sm h-14 showMoreBtn">
			<svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 16 16"
				><path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"
					d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
				/></svg
			>
		</button>
		<ul
			class="z-[9999] bg-base-300 absolute min-w-[19ch] text-center left-0 cursor-pointer translate-x-[-25px] p-2 rounded">
			<a href="/galleria" class="hover:bg-base-100 sm:hidden"> Galleria </a>
			<a href="/info/ajanvaraus"><li class="hover:bg-base-100">Ajanvaraus</li></a>
			<a href="/info/susanna"><li class="hover:bg-base-100">Susanna</li></a>
			<a href="/info/yhteystiedot"><li class="hover:bg-base-100">Yhteystiedot</li></a>
			<a href="/info/tietosuoja"><li class="hover:bg-base-100">Tietosuojaseloste</li></a>
		</ul>
	</div>
	<div class="ml-auto mr-2 grid place-items-center">
		<div class="avatar">
			<div class="rounded w-14 h-14">
				<a href="kirjaudu">
				{#if $userData}
				<img src={$userData.photo} alt="user" />
				{:else}
				<svg xmlns="http://www.w3.org/2000/svg" width="3.5rem" height="3.5rem" viewBox="0 0 24 24"><path fill="currentColor" d="M2 2h20v20H2zm17.5 18h.5V4H4v16h.5a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5M12 7a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5M7.5 9.5a4.5 4.5 0 1 1 9 0a4.5 4.5 0 0 1-9 0m2 7.5a3 3 0 0 0-3 3h11a3 3 0 0 0-3-3z"/></svg>
				{/if}
			</a>
			</div>
		  </div>
	</div>
</header>

<style>
	.showMoreBtn:hover + ul,
	.showMoreBtn:focus + ul {
		opacity: 1;
		transition: opacity 0.55s ease-in-out;
		visibility: visible;
	}

	.showMoreBtn:hover,
	.showMoreBtn:focus {
		outline: 1px solid var(--dark-green);
	}
	ul {
		width: 100px;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.6s ease, visibility 0.6s ease;
	}
	ul:hover {
		opacity: 1;
		visibility: visible;
	}
	li {
		padding: 3px 0;
	}
	@media (max-width: 500px) {
		ul {
			transform: translateX(-80px);
		}
	}
	a {
		text-decoration: none !important;
		color: inherit !important;
	}
	a:hover{
		opacity: 0.9;
	}
</style>
