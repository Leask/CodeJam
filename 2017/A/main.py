import copy, queue

class SequenceNode:

    def __init__(self, seq, flipper_width, num_flips = 0):
        self.seq = copy.deepcopy(seq)
        self.flipper_width = flipper_width
        self.num_flips = num_flips
        self.parent = None
        self.children = []

    def search(self):
        seq_set = set()
        node_queue = queue.Queue()
        node_queue.put(self)
        seq_set.add(self.seq)
        while not node_queue.empty():
            node = node_queue.get()
            if "-" not in node.seq: return node.num_flips
            for flip_start_index in range(len(node.seq) - node.flipper_width + 1):
                flip_end_index = flip_start_index + node.flipper_width
                new_seq = SequenceNode.flip(node.seq, flip_start_index, flip_end_index)
                if new_seq in seq_set: continue
                new_node = SequenceNode(new_seq, node.flipper_width, node.num_flips + 1)
                seq_set.add(new_seq)
                node_queue.put(new_node)
        return None
    @staticmethod
    def flip(seq, a, b):
        flip_region = "".join(["+" if x == "-" else "-" for x in seq[a:b]])
        new_seq = seq[:a] + flip_region + seq[b:]
        return new_seq

def oversized_pancake_flipper(*args):
    seq = args[0]
    flipper_width = int(args[1])
    seq_tree = SequenceNode(seq, flipper_width)
    answer = seq_tree.search()
    if answer is None: answer = "IMPOSSIBLE"
    return answer, ""

j = 0;
for line in open("A-large.in"):
    x = line.split(' ')
    if len(x) > 1:
        y = oversized_pancake_flipper(x[0], x[1])
        j = j + 1
        print('Case #' + str(j) + ': ' + str(y[0]));
