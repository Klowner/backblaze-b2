exports.axiosB2AutoAuth = function (axios, defaultOptions) {


    if (defaultOptions.autoAuth &&
        defaultOptions.applicationKey &&
        defaultOptions.applicationKeyId
    ) {
        if (!defaultOptions.b2.authorizationToken) {
            // Initially set the authorizationToken to 'AUTO'
            // to make utils.getAuthHeaderObjectWithToken() succeed,
            // but we will ensure that a valid token is injected
            // prior to making the actual API request.
            defaultOptions.b2.authorizationToken = 'AUTO';
        }

        axios.interceptors.request.use(function (config) {
            console.log('REQUEST', config);
            return Promise.resolve(config);
        });
    }

    return function remove() {
        return [axios, defaultOptions];
    };
};
