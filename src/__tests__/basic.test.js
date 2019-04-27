import { compose } from "ramda";
import { withFields, string } from "@commodo/fields";
import { date } from "commodo-fields-date";

const Company = compose(
    withFields({
        name: string(),
        createdOn: date()
    })
)(function() {});

const isoString = "2019-04-27T06:48:37.506Z";

test("field must accept instance of Date", () => {
    const company = new Company();

    const createdOn = new Date(isoString);
    company.populate({ name: "test", createdOn });

    expect(company.name).toBe("test");
    expect(company.createdOn instanceof Date).toBe(true);
    expect(company.createdOn.toISOString()).toBe(isoString);
});

test("field must accept a properly formatted ISO 8601 string", () => {
    const company = new Company();

    company.populate({ name: "test", createdOn: isoString });

    expect(company.name).toBe("test");
    expect(company.createdOn instanceof Date).toBe(true);
    expect(company.createdOn.toISOString()).toBe(isoString);
});

test("field must accept a properly formatted ISO 8601 string", () => {
    const company = new Company();

    company.populate({ name: "test", createdOn: isoString });

    expect(company.name).toBe("test");
    expect(company.createdOn instanceof Date).toBe(true);
    expect(company.createdOn.toISOString()).toBe(isoString);
});

test("must throw an error when setting invalid values", () => {
    const company = new Company();

    let error;
    try {
        company.createdOn = "asd";
    } catch (e) {
        error = e;
    }

    expect(error.message).toBe(
        "Date field accepts Date object or an ISO 8601 formatted date/time string."
    );

    error = null;
    try {
        company.createdOn = new Date("asdds");
    } catch (e) {
        error = e;
    }

    expect(error.message).toBe(
        "Date field accepts Date object or an ISO 8601 formatted date/time string."
    );
});
