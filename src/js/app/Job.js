class Job
{
    constructor(jobname, annualsalary)
    {
        this._jobname = jobname;
        this._annualsalary = annualsalary;
    }

    get jobname()
    {
        return this._jobname;
    }

    get annualincome()
    {
        return this._annualsalary;
    }

    get monthlysalary()
    {
        let monthly = 0;
        let taxfreeamount = 11500;
        let percent20 = 33500;
        let gross = this._annualsalary;
        let amount = 0;
        /* What is our tax free amount */
        if (gross <= taxfreeamount) {
            monthly = gross / 12;
        } else {
            amount += taxfreeamount;
            gross = gross - taxfreeamount;
            console.log("Amount(a): " + amount);
            if (gross < percent20) {
                amount += (amount * 0.80);
                console.log("Amount(a-b): " + gross + " / " + amount);
            } else {
                amount += (percent20 * 0.80);
                console.log("Amount(b-a): " + gross + " / " + amount);
                let remaining = gross - percent20;
                amount += (remaining * 0.60);
                console.log("Amount(b-b): " + remaining + " / " + amount);
            }
            monthly = amount / 12;
        }
        return monthly;
    }
}

export default Job;
