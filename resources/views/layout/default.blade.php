<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('layout.partial.head')
    </head>
    <body
        class="layout-default @if($darkTheme ?? false) -dark-theme @endif"
    >
        <div id="vue-app">
            @include('layout.partial.page-header')
            @yield('content')
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
