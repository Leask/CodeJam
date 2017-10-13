#include <stdio.h>
#include <iostream>
using namespace std;

bool checkReduce(char x[]) {
    for(int i=0;x[i];i++) {
        if (x[i] > '1') {
            return false;
        }
        if (x[i] < '1') {
            return true;
        }
    }
    return false;
}

void reduce(char x[], int idx) {
    if (x[idx] > '0') {
        x[idx]--;
    } else {
        x[idx] = '9';
        reduce(x,--idx);
    }
}

void reset(char x[], int idx) {
    for (int i = idx; x[i]; i++) {
        x[i] = '9';
    }
    reduce(x, --idx);
    if (idx > 0) {
        if(x[idx-1] > x[idx]) reset(x,idx);
    }
}

int main() {
    int t;
    scanf("%d", &t);
    for (int i = 1; i <= t; i++) {
        int len = 0;
        char x[22];
        scanf("%s", x);
        while(x[++len]);
        if (checkReduce(x)) {
            printf("Case #%d: ", i);
            for (int j = 1; x[j]; j++) {
                printf("9");
            }
            puts("");
        } else {
            int idx = 0;
            for(int j=1; x[j]; j++) {
                if(x[idx] != x[j]) idx = j;
                if(x[j - 1] > x[j]) reset(x, idx);
            }
            printf("Case #%d: %s\n", i, x);
        }
    }
}
