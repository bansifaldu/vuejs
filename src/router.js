import { createRouter, createWebHashHistory } from 'vue-router';


const routes = [
	{
		path: '/dashboard',
		name: 'dashboard',
		exact: true,
		component: () => import('./components/Dashboard.vue')
	},
	{
		path: '/userlist',
		name: 'userlist',
		component: () => import('./components/Userlist.vue')
	},
	{
		path: '/domainlist',
		name: 'domainlist',
		component: () => import('./components/Domain.vue')
	},
	{
		path: '/rolespermission',
		name: 'rolespermission',
		component: () => import('./components/RolesPermission.vue')
	},
	{
		path: '/formlayout',
		name: 'formlayout',
		component: () => import('./components/FormLayoutDemo.vue')
	},
	{
		path: '/input',
		name: 'input',
		component: () => import('./components/InputDemo.vue')
	},
	{
		path: '/floatlabel',
		name: 'floatlabel',
		component: () => import('./components/FloatLabelDemo.vue')
	},
	{
		path: '/button',
		name: 'button',
		component: () => import('./components/ButtonDemo.vue')
	},
	{
		path: '/table',
		name: 'table',
		component: () => import('./components/TableDemo.vue')
	},
	{
		path: '/list',
		name: 'list',
		component: () => import('./components/ListDemo.vue')
	},
	{
		path: '/tree',
		name: 'tree',
		component: () => import('./components/TreeDemo.vue')
	},
	{
		path: '/panel',
		name: 'panel',
		component: () => import('./components/PanelsDemo.vue')
	},
	{
		path: '/overlay',
		name: 'overlay',
		component: () => import('./components/OverlayDemo.vue')
	},
	{
		path: '/media',
		name: 'media',
		component: () => import('./components/MediaDemo.vue')
	},
	{
		path: '/menu',
		component: () => import('./components/MenuDemo.vue'),
		children: [{
			path: '',
			component: () => import('./components/menu/PersonalDemo.vue')
		},
		{
			path: '/menu/seat',
			component: () => import('./components/menu/SeatDemo.vue')
		},
		{
			path: '/menu/payment',
			component: () => import('./components/menu/PaymentDemo.vue')
		},
		{
			path: '/menu/confirmation',
			component: () => import('./components/menu/ConfirmationDemo.vue')
		}]
	},
	{
		path: '/messages',
		name: 'messages',
		component: () => import('./components/MessagesDemo.vue')
	},
	{
		path: '/file',
		name: 'file',
		component: () => import('./components/FileDemo.vue')
	},
	{
		path: '/chart',
		name: 'chart',
		component: () => import('./components/ChartsDemo.vue')
	},
	{
		path: '/misc',
		name: 'misc',
		component: () => import('./components/MiscDemo.vue')
	},
	{
		path: '/icons',
		name: 'icons',
		component: () => import('./utilities/Icons.vue')
	},
	{
		path: '/widgets',
		name: 'widgets',
		component: () => import('./utilities/Widgets.vue')
	},
	{
		path: '/grid',
		name: 'grid',
		component: () => import('./utilities/GridDemo.vue')
	},
	{
		path: '/spacing',
		name: 'spacing',
		component: () => import('./utilities/SpacingDemo.vue')
	},
	{
		path: '/elevation',
		name: 'elevation',
		component: () => import('./utilities/ElevationDemo.vue')
	},
	{
		path: '/typography',
		name: 'typography',
		component: () => import('./utilities/Typography.vue')
	},
	{
		path: '/display',
		name: 'display',
		component: () => import('./utilities/DisplayDemo.vue')
	},
	{
		path: '/flexbox',
		name: 'flexbox',
		component: () => import('./utilities/FlexBoxDemo.vue')
	},
	{
		path: '/text',
		name: 'text',
		component: () => import('./utilities/TextDemo.vue')
	},
	{
		path: '/crud',
		name: 'crud',
		component: () => import('./pages/CrudDemo.vue')
	},
	{
		path: '/calendar',
		name: 'calendar',
		component: () => import('./pages/CalendarDemo.vue')
	},
	{
		path: '/invoice',
		name: 'invoice',
		component: () => import('./pages/Invoice.vue')
	},
	{
		path: '/help',
		name: 'help',
		component: () => import('./pages/Help.vue')
	},
	{
		path: '/empty',
		name: 'empty',
		component: () => import('./components/EmptyPage.vue')
	},
	{
		path: '/documentation',
		name: 'documentation',
		component: () => import('./components/Documentation.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('./pages/Login.vue')
	},
	{
		path: '/error',
		name: 'error',
		component: () => import('./pages/Error.vue')
	},
	{
		path: '/notfound',
		name: 'notfound',
		component: () => import('./pages/NotFound.vue')
	},
	{
		path: '/access',
		name: 'access',
		component: () => import('./pages/Access.vue')
	},
	{
		path: '/wizard',
		name: 'wizard',
		component: () => import('./pages/Wizard.vue')
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;