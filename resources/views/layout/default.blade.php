<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('layout.partial.head')
    </head>
    <body class="layout-default">
        @yield('content')
    </body>
</html>