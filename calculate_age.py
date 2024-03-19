from datetime import datetime

def calculate_age(birth_date):
    today = datetime.today()
    age = today.year - birth_date.year - ((today.month, today.day) < (birth_date.month, birth_date.day))
    return age

if __name__ == "__main__":
    birth_year = int(input("Enter your birth year: "))
    birth_month = int(input("Enter your birth month: "))
    birth_day = int(input("Enter your birth day: "))

    birth_date = datetime(birth_year, birth_month, birth_day)
    age = calculate_age(birth_date)
    print(f"You are {age} years old.")
