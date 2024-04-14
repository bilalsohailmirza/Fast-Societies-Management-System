import csv
import random
from faker import Faker

fake = Faker(locale = 'en_US')

def write_event_file(EventIds, EventNames, SocietyIds):

    header = ['EventId', 'EventName', 'SocietyId', 'EventFee', 'EventDate', 'EventLogo', 'EventDescription']
    

    with open('Event.csv', 'a', encoding='UTF8') as f:
        writer = csv.writer(f)
        count = 0
        for i in range(12):
            # for j in range(100):

                
            event_id = EventIds[i]
            event_name = EventNames[i]
            Society_id = SocietyIds[i]
            eventfee = None
            event_date = fake.date_this_year()
            event_logo = None
            event_des = None
            count = count + 1
            # print(count, event_id, event_name, Society_id, eventfee, event_date)
                
            data = [event_id, event_name, Society_id, eventfee, event_date, event_logo, event_des]
            writer.writerow(data)

            # write the header
        # writer.writerow(header)
            # write the data





EventId =['Procom-01','Acm-01','Acm-02','Decs-01','Decs-02','Tlc-01','Tlc-02','Cbs-01','Cbs-02','Fdss-01','Fdss-02','Mlsa-01']
EventName = ['Procom','CodersCup','Dev Day','BeachPary','Spotlight','AHA Declamation','The Grand Debate','YouthClub Session','Orphans Day Out','DataQuest','DataVerse','Building Cloud Native Apps']
SocietyId = ['Procom','Acm','Acm','Decs','Decs','Tlc','Tlc','Cbs','Cbs','Fdss','Fdss','Mlsa']

if __name__ == '__main__':
    write_event_file(EventId, EventName, SocietyId)