<template>
	<AppSubmenu class="layout-menu" :items="model" :layoutMode="layoutMode" :menuActive="active" :root="true"/>
</template>

<script>
import AppSubmenu from './AppSubmenu';

export default {
	props: {
		model: Array,
		layoutMode: String,
		active: Boolean,
	},
	components: {
		'AppSubmenu': AppSubmenu
	}
}
</script>

<style scoped>

</style>