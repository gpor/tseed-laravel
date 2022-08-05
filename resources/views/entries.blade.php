@extends('layout.default')

@php
if (false) {
  $entries = [$rootEntry, $rootEntry, $rootEntry];
} else {
  $entries = [$rootEntry];
}
@endphp

@section('content')
  <type-seed-app
      :root-entries="{{ json_encode($entries) }}"
      entries-api-url="{{ route('api.entries-with-children') }}"
  ></type-seed-app>
@endsection
