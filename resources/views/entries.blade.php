@extends('layout.default')

@section('content')
  <type-seed-app
      :root-entries="{{ json_encode([$rootEntry]) }}"
      entries-api-url="{{ route('api.entries-with-children') }}"
  ></type-seed-app>
@endsection
