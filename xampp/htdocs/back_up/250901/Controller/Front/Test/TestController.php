<?php

/**
 * This is commercial software, only users who have purchased a valid license
 * and accept to the terms of the License Agreement can install and use this
 * program.
 *
 * Do not edit or add to this file if you wish to upgrade Godomall5 to newer
 * versions in the future.
 *
 * @copyright ⓒ 2016, NHN godo: Corp.
 * @link http://www.godo.co.kr
 */
namespace Controller\Front\Test;

use Globals;
use Session;
use Response;
use Request;
use Cookie;

class TestController extends \Controller\Front\Controller
{
  
  protected $db = null;

    /**
     * {@inheritdoc}
     */

 public function index()
    {
        echo 'Hello World !!!<br>';
        print_r(Cookie::all());
        echo '</pre>';
        
        if (!is_object($this->db)) {
            $this->db = \App::load('DB');
        }
        $setData = 'Hello World !!!';
        $this->setData('setData', $setData);

        	//회원번호
		$memNo = Session::get('member.memNo');
		$this->setData('memNo', $memNo);

    }
  

}

