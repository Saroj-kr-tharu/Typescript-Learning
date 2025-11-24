class EmpInfo{
    _name:string = "Anil"

   get get_name(): string{
        return this._name
    }

   set set_name(nam:string){
        this._name = nam;
    }


}

var emp1 = new EmpInfo();
emp1.set_name = 'saroj';
console.log(emp1.get_name);