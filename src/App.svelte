<svelte:component
		this={component}
		{...state}
		{pathname}
		{path}
		{hash}
		{...params}
		{query}
/>

<script>
	export let component = null,
			pathname = '',
			path = '',
			hash = '',
			params = {},
			query = {},
			state = {};
</script>