#include<stdio.h>
#include<string.h>

void main()
{
    int n,m,a;
  int ground = 0;
  scanf("%d %d %d",&n,&m,&a);
  ground += n / a;
  ground += m/a;
  if(n % a >= 1)
  {
    ground +=1;
  }
  if(m % a >= 1)
  {
    ground +=1;
  }
  printf("%d",ground);
}