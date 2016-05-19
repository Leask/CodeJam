#!/usr/bin/env ruby

def is_palindrome?(num)
    num == num.to_s.reverse.to_i
end

def is_square_of_palindrome?(num)

    root = Math.sqrt(num)

    if root == root.floor
        is_palindrome? root.to_i
    else
        false
    end
end

# Main
#
#
file = File.new("test.txt", "r")

# Skip the first line
line = file.gets

cur_case = 0
while (line = file.gets)

    cur_case += 1

    result = 0

    barrier = line.strip.split(" ")

    n = barrier[0].to_i
    while n < barrier[1].to_i
        if is_palindrome? n and is_square_of_palindrome? n
            result += 1
        end
        n += 1
    end

    puts "Case \##{cur_case}: #{result}"
end
