#include <stdio.h>
#include <iostream>
using namespace std;

int count(char pan[])
{
    int many = 0;
    for(int i=0;pan[i];i++) if(pan[i] == '-') many++;
    return many;
}

int main()
{
    int t;
    cin >> t;
    for(int k=1;k<=t;k++)
    {
        int cnt=0,len,fullLen;
        char pan[1010];

        scanf("%s %d",pan,&len);
        for(fullLen=0;pan[fullLen];fullLen++);

        for(int i=0;i<=fullLen-len+1;i++)
        {
            if(count(pan) == 0) break;
            if(pan[i] == '-')
            {
                cnt++;
                for(int j=0;j<len;j++)
                {
                    if(pan[i+j] == '-') pan[i+j] = '+';
                    else pan[i+j] = '-';
                }
            }
        }

        if(count(pan) != 0) printf("Case #%d: IMPOSSIBLE\n",k);
        else printf("Case #%d: %d\n",k,cnt);
    }
}
