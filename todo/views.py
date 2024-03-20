from django.shortcuts import render, redirect
from django.contrib import messages
 
# import todo form and models
 
from .forms import TodoForm
from .models import Todo
 
###############################################
 
 
def index(request):
    item_list = Todo.objects.order_by("-date")
    if request.method == "POST":
        form = TodoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('todo')
    form = TodoForm()

    page = {
        "forms": form,
        "list": item_list,
        "title": "TODO LIST",
    }
    return render(request, 'todo/index.html', page)

### Function to remove item, it receives todo item_id as primary key from URL ###
def remove(request, item_id):
    item = Todo.objects.get(id=item_id)
    item.delete()
    messages.info(request, "Item removed!")
    return redirect('todo')

### New view function for adding tasks ###
def add_task(request):
    if request.method == 'POST':
        form = TodoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('todo') # Redirect to the task list view
    else:
        form = TodoForm()
    return render(request, 'todo/add_task.html', {'form': form})