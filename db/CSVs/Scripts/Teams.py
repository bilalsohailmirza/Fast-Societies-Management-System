import csv
import random
from faker import Faker

fake = Faker(locale = 'en_US')

def write_team_file(SocietyIds, TeamIds, TeamNames):

    header = ['TeamId', 'SocietyId', 'TeamName']
    underscore = '_'

    with open('Team.csv', 'a', encoding='UTF8') as f:
        writer = csv.writer(f)
        count = 0
        for i in range(len(SocietyIds)):
            for j in range(len(TeamIds)):
        
                team_id = SocietyIds[i] + underscore + TeamIds[j]
                SocietyId = SocietyIds[i]
                team_name = TeamNames[j]
                count= count + 1
                # print(count, team_id, SocietyId, team_name)
                
                data = [team_id, SocietyId, team_name]
                writer.writerow(data)
                # write the header
        # writer.writerow(header)





# fake.name()
# fake.phone_number()
# fake.ssn()
# random.uniform(2.00, 4.00)
SocietyId = ['Procom','Acm','Decs','Tlc','Cbs','Fdss','Mlsa']
TeamId = ['PR', 'Content', 'Marketing', 'Promotion', 'EM', 'GR' ]
TeamName = ['Participant Relations', 'Content', 'Marketing', 'Promotion', 'Event Management', 'Guest Relations']


if __name__ == '__main__':

    write_team_file(SocietyId, TeamId, TeamName)