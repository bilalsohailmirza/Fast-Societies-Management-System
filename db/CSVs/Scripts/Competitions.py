import csv
import random
from faker import Faker

fake = Faker(locale = 'en_US')

def write_team_member_file(EventIds, CompetitionNames):

    header = ['CompetitionId', 'EventId', 'CompetitionName', 'CompetitionFee', 'CompetitionDate', 'CompetitionTime', 'CompetitionLogo', 'CompetitionDescription']
    hyphen = '-'
    with open('Competition.csv', 'a', encoding='UTF8') as f:
        count = 0
        for i in range(len(EventIds)):
        
            writer = csv.writer(f)

            
            comp_id = EventIds[i] + hyphen + str(int(random.uniform(100, 999)))
            event_id = EventIds[i]
            comp_name = CompetitionNames[i]
            comp_fee = None
            comp_date = fake.date_this_year()
            comp_time = fake.time('%H:' + random.choice(['00', '30']))
            comp_logo = None
            comp_des = None
            count = count + 1
            # print(count, comp_id, event_id, comp_name, comp_fee, comp_date, comp_time, comp_logo, comp_des)
            
            data = [comp_id, event_id, comp_name, comp_fee, comp_date, comp_time, comp_logo, comp_des]
            # write the header
        # writer.writerow(header)
            # write the data
            writer.writerow(data)





# fake.name()
# fake.phone_number()
# fake.ssn()
# random.uniform(2.00, 4.00)

TeamId = ['PR', 'Content', 'Marketing', 'Promotion', 'EM', 'GR' ]
EventId =['Procom-01','Procom-01','Procom-01','Procom-01','Acm-02','Acm-02','Acm-02','Acm-02','Fdss-01','Fdss-01']
CompetitionName = ['Procom Speed Coding',' Procom Code in the dark','Procom Web Development competition','Procom MetaVerse','DevDay Speed Coding',' DevDay Code in the dark','DevDay Web Development competition','DevDay MetaVerse','DataQuest-1','DataQuest-2']


if __name__ == '__main__':

    write_team_member_file(EventId, CompetitionName)