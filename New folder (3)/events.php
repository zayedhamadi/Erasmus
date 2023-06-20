<?php
class events
{
    private $id,$title,$description,$date,$image,$place;
    

    function __construct($id,$title,$description,$date,$place,$image) {
        $this->title = $title;
        $this->id = $id;
        $this->description = $description;
        $this->date = $date;
        $this->image = $image;
        $this->place = $place;
      }
   
    public function getId()
    {
        return $this->id;
    }

   
    public function setId($id)
    {
        $this->id = $id;

        
    }

    
    public function getTitle()
    {
        return $this->title;
    }

    
    public function setTitle($title)
    {
        $this->title = $title;

        
    }

   
    public function getDescription()
    {
        return $this->description;
    }

    
    public function setDescription($description)
    {
        $this->description = $description;

       
    }

    
    public function getDate()
    {
        return $this->date;
    }

    
    public function setDate($date)
    {
        $this->date = $date;

       
    }

    
    public function getImage()
    {
        return $this->image;
    }

   
    public function setImage($image)
    {
        $this->image = $image;

    }

    
    public function getPlace()
    {
        return $this->place;
    }

    
    public function setPlace($place)
    {
        $this->place = $place;

        
    }
}
