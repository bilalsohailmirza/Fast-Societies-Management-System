import csv
import random
from faker import Faker

fake = Faker(locale = 'en_US')
fake.seed(0)
def write_team_member_file(SocietyIds, TeamIds):

    header = ['RollNo', 'Name', 'Phone', 'CGPA' , 'Position', 'MemberPhoto']
    underscore = '_'

    with open('TeamMember.csv', 'a', encoding='UTF8') as f:
        count = 0
        for i in range(42):
        
            writer = csv.writer(f)

            roll_no = str(int(random.uniform(20, 24))) + 'K-' + str(int(random.uniform(1000, 5000)))
            name = fake.name()
            phone = fake.phone_number()
            cgpa = round(random.uniform(2.00, 4.00), 2)
            position = 'Deputy'
            photo = None
            count= count + 1
            # print(count, roll_no, name, phone, cgpa, position)
            
            data = [roll_no, name, phone, cgpa, position, photo ]
            # write the header
        # writer.writerow(header)
            # write the data
            writer.writerow(data)





# fake.name()
# fake.phone_number()
# fake.ssn()
# random.uniform(2.00, 4.00)
SocietyId = ['Procom','Acm','Decs','Tlc','Cbs','Fdss','Mlsa']
Position = ['Cohead', 'Deputy', 'Coordinator', 'Member']
TeamId = ['PR', 'Content', 'Marketing', 'Promotion', 'EM', 'GR' ]


if __name__ == '__main__':

    write_team_member_file(SocietyId, TeamId)