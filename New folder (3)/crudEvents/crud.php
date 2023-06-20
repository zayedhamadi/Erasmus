<?php
require_once "../config.php";
require "../events.php";
class CRUD
{
    protected $cnx;
    function __construct()
    {
        $pdo = new config();
        $this->cnx = $pdo->getConnexion();
    }

    function find($ref)
    {
        $sql = "select * from events where id=$ref";
        $res = $this->cnx->query($sql);
        return ($res->fetch(PDO::FETCH_NUM));
    }
    function findAll()
    {
        $sql = "select * from events";
        $res = $this->cnx->query($sql);
        return ($res->fetchAll(PDO::FETCH_ASSOC));
    }
    function delete($ref)
    {
        $sql = "delete from events where id=$ref";
        $res = $this->cnx->exec($sql);
        return ($res);
    }
    function add(events $obj)
    {
        $a = $obj->getId();
        $b = $obj->getTitle();
        $c = $obj->getDescription();
        $d = $obj->getDate();
        $e= $obj->getImage();
        $f = $obj->getPlace();

        $sql = "insert into events values(NULL,'$b','$c','$d','$f','$e')";
        $res = $this->cnx->exec($sql);
        return ($res);
    }
  /*  function update(clubs $obj)
    {
        $a = $obj->getIdadherent();
        $b = $obj->getDateInscription();
        $c = $obj->getIdinscrit();

        $sql = "update adherent set date_d_inscription='$b',idinscrit=$c where idadherent=$a";
        $res = $this->cnx->exec($sql);
        return $res; 
    }*/
}
