<script lang="ts">
	import Input from "./components/Input.svelte";

	import Ps1 from "./components/Ps1.svelte";
	import altenovo from "./assets/altenovo.png";
	import { Navbar, NavbarToggler } from "@sveltestrap/sveltestrap";

	let isOpen = false;

	const toggle = () => {
		isOpen = !isOpen;
	};
</script>

<svelte:head>
	<title>ALTENOVO</title>
</svelte:head>

<div class:sidebar-open={isOpen} class="app">
	<!-- Navigation -->
	<aside class="sidebar">
		<div class="sidebar-header">
			<a href="/">
				<img src={altenovo} alt="ALTENOVO" class="sidebar-logo" />
			</a>
		</div>

		<nav>
			<a href="/">home</a>
			<a href="/projects">projects</a>
			<a href="/services">services</a>
			<a href="/about">about</a>
		</nav>
	</aside>

	<!-- Main -->
	<main class="main-content">
		<!-- sidebar-->
		<Navbar color="dark" dark class="terminal-navbar">
			<NavbarToggler aria-label="Toggle navigation" onclick={toggle} />
		</Navbar>

		<!-- terminal -->
		<section class="terminal">
			<Ps1 />

			<Input />
		</section>
	</main>
</div>
