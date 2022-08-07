<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('layout.partial.head')
    </head>
    <body
        class="layout-default"
    >
        <div id="vue-app">
            @yield('content')
        </div>
        <script>window.apiUrlBase = '{{ config('app.api_url_base') }}'</script>
        <script src="/js/app.js"></script>
    </body>
</html>
