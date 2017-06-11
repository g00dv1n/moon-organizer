
final_template = '''
const todoTasks: TodoTask[] = [
  {}
]
'''

task_template = '''  {{
    name: '{}',
    category: 'category',
    days: [],
    text: {{
      ru: 'bla',
      en: 'bla'
    }}
  }}'''


def gen_code(count):
    res = ''
    for i in range(1, count + 1):
        res += task_template.format('$' + str(i))
        if i != count:
            res += ',\n'
    res = final_template.format(res)
    open('gen_code.js', 'w').write(res)
    

if __name__ == '__main__':
    gen_code(300)

