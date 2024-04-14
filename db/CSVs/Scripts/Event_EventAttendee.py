import csv
import random
from faker import Faker

fake = Faker(locale = 'en_US')

def write_event_participant_file(EventIds):

    header = ['EventId', 'AttendeeId']
    
    event_rows = []
    attendee_rows = []

    with open('Event.csv', 'r', encoding='UTF8') as f:
        
        reader = csv.reader(f)
        header1 = next(reader)
        for row in reader:
            event_rows.append(row)
            # print(row)
        # print(header)
        count = 0
        
    with open('EventAttendee.csv', 'r', encoding='UTF8') as f:
        
        reader = csv.reader(f)
        header2 = next(reader)
        for row in reader:
            attendee_rows.append(row)
            # print(row)    

    with open('Event_EventAttendee.csv', 'a', encoding='UTF8') as f:
        writer = csv.writer(f)
        k = 0
        for i in range(len(event_rows)):
            for j in range(50):
                event_id = event_rows[i][0]
                attendee_id = attendee_rows[k][0]
                k += 1
            
                # print(event_id, attendee_id)    
                data = [event_id, attendee_id]
                writer.writerow(data)

            # write the header
        # writer.writerow(header)
            # write the data





# fake.name()
# fake.phone_number()
# fake.ssn()
# random.uniform(2.00, 4.00)
SocietyId = ['Procom','Acm','Decs','Tlc','Cbs','Fdss','Mlsa']
Position = ['Cohead', 'Deputy', 'Coordinator', 'Member']
EventId = ['Procom-01','Acm-01','Acm-02','Decs-01','Decs-02','Tlc-01','Tlc-02','Cbs-01','Cbs-02','Fdss-01','Fdss-02','Mlsa-01'],
TeamId = ['PR', 'Content', 'Marketing', 'Promotion', 'EM', 'GR']


if __name__ == '__main__':

    write_event_participant_file(EventId)