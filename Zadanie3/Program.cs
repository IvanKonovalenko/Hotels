Console.WriteLine("Введите начало диапазона");
int start=int.Parse(Console.ReadLine());
Console.WriteLine("Введите конец диапазона");
int end=int.Parse(Console.ReadLine());
foreach (var item in PrimeNumbers(start,end))
{
    Console.WriteLine(item);
}

List<int> PrimeNumbers(int start,int end)
{
    var result=new List<int>();
    for (int i = start; i <=end;i++)
    {
        bool status=true;
        for (int j = 2; j < Math.Sqrt(i)+1; j++)
        {
            if (i %j==0)status=false;
        }
        if(status)result.Add(i);
    }
    return result;
}