<template>
	<div class="layout-topbar clearfix">

		<button class="layout-menu-button p-link" @click="onMenuButtonClick">
			<i class="pi pi-bars"></i>
		</button>

		<button id="topbar-menu-button" class="p-link" @click="onTopbarMenuButtonClick">
			<i class="pi pi-ellipsis-v"></i>
		</button>
	</div>
</template>

<script>
	export default {
		props: {
			topbarMenuActive: Boolean,
			activeTopbarItem: String,
			profileMode: String,
			horizontal: Boolean
		},
		methods: {
			onMenuButtonClick(event) {
				this.$emit('menubutton-click', event);
			},
			onTopbarMenuButtonClick(event) {
				this.$emit('topbar-menubutton-click', event);
			},
			goDashboard(){
				window.location = "/#/"
			}
		},
		computed: {
			topbarItemsClass() {
				return ['topbar-menu fadeInDown', {
					'topbar-menu-visible': this.topbarMenuActive
				}];
			}
		}
	}
</script>
