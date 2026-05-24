<div class="landing">
	<div class="landing-inner">
		<div class="leaves" aria-hidden="true">
			<img class="leaf leaf-big" src="/accent.png" alt="" />
			<img class="leaf leaf-small" src="/accent.png" alt="" />
		</div>

		<div class="text">
			<h1>Hyvinvointikeskus Luxus</h1>
			<p>Hymyile itsellesi sillä hymysi on rakkauden energiaa Sinulle itsellesi &lt;3</p>
		</div>
	</div>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}

	.landing {
		background: #ffffff;
		padding: clamp(2rem, 6vw, 5rem) clamp(1rem, 4vw, 3rem);
	}

	.landing-inner {
		max-width: 1100px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		gap: clamp(1rem, 3vw, 3rem);
		flex-wrap: wrap;
		justify-content: center;
	}

	.leaves {
		flex: 0 0 auto;
		position: relative;
		width: clamp(160px, 30vw, 300px);
		aspect-ratio: 1 / 1;
	}

	.leaf {
		position: absolute;
		height: auto;
		display: block;
	}

	.leaf-big {
		top: 0;
		left: 0;
		width: 75%;
	}

	.leaf-small {
		bottom: 0;
		right: 0;
		width: 45%;
	}

	.text {
		flex: 1 1 320px;
		min-width: 0;
	}

	.text h1 {
		font-family: 'Instrument Serif', Georgia, 'Times New Roman', serif;
		font-weight: 400;
		font-size: clamp(2rem, 5vw, 3.75rem);
		line-height: 1.1;
		margin: 0 0 clamp(1rem, 2.5vw, 1.75rem) 0;
		background: linear-gradient(135deg, #b8893a 0%, #8a6420 60%, #b8893a 100%);
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}

	.text p {
		font-size: clamp(1rem, 1.6vw, 1.35rem);
		line-height: 1.5;
		color: #6b6b6b;
		margin: 0;
		max-width: 28ch;
	}

	@media (max-width: 640px) {
		.landing-inner {
			justify-content: center;
			text-align: center;
		}
		.text p {
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
