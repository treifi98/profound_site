import './bootstrap';
import '../css/app.css';

// import { createRoot } from 'react-dom/client';
import { hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import React from 'react';
import { store } from './store'
import { Provider } from 'react-redux'
import { InertiaApp } from '@inertiajs/inertia-react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = hydrateRoot(el,
            <Provider store={store}>
                <App {...props} />
            </Provider>

        )
    },
    progress: {
        color: '#4B5563',
    },
});
