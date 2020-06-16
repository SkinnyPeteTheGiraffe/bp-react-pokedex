import _ from 'lodash';

export default class Transformer {
    /**
     * Method used to transform a fetched data
     *
     * @param param
     * @return {*}
     */
    public static fetch(param: any) {
        if (param && Array.isArray(param)) {
            return Transformer.fetchCollection(param as any[]);
        }
        if (param && typeof param === 'object') {
            return Transformer.fetchObject(param);
        }
        return param;
    }

    /**
     * Method used to transform a fetched collection
     *
     * @param param
     * @return [Array]
     */
    private static fetchCollection(param: any[]): any[] {
        return param.map((item) => Transformer.fetch(item));
    }

    /**
     * Method used to transform a fetched object
     *
     * @param param
     * @return {{}}
     */
    private static fetchObject(param: any) {
        const data: any = {};
        _.forOwn(param, (value, key) => {
            data[_.camelCase(key)] = Transformer.fetch(value);
        });
        return data;
    }
}
