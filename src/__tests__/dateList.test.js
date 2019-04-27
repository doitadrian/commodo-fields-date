import { date } from "commodo-fields-date";
import { withFields, WithFieldsError } from "@commodo/fields";

import { compose } from "ramda";

const Model = compose(withFields({ field: date({ list: true }) }))(function() {});

test("should accept string and Date values", () => {
    const model = new Model();

    const isoString1 = "2019-03-27T06:48:37.506Z";
    const isoString2 = "2019-04-27T06:48:37.506Z";

    const date = new Date();
    model.field = [isoString1, date];
    expect(model.field).toEqual([new Date(isoString1), date]);

    model.field = [isoString2, date];
    expect(model.field).toEqual([new Date(isoString2), date]);

    model.field = [null];
    expect(model.field).toEqual([null]);

    model.field = [undefined];
    expect(model.field).toEqual([undefined]);

    const date1 = new Date();
    const date2 = new Date();
    model.field = [date1, date2];
    expect(model.field).toEqual([date1, date2]);
});

[[123], [0], [0.5], [{}], [[]], [false]].forEach(value => {
    test(`string field shouldn't accept array ${typeof value[0]}s`, async () => {
        const model = new Model();

        let error = null;
        try {
            model.field = value;
        } catch (e) {
            error = e;
        }

        expect(error).toBeInstanceOf(WithFieldsError);
        expect(error.code).toEqual(WithFieldsError.FIELD_DATA_TYPE_ERROR);
    });
});
