<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        @include('layout.partial.head')
    </head>
    <body
        class="layout-default @if($darkTheme ?? false) -dark-theme @endif"
    >
        <div id="vue-app">
            <type-seed-app
                :root-entries="{{ json_encode([$rootEntry]) }}"
                entries-api-url="{{ route('api.entries-with-children') }}"
            ></type-seed-app>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
