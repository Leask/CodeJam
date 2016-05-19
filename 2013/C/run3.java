import java.util.*;

public class Fair_and_Square {
    public static void main(String[] args) {
        solve(1, 4, 1);
        solve(10, 120, 1);
        solve(100, 1000, 1);
    }


    public static void solve(int a, int b, int t) {
        System.out.print("Case #" + t +": ");
        int start = (int)(Math.ceil(Math.sqrt(a)));
        int end = (int)(Math.floor(Math.sqrt(b)));
        int count = 0;
        for (; start <= end; ++start) {
            if (isPalindrome(start) && (isPalindrome((int)(Math.pow(start, 2))))) {
                ++count;
            }
        }
        System.out.println(count);
    }

    public static boolean isPalindrome(int a) {
        String str = a + "";
        int head = 0, tail = str.length() - 1;
        while (head < tail) {
            if (str.charAt(head) != str.charAt(tail)) {
                return false;
            }
            ++head;
            --tail;
        }
        return true;
    }
}
