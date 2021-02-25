export default class SmiilePublish {
    /**
     * @param {object} [params]
     * @param {string} [params.apiDomain=api.smiile.com] - Use demo-api.smiile.com for tests
     * @param {string} [params.popupParams=width=630,height=500] - The size of the opened window.
     * You can override it, but it is not recommended because the Smiile publish component fit these sizes.
     */
    constructor(params) {
        // Default params
        this.apiDomain = 'api.smiile.com';
        this.popupParams = 'width=630,height=500';
        this.apiVersion = 'v4.0';

        if (typeof params != 'undefined') {
            if (typeof params.apiDomain != 'undefined') {
                this.apiDomain = params.apiDomain;
            }
            if (typeof params.popupParams != 'undefined') {
                this.popupParams = params.popupParams;
            }
        }
        this.urlTarget = 'https://' + this.apiDomain + '/' + this.apiVersion + '/smiile-publish/init';
    }

    /**
     *
     * @param {{description: string, media: string[]}} params Data to publish
     * to Smiile. Description can contains string and url. Media only array of url
     * to images.
     * @returns {Promise<string>} The url on Smiile application that handle
     * your publish request.
     */
    async init(params) {
        const res = await fetch(
            this.urlTarget,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({params})
            }
        );
        const p = await res.json();
        return `${p.data.url}`;
    }


    /**
     * This function will call Smiile backend in order to perform your
     * publication.
     * @param {{description: string, media: string[]}} params Data to publish
     * to Smiile. Description can contains string and url. Media only array of url
     * to images.
     * @returns {Promise<void>}
     */
    async publish(params) {
        /*
         * Note that we change location after popup creation instead of
         * directly open the right url. We do that because of a Safari
         * security check that forbid to open a popup in an async context.
         */
        const win = window.open('', null, this.popupParams);
        win.location = await this.init(params);
    }
}