#include <stdio.h>

int main()
{
    int n, m, a, b, c;
    int array[101] = {0,};
    scanf("%d %d", &n, &m);
    for(int i = 0; i < m; i++)
    {
        scanf("%d %d %d", &a,&b,&c);
        for(int i = a; i <= b; i++)
        {
            array[i] = c;
        }
    }
    for(int i = 1; i<=n;i++)
    {
        printf("%d ",array[i]);
    }
    return 0;
}
