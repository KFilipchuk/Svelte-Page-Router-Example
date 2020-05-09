import Router from 'svelte-page-router';

const options = {
    click: true,
    popstate: false,
    dispatch: true,
    hashbang: false,
};

const router = new Router({
    routes: [{
        path: '/',
        component: () => import('../Pages/MainPage.svelte')
    }, {
        path: '/menu',
        component: () => import('../Pages/MenuPage.svelte')
    }, {
        path: '/auth',
        component: () => import('../Pages/AuthPage.svelte')
		}],
    ...options
});

export default router;
