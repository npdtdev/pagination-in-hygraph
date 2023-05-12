import { HoudiniClient } from '$houdini';

export default new HoudiniClient({
    url: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clhjjxekn353001uncafl6m5k/master'

    // uncomment this to configure the network call (for things like authentication)
    // for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
    // fetchParams({ session }) { 
    //     return { 
    //         headers: {
    //             Authentication: `Bearer ${session.token}`,
    //         }
    //     }
    // }
})
