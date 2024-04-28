Console.WriteLine("Введите число");
int num=int.Parse(Console.ReadLine());
MultiplicationTable(num);
void MultiplicationTable(int num)
{
    for (int i = 1; i <=num; i++)
    {
        for (int j = 1; j <=num; j++)
        {
            Console.Write($"{i*j}\t");
        }
        Console.WriteLine();
    }
}