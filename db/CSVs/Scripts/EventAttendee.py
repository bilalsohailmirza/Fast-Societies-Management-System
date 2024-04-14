import csv
import random
from faker import Faker

fake = Faker(locale = 'en_US')

def write_event_participant_file(EventIds):

    header = ['AttendeeId', 'AttendeeName', 'AttendeePhone', 'AttendeeEmail']
    

    with open('EventAttendee.csv', 'a', encoding='UTF8') as f:
        count = 0
        writer = csv.writer(f)
        # for i in range(12):
        for j in range(100):

            attendee_id = fake.ssn()
            # event_id = event_id[i]
            attendee_name = fake.name()
            attendee_phone = fake.phone_number()
            attendee_email = fake.email()
            count= count + 1
            print(count, attendee_id, attendee_name, attendee_phone, attendee_email)
            
            data = [attendee_id, attendee_name, attendee_phone, attendee_email]

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
EventId = ['Procom-01','Acm-01','Acm-02','Decs-01','Decs-02','Tlc-01','Tlc-02','Cbs-01','Cbs-02','Fdss-01','Fdss-02','Mlsa-01'],
TeamId = ['PR', 'Content', 'Marketing', 'Promotion', 'EM', 'GR']


if __name__ == '__main__':

    write_event_participant_file(EventId)