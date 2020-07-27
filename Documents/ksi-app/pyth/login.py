from Key import Keys

while True:
    password = input("Enter Password: ")
    account = Keys(password)
    if account.sercurity() == True:
        print("Login in")
        break
    else:
        print("Fail to connect")