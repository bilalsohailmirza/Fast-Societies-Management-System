import csv
import random
from faker import Faker

fake = Faker(locale = 'en_US')

def write_society_file(SocietyIds, SocietyNames):

    header = ['SocietyId', 'SocietyName', 'SocietyLogo', 'SocietyDescription']
    
    with open('Society.csv', 'a', encoding='UTF8') as f:
        writer = csv.writer(f)
        count = 0
        for i in range(7):
            # for j in range(100):

            society_id = SocietyIds[i]
            society_name = SocietyNames[i]
            society_logo = None
            society_des = None
            count= count + 1
            # print(count, society_id, society_name, society_logo)
                
            data = [society_id, society_name, society_logo, society_des]
            writer.writerow(data)

            # write the header
        writer.writerow(header)
            # write the data





EventId =['Procom-01','Acm-01','Acm-02','Decs-01','Decs-02','Tlc-01','Tlc-02','Cbs-01','Cbs-02','Fdss-01','Fdss-02','Mlsa-01']
EventName = ['Procom','CodersCup','Dev Day','BeachPary','Spotlight','AHA Declamation','The Grand Debate','YouthClub Session','Orphans Day Out','DataQuest','DataVerse','Building Cloud Native Apps']
SocietyId = ['Procom','Acm','Decs','Tlc','Cbs','Fdss','Mlsa']
SocietyName = ['Procom','Association Of Computing And Machinery','Dramatics Entertainment Cocurriculars Society','The Literary Club','Charachter Building Society','Fast Data Science Society','Microsoft Learn Student Association']

if __name__ == '__main__':
    write_society_file(SocietyId, SocietyName)