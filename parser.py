import csv
import json

arr = []
#read csv
with open('world.csv') as f:
    reader = csv.reader(f, delimiter=',')
    
    # for row in reader:
    #     print(row)

    for row in reader:
        imgs = [row[i] for i in range(1, 4) if row[i] != ""]
        events = [row[i] for i in range(4, 7) if row[i] != ""]
        innovations = [row[i] for i in range(7, 10) if row[i] != ""]
        famous = [row[i] for i in range(10, 13) if row[i] != ""]
        
        arr.append(
            {
                "key": row[0],
                "imgs" : imgs,
                "events": events,
                "innovations": innovations,
                "famous": famous
            }
        )

with open('world.json', 'w') as f:
    f.write('[\n')
    for i in range(len(arr)):
        f.write(json.dumps(arr[i], indent=4))
        if(i != len(arr) - 1):
            f.write(',\n')
    f.write('\n]')
        