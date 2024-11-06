from ninja import Schema

class EmployeeSchema(Schema):
    id: int 
    first_name: str
    last_name: str
    email: str

class RegisterSchema(Schema):
    username: str
    email: str
    password: str

class LoginSchema(Schema):
    email: str
    password: int