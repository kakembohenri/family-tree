<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class MembersController extends Controller
{
    public function index()
    {
        $users = User::tree()->get();
        return $users->toJson();
    }
}
