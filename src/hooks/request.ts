import { useAuth0 } from '@auth0/auth0-vue'
import { createFetch } from '@vueuse/core'

export const useRequest = () => {
    const { getAccessTokenSilently } = useAuth0()
    const request = createFetch({
        baseUrl: "/api/",
        options: {
            async beforeFetch({ options }) {
                options.headers = {
                    Authorization: `Bearer ${await getAccessTokenSilently()}`,
                    ContentType: 'application/json'
                }
                return { options }
            }
        },
        fetchOptions: {
            mode: 'cors'
        }
    })

    return request
}