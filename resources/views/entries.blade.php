@extends('layout.default')

@section('content')
  <type-seed-app
      :root-entries="{{ json_encode($entries) }}"
  ></type-seed-app>
@endsection
