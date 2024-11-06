Feature('tasks')

const tasks = new DataTable(['name'])

tasks.add(['Fazer compras'])
tasks.add(['Estudar Javascript'])
tasks.add(['Ler um livro de Node.js'])


Data(tasks).Scenario('deve poder cadastrar uma nova tarefa', ({ I, tasksPage, current}) => {


    const taskName = current.name

    I.deleteByHelper(taskName)
    tasksPage.create(taskName)
    tasksPage.haveTask(taskName)

});

Scenario('não deve cadastrar tarefas com nome duplicado', ({ I, tasksPage }) => {

    const task = {
        name: 'Pagar a fatura do cartão',
        is_done: false
    }

    I.deleteByHelper(task.name)
    I.postTask(task)

    tasksPage.create(task.name)
    tasksPage.popUpHaveText('Task already exist!')

    I.wait(5)


}).tag('testeTag')