<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BuyController extends Controller
{
    //
    public function index(){
        return Inertia::render('Buy/Buy');
    }
}
