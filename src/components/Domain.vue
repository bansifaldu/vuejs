<template>
	<div class="p-grid">
		<div class="p-col-12">
			<div class="card">
				<DataTable :value="customer2" :paginator="true" class="p-datatable-striped p-datatable-sm p-datatable-gridlines p-datatable-customers"
							:rows="10" dataKey="id" :rowHover="true" v-model:selection="selectedCustomers2" :filters="filters2" :loading="loading2">
					<template #header>
						<div class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between">
							Domain List
							<span class="p-input-icon-left">
							<i class="pi pi-search"/>
							<InputText v-model="filters2['global']" placeholder="Search"/>
						</span>
						</div>
					</template>

					<template #empty>
						No domain found.
					</template>
					<template #loading>
						Loading domain data. Please wait.
					</template>

					<Column field="domain" header="domain" :sortable="true">
						<template #body="slotProps">
							<span class="p-column-title">domain</span>
							{{slotProps.data.domain}}
						</template>
					</Column>
					<Column field="ldap" header="ldap" :sortable="true">
						<template #body="slotProps">
							<span class="p-column-title">ldap</span>
							{{slotProps.data.ldap}}
						</template>
					</Column>
				</DataTable>
			</div>
		</div>

	</div>
</template>

<script>
	import CustomerService from "../service/CustomerService";
	import ProductService from '../service/ProductService';
	// import axios from "axios";
	export default {
		data() {
			return {
				customer1: null,
				customer2: null,
				customer3: null,
				selectedCustomers1: null,
				selectedCustomers2: null,
				filters1: {},
				filters2: {},
				loading1: true,
				loading2: true,
				products: null,
				expandedRows: [],
				domainlist: []
			}
		},
		customerService: null,
		productService: null,
		created() {
			this.customerService = new CustomerService();
			this.productService = new ProductService();
		},
		mounted() {
			this.productService.getProductsWithOrdersSmall().then(data => this.products = data);
			this.customerService.getCustomersMedium().then(data => this.customer1 = data);
			this.customerService.getCustomersLarge().then(data => this.customer2 = data);
			this.customerService.getCustomersMedium().then(data => this.customer3 = data);
			this.loading1 = false;
			this.loading2 = false;
		},
		methods: {
			onRowExpand(event) {
				this.$toast.add({severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000});
			},
			onRowCollapse(event) {
				this.$toast.add({severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000});
			},
			expandAll() {
				this.expandedRows = this.products.filter(p => p.id);
				this.$toast.add({severity: 'success', summary: 'All Rows Expanded', life: 3000});
			},
			collapseAll() {
				this.expandedRows = null;
				this.$toast.add({severity: 'success', summary: 'All Rows Collapsed', life: 3000});
			},
			formatCurrency(value) {
				return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
			},
			calculateCustomerTotal(name) {
				let total = 0;

				if (this.customer3) {
					for (let customer of this.customer3) {
						if (customer.representative.name === name) {
							total++;
						}
					}
				}

				return total;
			}
		}
	}
</script>

<style scoped lang="scss">
	::v-deep(.p-progressbar) {
		height: .5rem;
		background-color: #D8DADC;

		.p-progressbar-value {
			background-color: #607D8B;
		}
	}

	.p-datatable .p-column-filter {
		display: none;
	}

	.table-header {
		display: flex;
		justify-content: space-between;
	}

	::v-deep(.p-datatable.p-datatable-customers) {
		.p-datatable-header {
			padding: 1rem;
			text-align: left;
			font-size: 1.5rem;
		}

		.p-paginator {
			padding: 1rem;
		}

		.p-datatable-thead > tr > th {
			text-align: left;
		}

		.p-datatable-tbody > tr > td {
			cursor: auto;
		}

		.p-dropdown-label:not(.p-placeholder) {
			text-transform: uppercase;
		}
	}

	/* Responsive */
	.p-datatable-customers .p-datatable-tbody > tr > td .p-column-title {
		display: none;
	}

	.customer-badge {
		border-radius: 2px;
		padding: .25em .5rem;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 12px;
		letter-spacing: .3px;

		&.status-qualified {
			background: #C8E6C9;
			color: #256029;
		}

		&.status-unqualified {
			background: #FFCDD2;
			color: #C63737;
		}

		&.status-negotiation {
			background: #FEEDAF;
			color: #8A5340;
		}

		&.status-new {
			background: #B3E5FC;
			color: #23547B;
		}

		&.status-renewal {
			background: #ECCFFF;
			color: #694382;
		}

		&.status-proposal {
			background: #FFD8B2;
			color: #805B36;
		}
	}

	.p-progressbar-value.ui-widget-header {
		background: #607d8b;
	}

	@media (max-width: 640px) {
		.p-progressbar {
			margin-top: .5rem;
		}
	}

	.product-image {
		width: 100px;
		box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)
	}

	.orders-subtable {
		padding: 1rem;
	}

	.product-badge {
		border-radius: 2px;
		padding: .25em .5rem;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 12px;
		letter-spacing: .3px;

		&.status-instock {
			background: #C8E6C9;
			color: #256029;
		}

		&.status-outofstock {
			background: #FFCDD2;
			color: #C63737;
		}

		&.status-lowstock {
			background: #FEEDAF;
			color: #8A5340;
		}
	}

	.order-badge {
		border-radius: 2px;
		padding: .25em .5rem;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 12px;
		letter-spacing: .3px;

		&.order-delivered {
			background: #C8E6C9;
			color: #256029;
		}

		&.order-cancelled {
			background: #FFCDD2;
			color: #C63737;
		}

		&.order-pending {
			background: #FEEDAF;
			color: #8A5340;
		}

		&.order-returned {
			background: #ECCFFF;
			color: #694382;
		}
	}

	@media screen and (max-width: 960px) {
		::v-deep(.p-datatable) {
			&.p-datatable-customers {
				.p-datatable-thead > tr > th,
				.p-datatable-tfoot > tr > td {
					display: none !important;
				}

				.p-datatable-tbody > tr {
					border-bottom: 1px solid var(--surface-d);

					> td {
						text-align: left;
						display: block;
						border: 0 none !important;
						width: 100% !important;
						float: left;
						clear: left;
						border: 0 none;

						.p-column-title {
							padding: .4rem;
							min-width: 30%;
							display: inline-block;
							margin: -.4rem 1rem -.4rem -.4rem;
							font-weight: bold;
						}

						.p-progressbar {
							margin-top: .5rem;
							display: inline-block;
							width: 60%;
						}
						.p-rating {
							display: inline-block;
						}
					}
				}

				.p-datatable-tbody > tr.p-rowgroup-footer{
					display: flex;
				}
			}
		}
	}
</style>
