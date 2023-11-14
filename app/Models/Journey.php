<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Journey extends Model
{
    use HasFactory;

    protected $fillable = [
        "title",
        "price",
        "from",
        "to",
        "duration",
        "image",

    ] ;

    public function categories()
    {
        return $this->belongTo(Category::class);
    }
}
