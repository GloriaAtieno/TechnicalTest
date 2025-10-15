# Original faulty code:
# numbers = [1, 2, 3, 4, 5]
# for i in range(len(numbers)):
#     if i % 2 == 0:
#         numbers.remove(i)
# print(numbers)

# Fixed version:
numbers = [1, 2, 3, 4, 5]
for num in numbers[:]:
    if num % 2 == 0:
        numbers.remove(num)
print(numbers)  # Output: [1, 3, 5]