@extends('layout.default')

@section('content')
<div class="entries">
  @foreach ($entries as $entry)
    <p>{{ $entry->content }}</p>
  @endforeach
</div>
@endsection
