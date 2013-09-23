import math


def isSquare(i):
     if ((math.sqrt(i) * 10) % 10) == 0.0:
        return True

def chkPal(i):
     x = i;
     y = 0;
     while (i > 0):
          dig = i % 10;
          y = y * 10 + dig;
          i = i / 10;
     if x==y:
        return True

def countFS(a, b):
    num = 0
    for i in range(a, b + 1):
        if (chkPal(i) and isSquare(i)):
            if (chkPal(int(math.sqrt(i)))):
                num += 1
    return num

with open("C-large-2.in.txt") as f:
    data = f.readlines()
    cases = int(data[0])

for i in range(cases):
    #program starts here
    a = int(data[1:][i].split(" ")[0])
    b = int(data[1:][i].split(" ")[1])

    print "Case #%s: %s" % ((i + 1), countFS(a, b))
