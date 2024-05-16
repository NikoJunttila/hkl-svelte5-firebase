
<div  class="wrapper relative h-[50vh]">
	<div class="center">
		<h1 class="title-font">Hyvinvointikeskus Luxus</h1>
	</div>
</div>

<style>
	.title-font {
		font-family: 'Instrument Serif', serif;
		font-style: italic;
		font-size: clamp(2.1875rem, 1.2946rem + 2.8571vw, 3.4375rem);
		color: whitesmoke;
	}
	.wrapper {
		 background-image: url('https://firebasestorage.googleapis.com/v0/b/hyvinvointikeskusluxus1.appspot.com/o/statics%2Fheader.webp?alt=media&token=e6ec8ced-17ab-4b89-b09e-c1c34694ba38');
		background-size: cover;
		-webkit-animation: slidein 140s;
		animation: slidein 140s;

		-webkit-animation-fill-mode: forwards;
		animation-fill-mode: forwards;

		-webkit-animation-iteration-count: infinite;
		animation-iteration-count: infinite;

		-webkit-animation-direction: alternate;
		animation-direction: alternate;
	}

	@-webkit-keyframes slidein {
		from {
			background-position: center;
			background-size: 2500px;
		}
		to {
			background-position: 50px 40px;
			background-size: 2200px;
		}
	}

	@keyframes slidein {
		from {
			background-position: center;
			background-size: 2500px;
		}
		to {
			background-position: 50px 40px;
			background-size: 2200px;
		}
	}

	.center {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		margin: auto;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background: rgba(94, 94, 222, 0.3);
		border-radius: 3px;
	}
	.center h1 {
		text-align: center;
		text-transform: uppercase;
	}
</style>
