@extends('layout.default')

@section('content')
  <div class="center-frame">
    <section class="page-section -entries">
      <header>
        @if ($rootEntry->content === 'Primary')
          <h2>Your Notes</h1>
        @else
          <h2>{{ $rootEntry->content }}</h1>
        @endif
      </header>
      <entries-accordion
        :entries="{{ json_encode($entries) }}"
        entries-api-url="{{ route('api.entries-with-children') }}"
      ></entries-accordion>
    </section>
  </div>
@endsection
