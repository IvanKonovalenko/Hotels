Console.WriteLine("Введите размер массива");
int n=int.Parse(Console.ReadLine());
var nums=new int[n];
Console.WriteLine("Заполниите массив");
for (int i = 0; i < n; i++)
{
    nums[i]=int.Parse(Console.ReadLine());
}
Console.WriteLine("Общие делители");
foreach (var item in NumOfСomputers(nums))
{
    Console.WriteLine(item);
}
List<int> NumOfСomputers(int[] nums)
{
    int min=nums.Min();
    var result=new List<int>();
    for(int i=2; i<=min;i++)
    {
        var status=true;
        foreach(int num in nums)
        {
            if(num%i!=0)status=false;

        }
        if(status) result.Add(i);
    }
    return result;
}