import createApp from "../main.js"
import createRouter from '../router/index'
const r = createRouter();

const {app,router,store} = createApp(null,r);

// console.log({initial_state: window.__INITIAL_STATE__});
if(window.__INITIAL_STATE__){
    //TODO: don't forget this in the main plugin
    let state = {...store.state,...window.__INITIAL_STATE__}
    store.replaceState(state);
}
router.onReady(() => {
    app.$mount('#app')
});
