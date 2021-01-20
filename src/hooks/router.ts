import { useRouter, useRoute, onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router';

export interface RouterTrastionOptions {
    name?: string;
    delay?: number;
}

export function useRouterTransition(
    { name }: RouterTrastionOptions = {
        name: 'scale',
    }
) {
    const router = useRouter();

    const route = useRoute();
    route.meta.transition = `${name}-in`;

    return { router };
}
