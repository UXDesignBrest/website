<script>
	import IconLink from '../../../cdk/icons/IconLink/IconLink.svelte'
	import SocialLinks from '../../social/SocialLinks/SocialLinks.svelte'
	export let segment;
</script>

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: 300;
		padding: 1em;
		color: var(--primary-color);
	}

	.logo {
		max-height: 4em;
		max-width: 15em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
		margin : 0 1em;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: var(--primary-color);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
</style>

<nav>
	<a href="/">
		<img class="logo" alt="Logo UX Design Brest" src="uxdesignbrest/logo-purple.png"/>
	</a>
	<ul>
		<li><a aria-current='{segment === undefined ? "page" : undefined}' href='.'>Accueil</a></li>
		<li><a rel=prefetch aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>Evènements</a></li>
		<li><a aria-current='{segment === "about" ? "page" : undefined}' href='about'>À propos</a></li>
	</ul>
	<SocialLinks/>
</nav>
