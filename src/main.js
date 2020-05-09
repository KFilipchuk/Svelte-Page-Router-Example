import App from './App.svelte';
import router from "./services/router";
import {tick} from "svelte";

const app = new App({
	target: document.body,
	props: { component: null }
});

router.enter((ctx, next) => {
	app.$set({ ...ctx });
	tick().then(next);
});

router.exit((ctx, next) => {
	app.$set({ component: null });
	tick().then(next);
});

router.start();
