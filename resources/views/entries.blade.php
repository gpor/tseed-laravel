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
  ></type-seed-app>
@endsection
