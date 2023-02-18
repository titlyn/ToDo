from django.shortcuts import render, redirect
from .models import Task
from .forms import TaskForm,UpdateTaskForm

def index(request):
    to_do = Task.objects.all()
    count_to_do = to_do.count()

    completed_to_do = Task.objects.filter(complete=True)
    count_completed_to_do = completed_to_do.count()
    uncompleted = count_to_do - count_completed_to_do

    if request.method == 'POST':
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
    else:
        form = TaskForm()
    context = {
        'to_do' : to_do,
        'form' : form,
        'count_to_do' : count_to_do,
        'count_completed_to_do' : count_completed_to_do,
        'uncompleted' : uncompleted
    }
    return render(request, 'to_do/index.html', context)

def update(request, pk):
    task = Task.objects.get(id=pk)
    if request.method == 'POST':
        form = UpdateTaskForm(request.POST, instance=task)
        if form.is_valid():
            form.save()
            return redirect('/')
    else:
        form = UpdateTaskForm(instance=task)
    context = {
        'form': form
    }
    return render(request, 'to_do/update_task.html', context)

def delete(request, pk):
    task = Task.objects.get(id=pk)
    if request.method == 'POST':
        task.delete()
        return redirect('/')
    return render(request, 'to_do/delete_task.html') 
