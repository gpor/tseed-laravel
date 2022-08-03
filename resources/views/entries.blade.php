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
        :root-entry="{{ json_encode($rootEntry) }}"
        entries-api-url="{{ route('api.entries-with-children') }}"
      ></entries-accordion>
    </section>
  </div>
@endsection
