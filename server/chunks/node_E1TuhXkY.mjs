export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/node_BIvthPhb.mjs').then(n => n.n);

export { page };
