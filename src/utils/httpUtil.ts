import _ from 'lodash';

export default class HttpUtil {
    public static parseResponse<R>(response: any) {
        if (response && Array.isArray(response)) {
            return HttpUtil.fetchCollection(response as []);
        }
        if (response && typeof response === 'object') {
            return HttpUtil.fetchObject(response);
        }
        return response as R;
    }
    private static fetchObject(param: any) {
        const data: any = {};
        _.forOwn(param, (value: any, key: string) => {
            data[_.camelCase(key)] = HttpUtil.parseResponse(value);
        });
        return data;
    }
    private static fetchCollection(param: []): any[] {
        return param.map((item: any) => HttpUtil.parseResponse(item))
    }

    public static parameterByName(name: string, url: string) {
        if (!url) url = window.location.href;
        name = name.replace(/[[\]]/g, '\\$&');
        const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
        const results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    };
}
