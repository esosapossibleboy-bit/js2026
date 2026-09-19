import re

def is_valid_email(email):
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

while True:
    email = input("Please tell me your email: ").strip()
    
    if is_valid_email(email):
        print(f"Thanks! Saved your email: {email}")
        break
    else:
        print("That doesn't look like a valid email. Try again.")