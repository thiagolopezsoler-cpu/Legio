from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound, HttpResponseRedirect
from django.urls import reverse
# Create your views here.
blog_posts = {
    1: {
        'title': 'Blog Post 1',
        'content': 'This is the content of blog post 1.',
    },
    2: {
        'title': 'Blog Post 2',
        'content': 'This is the content of blog post 2.',
    },
    3: {
        'title': 'Blog Post 3',
        'content': 'This is the content of blog post 3.',
    },
}

def index(request):
    return HttpResponse("Blogs")


def ver_blogs(request, id):
    try:
        blog = blog_posts[id]

        html = f"""
        <h1>{blog['title']}</h1>
        <p>{blog['content']}</p>
        """
        return HttpResponse(html)
    except KeyError: 
        # return HttpResponseNotFound("Blog post not found") 
        destino = reverse('index')  # Obtiene la URL de la vista 'index'
        return HttpResponseRedirect(destino)  # Redirige a la vista 'index'