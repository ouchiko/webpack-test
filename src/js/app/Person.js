class Person {

    constructor(name, job)
    {
        this._name = name;
        this._job = job;
    }

    get jobdetails()
    {
        return this._job.jobname + " at $" + this._job.monthlysalary + " per month";
    }

    get name()
    {
        return this._name;
    }
}

export default Person;
