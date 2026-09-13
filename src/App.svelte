<script lang="ts">
	import Input from "./components/Input.svelte";

	import Ps1 from "./components/Ps1.svelte";
	import History from "./components/History.svelte";
	import altenovo from "./assets/altenovo.png";
	import { Navbar, NavbarToggler } from "@sveltestrap/sveltestrap";
	import MatrixRain from "./components/MatrixRain.svelte";
	import GuiView from "./components/GuiView.svelte";
	import { matrixActive } from "./stores/matrix";

	let isOpen = false;
	let uiStyleActive = false;

	const toggle = () => {
		isOpen = !isOpen;
	};
</script>

<svelte:head>
	<title>ALTENOVO</title>
</svelte:head>

{#if $matrixActive}
	<MatrixRain />
{/if}

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

		<div class="view-switch">
			<span class="view-switch-label" class:active={!uiStyleActive}>CLI</span>
			<label class="switch">
				<input
					type="checkbox"
					bind:checked={uiStyleActive}
					aria-label="Toggle between CLI and UI style"
				/>
				<span class="slider round"></span>
			</label>
			<span class="view-switch-label" class:active={uiStyleActive}>UI</span>
		</div>

		{#if uiStyleActive}
			<GuiView />
		{:else}
            <Navbar color="dark" dark class="terminal-navbar">
                <NavbarToggler aria-label="Toggle navigation" onclick={toggle} />
            </Navbar>
            
			<!-- terminal -->
			<section class="terminal">
				<History />

				<Ps1 />

				<Input />
			</section>
		{/if}
	</main>
</div>
