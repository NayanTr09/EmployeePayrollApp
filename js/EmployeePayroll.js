class EmployeePayrollData {

    //getter and setter method
    get id() { return this._id; }
    set id(id) {
        this._id = id;
    }

    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A - Z]{ 1}[a - ZA - Z\\s} { 2,}s')
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }

    get profilePic() { return this.profilePic; }
    set profilePic(profilePic) {
        this.profilePic = profilePic;
    }

    get gender() { return this._gender; }
    set gender(gender) {
        this._gender = gender;
    }

    get department() { return this._department; }
    set department(department) {
        this._department = department;
    }

    get salary() { return this.salary; }
    set salary(salary) {
        this._salary - salary;
    }

    get note() { return this._note; }
    set note(note) {
        this._note = note;
    }

    get startDate() { return this.startDate; }
    set startDate(startDate) {
        this.startDate = startDate;
    }

    // method
    tostring() {
        const options { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefined" :
            this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name=" + this.name + ", gender=" + this.gender +
            ", profilePic=" + this.profilePic + ", department=" + this.department +
            ", salary=" + this.salary + ", startDate = " + empDate + ", note = " + this.note;
    }
}