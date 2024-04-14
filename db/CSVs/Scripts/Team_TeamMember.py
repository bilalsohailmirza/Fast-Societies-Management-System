import csv
import random
from faker import Faker

fake = Faker(locale = 'en_US')

def write_team_member_file(SocietyIds, TeamIds):

    header = ['RollNumber', 'TeamId']
    underscore = '_'

    member_rows = []
    team_rows = []
    # data = []
    with open('./CSVs/TeamMember.csv', 'r', encoding='UTF8') as f:
        
        reader = csv.reader(f)
        header1 = next(reader)
        for row in reader:
            member_rows.append(row)
        
        temp_mem_row = []
        for i in range (len(member_rows)):
            temp_mem_row.append(member_rows[i][0])

        tmp  = set()
        dup_set = set(x for x in temp_mem_row if (x in tmp or tmp.add(x)))
        print(list(dup_set))
        # dups = set()
        print("Length of the set: ", len(dup_set))   
        # for i in range(len(member_rows)):
            # print(member_rows[i][4])    

    with open('./CSVs/Team.csv', 'r', encoding='UTF8') as f:
        
        reader = csv.reader(f)
        header2 = next(reader)
        for row in reader:
            team_rows.append(row)
            print(row)

        for i in range(len(team_rows)):
            print(team_rows[i][0])   

    
        # print(list(dups))

    # with open('TeamMember_Team.csv', 'a', encoding='UTF8') as f:
    #     count = 0
    #     writer = csv.writer(f)
    #     index = 420
    #     for j in range(len(team_rows)):

    #             roll_no = member_rows[index][0]
    #             team_id = team_rows[j][0]
    #             position = member_rows[index][4]
    #             count= count + 1
    #             index = index + 1

    #             # print(count, roll_no, team_id, position)
    #             data = [roll_no, team_id]
    #             writer.writerow(data)
    #             if index == 434:
    #                  break    
                
    #     print('Index Value: ', index)
                
        # for j in range(len(team_rows)):

        #         roll_no = member_rows[index][0]
        #         team_id = team_rows[j][0]
        #         position = member_rows[index][4]
        #         count= count + 1
        #         index = index + 1
        #         # print(count, roll_no, team_id, position)
        #         data = [roll_no, team_id]
        #         writer.writerow(data)
        

                # write the header
        # writer.writerow(header)
                # write the data






# fake.name()
# fake.phone_number()
# fake.ssn()
# random.uniform(2.00, 4.00)
SocietyId = ['Procom','Acm','Decs','Tlc','Cbs','Fdss','Mlsa']
Position = ['Cohead', 'Deputy', 'Coordinator', 'Member']
TeamId = ['PR', 'Content', 'Marketing', 'Promotion', 'EM', 'GR' ]


if __name__ == '__main__':

    write_team_member_file(SocietyId, TeamId)