@extends('layouts.main')

@section('content')
   <div class="site-wrap" id="home-section">
        @include('pages.sections.slide')
        @include('pages.sections.story')
        @include('pages.sections.journey')
        @include('pages.sections.team')
        @include('pages.sections.testmonials')
        @include('pages.sections.blog')
        @include('pages.sections.touch')
    </div>
@endsection
