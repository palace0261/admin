<?php

namespace Controller\Front\Prd;

use Globals;
use Session;
use Response;
use Request;

class PdcaController extends \Controller\Front\Controller
{
    public function index()
    {
        $setData = 'Hello World !!!';
        $this->setData('setData', $setData);
    }
}
