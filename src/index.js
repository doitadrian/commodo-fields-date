import { WithFieldsError, createField } from "@commodo/fields";
import withFieldDataTypeValidation from "@commodo/fields/fields/withFieldDataTypeValidation";
import { withProps } from "repropose";

function checkDate(date) {
    if (date.toString() === "Invalid Date") {
        throw new WithFieldsError(
            "Date field accepts Date object or an ISO 8601 formatted date/time string.",
            "INVALID_DATE_VALUE"
        );
    }
}

function prepareValue(value) {
    if (value instanceof Date) {
        checkDate(value);
        return value;
    }

    if (typeof value === "string") {
        const date = new Date(value);
        checkDate(date);
        return date;
    }

    return value;
}

function date({ list, ...rest } = {}) {
    return withFieldDataTypeValidation(value => typeof value === "string" || value instanceof Date)(
        withProps(props => {
            const { setValue } = props;

            return {
                setValue(value) {
                    if (this.list) {
                        const preparedValues = [];
                        value.forEach(item => preparedValues.push(prepareValue(item)));
                        return setValue.call(this, preparedValues);
                    }
                    return setValue.call(this, prepareValue(value));
                }
            };
        })(createField({ ...rest, list, type: "date" }))
    );
}

export { date };
