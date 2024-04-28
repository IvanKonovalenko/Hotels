int num=int.Parse(Console.ReadLine());
Console.WriteLine(NumOfСomputers(num));

string NumOfСomputers(int num)
{
    int temp=Math.Abs(num);
    if(temp>=11&&temp<=19)return $"{num} компьютеров";
    else if((temp-1)%10==0)return $"{num} компьютер";
    else if((temp-2)%10==0||(temp-3)%10==0||(temp-4)%10==0)return $"{num} компьютера";
    else return $"{num} компьютеров";

}
